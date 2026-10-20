import Link from "next/link";
import Container from "@/components/Container";
import BrandIcon from "@/components/BrandIcon";
import Eyebrow from "@/components/Eyebrow";
import AccompagnementPanel from "@/components/sections/AccompagnementPanel";
import { Ico } from "@/components/Kit";
import { ETAPES } from "@/lib/site-data";

// Les 5 étapes du parcours, en frise horizontale sur ordinateur, en cartes empilées sur téléphone.
// Volontairement générique (identique quel que soit le diplôme visé) : ce sont les mêmes étapes
// officielles pour tous les diplômes. L'étape centrale (le livret de compétences) est mise en avant.
// Le bloc « Votre accompagnement » est affiché dessous.
const ETAPE_ICONS = ["users", "seal", "diploma", "screen", "award"] as const;

export default function MethodeSection() {
  return (
    <section id="methode" className="scroll-mt-16 bg-white py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Notre méthode</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
            5 étapes, du diagnostic jusqu&apos;au jury
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            10 à 35 heures d&apos;accompagnement au total, réparties sur plusieurs mois, à distance et à votre rythme.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-[2.1rem] hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block"
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
            {ETAPES.map((e, i) => {
              const fort = i === 2;
              return (
                <li
                  key={e.titre}
                  className={
                    fort
                      ? "relative rounded-3xl bg-brand-600 p-6 text-white shadow-xl shadow-brand-900/20 lg:-mt-2"
                      : "relative rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-900/5"
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        fort
                          ? "flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 ring-4 ring-brand-600"
                          : "flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-4 ring-brand-50"
                      }
                    >
                      <BrandIcon name={ETAPE_ICONS[i % ETAPE_ICONS.length]} className="h-5 w-5" />
                    </span>
                    <span className={fort ? "text-3xl font-bold text-white/30" : "text-3xl font-bold text-brand-200"}>
                      0{i + 1}
                    </span>
                  </div>
                  {fort && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-md shadow-accent-600/30">
                      Étape centrale
                    </span>
                  )}
                  <h3 className={fort ? "mt-5 text-base font-bold leading-snug" : "mt-5 text-base font-bold leading-snug text-brand-900"}>
                    {e.titre}
                  </h3>
                  <p className={fort ? "mt-2 text-sm leading-relaxed text-brand-50" : "mt-2 text-sm leading-relaxed text-slate-700"}>
                    {e.texte}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <AccompagnementPanel />

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="#prediagnostic-form"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-900/15 transition hover:-translate-y-0.5 hover:bg-brand-50"
          >
            Tout commence par votre prédiagnostic gratuit <Ico name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
