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
  const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!email || !rawKey) {
    return null;
  }

  // La clé privée est stockée dans Hostinger avec des "\n" littéraux (deux
  // caractères), pas de vrais retours à la ligne — on les reconvertit ici.
  const key = rawKey.replace(/\\n/g, "\n");

  return new JWT({
    email,
    key,
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

  await sheet.addRow({
    Date: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    Diplôme: lead.diplomeVise,
    Statut: lead.situationActuelle,
    Structure: lead.structure,
    Expérience: lead.anneesExperience,
    Prénom: lead.prenom,
    Nom: lead.nom,
    Téléphone: lead.telephone,
    Email: lead.email,
    Message: lead.messageLibre || "",
  });
}
