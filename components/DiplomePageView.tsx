import Link from "next/link";
import type { DiplomeData } from "@/lib/diplomes-data";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import CourseJsonLd from "@/components/CourseJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import GuidesSection from "@/components/sections/GuidesSection";
import ReferentielSection from "@/components/sections/ReferentielSection";
import EnPratiqueSection from "@/components/sections/EnPratiqueSection";
import Eyebrow from "@/components/Eyebrow";
import StickyCta from "@/components/StickyCta";
import TrustBand from "@/components/sections/TrustBand";
import MethodeSection from "@/components/sections/MethodeSection";
import LogoCards from "@/components/sections/LogoCards";
import StatsRow from "@/components/sections/StatsRow";
import ParcoursCard from "@/components/sections/ParcoursCard";
import FinancementSection from "@/components/sections/FinancementSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { Chip, Ico, TINTS, cap } from "@/components/Kit";
import { DIPLOMES, FINANCEMENTS } from "@/lib/site-data";
import BrandIcon from "@/components/BrandIcon";
import { siteConfig } from "@/lib/site-config";

// Corps des pages diplôme (déplacé ici le 23/11/2026 depuis app/[diplome]/page.tsx,
// sans changement d'affichage) pour être réutilisé par les pages métier qui visent
// un diplôme existant avec une autre porte d'entrée (ex. /vae-aesh → DEAES).

// Repères du haut de page (28/10/2026), affichés depuis le 23/11/2026 dans l'encadré « En bref »
// ci-dessous. Prix = CGV (1 800–3 500 €, DEES et DEME seulement, décision d'Arthur du 20/10) ;
// « 6 à 8 mois » = durée de l'accompagnement (ParcoursCard) ; visio = AU_PROGRAMME.
// Présentation en lignes « intitulé / valeur », comme une fiche. Aucun fait nouveau : diplôme
// et niveau = données de la page ; démarche = ParcoursCard ; agents publics = EnPratiqueSection.
function enBref(d: DiplomeData): { titre: string; texte: string }[] {
  return [
    // « Pour qui » = les mots-repères déjà affichés dans « Êtes-vous concerné·e » (publicChips).
    { titre: "Pour qui", texte: d.publicChips.flat().slice(0, 6).join(", ") },
    { titre: "Démarche", texte: "Livret 1, livret 2, entretien avec le jury" },
    { titre: "Durée", texte: "6 à 8 mois d'accompagnement, à distance" },
    ...(d.sigle === "DEES" || d.sigle === "DEME" ? [{ titre: "Prix", texte: "1\u00a0800 à 3\u00a0500\u00a0€, finançable CPF" }] : []),
    { titre: "Avant tout", texte: "Visio gratuite avant toute inscription" },
    { titre: "Agents publics", texte: "Démarche et financement via votre employeur" },
  ];
}

function EnBref({ d, className = "" }: { d: DiplomeData; className?: string }) {
  return (
    <dl
      aria-label="En bref"
      className={`grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 rounded-r-xl border-l-4 border-brand-600 bg-brand-50 px-5 py-4 text-sm sm:text-[0.95rem] ${className}`}
    >
      <div className="col-span-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand-600">En bref</div>
      {enBref(d).map((r) => (
        <div key={r.titre} className="contents">
          <dt className="font-semibold text-brand-900">{r.titre}</dt>
          <dd className="text-slate-700">{r.texte}</dd>
        </div>
      ))}
    </dl>
  );
}

// Ce que l'on verra à l'écran pendant la visio de 40 minutes (faits donnés par Yoni le 12/10/2026).
const AU_PROGRAMME = [
  "Votre expérience, regardée ensemble",
  "Le diplôme qui lui correspond",
  "Ce que demande la démarche, sans surprise",
];

// Repris du volet « Fonction publique » de components/sections/FinancementSection.tsx.
const FINANCEMENTS_PUBLIC = [
  { titre: "Votre employeur", texte: "Pour un AESH, l'Éducation nationale : sur son plan de formation." },
  { titre: "Votre dossier", texte: "Monté avec vous pour votre service RH." },
  { titre: "Votre congé VAE", texte: "24 h, traitement maintenu." },
  { titre: "Sans engagement", texte: "Aucune inscription sans la visio gratuite." },
];

const ICONES_PUBLIC = ["diploma", "users", "building"] as const;

// Coque commune des trois cartes du haut de page sur ordinateur (18/11/2026) : mêmes
// classes que components/sections/ParcoursCard.tsx, pour trois cartes vraiment identiques.
// 23/11/2026 (style « fiche », maquette 6) : plus d'ombre portée, un simple filet.
const CARTE_HERO = "flex h-full flex-col rounded-xl bg-white p-6 ring-1 ring-brand-900/10 xl:p-7";

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

