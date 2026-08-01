import { NextRequest, NextResponse } from "next/server";
import { prediagnosticSchema } from "@/lib/prediagnostic-schema";
import { sendPrediagnosticLead } from "@/lib/email";

export async function POST(request: NextRequest) {
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
