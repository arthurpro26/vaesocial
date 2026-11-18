import { ETAPES } from "@/lib/site-data";

/**
 * « Votre parcours en 5 étapes » — carte de la colonne de gauche des pages
 * diplôme, sur ordinateur (23/10/2026, demande d'Arthur : l'ancienne liste
 * de cinq étapes en petit texte gris faisait « HLM »).
 *
 * Une seule carte blanche, une ligne verticale qui relie les étapes, un
 * titre et une phrase courte par étape (ETAPES[].court, lib/site-data.ts),
 * l'étape centrale (livret de compétences) en vert plein. Les textes longs
 * d'ETAPES restent affichés dans la section Méthode (#methode).
 */
export default function ParcoursCard({
  sigle,
  className = "",
  horizontal = false,
}: {
  sigle: string;
  className?: string;
  /** 18/11/2026 : bandeau sur toute la largeur (5 étapes côte à côte) pour le haut des pages diplôme sur ordinateur. */
  horizontal?: boolean;
}) {
  if (horizontal) {
    return (
      <section
        aria-labelledby="parcours-titre"
        className={`rounded-3xl bg-white p-6 shadow-[0_18px_40px_-24px_rgba(20,47,42,0.45)] ring-1 ring-brand-900/10 xl:p-7 ${className}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h2 id="parcours-titre" className="text-lg font-bold tracking-[-0.01em] text-brand-900">
              Votre VAE {sigle}, en 5 étapes
            </h2>
            <p className="text-sm font-medium text-slate-500">6 à 8 mois · 100 % à distance</p>
          </div>
          <a
            href="#methode"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
          >
            Voir le détail de chaque étape
            <span aria-hidden>→</span>
          </a>
        </div>

        <ol className="relative mt-6 grid grid-cols-5 gap-5">
          {/* Trait horizontal qui relie les cinq pastilles. */}
          <span aria-hidden className="absolute left-4 right-[18%] top-4 h-px bg-brand-200" />
          {ETAPES.map((e, i) => {
            const centrale = i === 2;
            return (
              <li key={e.titre} className="relative">
                <span
                  className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ring-white ${
                    centrale ? "bg-brand-700 text-white shadow-md shadow-brand-900/25" : "bg-brand-50 text-brand-800 outline outline-1 outline-brand-200"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="mt-3 block text-[1.02rem] font-semibold leading-snug text-brand-900">{e.titre}</span>
                <span className="mt-1 block text-[0.92rem] leading-snug text-slate-600">{e.court}</span>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="parcours-titre"
      className={`flex flex-col rounded-3xl bg-white p-6 shadow-[0_18px_40px_-24px_rgba(20,47,42,0.45)] ring-1 ring-brand-900/10 xl:p-7 ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 id="parcours-titre" className="text-lg font-bold tracking-[-0.01em] text-brand-900">
          Votre VAE {sigle}, en 5 étapes
        </h2>
        <p className="text-sm font-medium text-slate-500">6 à 8 mois · 100 % à distance</p>
      </div>

      <ol className="mt-5 space-y-0">
        {ETAPES.map((e, i) => {
          const centrale = i === 2;
          return (
            <li key={e.titre} className="relative flex gap-4 py-2.5">
              {/* Trait qui relie cette pastille à la suivante (pas après la dernière). */}
              {i < ETAPES.length - 1 && (
                <span aria-hidden className="absolute -bottom-2.5 left-[0.95rem] top-10 w-px bg-brand-200" />
              )}
              <span
                className={`relative z-10 mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-bold ring-4 ring-white ${
                  centrale ? "bg-brand-700 text-white shadow-md shadow-brand-900/25" : "bg-brand-50 text-brand-800 ring-brand-50/0 outline outline-1 outline-brand-200"
                }`}
              >
                {i + 1}
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block text-[1.02rem] font-semibold leading-snug text-brand-900">{e.titre}</span>
                <span className="mt-0.5 block text-[0.95rem] leading-snug text-slate-600">{e.court}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <a
        href="#methode"
        className="mt-auto inline-flex self-start pt-5 items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-900"
      >
        Voir le détail de chaque étape
        <span aria-hidden>→</span>
      </a>
    </section>
  );
}
