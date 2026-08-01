import { NextResponse } from "next/server";

// TEMPORAIRE — route de diagnostic pour vérifier quelles variables d'environnement
// SMTP sont bien détectées en production sur Hostinger, sans jamais exposer leurs
// valeurs (booléens de présence uniquement). À supprimer une fois le problème SMTP
// résolu — voir lib/email.ts pour le log de diagnostic équivalent côté envoi.
export async function GET() {
  return NextResponse.json({
    SMTP_HOST: Boolean(process.env.SMTP_HOST),
    SMTP_PORT: Boolean(process.env.SMTP_PORT),
    SMTP_USER: Boolean(process.env.SMTP_USER),
    SMTP_PASSWORD: Boolean(process.env.SMTP_PASSWORD),
    LEADS_RECIPIENT_EMAIL: Boolean(process.env.LEADS_RECIPIENT_EMAIL),
  });
}
