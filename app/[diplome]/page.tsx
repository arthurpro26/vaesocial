import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import CourseJsonLd from "@/components/CourseJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import GuidesSection from "@/components/sections/GuidesSection";
import ReferentielSection from "@/components/sections/ReferentielSection";
import Eyebrow from "@/components/Eyebrow";
import StickyCta from "@/components/StickyCta";
import TrustBand from "@/components/sections/TrustBand";
import MethodeSection from "@/components/sections/MethodeSection";
import FinancementSection from "@/components/sections/FinancementSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { Chip, DOTS, Ico, TINTS, cap } from "@/components/Kit";
import { RESULTATS, DIPLOMES, type DiplomeSlug } from "@/lib/site-data";
import BrandIcon from "@/components/BrandIcon";
import { DIPLOMES_DATA } from "@/lib/diplomes-data";
import { siteConfig } from "@/lib/site-config";

// Page diplôme dédiée (/dees, /deaes, /deeje, /deme, /auxiliaire-puericulture,
// /assistant-service-social, /caferuis) — pilotée par lib/diplomes-data.ts. Une
// seule base de code, un seul template : chaque page adapte son contenu au
// diplôme via les données, sans dupliquer de JSX.
// Les sections Méthode / Financement / Témoignages / Appel final / Bandeau de
// confiance sont strictement les mêmes composants que sur la home (voir
// components/sections/) : même design, mêmes données réelles, zéro copie.
//
// Design « institutionnel » du 13/10/2026 (voir app/globals.css pour l'exception
// du filet tricolore) : fond clair, cartes à pastilles, bandeau bleu marine.
//
// Formulaire : le diplôme est préréglé via `presetDiplome`, l'étape "Quel
// diplôme ?" est donc masquée pour réduire la friction du trafic Google Ads
// qui arrive déjà avec une intention précise. Le formulaire lui-même n'a pas
// été touché : seul son cadre (halo, ombre) a changé.

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

// Ce que l'on verra à l'écran pendant la visio de 40 minutes (faits donnés par Yoni le 12/10/2026).
const AU_PROGRAMME = [
  "Votre expérience, regardée ensemble",
  "Le diplôme qui lui correspond",
  "Ce que demande la démarche, sans surprise",
];

const ICONES_PUBLIC = ["diploma", "users", "building"] as const;

// Les textes de lib/diplomes-data.ts commencent parfois par un émoji (reste de l'ancien design) : on l'écarte à l'affichage.
const sansEmoji = (s: string) => s.replace(/^[\p{Extended_Pictographic}️\s]+/u, "");

