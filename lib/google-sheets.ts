import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { isEligibleDuree, type PrediagnosticLead } from "@/lib/email";

/**
 * Point d'intégration Google Sheets pour les leads du formulaire de
 * prédiagnostic — indépendant de l'envoi email (voir app/api/prediagnostic/route.ts,
 * les deux canaux sont appelés via Promise.allSettled).
 *
 * Authentification par compte de service (JWT), pas d'OAuth utilisateur : le
 * Sheet a été partagé manuellement avec l'adresse du compte de service
 * (GOOGLE_SHEETS_CLIENT_EMAIL), qui n'a accès qu'à ce document précis.
 */

function buildAuth() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  // Le champ texte d'Hostinger pour les variables d'environnement altère
  // apparemment la clé PEM multi-ligne (guillemets ou retours à la ligne mal
  // conservés — cause exacte de l'erreur OpenSSL "DECODER routines::unsupported"
  // malgré le \n-replace). GOOGLE_SHEETS_PRIVATE_KEY_BASE64 contourne le
  // problème : une seule ligne de caractères base64, aucun caractère spécial
  // à corrompre. Prioritaire si présente ; sinon on retombe sur l'ancienne
  // variable pour ne rien casser.
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY_BASE64
    ? Buffer.from(process.env.GOOGLE_SHEETS_PRIVATE_KEY_BASE64, "base64").toString("utf8")
    : process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    return null;
  }

  return new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendLeadToSheet(lead: PrediagnosticLead) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const auth = buildAuth();

  if (!auth || !spreadsheetId) {
    throw new Error(
      "Google Sheets non configuré (GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY / GOOGLE_SHEETS_SPREADSHEET_ID manquants)"
    );
  }

  const doc = new GoogleSpreadsheet(spreadsheetId, auth);
  await doc.loadInfo();

  // Premier onglet du document, quel que soit son nom exact — évite de
  // dépendre d'un titre d'onglet précis ("Leads", "Feuille 1", etc.).
  const sheet = doc.sheetsByIndex[0];

  // ⚠️ Refonte du formulaire du 2026-08-01, ajustée le même jour (retour
  // utilisateur) : "Nom" est réintroduit (identité complète nécessaire pour
  // le suivi de dossier VAE), "Expérience" et "Message" restent supprimées.
  // La bibliothèque google-spreadsheet fait correspondre ces clés à la ligne
  // d'en-tête existante du Sheet — l'en-tête de l'onglet en production doit
  // être mis à jour avec ces mêmes intitulés, dans cet ordre, sinon les
  // nouvelles données ne seront pas enregistrées dans la bonne colonne (ou
  // l'ajout de ligne échouera selon la configuration du Sheet).
  //
  // 2026-08-04 : ajout des colonnes "Ancienneté" et "Éligibilité". La seconde
  // est calculée, pas saisie : elle permet de trier le Sheet et de traiter en
  // priorité les dossiers recevables sans relire chaque ligne.
  await sheet.addRow({
    Date: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    Diplôme: lead.diplomeVise,
    Statut: lead.situationActuelle,
    "Activité quotidienne": lead.activiteQuotidienne,
    // ⚠️ Ces deux intitulés doivent correspondre EXACTEMENT aux cellules J1 et
    // K1 du Sheet (vérifiées visuellement le 2026-08-04). « Recevabilité » et
    // non « Éligibilité » : la capitale accentuée É se saisit mal selon les
    // dispositions clavier et un seul caractère divergent suffit à ce que la
    // colonne ne soit jamais remplie, silencieusement.
    Ancienneté: lead.ancienneteActivite,
    Recevabilité: isEligibleDuree(lead.ancienneteActivite) ? "OK" : "À vérifier",
    Structure: lead.structure,
    Prénom: lead.prenom,
    Nom: lead.nom,
    Téléphone: lead.telephone,
    Email: lead.email,
  });
}

