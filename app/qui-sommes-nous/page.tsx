import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import BrandIcon from "@/components/BrandIcon";
import Eyebrow from "@/components/Eyebrow";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import StickyCta from "@/components/StickyCta";
import TrustBand from "@/components/sections/TrustBand";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { DOTS, Ico, TINTS } from "@/components/Kit";
import { siteConfig } from "@/lib/site-config";
import { RESULTATS } from "@/lib/site-data";

// Page de confiance (E-E-A-T) : dit qui est derrière le site. Design « institutionnel » du 13/10/2026.
//
// D'OÙ VIENNENT LES FAITS (ne rien ajouter sans l'accord de Yoni) :
//  - donnés par Yoni le 12/10/2026 : 8 à 15 personnes aidées chaque jour, visio de
//    40 minutes avant toute inscription, équipe recrutée dans le social, expertise
//    pour repérer qui a besoin d'un DEAES, DEES, DEASS, DEME…, et son mot
//    (« issu du social, grandi en famille d'accueil ») ;
//  - déjà publiés sur le site : 97 % de dossiers validés et 400+ VAE accompagnées
//    depuis 2024 (RESULTATS), les témoignages (TemoignagesSection), la mention
//    « Partenaire Qualiopi / France VAE » (voir app/page.tsx pour la raison du mot
//    « Partenaire »).
// AUCUNE PHOTO, par choix de Yoni : l'avatar du mot d'Arthur est un monogramme.
// Aucun formulaire ici : les boutons pointent vers /prediagnostic, rien d'autre.

export const metadata: Metadata = {
  title: "Qui sommes-nous ? Une équipe issue du social",
  description:
    "VAESocial accompagne les professionnels du social vers leur diplôme par la VAE. Une équipe issue du secteur, un échange de 40 minutes avant toute inscription.",
  alternates: { canonical: "/qui-sommes-nous" },
};

const CTA_HREF = "/prediagnostic";
const CTA_LABEL = "Demander mon prédiagnostic gratuit";
// Éléments qui font disparaître le bouton collant mobile (voir StickyCta).
const STICKY_HIDE = ["#cta-final", "footer"];

const CHIFFRES = [
  {
    icon: "users" as const,
    valeur: "8 à 15",
    texte: "personnes aidées chaque jour à comprendre ce qu'est une VAE.",
  },
  {
    icon: "screen" as const,
    valeur: "40 min",
    texte: "de visio avec un·e accompagnateur·rice, avant toute inscription.",
  },
  {
    icon: "award" as const,
    valeur: RESULTATS.taux,
    texte: `${RESULTATS.tauxLabel} ${RESULTATS.periode}.`,
  },
  {
    icon: "diploma" as const,
    valeur: RESULTATS.volume,
    texte: `${RESULTATS.volumeLabel} ${RESULTATS.periode}.`,
  },
];

const PARCOURS = [
  {
    titre: "Le prédiagnostic",
    texte: "Trois minutes de questions en ligne pour comprendre votre parcours et votre situation.",
  },
  {
    titre: "Un premier contact",
    texte: "Un expert du secteur social vous rappelle et répond à vos premières questions.",
  },
  {
    titre: "40 minutes en visio",
    texte:
      "Avec un·e accompagnateur·rice : on regarde votre expérience et on repère le diplôme qui lui correspond.",
  },
  {
    titre: "Inscription, si c'est pertinent",
    texte:
      "Personne n'est inscrit sans cet échange. Si la VAE n'est pas adaptée, nous vous le disons honnêtement.",
  },
];

const EQUIPE = [
  {
    icon: "users" as const,
    titre: "Recrutés dans le social",
    texte:
      "Nos accompagnateurs et accompagnatrices sont eux-mêmes issus du secteur social.",
  },
  {
    icon: "building" as const,
    titre: "Le quotidien en tête",
    texte:
      "Éducateurs spécialisés, internats, assistantes sociales : ils connaissent vraiment la réalité de votre terrain.",
  },
  {
    icon: "diploma" as const,
    titre: "Le bon diplôme dès le départ",
    texte:
      "Notre expertise du secteur permet de repérer qui a besoin d'un DEAES, d'un DEES, d'un DEASS, d'un DEME… avant de s'engager dans la mauvaise voie.",
  },
];

