import nodemailer from "nodemailer";
import {
  buildMauvaisNumeroMailto,
  buildMauvaisNumeroTexte,
  buildRelancePageHref,
  buildRelanceSms,
  buildTelHref,
} from "@/lib/relance-sms";

export type PrediagnosticLead = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  diplomeVise: string;
  situationActuelle: string;
  activiteQuotidienne: string;
  /** Durée d'exercice déclarée — ajoutée le 2026-08-04. Voir isEligibleDuree(). */
  ancienneteActivite: string;
  structure: string;
};

/**
 * La VAE exige au moins un an d'activité en rapport avec le diplôme visé.
 * Seule la première option du formulaire ("Moins d'un an") est disqualifiante
 * sur ce critère de durée — toutes les autres franchissent le seuil légal.
 *
 * Volontairement permissive : elle ne bloque jamais l'envoi du formulaire,
 * elle sert uniquement à signaler le dossier au conseiller. Une personne à
 * onze mois d'ancienneté sera éligible dans un mois — la perdre au lieu de la
 * rappeler plus tard serait une erreur commerciale.
 */
export function isEligibleDuree(anciennete: string): boolean {
  return anciennete !== "Moins d'un an";
}

function buildTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  const port = Number(SMTP_PORT) || 587;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Dérivé du port plutôt qu'une variable SMTP_SECURE séparée à
    // maintenir : le port 465 (TLS implicite) est TOUJOURS "secure: true" —
    // c'est la config Gmail (smtp.gmail.com:465). Le port 587 (STARTTLS)
    // est "secure: false" par convention Nodemailer. Élimine un risque de
    // mauvaise config (oublier de positionner SMTP_SECURE).
    secure: port === 465,
    auth: {
      user: SMTP_USER,
      // Pour Gmail : ce n'est PAS le mot de passe du compte Google, mais un
      // "mot de passe d'application" généré dans myaccount.google.com/apppasswords
      // (nécessite la validation en 2 étapes activée sur le compte). Gmail
      // refuse l'authentification SMTP avec le mot de passe normal du compte.
      pass: SMTP_PASSWORD,
    },
    // Sans ces limites, Nodemailer peut attendre plusieurs minutes en
    // silence si Hostinger n'arrive pas à joindre Gmail (port bloqué,
    // pare-feu...) — et comme l'email et Google Sheets sont attendus
    // ensemble (Promise.allSettled), ça bloquait tout le formulaire sur
    // "Envoi..." indéfiniment, sans jamais afficher ni succès ni erreur.
    // Avec ces délais, l'email échoue vite et Google Sheets peut quand même
    // faire aboutir la demande.
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/**
 * Point d'intégration unique pour la réception des leads du formulaire de prédiagnostic.
 *
 * Aujourd'hui : envoi par email uniquement.
 *
 * Pour brancher une base de données ou un CRM plus tard, sans toucher au formulaire
 * ni à l'API route qui l'appelle, il suffit d'ajouter l'appel ici, par exemple :
 *
 *   await saveLeadToDatabase(lead);       // Postgres/Supabase, etc.
 *   await pushLeadToCrm(lead);            // HubSpot, Pipedrive, etc.
 *
 * en plus (ou à la place) de l'envoi email ci-dessous.
 */