/* ------------------------------------------------------------------------ *
 * LECTURE DES LEADS + RELANCE GROUPÉE — ajouté le 01/09/2026.
 *
 * POURQUOI : jusqu'ici le Sheet ne servait qu'à écrire. Or une part des leads
 * payants ne décroche jamais, et rien ne permettait de savoir lesquels, ni de
 * leur écrire sans rouvrir chaque ligne à la main.
 *
 * ⚠️ LE RISQUE PRINCIPAL DE CE MODULE EST LE DOUBLE ENVOI. Recevoir deux fois
 * la même relance est le meilleur moyen de perdre définitivement un lead. La
 * protection ne repose PAS sur l'interface : elle est ici, côté serveur.
 *   1. une ligne dont la colonne « Relancé le » est déjà remplie est refusée,
 *      quoi que demande le client ;
 *   2. la date est écrite dans le Sheet IMMÉDIATEMENT après chaque envoi
 *      réussi, un par un — une interruption en cours de route ne peut donc
 *      pas provoquer de renvoi au tour suivant ;
 *   3. si la colonne « Relancé le » n'existe pas, on n'envoie RIEN du tout.
 *      Envoyer sans pouvoir tracer, ce serait s'exposer au double envoi dès
 *      la fois suivante. Échouer bruyamment vaut mieux.
 * ------------------------------------------------------------------------ */

/**
 * Nom de la feuille de travail — refonte du 02/09/2026.
 *
 * Arthur ne veut pas cocher des cases dans une interface : il veut coller ses
 * leads dans un onglet du Sheet, le soir, et que ça parte. Cet onglet est donc
 * la file d'attente. On n'y touche à rien d'autre que la date d'envoi.
 */
export const FEUILLE_MAIL = "MAIL";

/** Colonne écrite par le code après chaque envoi réussi — la trace. */
export const COLONNE_RELANCE = "Envoyé le";

/**
 * Colonne de sélection — ajoutée le 02/09/2026 à la demande d'Arthur.
 *
 * Il passe sa journée dans le Sheet, pas dans une interface web : il marque
 * d'une croix (ou de n'importe quoi) les leads qu'il veut relancer, et la
 * console n'a plus qu'à exécuter. Le Sheet devient la source de vérité.
 *
 * ⚠️ La marque est CONSOMMÉE : après un envoi réussi, la cellule est vidée et
 * la date s'inscrit dans « Relancé le ». Le lendemain, il ne voit donc que ses
 * nouvelles marques — pas d'accumulation, pas de confusion.
 */
export const COLONNE_MAIL = "Envoyé le";

export type LeadSheet = {
  /** Numéro de ligne A1 dans le Sheet — sert d'identifiant stable. */
  ligne: number;
  date: string;
  diplomeVise: string;
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  recevabilite: string;
  /** Date de la relance déjà envoyée, ou "" si jamais relancé. */
  relanceLe: string;
  /** Arthur a-t-il coché cette ligne dans la colonne « Mail » ? */
  marque: boolean;
};

export type LectureLeads =
  | { ok: true; leads: LeadSheet[] }
  | { ok: false; raison: "config" | "colonne"; message: string };

/**
 * Comparaison d'intitulés de colonne insensible à la casse et aux accents.
 * « Relancé le », « relance le », « Relancé Le » désignent la même colonne :
 * les capitales accentuées se saisissent mal selon les claviers, et un seul
 * caractère divergent suffirait à faire échouer le marquage silencieusement.
 */
function memeIntitule(a: string, b: string): boolean {
  const n = (v: string) =>
    v
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
  return n(a) === n(b);
}