// Icône (décorative) d'une carte débouché, choisie d'après les mots du texte.
function iconeDebouche(texte: string): "shield" | "users" | "gov" | "building" | "handshake" {
  if (/protection de l'enfance|prévention|PMI/i.test(texte)) return "shield";
  if (/crèche|petite enfance|maternité|pédiatrie|enfants|école/i.test(texte)) return "users";
  if (/collectivit|mairie|fonction publique|département|sécurité sociale|missions locales/i.test(texte)) return "gov";
  if (/handicap|EHPAD|établissement|structure|hébergement|hôpita|santé/i.test(texte)) return "building";
  return "handshake";
}

// « Le DEES ouvre … employeurs — et des parcours … : » devient une phrase courte : on garde ce qui précède le tiret.
function introCourte(s: string) {
  return `${s.split(" — ")[0].replace(/[\s:.]+$/, "")}.`;
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
    // sections partagées (Bandeau de confiance, Méthode, Financement,
    // Témoignages, CTA final) sans qu'aucune d'elles ne soit dupliquée ni
    // modifiée. Sans `theme`, la valeur est `undefined` et la page garde le
    // bleu de marque. Le filet tricolore, lui, garde son bleu (--trico-blue).
    <div className={d.theme === "rose" ? "theme-rose" : undefined}>
      <CourseJsonLd diplome={d} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: `VAE ${d.sigle}`, path: `/${d.slug}` },
        ]}
      />

      {/* HERO — trois blocs (accroche / formulaire / visio) pour que le formulaire
          remonte juste après le titre sur mobile : l'ordre DOM = l'ordre d'affichage en
          une colonne, et la grille reconstitue les deux colonnes à partir de lg. */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-brand-50 via-white to-white pb-10 pt-6 sm:pb-20 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-24 hidden h-56 w-72 opacity-70 lg:block" style={DOTS} />
        <Container className="relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-x-14 lg:gap-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-900/10 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                  VAE {d.sigle}
                </span>
                {/* Vert : le badge du taux doit être identique à celui de la page d'accueil. */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-900/10 sm:text-sm">
                  <BrandIcon name="award" className="h-4 w-4 shrink-0" />
                  {RESULTATS.taux}{" "}
                  <span className="hidden sm:inline">
                    {RESULTATS.tauxLabel} {RESULTATS.periode}
                  </span>
                  <span className="sm:hidden">validés</span>
                </span>
                <span className="hidden items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-900/10 sm:inline-flex sm:text-sm">
                  <BrandIcon name="users" className="h-4 w-4 shrink-0" />
                  {RESULTATS.volume} {RESULTATS.volumeLabel}
                </span>
              </div>
              {/* TITRE (H1) — modifié le 19/10/2026 (plan SEO, go d'Arthur).
                  Avant : le même H1 sur l'accueil et les 8 pages diplôme (« Commençons par
                  regarder votre parcours… »), ce que Google peut lire comme des pages en
                  double (20 pages sur 22 « explorées, non indexées » au 19/10).
                  Désormais chaque page diplôme a son propre H1, qui nomme le métier.
                  /dees aussi (décision d'Arthur le 19/10 au soir : même titre que les autres
                  pages, le test Ads continue ; date notée dans le journal du projet).
                  Le visiteur qui relève d'un autre diplôme reste réorienté par le menu
                  « Diplôme visé » du formulaire et par la visio.
                  NE PAS remettre `text-balance` : il coupe le titre au milieu sur téléphone. */}
              <h1 className="mt-4 text-[clamp(1.9rem,7.4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-900 sm:mt-6">
                VAE {DIPLOMES.find((x) => x.slug === d.slug)?.nom ?? d.sigle} :{" "}
                <span className="text-brand-500 underline decoration-accent-500/70 decoration-[3px] underline-offset-[7px]">
                  votre expérience
                </span>{" "}
                peut valoir le {d.sigle}.
              </h1>
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                {sansEmoji(d.heroIntro)}
              </p>
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <div className="relative">
                <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-accent-100/60 blur-xl" />
                <div className="rounded-3xl bg-white p-1.5 shadow-[0_30px_70px_-30px_rgba(14,31,58,0.45)] ring-1 ring-brand-900/10 sm:p-2">
                  <PrediagnosticForm key={d.sigle} presetDiplome={d.sigle} />
                </div>
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-600 sm:mt-4">
                <BrandIcon name="lock" className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                Vos informations restent confidentielles, jamais revendues à des tiers.
              </p>
              {/* Carte « Ensuite : votre visio » déplacée ici (sous le formulaire) le 19/10/2026,
                  demande d'Arthur : elle était sous le titre, dans la colonne de gauche. */}
              <div className="mt-5 sm:mt-6">
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-34px_rgba(14,31,58,0.45)] ring-1 ring-brand-900/10">
                <div className="flex items-center gap-1.5 border-b border-brand-900/10 bg-brand-50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="ml-3 text-xs font-semibold text-brand-700">Ensuite : votre visio · 40 minutes</span>
                </div>
                <div className="p-5 sm:p-6">
                  <ul className="space-y-3">
                    {AU_PROGRAMME.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-[0.95rem] font-medium leading-snug text-brand-900">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600">
                          <Ico name="check" className="h-3.5 w-3.5" />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl bg-brand-50 px-4 py-2.5 text-center text-sm text-brand-800">
                    <span className="font-semibold">Gratuite</span> · aucune inscription sans cet échange
                  </p>
                  {/* Ajouté le 19/10/2026 (demande d'Arthur) : des candidats préfèrent écrire
                      avant de remplir le formulaire. Objet pré-rempli avec le sigle pour
                      retrouver la page d'origine dans la boîte mail. */}
                  <p className="mt-4 text-center text-sm leading-relaxed text-slate-700">
                    Une question avant de remplir le formulaire ?{" "}
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Question VAE ${d.sigle}`)}`}
                      className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                    >
                      Écrivez-nous : {siteConfig.email}
                    </a>
                    <span className="block text-xs text-slate-500">Réponse personnelle, sous 24 h en semaine.</span>
                  </p>
                </div>
              </div>
              </div>
              {/* Le visiteur arrivé par un mot clé voisin (ex. « deass » ou « caferuis »
                  dans la campagne DEES) choisit son diplôme dans le menu déroulant
                  « Diplôme visé » en haut du formulaire : cela ouvre la page de ce
                  diplôme (voir DiplomeSelect dans PrediagnosticForm.tsx). La `key`
                  ci-dessus remonte le formulaire à chaque changement de page. */}
            </div>

            <div>
              {d.noteReferentiel && (
                <p className="mt-4 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ring-1 ring-amber-900/10">
                  <Ico name="info" className="mt-0.5 h-5 w-5 flex-none text-amber-600" />
                  <span>{d.noteReferentiel}</span>
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* PUBLIC CONCERNÉ — détaillé, spécifique au diplôme */}
      <section className="relative bg-white py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Pour qui ?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
              Êtes-vous concerné·e par le {d.sigle} ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{d.heroParagraphe}</p>
            <p className="mt-3 text-sm font-semibold text-brand-800 sm:text-base">{d.publicIntro}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {d.publicConcerne.map((p, i) => {
              const t = TINTS[i % TINTS.length];
              return (
                <div
                  key={p.titre}
                  className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10 sm:p-7"
                >
                  <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.tile}`}>
                      <BrandIcon name={ICONES_PUBLIC[i % ICONES_PUBLIC.length]} className="h-6 w-6" />
                    </span>
                    <span className="text-4xl font-bold text-brand-100">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-900">{p.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.texte}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(d.publicChips[i] ?? []).map((c) => (
                      <Chip key={c} className={t.chip}>
                        {c}
                      </Chip>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DÉBOUCHÉS — spécifique au diplôme, apporte une vraie valeur ajoutée SEO */}
      <section className="relative overflow-hidden bg-brand-50/70 py-12 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border-[28px] border-brand-100/70" />
        <div aria-hidden className="pointer-events-none absolute right-6 top-8 hidden h-40 w-56 opacity-70 sm:block" style={DOTS} />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <Eyebrow>Débouchés</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
              Où exercer avec un {d.sigle} ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{introCourte(d.debouchesIntro)}</p>
          </div>
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
            {d.debouches.map((deb, i) => {
              const [titreBrut] = deb.texte.split(" — ");
              const [head, tail] = titreBrut.split(" : ");
              const chips = tail
                ? tail
                    .replace(/\.$/, "")
                    .split(", ")
                    .filter((c) => c.length <= 22)
                    .map(cap)
                : [];
              const t = TINTS[i % TINTS.length];
              return (
                <div
                  key={deb.texte}
                  className="relative flex flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-brand-900/10 sm:p-6"
                >
                  <div aria-hidden className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-gradient-to-br from-brand-50 to-transparent" />
                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${t.tile}`}>
                    <BrandIcon name={iconeDebouche(deb.texte)} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-4 text-base font-bold leading-snug text-brand-900 sm:mt-5 sm:text-lg">{head}</h3>
                  {chips.length > 0 && (
                    <div className="relative mt-auto flex flex-wrap gap-1.5 pt-5">
                      {chips.map((c) => (
                        <Chip key={c} className={t.chip}>
                          {c}
                        </Chip>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="relative mx-auto mt-8 max-w-xl text-center text-sm font-semibold text-brand-800 sm:mt-10">
            {sansEmoji(d.debouchesConclusion)}
          </p>
        </Container>
      </section>

      <MethodeSection />
      <FinancementSection sigle={d.sigle} />
      <TemoignagesSection highlight={d.slug} />

      {d.referentiel && <ReferentielSection referentiel={d.referentiel} sigle={d.sigle} />}

      {/* FAQ — spécifique au diplôme */}
      <section id="faq" className="scroll-mt-16 bg-white py-12 sm:py-20">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
              Vos questions sur la VAE {d.sigle}
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">Toutes les réponses pour démarrer en confiance.</p>
          </div>
          <div className="mt-8 sm:mt-10">
            <FaqAccordion items={d.faq} />
          </div>
          <FaqJsonLd items={d.faq} />
        </Container>
      </section>

      <CtaFinalSection titre={d.ctaTitre} />
      <GuidesSection diplome={d.slug} sigle={d.sigle} />

      {/* Bouton collant (téléphone seulement) : il disparaît dès que le formulaire, l'appel final ou le pied de page sont à l'écran. */}
      <StickyCta
        href="#prediagnostic-form"
        label="Mon prédiagnostic gratuit"
        hideWhenVisible={["#prediagnostic-form", "#cta-final", "footer"]}
      />
    </div>
  );
}
