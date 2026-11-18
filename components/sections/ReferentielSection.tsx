import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { Ico } from "@/components/Kit";
import type { DiplomeData } from "@/lib/diplomes-data";

// Section « blocs de compétences » d'une page diplôme. Entièrement pilotée par
// le champ `referentiel` de lib/diplomes-data.ts : absente si le champ est vide,
// donc ajoutable à n'importe quel diplôme sans toucher au JSX. Placée sous les
// sections de conversion et avant la FAQ : elle répond à la question du visiteur
// qui compare (et donne à Google le contenu de fond qui manquait sur la page),
// sans retarder le parcours vers le formulaire.
export default function ReferentielSection({
  referentiel,
  sigle,
}: {
  referentiel: NonNullable<DiplomeData["referentiel"]>;
  sigle: string;
}) {
  return (
    <section
      id="referentiel"
      aria-labelledby="referentiel-title"
      className="relative overflow-hidden bg-brand-50/70 py-12 sm:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full border-[28px] border-brand-100/70" />
      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <Eyebrow>Ce que le jury évalue · {sigle}</Eyebrow>
          <h2
            id="referentiel-title"
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl"
          >
            {referentiel.titre}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed">{referentiel.intro}</p>
        </div>

        {/* 18/11/2026 (demande d'Arthur : page trop longue, « des infos qui surgissent de
            partout ») : les blocs ne sont plus des cartes ouvertes (près de 4 écrans de
            téléphone pour 5 blocs) mais une liste dépliable. On lit d'abord les intitulés
            officiels, on ouvre celui qu'on veut ; le premier est ouvert pour montrer ce qu'il
            y a dedans. <details> natif : aucun script, et tout le texte reste dans la page
            (lisible par Google). */}
        <ol className="relative mx-auto mt-8 max-w-3xl space-y-3 sm:mt-10">
          {referentiel.blocs.map((bloc, i) => (
            <li key={bloc.intitule}>
              <details
                open={i === 0}
                className="group rounded-2xl bg-white shadow-sm ring-1 ring-brand-900/10 transition-shadow open:shadow-md open:ring-brand-300"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:gap-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  >
                    {i + 1}
                  </span>
                  <h3 className="flex-1 text-[0.95rem] font-bold leading-snug text-brand-900 sm:text-lg sm:leading-snug">
                    {bloc.intitule}
                  </h3>
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 flex-none text-brand-600 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="rounded-xl bg-brand-50 px-4 py-3 text-sm leading-relaxed text-slate-700 sm:px-5 sm:py-4 sm:text-base sm:leading-relaxed">
                    <p className="flex gap-2.5">
                      <Ico name="spark" className="mt-0.5 h-4 w-4 flex-none text-accent-500 sm:mt-1 sm:h-5 sm:w-5" />
                      <span>
                        <span className="font-semibold text-brand-700">À repérer dans votre parcours : </span>
                        {bloc.piste}
                      </span>
                    </p>
                    {bloc.exemples && (
                      <p className="mt-2.5 border-t border-brand-900/10 pt-2.5 pl-[1.65rem] text-[0.84rem] leading-relaxed text-slate-600 sm:mt-3 sm:pt-3 sm:pl-[1.9rem] sm:text-[0.95rem] sm:leading-relaxed">
                        <span className="font-semibold text-slate-700">Par exemple : </span>
                        {bloc.exemples}
                      </p>
                    )}
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>

        {referentiel.conclusion && (
          <div className="relative mx-auto mt-8 flex max-w-4xl items-start gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-brand-900/10 sm:px-6 sm:py-5">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
              <Ico name="check" className="h-5 w-5" />
            </span>
            <p className="text-[0.95rem] leading-relaxed text-brand-900 sm:text-lg">{referentiel.conclusion}</p>
          </div>
        )}

        <p className="relative mt-6 text-center text-sm text-slate-600">
          Source :{" "}
          <a
            href={referentiel.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-slate-300 underline-offset-4 hover:text-brand-800"
          >
            {referentiel.sourceLabel}
          </a>
          {referentiel.guide && (
            <>
              {" · "}
              <Link
                href={`/blog/${referentiel.guide.slug}`}
                className="underline decoration-slate-300 underline-offset-4 hover:text-brand-800"
              >
                {referentiel.guide.label}
              </Link>
            </>
          )}
        </p>

        <div className="relative mt-8 text-center">
          <a
            href="#prediagnostic-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-800"
          >
            Vérifier mon éligibilité {sigle} <Ico name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