async function ouvrirOnglet() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const auth = buildAuth();
  if (!auth || !spreadsheetId) return null;

  const doc = new GoogleSpreadsheet(spreadsheetId, auth);
  await doc.loadInfo();

  // On cible l'onglet MAIL, jamais le premier onglet : le fichier de leads
  // (onglet SOCIAL) ne doit être ni lu ni modifié par la relance.
  const sheet = doc.sheetsByIndex.find((f) => memeIntitule(f.title, FEUILLE_MAIL));
  if (!sheet) return null;

  await sheet.loadHeaderRow();
  return sheet;
}

/** Intitulé réel d'une colonne dans le Sheet, ou null si elle est absente. */
function trouverColonne(headerValues: string[], attendu: string): string | null {
  return headerValues.find((h) => memeIntitule(h, attendu)) ?? null;
}

/** Intitulé réel de la colonne de relance dans le Sheet, ou null si absente. */
function colonneRelance(headerValues: string[]): string | null {
  return trouverColonne(headerValues, COLONNE_RELANCE);
}

/**
 * Lecteur de cellule tolérant aux intitulés.
 *
 * On ne lit JAMAIS une colonne par son nom exact : « Prénom » et « Prenom »,
 * « Téléphone » et « telephone » désignent la même chose, et un seul caractère
 * divergent renverrait une valeur vide sans le moindre message d'erreur — le
 * genre de panne qui se voit trois semaines plus tard. C'est exactement le
 * risque signalé en tête de appendLeadToSheet().
 */
function lecteur(headerValues: string[]) {
  const correspondance = new Map<string, string>();
  for (const entete of headerValues) {
    const cle = entete
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
    if (!correspondance.has(cle)) correspondance.set(cle, entete);
  }
  return (row: { get: (k: string) => unknown }, intitule: string): string => {
    const cle = intitule
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
    const reel = correspondance.get(cle);
    return reel ? String(row.get(reel) ?? "").trim() : "";
  };
}

/** Tous les leads du Sheet, du plus récent au plus ancien. */
export async function readLeadsFromSheet(): Promise<LectureLeads> {
  const sheet = await ouvrirOnglet();
  if (!sheet) {
    return {
      ok: false,
      raison: "config",
      message: `Google Sheets non configuré, ou onglet « ${FEUILLE_MAIL} » introuvable dans le document.`,
    };
  }

  const manquantes = ["Prénom", "Diplôme", "Email", COLONNE_RELANCE].filter(
    (c) => !trouverColonne(sheet.headerValues, c)
  );

  if (manquantes.length > 0) {
    return {
      ok: false,
      raison: "colonne",
      message: `Il manque dans l'onglet « ${FEUILLE_MAIL} », en ligne 1 : « ${manquantes.join(
        " », « "
      )} ». Ajoutez ces intitulés, puis rechargez.`,
    };
  }
  const colonne = trouverColonne(sheet.headerValues, COLONNE_RELANCE) as string;

  const rows = await sheet.getRows();
  const lu = lecteur(sheet.headerValues);

  const leads: LeadSheet[] = rows.map((row) => ({
    ligne: row.rowNumber,
    date: lu(row, "Date"),
    diplomeVise: lu(row, "Diplôme"),
    prenom: lu(row, "Prénom"),
    nom: lu(row, "Nom"),
    telephone: lu(row, "Téléphone"),
    email: lu(row, "Email"),
    recevabilite: lu(row, "Recevabilité"),
    relanceLe: lu(row, colonne),
    // Être dans l'onglet MAIL vaut sélection : Arthur a fait son choix en
    // collant la ligne, il n'a pas à le refaire dans l'interface.
    marque: true,
  }));

  // Le plus récent en haut : c'est l'ordre dans lequel on travaille.
  return { ok: true, leads: leads.reverse() };
}

export type ResultatRelance = {
  envoyes: LeadSheet[];
  ignores: { lead: LeadSheet; raison: string }[];
  echecs: { lead: LeadSheet; message: string }[];
};

