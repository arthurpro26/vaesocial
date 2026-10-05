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
import { RESULTATS, DIPLOMES, type DiplomeSlug } from "@/lib/site-data";
import BrandIcon from "@/components/BrandIcon";
import { DIPLOMES_DATA } from "@/lib/diplomes-data";
import { siteConfig } from "@/lib/site-config";

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
    // Chaque page diplôme avait jusqu'ici son Title/description propres, mais
    // héritait de l'Open Graph et Twitter Card génériques de la home (définis
    // dans app/layout.tsx) — un partage sur les réseaux affichait donc le
    // mauvais titre. On surcharge ici avec les mêmes données déjà utilisées
    // pour le title/description, sans rien inventer de nouveau.
    //
    // Important : Next.js fusionne les métadonnées "à plat" — dès qu'une page
    // définit son propre `openGraph`/`twitter`, ça REMPLACE entièrement celui
    // du layout parent (pas de fusion profonde). On reprend donc aussi
    // type/locale/siteName et card pour ne pas les perdre.
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      title: d.metaTitle,
      description: d.metaDescription,
      url: `/${d.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: d.metaTitle,
      description: d.metaDescription,
    },
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
    // `theme-rose` (voir app/globals.css) redéfinit les variables CSS de la
    // palette pour toute la page : le rose se propage automatiquement aux
    // sections partagées (StatsBar, Méthode, Financement, Témoignages,
    // Engagements, CTA final) sans qu'aucune d'elles ne soit dupliquée ni
    // modifiée. Sans `theme`, la valeur est `undefined` et la page garde le
    // teal de marque — les pages DEES/DEAES/DEEJE/DEME sont inchangées.
    <div className={d.theme === "rose" ? "theme-rose" : undefined}>
      <CourseJsonLd diplome={d} />

      {/* HERO — même structure grid que la home (accroche / formulaire / réassurance)
          pour conserver le trick de réordonnancement mobile (formulaire remonté). */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-8 pt-6 sm:pb-20 sm:pt-20 lg:bg-none lg:pb-36 lg:pt-16">
        {/* Décor réservé au grand écran : bandeau sombre dégradé + deux halos. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
          <div className="absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand-400/25 blur-3xl" />
          <div className="absolute -bottom-56 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-500/10 blur-3xl" />
        </div>
        <Container className="relative px-3 sm:px-6 lg:max-w-7xl lg:px-10">
          <div className="grid gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-16 lg:gap-y-8">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3 lg:justify-start lg:text-left">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-100 px-3 py-1.5 text-[0.8125rem] font-semibold text-brand-700 sm:px-4 sm:text-sm lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/25">
                  <BrandIcon name="shield" className="h-4 w-4 shrink-0" />
                  VAE {d.sigle}
                  <span className="hidden sm:inline">· {d.niveau}</span>
                </span>
                {/* Vert (et non ambre) : le badge du taux doit etre identique
                    a celui de la page d'accueil. Deux couleurs pour la meme
                    information donnent l'impression de deux sites differents
                    quand le visiteur passe de l'un a l'autre. */}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1.5 text-[0.8125rem] font-semibold text-emerald-800 sm:px-4 sm:text-sm lg:bg-emerald-400/15 lg:text-emerald-100 lg:ring-1 lg:ring-emerald-300/40">
                  <BrandIcon name="award" className="h-4 w-4 shrink-0" />
                  {RESULTATS.taux}{" "}
                  <span className="hidden sm:inline">{RESULTATS.tauxLabel} {RESULTATS.periode}</span>
                  <span className="sm:hidden">validés</span>
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-50 px-3 py-1.5 text-[0.8125rem] font-semibold text-brand-700 sm:px-4 sm:text-sm lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/25">
                  <BrandIcon name="wallet" className="h-4 w-4 shrink-0" />
                  Financement CPF
                </span>
                {/* « Partenaire » et jamais « Certifie » : la certification
                    Qualiopi et le referencement France VAE appartiennent a
                    l'organisme de formation partenaire, pas a ce site. Voir le
                    commentaire equivalent dans app/page.tsx. */}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[0.8125rem] font-semibold text-slate-700 ring-1 ring-slate-200 sm:px-4 sm:text-sm lg:bg-white/10 lg:text-white lg:ring-white/25">
                  <BrandIcon name="seal" className="h-4 w-4 shrink-0 text-brand-600 lg:text-brand-200" />
                  Partenaire Qualiopi
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[0.8125rem] font-semibold text-slate-700 ring-1 ring-slate-200 sm:px-4 sm:text-sm lg:bg-white/10 lg:text-white lg:ring-white/25">
                  <BrandIcon name="gov" className="h-4 w-4 shrink-0 text-brand-600 lg:text-brand-200" />
                  Partenaire France VAE
                </span>
              </div>
              {/* Même refonte que sur la page d'accueil (voir le commentaire
                  détaillé dans app/page.tsx). Ici `heroSuffixe` vaut « au DEES »,
                  « au DEAES »… : on le réutilise tel quel après « vers », ce qui
                  PAS DE DIPLÔME DANS LE TITRE, volontairement, alors même que
                  cette page en cible un. Une personne qui arrive sur /dees peut
                  très bien relever du DEAES ou du DEME : nommer le diplôme dans
                  le titre l'enfermerait dans un choix qu'elle n'est pas en
                  mesure de faire, et le rôle de l'appel est précisément de la
                  réorienter. « Le diplôme qui lui correspond » laisse la porte
                  ouverte tout en promettant le bon conseil.
                  `heroSuffixe` reste utilisé ailleurs sur la page.
                  NE PAS remettre `text-balance` : il coupe le titre au milieu
                  sur téléphone. */}
              <h1 className="mt-2.5 text-[clamp(1.6rem,6.6vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.03em] text-slate-900 sm:mt-6 lg:text-[3.4rem] lg:text-white">
                Commençons par regarder{" "}
                <span className="text-brand-600 lg:text-brand-200">votre parcours</span> et le diplôme qui lui
                correspond.
              </h1>
              <p className="mt-2.5 text-sm font-semibold text-slate-800 sm:mt-4 sm:text-lg lg:text-white">
                {d.heroIntro}
              </p>
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <PrediagnosticForm presetDiplome={d.sigle} />
              <p className="mt-3 text-center text-xs text-slate-500 sm:mt-4 lg:text-brand-200">
                Vos informations restent confidentielles — jamais revendues à des tiers.
              </p>
              {/* Le visiteur arrivé par un mot clé voisin (ex. « deass » ou « caferuis »
                  dans la campagne DEES) corrige le diplôme dans le menu déroulant
                  « Diplôme visé » en haut du formulaire (voir DiplomeSelect dans
                  PrediagnosticForm.tsx). L'ancien bloc « Vous cherchez un autre
                  diplôme ? » (components/AutresDiplomes.tsx) n'est plus affiché ;
                  le fichier reste en place pour pouvoir le remettre. Les pages
                  restent reliées entre elles par le menu et le pied de page. */}
            </div>

            <div>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg lg:text-brand-100">
                {d.heroParagraphe}
              </p>

              {d.noteReferentiel && (
                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 sm:mt-4 sm:p-4 sm:text-sm">
                  ℹ️ {d.noteReferentiel}
                </div>
              )}

              <div className="mt-4 rounded-2xl border border-slate-100 bg-white/60 p-4 sm:mt-6 sm:p-6 lg:border-white/15 lg:bg-white/10 lg:backdrop-blur-sm">
                <p className="text-sm font-semibold text-slate-900 lg:text-white">
                  👉 {d.publicIntro}
                </p>
                <ul className="mt-3 space-y-2">
                  {d.publicConcerne.map((p) => (
                    <li key={p.titre} className="flex items-start gap-2 text-sm text-slate-600 lg:text-brand-100">
                      <span className="mt-0.5 text-brand-600 lg:text-brand-300" aria-hidden>
                        ✓
                      </span>
                      <span>
                        <span className="font-semibold text-slate-800 lg:text-white">{p.titre}.</span>{" "}
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

      <StatsBar flottant />

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
                  <BrandIcon name="handshake" className="h-4 w-4 shrink-0" />
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
        <Container className="max-w-3xl lg:max-w-6xl">
          <div className="text-center">
            <Eyebrow>Débouchés</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              🚀 Où exercer avec un {d.sigle} ?
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              {d.debouchesIntro}
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:max-w-none lg:grid-cols-4">
            {d.debouches.map((deb) => (
              <div
                key={deb.texte}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-5 lg:flex-col lg:p-6"
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
    </div>
  );
}
