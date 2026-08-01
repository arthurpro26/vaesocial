import { NextRequest, NextResponse } from "next/server";
import { prediagnosticSchema } from "@/lib/prediagnostic-schema";
import { sendPrediagnosticLead } from "@/lib/email";
import { appendLeadToSheet } from "@/lib/google-sheets";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // "x-forwarded-for" est l'en-tête standard derrière un proxy/reverse-proxy
  // (cas normal en hébergement mutualisé/Node) ; on ne peut pas se fier à une
  // IP directe de connexion dans ce contexte.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes." },
      { status: 429 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const parsed = prediagnosticSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Piège à robots : si ce champ invisible est rempli, on répond un faux
  // succès sans jamais envoyer l'email — évite d'alerter le robot tout en ne
  // polluant pas la boîte mail de leads.
  if (parsed.data.honeypot) {
    return NextResponse.json({ success: true, delivered: false });
  }

  // Les deux canaux (email + Google Sheets) sont indépendants : Promise.allSettled
  // garantit que l'échec de l'un n'empêche jamais l'autre de s'exécuter ni de
  // réussir. On logue explicitement chaque résultat pour pouvoir diagnostiquer
  // un échec silencieux depuis les logs Hostinger, sans avoir à deviner.
  const [emailResult, sheetResult] = await Promise.allSettled([
    sendPrediagnosticLead(parsed.data),
    appendLeadToSheet(parsed.data),
  ]);

  const emailOk = emailResult.status === "fulfilled" && emailResult.value.delivered;
  const sheetOk = sheetResult.status === "fulfilled";

  if (emailResult.status === "fulfilled") {
    console.log(
      `[prediagnostic] Email : ${emailResult.value.delivered ? "OK (envoyé)" : "ÉCHEC (SMTP non configuré)"}`
    );
  } else {
    console.error("[prediagnostic] Email : ÉCHEC —", emailResult.reason);
  }

  if (sheetOk) {
    console.log("[prediagnostic] Google Sheets : OK (ligne ajoutée)");
  } else {
    console.error(
      "[prediagnostic] Google Sheets : ÉCHEC —",
      sheetResult.status === "rejected" ? sheetResult.reason : "raison inconnue"
    );
  }

  // On ne renvoie jamais un faux succès : si ni l'email ni le Sheet n'ont
  // réellement enregistré le lead, l'utilisateur voit un message d'erreur
  // (déjà géré par PrediagnosticForm) au lieu d'un écran de confirmation
  // trompeur.
  if (!emailOk && !sheetOk) {
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, delivered: emailOk, sheetSaved: sheetOk });
}
