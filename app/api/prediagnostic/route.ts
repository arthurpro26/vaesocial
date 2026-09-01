import { NextRequest, NextResponse } from "next/server";
import { prediagnosticSchema } from "@/lib/prediagnostic-schema";
import { sendConfirmationToLead, sendPrediagnosticLead } from "@/lib/email";
import { appendLeadToSheet } from "@/lib/google-sheets";
import { isRateLimited } from "@/lib/rate-limit";
import { formatPhoneFr, normalizePhoneFr } from "@/lib/phone";

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
  //
  // INCIDENT DU 29 AOÛT 2026 — `leadRecorded: false` est indispensable.
  // Ce faux succès est un HTTP 200. Or PrediagnosticForm ne testait que
  // `res.ok` : chaque robot tombé dans le piège déclenchait donc une
  // conversion Google Ads (5 conversions remontées pour 2 leads réels le
  // 29/08). Pire, la stratégie « Maximiser les conversions » apprenait sur
  // ce signal et allait chercher davantage de trafic robot. Le robot doit
  // continuer à croire que son envoi a réussi (d'où le 200), mais le
  // navigateur doit savoir qu'aucun lead n'a été enregistré : c'est
  // exactement le rôle de ce drapeau.
  if (parsed.data.honeypot) {
    return NextResponse.json({ success: true, delivered: false, leadRecorded: false });
  }

  // Les deux canaux (email + Google Sheets) sont indépendants : Promise.allSettled
  // garantit que l'échec de l'un n'empêche jamais l'autre de s'exécuter ni de
  // réussir. On logue explicitement chaque résultat pour pouvoir diagnostiquer
  // un échec silencieux depuis les logs Hostinger, sans avoir à deviner.
  // Le schéma a déjà garanti que le numéro est normalisable ; on enregistre la
  // forme nationale canonique (« 06 26 40 01 33 ») quelle que soit la saisie
  // d'origine, pour que le numéro soit directement cliquable depuis l'email et
  // le Google Sheet sans retraitement manuel.
  const lead = {
    ...parsed.data,
    telephone: formatPhoneFr(normalizePhoneFr(parsed.data.telephone)!),
  };

  // Troisième canal, ajouté le 01/09/2026 : l'accusé de réception envoyé au
  // lead lui-même. Il est lancé en parallèle des deux autres, mais son sort
  // est SANS EFFET sur l'enregistrement du lead — voir le calcul de
  // `leadRecorded` plus bas. Un accusé de réception qui échoue ne doit jamais
  // faire perdre un lead ni annuler une conversion Google Ads.
  const [emailResult, sheetResult, confirmationResult] = await Promise.allSettled([
    sendPrediagnosticLead(lead),
    appendLeadToSheet(lead),
    sendConfirmationToLead(lead),
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

  if (confirmationResult.status === "fulfilled") {
    console.log(
      `[prediagnostic] Accusé de réception au lead : ${confirmationResult.value.delivered ? "OK (envoyé)" : "non envoyé"}`
    );
  } else {
    console.error("[prediagnostic] Accusé de réception au lead : ÉCHEC —", confirmationResult.reason);
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

  // `leadRecorded: true` : on n'arrive ici que si au moins un des deux canaux
  // (email ou Sheet) a réellement enregistré le lead — le cas contraire est
  // déjà sorti en 500 juste au-dessus. C'est ce drapeau, et lui seul, qui
  // autorise le navigateur à comptabiliser une conversion Google Ads.
  return NextResponse.json({
    success: true,
    delivered: emailOk,
    sheetSaved: sheetOk,
    leadRecorded: true,
  });
}