const FAISONS = [
  "Vous expliquer ce qu'est une VAE, et si elle correspond à votre situation.",
  "Repérer le diplôme qui correspond à votre expérience.",
  "Vous aider à structurer votre dossier et à préparer votre passage devant le jury.",
  "Vous dire honnêtement si la VAE n'est pas adaptée à votre cas.",
];

const NE_FAISONS_PAS = [
  "Délivrer le diplôme : c'est le jury de VAE qui décide, au vu de votre dossier et de votre entretien.",
  "Écrire votre dossier à votre place : il décrit votre expérience, c'est à vous de le rédiger.",
  "Inscrire quelqu'un sans échange préalable en visio.",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qui vous accompagne concrètement ?",
    reponse:
      "Des accompagnateurs et accompagnatrices recrutés parmi des personnes issues du secteur social. Elles connaissent le quotidien des éducateurs spécialisés, des internats, des assistantes sociales : c'est ce qui rend les échanges concrets, et pas théoriques.",
  },
  {
    question: "Y a-t-il un échange avant de s'inscrire ?",
    reponse:
      "Oui, toujours. Nous n'inscrivons personne à un accompagnement sans un échange préalable en visio de 40 minutes avec un·e accompagnateur·rice. Il sert à vérifier deux choses : que la VAE est pertinente dans votre situation, et que vous vous sentez à l'aise avec la démarche.",
  },
  {
    question: "Écrivez-vous le dossier à ma place ?",
    reponse:
      "Non. Le dossier décrit votre expérience : c'est à vous de le rédiger. Nous vous aidons à le structurer et à le préparer, puis à préparer votre passage devant le jury. Et le diplôme, lui, est délivré par le jury de VAE.",
  },
  {
    question: "Et si la VAE n'est pas faite pour moi ?",
    reponse:
      "Nous vous le dirons honnêtement. C'est justement le rôle du premier échange : vérifier que la démarche est pertinente pour vous avant tout engagement.",
  },
];