export async function sendPrediagnosticLead(lead: PrediagnosticLead) {
  const transporter = buildTransport();
  const recipient = process.env.LEADS_RECIPIENT_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL || process.env.SMTP_USER;

  // L'alerte d'ancienneté est portée par l'OBJET de l'email, pas seulement par
  // le corps : c'est la seule partie visible dans une liste de mails sur
  // téléphone. On voit si le dossier est recevable avant même de l'ouvrir.
  const dureeOk = isEligibleDuree(lead.ancienneteActivite);
  const alerte = dureeOk ? "" : " [ANCIENNETÉ < 1 AN]";
  const subject = `Nouveau prédiagnostic VAE — ${lead.diplomeVise} — ${lead.prenom} ${lead.nom}${alerte}`;

  const text = [
    "Nouveau lead prédiagnostic VAE",
    "",
    ...(dureeOk
      ? []
      : [
          "⚠️ ANCIENNETÉ DÉCLARÉE INFÉRIEURE À UN AN",
          "La VAE exige au moins un an d'activité en rapport avec le diplôme visé.",
          "Dossier probablement non recevable en l'état — à recontacter plus tard.",
          "",
        ]),
    `Prénom : ${lead.prenom}`,
    `Nom : ${lead.nom}`,
    `Email : ${lead.email}`,
    `Téléphone : ${lead.telephone}`,
    `Diplôme visé : ${lead.diplomeVise}`,
    `Situation actuelle : ${lead.situationActuelle}`,
    `Ancienneté dans l'activité : ${lead.ancienneteActivite}`,
    `Structure d'exercice : ${lead.structure}`,
    "",
    "Activité au quotidien :",
    lead.activiteQuotidienne,
    "",
    "— SMS de relance prêt à copier (si la personne ne décroche pas) —",
    buildRelanceSms(lead),
    "",
    "— Email prêt à copier (si le numéro fourni ne fonctionne pas) —",
    buildMauvaisNumeroTexte(lead),
  ].join("\n");

  // Si le SMTP n'est pas encore configuré (environnement de développement),
  // on logue le lead au lieu d'échouer silencieusement.
  if (!transporter || !recipient) {
    console.warn(
      "[prediagnostic] SMTP non configuré (.env) — lead non envoyé par email, affiché en log uniquement :"
    );
    console.warn(text);
    return { delivered: false };
  }

  // Version HTML — ajoutée le 29/08/2026.
  //
  // L'en-tête est dessiné en HTML/CSS, PAS avec public/logo.svg : le SVG est
  // supprimé par plusieurs clients mail (Gmail), et les images distantes sont
  // bloquées par défaut tant que le destinataire ne les autorise pas. Un
  // dégradé CSS avec `background-color` en repli s'affiche partout, sans rien
  // à charger. Les couleurs reprennent celles du logo (tailwind.config.ts :
  // brand.400 #55a08f → brand.700 #21564d, accent.600 #ea580c).
  // Objectif : passer de « je lis le lead, je recopie le numéro, je rédige un
  // SMS » à deux gestes. Le bouton Appeler ouvre le téléphone, le bouton SMS
  // ouvre Messages avec le destinataire ET le texte déjà remplis.
  //
  // ⚠️ Les champs proviennent d'un formulaire public : tout ce qui vient du
  // lead est échappé avant d'entrer dans le HTML. Sans ça, une saisie
  // contenant du balisage se retrouverait interprétée dans la boîte mail.
  const esc = (v: string) =>
    String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const telHref = buildTelHref(lead.telephone);
  // Le bouton pointe vers /relance (lien https, jamais filtré) et non vers un
  // `sms:` direct que Gmail supprimerait. Voir buildRelancePageHref().
  const smsHref = buildRelancePageHref(lead);
  // Troisième chemin — ajouté le 31/08/2026. Un numéro mal saisi ne doit pas
  // coûter le lead : l'email reste joignable. `mailto:` est le seul schéma
  // d'URL que TOUS les clients mail acceptent (contrairement à `sms:`), donc
  // pas de page intermédiaire ici. null si l'adresse est inexploitable — le
  // bouton disparaît alors au lieu d'ouvrir une fenêtre vide.
  const mauvaisNumeroHref = buildMauvaisNumeroMailto(lead);

  // Les URL des boutons portent des « & » (?p=...&d=...&body=...). Dans un
  // attribut HTML, « & » doit être écrit « &amp; » : sans ça, un paramètre qui
  // s'appellerait un jour &copy=, &reg= ou &times= serait silencieusement
  // transformé en caractère par le client mail, et le lien partirait tronqué.
  // L'entité est reconvertie en « & » à l'ouverture : l'URL finale est
  // identique, on supprime juste la classe de bug.
  const attr = (href: string) => href.replace(/&/g, "&amp;");

  const bouton = (href: string, libelle: string, fond: string) =>
    `<a href="${attr(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:14px 22px;background:${fond};color:#ffffff;text-decoration:none;border-radius:10px;font-weight:600;font-size:16px">${libelle}</a>`;

  const actions = [
    telHref ? bouton(telHref, `Appeler ${esc(lead.prenom)}`, "#0f766e") : "",
    smsHref ? bouton(smsHref, "Préparer le SMS de relance", "#334155") : "",
    mauvaisNumeroHref
      ? bouton(mauvaisNumeroHref, "Mauvais numéro — écrire un email", "#b45309")
      : "",
  ]
    .filter(Boolean)
    .join("");

  const ligne = (libelle: string, valeur: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap">${libelle}</td><td style="padding:4px 0;color:#0f172a"><strong>${esc(valeur)}</strong></td></tr>`;

  // Repli visible dans la version HTML — ajouté le 29/08/2026 après test réel.
  // Le premier jet ne mettait le texte du SMS que dans la version texte de
  // l'email : invisible, puisque les clients mail affichent le HTML dès qu'il
  // existe. Or ce repli est indispensable : beaucoup de messageries (Gmail
  // notamment) suppriment les liens `sms:` par sécurité, et le bouton devient
  // inerte. Il faut donc toujours pouvoir copier le texte à la main.
  const blocCopie = `<p style="margin:24px 0 4px;color:#64748b">SMS de relance — à copier si le bouton ne réagit pas</p>
  <p style="margin:0;padding:12px;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:8px;white-space:pre-wrap;font-size:15px">${esc(buildRelanceSms(lead))}</p>`;

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;color:#0f172a">
  <div style="background-color:#21564d;background-image:linear-gradient(135deg,#55a08f 0%,#21564d 100%);border-radius:14px;padding:22px 24px;margin:0 0 20px">
    <p style="margin:0;color:#ffffff;font-size:21px;font-weight:700;letter-spacing:-0.3px">VAESocial</p>
    <p style="margin:6px 0 0;color:#d9ece7;font-size:15px">Nouveau lead — ${esc(lead.diplomeVise)}</p>
  </div>
  <h2 style="margin:0 0 4px;font-size:22px">${esc(lead.prenom)} ${esc(lead.nom)}</h2>
  <p style="margin:0 0 18px;color:#ea580c;font-weight:600;font-size:15px">Rappelez maintenant — les premières minutes font la différence.</p>
  ${dureeOk ? "" : `<p style="margin:0 0 16px;padding:12px;background:#fef3c7;border-radius:8px">Ancienneté déclarée : <strong>moins d'un an</strong>. À vérifier au cas par cas — depuis la réforme 2024, aucune durée minimale n'est exigée.</p>`}
  <div style="margin:0 0 20px">${actions}</div>
  <table style="border-collapse:collapse;font-size:15px">
    ${ligne("Téléphone", lead.telephone)}
    ${ligne("Email", lead.email)}
    ${ligne("Diplôme visé", lead.diplomeVise)}
    ${ligne("Situation", lead.situationActuelle)}
    ${ligne("Ancienneté", lead.ancienneteActivite)}
    ${ligne("Structure", lead.structure)}
  </table>
  <p style="margin:20px 0 4px;color:#64748b">Activité au quotidien</p>
  <p style="margin:0;padding:12px;background:#f8fafc;border-radius:8px;white-space:pre-wrap">${esc(lead.activiteQuotidienne)}</p>
  ${blocCopie}
</div>`;

  await transporter.sendMail({
    from,
    to: recipient,
    replyTo: lead.email,
    subject,
    text,
    html,
  });

  return { delivered: true };
}
