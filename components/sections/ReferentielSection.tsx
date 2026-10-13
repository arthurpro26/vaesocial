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
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow>Référentiel {sigle}</Eyebrow>
          <h2
            id="referentiel-title"
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl"
          >
            {referentiel.titre}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{referentiel.intro}</p>
        </div>

        <ol className="relative mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {referentiel.blocs.map((bloc, i) => (
            <li
              key={bloc.intitule}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 sm:p-7"
            >
              <span aria-hidden className="absolute -right-2 -top-4 text-8xl font-bold text-brand-50">
                {i + 1}
              </span>
              <div className="relative flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-md shadow-brand-900/20"
                >
                  {i + 1}
                </span>
                <h3 className="text-base font-bold leading-snug text-brand-900">{bloc.intitule}</h3>
              </div>
              <p className="relative mt-4 flex gap-2.5 rounded-2xl bg-brand-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
                <Ico name="spark" className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
                <span>
                  <span className="font-semibold text-brand-700">À repérer dans votre parcours : </span>
                  {bloc.piste}
                </span>
              </p>
            </li>
          ))}
        </ol>

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