/**
 * Envoie la relance aux lignes demandées, une par une, et marque le Sheet
 * après chaque succès.
 *
 * L'envoi lui-même est injecté (paramètre `envoyer`) : ce module ne connaît
 * rien à l'email, et la fonction reste testable sans SMTP.
 *
 * Séquentiel et espacé À DESSEIN. Une rafale d'envois simultanés depuis une
 * petite adresse abîme sa réputation, et ce sont alors TOUS les emails du
 * site — accusés de réception compris — qui finissent en indésirables.
 */
export async function relancerLeads(
  lignes: number[],
  envoyer: (lead: LeadSheet) => Promise<void>,
  options: { pauseMs?: number } = {}
): Promise<ResultatRelance> {
  const pauseMs = options.pauseMs ?? 1500;
  const resultat: ResultatRelance = { envoyes: [], ignores: [], echecs: [] };

  const sheet = await ouvrirOnglet();
  if (!sheet) throw new Error("Google Sheets non configuré : envoi annulé.");

  const colonne = colonneRelance(sheet.headerValues);
  // Pas de colonne de traçage = pas d'envoi. Voir l'avertissement en tête de
  // section : sans trace, le double envoi devient certain.
  if (!colonne) {
    throw new Error(
      `Colonne « ${COLONNE_RELANCE} » absente de l'onglet « ${FEUILLE_MAIL} » : envoi annulé.`
    );
  }

  const rows = await sheet.getRows();
  const lu = lecteur(sheet.headerValues);
  const demandees = new Set(lignes);

  for (const row of rows) {
    if (!demandees.has(row.rowNumber)) continue;

    const lead: LeadSheet = {
      ligne: row.rowNumber,
      date: lu(row, "Date"),
      diplomeVise: lu(row, "Diplôme"),
      prenom: lu(row, "Prénom"),
      nom: lu(row, "Nom"),
      telephone: lu(row, "Téléphone"),
      email: lu(row, "Email"),
      recevabilite: lu(row, "Recevabilité"),
      relanceLe: lu(row, colonne),
      marque: true,
    };

    // Garde-fou n°1 : relu dans le Sheet au moment de l'envoi, pas d'après ce
    // que dit le navigateur. Deux onglets ouverts ne peuvent pas doubler.
    if (lead.relanceLe) {
      resultat.ignores.push({ lead, raison: `déjà relancé le ${lead.relanceLe}` });
      continue;
    }
    if (!lead.email) {
      resultat.ignores.push({ lead, raison: "pas d'adresse email" });
      continue;
    }

    try {
      await envoyer(lead);
    } catch (erreur) {
      resultat.echecs.push({
        lead,
        message: erreur instanceof Error ? erreur.message : String(erreur),
      });
      continue;
    }

    // Garde-fou n°2 : on marque tout de suite. Si l'écriture échoue, on le dit
    // — la relance est partie, et il faut le savoir pour ne pas la renvoyer.
    try {
      row.set(colonne, new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }));
      await row.save();
    } catch (erreur) {
      resultat.echecs.push({
        lead,
        message: `Email ENVOYÉ mais Sheet non marqué (${
          erreur instanceof Error ? erreur.message : String(erreur)
        }) — inscrivez la date à la main pour éviter un second envoi.`,
      });
      continue;
    }

    resultat.envoyes.push(lead);
    if (pauseMs > 0) await new Promise((r) => setTimeout(r, pauseMs));
  }

  for (const ligne of demandees) {
    const connue =
      resultat.envoyes.some((l) => l.ligne === ligne) ||
      resultat.ignores.some((i) => i.lead.ligne === ligne) ||
      resultat.echecs.some((e) => e.lead.ligne === ligne);
    if (!connue) {
      resultat.ignores.push({
        lead: {
          ligne,
          date: "",
          diplomeVise: "",
          prenom: "",
          nom: "",
          telephone: "",
          email: "",
          recevabilite: "",
          relanceLe: "",
          marque: true,
        },
        raison: "ligne introuvable dans le Sheet",
      });
    }
  }

  return resultat;
}
