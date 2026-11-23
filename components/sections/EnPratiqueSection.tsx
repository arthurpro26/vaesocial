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

        {/* 18/11/2026 : même présentation que les blocs (liste dépliable, <details> natif),
            pour raccourcir la page sur téléphone (4 cartes = plus de 2 écrans). Le texte
            reste entier dans la page. */}
        <ol className="mx-auto mt-8 max-w-3xl divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:mt-10">
          {enPratique.etapes.map((e, i) => (
            <li key={e.titre}>
              <details
                name="etapes-diplome"
                open={i === 0}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 sm:gap-4 sm:px-8 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                    {i + 1}
                  </span>
                  <h3 className="flex-1 text-[0.95rem] font-bold leading-snug text-brand-900 sm:text-lg sm:leading-snug">{e.titre}</h3>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-200 group-open:rotate-45 sm:h-8 sm:w-8"
                  >
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 pl-[4rem] sm:px-8 sm:pb-6 sm:pl-[5.5rem]">
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-relaxed">{e.texte}</p>
                  {e.lien && (
                    <Link
                      href={e.lien.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                    >
                      {e.lien.label} <Ico name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ol>

        {enPratique.agentsPublics && (
          <div className="mx-auto mt-6 flex max-w-4xl items-start gap-4 rounded-r-2xl border-l-4 border-[#d8323c] bg-white px-5 py-4 shadow-sm ring-1 ring-brand-900/10 sm:mt-8 sm:px-6 sm:py-5">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
              <Ico name="info" className="h-5 w-5" />
            </span>
            <p className="text-[0.95rem] leading-relaxed text-brand-900">
              {enPratique.agentsPublics}{" "}
              <a
                href="#financement-public"
                className="whitespace-nowrap font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
              >
                Voir qui finance dans le public
              </a>
            </p>
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
