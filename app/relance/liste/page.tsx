import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RelanceListeClient from "@/components/RelanceListeClient";
import { readLeadsFromSheet } from "@/lib/google-sheets";
import { cleRelanceValide, relanceActivee } from "@/lib/relance-acces";
import { buildRelanceEmailSujet, buildRelanceEmailTexte } from "@/lib/relance-sms";

/**
 * Console de relance — 01/09/2026.
 *
 * POURQUOI : une part des leads payants ne décroche jamais. Ils étaient
 * jusqu'ici perdus en silence, sans qu'aucun écran ne dise seulement lesquels.
 * Cette page lit le Sheet, montre tout le monde, et permet d'écrire à ceux
 * qu'on choisit — un par un, jamais toute la base d'un coup.
 *
 * ⚠️ ELLE AFFICHE DES DONNÉES PERSONNELLES. Accès par clé (voir
 * lib/relance-acces.ts), noindex, et 404 si la clé est absente ou fausse :
 * on ne confirme même pas que la page existe.
 */
export const metadata: Metadata = {
  title: "Console de relance — VAESocial",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function RelanceListePage({
  searchParams,
}: {
  searchParams: Promise<{ k?: string }>;
}) {
  const { k = "" } = await searchParams;

  if (!relanceActivee() || !cleRelanceValide(k)) {
    notFound();
  }

  const lecture = await readLeadsFromSheet();

  if (!lecture.ok) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        <h1 className="text-xl font-bold text-slate-900">Console de relance indisponible</h1>
        <p className="mt-3 leading-relaxed text-slate-700">{lecture.message}</p>
        {lecture.raison === "colonne" ? (
          <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            <p className="font-semibold">À faire une seule fois, dans le Google Sheet :</p>
            <p className="mt-2">
              Ouvrez la première cellule vide de la ligne 1 (juste après « Recevabilité ») et
              écrivez exactement&nbsp;: <strong>Relancé le</strong>. Rien d&apos;autre. Puis
              rechargez cette page.
            </p>
            <p className="mt-2">
              Cette colonne est ce qui garantit que personne ne recevra deux fois le même
              message. Tant qu&apos;elle n&apos;existe pas, aucun envoi n&apos;est possible.
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  // Aperçu construit avec un lead réel de la liste : c'est exactement ce que
  // la personne recevra, sans approximation. Les variables d'environnement
  // (signature, agenda) n'existent que côté serveur — d'où l'aperçu calculé
  // ici et transmis à l'écran plutôt que reconstruit dans le navigateur.
  const modele = lecture.leads.find((l) => l.email && !l.relanceLe) ?? lecture.leads[0] ?? null;
  const apercu = modele
    ? {
        sujet: buildRelanceEmailSujet(modele),
        texte: buildRelanceEmailTexte(modele),
        prenom: modele.prenom,
      }
    : null;

  return <RelanceListeClient leads={lecture.leads} cle={k} apercu={apercu} />;
}
