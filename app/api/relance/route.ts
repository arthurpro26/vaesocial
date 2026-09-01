import { NextResponse } from "next/server";
import { sendRelanceToLead } from "@/lib/email";
import { relancerLeads } from "@/lib/google-sheets";
import { cleRelanceValide, relanceActivee } from "@/lib/relance-acces";

/**
 * Envoi groupé des relances — 01/09/2026.
 *
 * Cette route peut écrire à de vraies personnes : elle est volontairement
 * étroite et défensive.
 *   - Elle exige RELANCE_ACCESS_KEY. Variable absente = route morte (503).
 *     Aucune valeur par défaut, jamais : une clé par défaut serait une porte
 *     ouverte sur le fichier de leads.
 *   - Elle plafonne chaque envoi à MAX_PAR_ENVOI. Un doigt qui glisse ne peut
 *     pas écrire à toute la base d'un coup.
 *   - Elle ne décide rien elle-même : c'est relancerLeads() qui relit le Sheet
 *     ligne par ligne et refuse celles déjà relancées.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Au-delà, on refuse : c'est un garde-fou contre la fausse manœuvre, pas une
 * limite technique. Plusieurs envois successifs restent possibles. */
const MAX_PAR_ENVOI = 20;

export async function POST(request: Request) {
  if (!relanceActivee()) {
    return NextResponse.json(
      { erreur: "Relance désactivée : RELANCE_ACCESS_KEY n'est pas définie sur le serveur." },
      { status: 503 }
    );
  }

  let corps: unknown;
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ erreur: "Requête illisible." }, { status: 400 });
  }

  const { cle, lignes } = (corps ?? {}) as { cle?: string; lignes?: unknown };

  if (!cleRelanceValide(String(cle ?? ""))) {
    return NextResponse.json({ erreur: "Accès refusé." }, { status: 401 });
  }

  if (!Array.isArray(lignes) || lignes.length === 0) {
    return NextResponse.json({ erreur: "Aucune ligne sélectionnée." }, { status: 400 });
  }

  // Dédoublonnage explicite : deux fois la même ligne dans la liste ne doit
  // pas pouvoir produire deux envois.
  const demandees = Array.from(
    new Set(lignes.filter((v): v is number => Number.isInteger(v) && (v as number) > 1))
  );

  if (demandees.length === 0) {
    return NextResponse.json({ erreur: "Aucune ligne valide." }, { status: 400 });
  }

  if (demandees.length > MAX_PAR_ENVOI) {
    return NextResponse.json(
      {
        erreur: `${demandees.length} lignes demandées : maximum ${MAX_PAR_ENVOI} par envoi. Faites-le en plusieurs fois.`,
      },
      { status: 400 }
    );
  }

  try {
    // 1,2 s entre deux envois : 20 messages tiennent en ~45 s, ce qui reste
    // sous la fenêtre de coupure d'un proxy classique (60 s), tout en évitant
    // la rafale qui abîmerait la réputation de l'adresse d'envoi.
    const resultat = await relancerLeads(
      demandees,
      (lead) =>
        sendRelanceToLead({
          prenom: lead.prenom,
          diplomeVise: lead.diplomeVise,
          email: lead.email,
        }),
      { pauseMs: 1200 }
    );

    console.log(
      `[relance] ${resultat.envoyes.length} envoyée(s), ${resultat.ignores.length} ignorée(s), ${resultat.echecs.length} échec(s).`
    );

    return NextResponse.json({
      envoyes: resultat.envoyes.map((l) => ({ ligne: l.ligne, prenom: l.prenom, email: l.email })),
      ignores: resultat.ignores.map((i) => ({
        ligne: i.lead.ligne,
        prenom: i.lead.prenom,
        raison: i.raison,
      })),
      echecs: resultat.echecs.map((e) => ({
        ligne: e.lead.ligne,
        prenom: e.lead.prenom,
        message: e.message,
      })),
    });
  } catch (erreur) {
    console.error("[relance] Envoi annulé —", erreur);
    return NextResponse.json(
      { erreur: erreur instanceof Error ? erreur.message : "Erreur inconnue." },
      { status: 500 }
    );
  }
}