export default function DiplomePageView({ d }: { d: DiplomeData }) {
  // Adresse de la page : /{slug} par défaut, ou `d.path` pour une page métier (/vae-aesh).
  const chemin = d.path ?? `/${d.slug}`;

  return (
    // `theme-rose` (voir app/globals.css) redéfinit les variables CSS de la
    // palette pour toute la page : le rose se propage automatiquement aux
    // sections partagées (Bandeau de confiance, Méthode, Financement,
    // Témoignages, CTA final) sans qu'aucune d'elles ne soit dupliquée ni
    // modifiée. Sans `theme`, la valeur est `undefined` et la page garde le
    // bleu de marque. Le filet tricolore, lui, garde son bleu (--trico-blue).
    <div className={d.theme === "rose" ? "theme-rose" : undefined}>
      <CourseJsonLd diplome={d} chemin={chemin} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: d.h1 ? `VAE ${d.h1.metier}` : `VAE ${d.sigle}`, path: chemin },
        ]}
      />

      {/* HERO — trois blocs (accroche / formulaire / visio) pour que le formulaire
          remonte juste après le titre sur mobile : l'ordre DOM = l'ordre d'affichage en
          une colonne, et la grille reconstitue les deux colonnes à partir de lg. */}
      {/* 23/11/2026 (demande d'Arthur, 22 h 59) : haut de page « fiche administrative » comme la
          maquette 6 — fond blanc, pas de halo ni de trame de points, fil d'Ariane visible, titre
          court. Tout le contenu (En bref, pastilles, chiffres, formulaire) est conservé. */}
      <section className="relative overflow-x-clip border-b border-brand-900/10 bg-white pb-10 pt-5 sm:pb-16 sm:pt-8">
        <Container className="relative px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-5 text-xs text-slate-500 sm:mb-7 sm:text-[0.8rem]">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link href="/" className="hover:text-brand-700 hover:underline">Accueil</Link></li>
              <li aria-hidden>›</li>
              <li><Link href="/#diplomes" className="hover:text-brand-700 hover:underline">Diplômes</Link></li>
              <li aria-hidden>›</li>
              <li className="font-medium text-brand-800">VAE {d.h1?.metier ?? DIPLOMES.find((x) => x.slug === d.slug)?.nom ?? d.sigle}</li>
            </ol>
          </nav>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-x-14 lg:gap-y-12">
            {/* Ordinateur : la colonne de gauche prend toute la hauteur du formulaire
                (grid-rows 1fr + self-stretch) et la carte Financement se cale en bas
                (mt-auto), quelle que soit la hauteur de l'étape affichée dans le
                formulaire. Avant (20/10/2026), un blanc restait sous le déroulé. */}
            <div>
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
              {/* Pastille ajoutée le 21/10/2026 (demande d'Arthur, même mention que sur la pub Meta) :
                  seulement pour les diplômes qui changent de référentiel à la rentrée de septembre 2026
                  (arrêtés du 6 octobre 2025 : DEES, DEEJE, DEASS, DEETS) — voir `nouveauReferentiel`. */}
              {/* 23/11/2026 (maquette 6) : étiquette « Diplôme d'État · niveau », comme l'en-tête
                  d'une fiche officielle. Le niveau vient de la page (lib/diplomes-data.ts). */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700 sm:text-[0.8rem]">
                  Diplôme d&apos;État · {d.niveau}
                </span>
                {d.nouveauReferentiel && (
                  <a
                    href="#referentiel"
                    className="inline-flex items-center gap-2 rounded bg-brand-700 px-2.5 py-1 text-xs font-bold text-white transition hover:bg-brand-800 sm:text-[0.8rem]"
                  >
                    <Ico name="spark" className="h-4 w-4" />
                    Nouveau référentiel · septembre 2026
                  </a>
                )}
              </div>
              {/* 23/11/2026 : titre court « VAE métier (SIGLE) », sans surlignage (maquette 6).
                  L'accroche « votre expérience peut valoir le … » reste dans le texte d'intro. */}
              <h1 className="text-[clamp(1.9rem,7.4vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.03em] text-brand-900">
                VAE {d.h1?.metier ?? DIPLOMES.find((x) => x.slug === d.slug)?.nom ?? d.sigle} ({d.sigle})
              </h1>
              {/* 23/11/2026 (maquette 6) : la référence du texte officiel sous le titre, quand la
                  page a une section référentiel (DEES, DEME, DEAP, DEAS, DEAES…). */}
              {d.referentiel && (
                <p className="mt-4 text-[0.8rem] leading-snug text-slate-500 sm:text-sm">
                  <span className="font-semibold text-brand-700">Référentiel officiel :</span> {d.referentiel.sourceLabel}
                </p>
              )}
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                {sansEmoji(d.heroIntro)}
              </p>
              {/* Trois repères concrets (28/10/2026, étude concurrentielle, go d'Arthur) : les
                  concurrents affichent leur audit offert et leur prix (certivae : 1 750–4 500 €).
                  Prix = CGV (1 800–3 500 €) ; durée = ParcoursCard ; visio = AU_PROGRAMME.
                  Ordinateur seulement ici ; sur téléphone ils sont SOUS le formulaire, pour ne
                  pas repousser le formulaire (règle de ce fichier : rien entre l'intro et le
                  formulaire sur téléphone). */}
              {/* 23/11/2026 : les repères deviennent l'encadré « En bref » (maquette 6). */}
              <EnBref d={d} className="mt-6 hidden lg:grid" />
              {/* Pastilles des logos officiels (demande d'Arthur du 23/11 : mises en valeur, dans
                  leur « enclos ») et les deux chiffres, sur une même ligne comme sur la maquette 6 ;
                  centrés sur téléphone, à gauche sur ordinateur. */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                <LogoCards variant="flat" className="justify-center" />
                <StatsRow compact />
              </div>
              {/* 18/11/2026 (Arthur : version ordinateur « mal agencée, des infos qui surgissent
                  de partout ») : la colonne de gauche ne porte plus que l'accroche. Les cartes
                  « 5 étapes » et « Financement » qui s'empilaient ici (23/10 et 20/10), et la
                  carte « visio » qui était sous le formulaire (19/10), sont réunies juste
                  dessous : un bandeau des 5 étapes sur toute la largeur, puis deux cartes de même
                  hauteur (financement, visio), toutes avec la même coque.
                  Rien n'est supprimé. Téléphone : inchangé. */}
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24">
              <div className="relative">
                <div className="form-lisible rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-brand-900/15 sm:p-2">
                  <PrediagnosticForm key={d.sigle} presetDiplome={d.sigle} />
                </div>
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-600 sm:mt-4">
                <BrandIcon name="lock" className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                Vos informations restent confidentielles, jamais revendues à des tiers.
              </p>
              {/* Téléphone seulement : les repères du haut de page (voir colonne de gauche). */}
              <EnBref d={d} className="mt-5 lg:hidden" />
              {/* Carte « Ensuite : votre visio » déplacée ici (sous le formulaire) le 19/10/2026,
                  demande d'Arthur : elle était sous le titre, dans la colonne de gauche. */}
              <div className="mt-5 sm:mt-6 lg:hidden">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-brand-900/10">
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

            {/* ORDINATEUR SEULEMENT — sous l'accroche et le formulaire : le parcours en bandeau
                (5 étapes côte à côte), puis le financement et la visio. Même coque
                (CARTE_HERO), même en-tête (titre + précision grise). Textes déjà publiés ailleurs sur le
                site (ETAPES, FINANCEMENTS, AU_PROGRAMME) : rien de nouveau. */}
            <div className="hidden lg:col-span-2 lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-stretch lg:gap-6">
              <ParcoursCard sigle={d.sigle} horizontal className="lg:col-span-2" />

              <section aria-labelledby="hero-financement-titre" className={CARTE_HERO}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 id="hero-financement-titre" className="text-lg font-bold tracking-[-0.01em] text-brand-900">
                    Votre financement
                  </h2>
                  <p className="text-sm font-medium text-slate-500">Identifié pendant la visio</p>
                </div>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                  {/* Page /vae-aesh (financementPublic) : les 4 financements du privé (CPF, OPCO…) ne
                      concernent pas un AESH ; on montre les points du volet public de la section
                      Financement (mêmes textes, déjà publiés). */}
                  {(d.financementPublic ? FINANCEMENTS_PUBLIC : FINANCEMENTS).map((f) => (
                    <li key={f.titre} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <Ico name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[1.02rem] font-semibold leading-snug text-brand-900">{f.titre}</span>
                        <span className="mt-0.5 block text-[0.95rem] leading-snug text-slate-600">{f.texte}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-5">
                  <a
                    href="#financement"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                  >
                    Voir les financements
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#financement-public"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                  >
                    Agent public ? Voir qui finance
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </section>

              <section aria-labelledby="hero-visio-titre" className={CARTE_HERO}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 id="hero-visio-titre" className="text-lg font-bold tracking-[-0.01em] text-brand-900">
                    Ensuite : votre visio
                  </h2>
                  <p className="text-sm font-medium text-slate-500">40 minutes · gratuite</p>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {AU_PROGRAMME.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[1.02rem] font-semibold leading-snug text-brand-900">
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
                <p className="mt-auto pt-5 text-sm leading-relaxed text-slate-700">
                  Une question avant de remplir le formulaire ?{" "}
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Question VAE ${d.sigle}`)}`}
                    className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                  >
                    Écrivez-nous : {siteConfig.email}
                  </a>
                  <span className="block text-xs text-slate-500">Réponse personnelle, sous 24 h en semaine.</span>
                </p>
              </section>
            </div>

            <div className="lg:col-span-2">
              {d.noteReferentiel && (
                <p className="mt-4 flex gap-3 rounded-2xl bg-brand-50 p-4 text-sm leading-relaxed text-brand-900 ring-1 ring-brand-900/10">
                  <Ico name="info" className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                  <span>{d.noteReferentiel}</span>
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* ORDRE DES SECTIONS (décision d'Arthur, 20/10/2026) : quand le diplôme a un
          référentiel détaillé (DEES, DEETS), le visiteur doit comprendre d'abord les blocs
          de compétences, puis le déroulé jusqu'au jury, puis le financement. La section
          « Pour qui ? » est alors retirée (elle redit l'intro du haut de page). Les autres
          diplômes gardent l'ordre historique. */}
      {d.referentiel && (
        <>
          <ReferentielSection referentiel={d.referentiel} sigle={d.sigle} />
          {/* 17/11/2026 (lot 1 SEO) : conditions, livrets, jury, agents publics — texte propre au diplôme. */}
          {d.enPratique && <EnPratiqueSection enPratique={d.enPratique} sigle={d.sigle} />}
          <MethodeSection />
          <FinancementSection sigle={d.sigle} voletInitial={d.financementPublic ? "public" : "prive"} />
        </>
      )}

      {/* PUBLIC CONCERNÉ — détaillé, spécifique au diplôme (pages sans référentiel détaillé) */}
      {!d.referentiel && (
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
                  className="group relative overflow-hidden rounded-xl bg-white p-6 ring-1 ring-brand-900/10"
                >
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
      )}

      {/* DÉBOUCHÉS — spécifique au diplôme, apporte une vraie valeur ajoutée SEO.
          Fond blanc quand la section Financement (teintée) la précède. */}
      <section className={`relative overflow-hidden py-12 sm:py-20 ${d.referentiel ? "bg-white" : "bg-brand-50/70"}`}>
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <Eyebrow>Débouchés</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
              Où exercer avec un {d.sigle} ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{introCourte(d.debouchesIntro)}</p>
          </div>
          {/* 19/11/2026 : photo d'illustration du métier (champ `photoMetier`, facultatif). Avec photo :
              la photo encadrée à gauche et les cartes en 2 × 2 à droite (ordinateur), la photo au-dessus
              des cartes (téléphone). Sans photo : la grille d'origine, inchangée. */}
          <div
            className={
              d.photoMetier
                ? "relative mt-8 grid items-center gap-8 sm:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
                : "relative mt-8 sm:mt-12"
            }
          >
            {d.photoMetier && (
              <figure className="mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${d.photoMetier.base}-1000.webp`}
                    srcSet={`${d.photoMetier.base}-640.webp 640w, ${d.photoMetier.base}-1000.webp 1000w`}
                    sizes="(min-width: 1024px) 480px, (min-width: 480px) 448px, 90vw"
                    width={1000}
                    height={1000}
                    alt={d.photoMetier.alt}
                    loading="lazy"
                    decoding="async"
                    className="relative aspect-[4/3] w-full rounded-xl object-cover object-[50%_20%] ring-1 ring-brand-900/10 lg:aspect-square"
                  />
                </div>
                <figcaption className="mt-5 text-center text-xs text-slate-500 lg:text-left">Image d&apos;illustration</figcaption>
              </figure>
            )}
          <div className={`grid grid-cols-2 gap-3 sm:gap-5 ${d.photoMetier ? "lg:auto-rows-fr" : "lg:grid-cols-4"}`}>
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
                  className="relative flex flex-col overflow-hidden rounded-xl bg-white p-4 ring-1 ring-brand-900/10 sm:p-6"
                >
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
          </div>
          <p className="relative mx-auto mt-8 max-w-xl text-center text-sm font-semibold text-brand-800 sm:mt-10">
            {sansEmoji(d.debouchesConclusion)}
          </p>
        </Container>
      </section>

      {!d.referentiel && (
        <>
          <MethodeSection />
          <FinancementSection sigle={d.sigle} voletInitial={d.financementPublic ? "public" : "prive"} />
        </>
      )}
      <TemoignagesSection highlight={d.slug} fond={d.referentiel ? "teinte" : "blanc"} />

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
