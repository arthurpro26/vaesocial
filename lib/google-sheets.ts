import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import type { PrediagnosticLead } from "@/lib/email";

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
  await sheet.addRow({
    Date: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    Diplôme: lead.diplomeVise,
    Statut: lead.situationActuelle,
    "Activité quotidienne": lead.activiteQuotidienne,
    Structure: lead.structure,
    Prénom: lead.prenom,
    Nom: lead.nom,
    Téléphone: lead.telephone,
    Email: lead.email,
  });
}
