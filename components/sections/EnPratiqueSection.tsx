import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { Ico } from "@/components/Kit";
import type { DiplomeData } from "@/lib/diplomes-data";

// « La VAE … en pratique » (17/11/2026, lot 1 SEO, go d'Arthur). Le texte propre au
// diplôme qui manquait à la page : conditions, livret 1, livret 2, jury, agents
// publics. Faits sourcés (voir `sources`), aucune promesse. Piloté par le champ
// `enPratique` de lib/diplomes-data.ts : absent = section non affichée.
export default function EnPratiqueSection({
  enPratique,
  sigle,
}: {
  enPratique: NonNullable<DiplomeData["enPratique"]>;
  sigle: string;
}) {
  return (
    <section id="en-pratique" aria-labelledby="en-pratique-title" className="scroll-mt-16 bg-white py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Concrètement · {sigle}</Eyebrow>
          <h2
            id="en-pratique-title"
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl"
          >
            {enPratique.titre}
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {enPratique.etapes.map((e, i) => (
            <li key={e.titre} className="flex flex-col rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-900/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-700 shadow-sm">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-brand-900">{e.titre}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{e.texte}</p>
              {e.lien && (
                <Link
                  href={e.lien.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                >
                  {e.lien.label} <Ico name="arrow" className="h-4 w-4" />
                </Link>
              )}
            </li>
          ))}
        </ol>

        {enPratique.agentsPublics && (
          <div className="mx-auto mt-6 flex max-w-4xl items-start gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-brand-900/10 sm:mt-8 sm:px-6 sm:py-5">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
              <Ico name="info" className="h-5 w-5" />
            </span>
            <p className="text-[0.95rem] leading-relaxed text-brand-900">{enPratique.agentsPublics}</p>
          </div>
        )}

        <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">
          Sources :{" "}
          {enPratique.sources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && " · "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-300 underline-offset-4 hover:text-brand-800"
              >
                {s.label}
              </a>
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
