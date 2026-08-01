import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import CourseJsonLd from "@/components/CourseJsonLd";
import Eyebrow from "@/components/Eyebrow";
import StatsBar from "@/components/sections/StatsBar";
import MethodeSection from "@/components/sections/MethodeSection";
import FinancementSection from "@/components/sections/FinancementSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import EngagementsSection from "@/components/sections/EngagementsSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { AVIS, DIPLOMES, type DiplomeSlug } from "@/lib/site-data";
import { DIPLOMES_DATA } from "@/lib/diplomes-data";

// Page diplôme dédiée (/dees, /deaes, /deeje, /deme) — pilotée par
// lib/diplomes-data.ts. Une seule base de code, un seul template : chaque
// page adapte son contenu au diplôme via les données, sans dupliquer de JSX.
// Les sections Méthode / Financement / Témoignages / Engagements / CTA final
// / Stats sont strictement les mêmes composants que sur la home (voir
// components/sections/) : même design, mêmes données réelles, zéro copie.
//
// Formulaire : le diplôme est préréglé via `presetDiplome`, l'étape "Quel
// diplôme ?" est donc masquée pour réduire la friction du trafic Google Ads
// qui arrive déjà avec une intention précise.

const VALID_SLUGS = DIPLOMES.map((d) => d.slug);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ diplome: slug }));
}

function getDiplomeOrNotFound(slug: string) {
  if (!VALID_SLUGS.includes(slug as DiplomeSlug)) notFound();
  return DIPLOMES_DATA[slug as DiplomeSlug];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ diplome: string }>;
}): Promise<Metadata> {
  const { diplome } = await params;
  const d = getDiplomeOrNotFound(diplome);
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: `/${d.slug}` },
    openGraph: { title: d.metaTitle, description: d.metaDescription },
  };
}

export default async function DiplomePage({
  params,
}: {
  params: Promise<{ diplome: string }>;
}) {
  const { diplome } = await params;
  const d = getDiplomeOrNotFound(diplome);

  return (
    <>
      <CourseJsonLd diplome={d} />

      {/* HERO — même structure grid que la home (accroche / formulaire / réassurance)
          pour conserver le trick de réordonnancement mobile (formulaire remonté). */}
      <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-8 pt-6 sm:pb-20 sm:pt-20">
        <Container>
          <div className="grid gap-4 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-center sm:gap-3">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                  <span aria-hidden>✅</span>
                  VAE {d.sigle}
                  <span className="hidden sm:inline">· {d.niveau}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800">
                  <span aria-hidden>⭐</span>
                  {AVIS.note}/5{" "}
                  <span className="hidden sm:inline">({AVIS.nombre} avis bénéficiaires)</span>
                  <span className="sm:hidden">({AVIS.nombre} avis)</span>
                </span>
              </div>
              <h1 className="mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
                On vous dit d&apos;abord si vous êtes{" "}
                <span className="text-brand-600">éligible {d.heroSuffixe}</span>.
                <br />
                Pas l&apos;inverse.
              </h1>
              <p className="mt-2.5 text-pretty text-sm font-semibold text-slate-800 sm:mt-4 sm:text-lg">
                {d.heroIntro}
              </p>
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <PrediagnosticForm presetDiplome={d.sigle as "DEES" | "DEAES" | "DEEJE" | "DEME"} />
              <p className="mt-3 text-center text-xs text-slate-500 sm:mt-4">
                🔒 Vos informations restent confidentielles — jamais revendues à des tiers.
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {d.heroParagraphe}
              </p>

              {d.noteReferentiel && (
                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 sm:mt-4 sm:p-4 sm:text-sm">
                  ℹ️ {d.noteReferentiel}
                </div>
              )}

              <div className="mt-4 rounded-2xl border border-slate-100 bg-white/60 p-4 sm:mt-6 sm:p-6">
                <p className="text-sm font-semibold text-slate-900">
                  👉 {d.publicIntro}
                </p>
                <ul className="mt-3 space-y-2">
                  {d.publicConcerne.map((p) => (
                    <li key={p.titre} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-0.5 text-brand-600" aria-hidden>
                        ✓
                      </span>
                      <span>
                        <span className="font-semibold text-slate-800">{p.titre}.</span>{" "}
                        {p.texte}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* PUBLIC CONCERNÉ — détaillé, spécifique au diplôme */}
      <section className="bg-white py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pour qui ?</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Êtes-vous concerné·e par le {d.sigle} ?
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">{d.publicIntro}</p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {d.publicConcerne.map((p) => (
              <div
                key={p.titre}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:block sm:p-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                  <span aria-hidden>🤝</span>
                </div>
                <div className="sm:mt-4">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {p.titre}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {p.texte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DÉBOUCHÉS — spécifique au diplôme, apporte une vraie valeur ajoutée SEO */}
      <section className="bg-brand-50/60 py-12 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>Débouchés</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              🚀 Où exercer avec un {d.sigle} ?
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              {d.debouchesIntro}
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {d.debouches.map((deb) => (
              <div
                key={deb.texte}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg sm:h-11 sm:w-11 sm:text-xl">
                  <span aria-hidden>{deb.icon}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{deb.texte}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm font-semibold text-brand-800 sm:mt-10">
            {d.debouchesConclusion}
          </p>
        </Container>
      </section>

      <MethodeSection />
      <FinancementSection
        sousTitre={`Votre CPF couvre généralement l'intégralité de l'accompagnement vers le ${d.sigle}. Nous vérifions avec vous votre solde et les autres aides mobilisables, avant tout engagement.`}
      />
      <TemoignagesSection highlight={d.slug} />

      {/* FAQ — spécifique au diplôme */}
      <section id="faq" className="bg-brand-50/60 py-12 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Vos questions sur la VAE {d.sigle}
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Toutes les réponses pour démarrer en confiance.
            </p>
          </div>
          <div className="mt-6 sm:mt-12">
            <FaqAccordion items={d.faq} />
          </div>
          <FaqJsonLd items={d.faq} />
        </Container>
      </section>

      <EngagementsSection />
      <CtaFinalSection titre={d.ctaTitre} />
    </>
  );
}
