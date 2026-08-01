import { NextRequest, NextResponse } from "next/server";
import { prediagnosticSchema } from "@/lib/prediagnostic-schema";
import { sendPrediagnosticLead } from "@/lib/email";
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

  try {
    const result = await sendPrediagnosticLead(parsed.data);
    return NextResponse.json({ success: true, delivered: result.delivered });
  } catch (error) {
    console.error("[prediagnostic] Échec de l'envoi du lead :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
      { status: 500 }
    );
  }
}
