import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
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
    <section id="referentiel" aria-labelledby="referentiel-title" className="bg-white py-12 sm:py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>Référentiel {sigle}</Eyebrow>
          <h2
            id="referentiel-title"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl"
          >
            {referentiel.titre}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
            {referentiel.intro}
          </p>
        </div>

        <ol className="mt-8 space-y-4 sm:mt-12">
          {referentiel.blocs.map((bloc, i) => (
            <li
              key={bloc.intitule}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                  {bloc.intitule}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  <span className="font-semibold text-slate-700">Dans votre dossier : </span>
                  {bloc.piste}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-sm text-slate-500">
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

        <div className="mt-8 text-center">
          <a
            href="#prediagnostic-form"
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-800"
          >
            Vérifier mon éligibilité {sigle}
          </a>
        </div>
      </Container>
    </section>
  );
}