export default function QuiSommesNousPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Qui sommes-nous ?",
    url: `${siteConfig.url}/qui-sommes-nous`,
    about: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-brand-50 via-white to-white pb-12 pt-8 sm:pb-20 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-24 hidden h-56 w-72 opacity-70 lg:block" style={DOTS} />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Eyebrow left>Qui sommes-nous ?</Eyebrow>
              <h1 className="mt-5 text-[clamp(2rem,7.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-900">
                Une équipe issue du social, au service des <span className="text-brand-500 underline decoration-accent-500/70 decoration-[3px] underline-offset-[7px]">professionnels du social</span>
              </h1>
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                VAESocial accompagne les professionnels du secteur social et médico-social qui souhaitent obtenir leur diplôme d&apos;État par la Validation des Acquis de l&apos;Expérience (VAE).
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={CTA_HREF} className="inline-flex items-center justify-center rounded-full bg-accent-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent-600/25 transition hover:-translate-y-0.5 hover:bg-accent-700 sm:text-sm">{CTA_LABEL}</Link>
                <Link href="/#diplomes" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-900/15 transition hover:bg-brand-50">Voir les diplômes</Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-3 sm:gap-4">
              {CHIFFRES.map((c, i) => {
                const t = TINTS[i];
                return (
                  <div key={c.texte} className={`relative overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-brand-900/10 sm:p-6 ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}>
                    <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${t.tile}`}><BrandIcon name={c.icon} className="h-5 w-5" /></span>
                    <dt className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:mt-4 sm:text-4xl">{c.valeur}</dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-snug text-slate-700 sm:text-sm">{c.texte}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* LE MOT D'ARTHUR — sans photo : un monogramme */}
      <section className="bg-white py-12 sm:py-20">
        <Container className="max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-50 p-6 ring-1 ring-brand-900/10 sm:p-14">
            <svg aria-hidden viewBox="0 0 64 64" fill="currentColor" className="pointer-events-none absolute right-5 top-5 h-16 w-16 text-brand-100 sm:right-12 sm:top-10 sm:h-28 sm:w-28"><path d="M12 40c0-10 5-18 15-22l2.5 4.5C24 25 21.5 28.5 21 33h9v19H12V40zm26 0c0-10 5-18 15-22l2.5 4.5C50 25 47.5 28.5 47 33h9v19H38V40z" /></svg>
            <div className="relative">
              <Eyebrow left>Pourquoi on fait ça</Eyebrow>
              <figure>
                <blockquote className="mt-5 max-w-3xl text-[1.35rem] font-semibold leading-snug tracking-tight text-brand-900 sm:mt-6 sm:text-4xl sm:leading-[1.2]">
                  « Je suis moi-même issu du social : j&apos;ai grandi en famille d&apos;accueil. Le quotidien des éducateurs spécialisés, des internats et des assistantes sociales, je le connais vraiment. »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 sm:mt-8">
                  <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-500 text-lg font-bold text-white shadow-md shadow-brand-700/30">A</span>
                  <span>
                    <span className="block text-base font-bold text-brand-900">Arthur</span>
                    <span className="block text-sm text-slate-600">VAESocial</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* LE PARCOURS */}
      <section className="relative overflow-hidden bg-white pb-12 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Notre façon de faire</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Aucune inscription sans un vrai échange</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Avant de vous inscrire, nous prenons le temps de vérifier deux choses : que la VAE est pertinente dans votre situation, et que vous vous sentez à l&apos;aise avec la démarche.</p>
          </div>
          <div className="relative mt-10 sm:mt-12">
            <div aria-hidden className="absolute left-[12%] right-[12%] top-[2.1rem] hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block" />
            <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {PARCOURS.map((e, i) => {
                const fort = i === 2;
                return (
                  <li key={e.titre} className={fort ? "relative rounded-3xl bg-brand-600 p-6 text-white shadow-xl shadow-brand-900/20 lg:-mt-2" : "relative rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-900/5"}>
                    <div className="flex items-center justify-between">
                      <span className={fort ? "flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 ring-4 ring-brand-600" : "flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-4 ring-brand-50"}>
                        <BrandIcon name={(["lock", "handshake", "screen", "award"] as const)[i]} className="h-5 w-5" />
                      </span>
                      <span className={fort ? "text-3xl font-bold text-white/30" : "text-3xl font-bold text-brand-200"}>0{i + 1}</span>
                    </div>
                    {fort && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-500 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-md shadow-accent-600/30">Avant toute inscription</span>}
                    <h3 className={fort ? "mt-5 text-base font-bold leading-snug" : "mt-5 text-base font-bold leading-snug text-brand-900"}>{e.titre}</h3>
                    <p className={fort ? "mt-2 text-sm leading-relaxed text-brand-50" : "mt-2 text-sm leading-relaxed text-slate-700"}>{e.texte}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      {/* L'ÉQUIPE */}
      <section className="relative overflow-hidden bg-brand-50/70 py-12 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full border-[28px] border-brand-100/70" />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <Eyebrow>L&apos;équipe</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Des accompagnatrices qui connaissent votre quotidien</h2>
          </div>
          <div className="relative mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {EQUIPE.map((e, i) => {
              const t = TINTS[i];
              return (
                <div key={e.titre} className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 sm:p-7">
                  <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.tile}`}><BrandIcon name={e.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-900">{e.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{e.texte}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <TemoignagesSection />

      {/* TRANSPARENCE */}
      <section className="bg-brand-50/70 py-12 sm:py-20">
        <Container className="max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Transparence</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Ce que nous faisons, et ce que nous ne faisons pas</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-brand-700 p-6 text-white shadow-xl shadow-brand-900/15 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-200">Nous le faisons</p>
              <ul className="mt-5 space-y-4">
                {FAISONS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed"><span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 text-white"><Ico name="check" className="h-3.5 w-3.5" /></span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Nous ne le faisons pas</p>
              <ul className="mt-5 space-y-4">
                {NE_FAISONS_PAS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-slate-700"><span aria-hidden className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">✕</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16 bg-white py-12 sm:py-20">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Mieux nous connaître</h2>
          </div>
          <div className="mt-8 sm:mt-10"><FaqAccordion items={FAQ_ITEMS} /></div>
          <FaqJsonLd items={FAQ_ITEMS} />
        </Container>
      </section>

      <CtaFinalSection
        titre="Parlons de votre situation"
        texte="Un premier échange gratuit et sans engagement, avec quelqu'un qui connaît votre métier, pour voir si la VAE est faite pour vous."
        href={CTA_HREF}
        cta={CTA_LABEL}
      />

      <StickyCta href={CTA_HREF} label="Mon prédiagnostic gratuit" hideWhenVisible={STICKY_HIDE} />
    </>
  );
}
