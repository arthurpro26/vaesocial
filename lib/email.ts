import nodemailer from "nodemailer";

export type PrediagnosticLead = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  diplomeVise: string;
  situationActuelle: string;
  activiteQuotidienne: string;
  structure: string;
};

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

  const subject = `Nouveau prédiagnostic VAE — ${lead.diplomeVise} — ${lead.prenom} ${lead.nom}`;
  const text = [
    "Nouveau lead prédiagnostic VAE",
    "",
    `Prénom : ${lead.prenom}`,
    `Nom : ${lead.nom}`,
    `Email : ${lead.email}`,
    `Téléphone : ${lead.telephone}`,
    `Diplôme visé : ${lead.diplomeVise}`,
    `Situation actuelle : ${lead.situationActuelle}`,
    `Structure d'exercice : ${lead.structure}`,
    "",
    "Activité au quotidien :",
    lead.activiteQuotidienne,
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

  await transporter.sendMail({
    from,
    to: recipient,
    replyTo: lead.email,
    subject,
    text,
  });

  return { delivered: true };
}
