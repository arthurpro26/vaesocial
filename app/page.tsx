import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import Eyebrow from "@/components/Eyebrow";
import StatsBar from "@/components/sections/StatsBar";
import MethodeSection from "@/components/sections/MethodeSection";
import FinancementSection from "@/components/sections/FinancementSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import EngagementsSection from "@/components/sections/EngagementsSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { AVIS, COMPETENCES, DIPLOMES, REASSURANCES } from "@/lib/site-data";

// Page d'accueil — landing page principale de VAESocial.
// Structure pensée pour le SEO, le trafic Google Ads et la conversion mobile.
//
// Angle éditorial du Hero : "on vous dit d'abord si vous êtes éligible, pas
// l'inverse" — positionnement honnête (prédiagnostic avant promesse), pensé
// pour se différencier des pages qui annoncent que tout le monde est éligible.
//
// Système visuel : alternance de fonds blanc / vert très pâle (brand-50) pour
// rythmer le scroll, deux "panneaux" pleine couleur (Financement + CTA final)
// pour casser le rythme et créer de la profondeur, émojis pour les icônes
// (choix volontaire : plus chaleureux pour le public visé, zéro dépendance),
// cartes avec plus d'air et un léger effet de survol.
//
// Les sections Méthode / Financement / Témoignages / Engagements / CTA final
// / Stats sont partagées avec les 4 pages diplôme dédiées (voir
// components/sections/) pour ne jamais dupliquer une donnée réelle. Seuls le
// Hero, "Pour qui ?", "Nos diplômes" et la FAQ restent spécifiques à la home.
//
// Prix, témoignages, durées et avis sont des données réelles fournies par
// Yoni (jamais de chiffre inventé) — voir mémoire projet pour la traçabilité.

export const metadata: Metadata = {
  // Titre "absolute" : n'hérite pas du template du layout racine (` | VAESocial`)
  // pour rester sous ~60 caractères, la longueur idéale affichée par Google.
  title: {
    absolute: "VAE secteur social : DEES, DEAES, DEEJE, DEME | VAESocial",
  },
  description:
    "VAE dans le secteur social : DEES, DEAES, DEEJE, DEME. Accompagnement 100% à distance, financement CPF possible. Vérifiez votre éligibilité gratuitement.",
  alternates: { canonical: "/" },
};

const VALEURS = [
  { icon: "🎓", titre: "4 diplômes accessibles" },
  { icon: "💻", titre: "100% à distance" },
  { icon: "💳", titre: "Financement CPF" },
  { icon: "🏢", titre: "Financement OPCO Santé" },
];

const PERSONAS = [
  {
    icon: "🏢",
    titre: "Vous travaillez dans une structure médico-sociale",
    texte:
      "IME, ITEP, MECS, foyer, EHPAD... votre expérience peut déjà être reconnue pour obtenir un diplôme d'État.",
  },
  {
    icon: "🏠",
    titre: "Vous accompagnez à domicile",
    texte:
      "AES, TISF, auxiliaire de vie... vos années d'expérience peuvent être valorisées grâce à la VAE.",
  },
  {
    icon: "🤝",
    titre: "Vous exercez sans diplôme d'État",
    texte:
      "Même sans diplôme, votre expérience professionnelle peut ouvrir droit à une validation.",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qu'est-ce que la VAE exactement ?",
    reponse:
      "La Validation des Acquis de l'Expérience est un dispositif officiel qui permet d'obtenir un diplôme d'État (DEES, DEAES, DEEJE, DEME...) en faisant reconnaître son expérience professionnelle, sans reprendre une formation complète. Vous constituez un dossier qui décrit vos pratiques, puis vous le présentez devant un jury qui valide tout ou partie du diplôme visé.",
  },
  {
    question: "Combien d'expérience faut-il pour se lancer ?",
    reponse:
      "Depuis la réforme de janvier 2024, il n'y a plus de durée minimale d'expérience à justifier. Toute activité, professionnelle ou bénévole, en lien direct avec le diplôme visé peut être recevable, quelle que soit sa durée. C'est justement l'objet du prédiagnostic : vérifier avec vous si votre expérience correspond bien au référentiel du diplôme.",
  },
  {
    question: "Combien de temps dure un parcours VAE ?",
    reponse:
      "En moyenne, comptez entre 6 et 12 mois entre le dépôt de candidature et le passage devant le jury : environ 2 mois pour la décision de recevabilité, puis plusieurs mois pour la rédaction du dossier de validation, qui dépendent surtout de votre disponibilité. Un accompagnement structuré permet généralement de tenir cette fourchette sans à-coups.",
  },
  {
    question: "Comment utiliser mon CPF pour financer la VAE ?",
    reponse:
      "L'accompagnement à la VAE est éligible au CPF. Vous mobilisez votre compte personnel de formation (via moncompteformation.gouv.fr) pour financer tout ou partie de la prestation. Nous vérifions avec vous votre solde disponible et, s'il ne couvre pas l'intégralité, nous regardons ensemble les autres solutions de financement possibles (OPCO, France Travail, Transitions Pro...).",
  },
  {
    question: "Puis-je faire ma VAE tout en travaillant ?",
    reponse:
      "Oui, c'est même la situation la plus fréquente. Le parcours est conçu pour s'organiser en parallèle de votre activité professionnelle : rédaction du dossier à votre rythme, rendez-vous d'accompagnement à distance, sans interruption de votre emploi.",
  },
  {
    question: "Puis-je faire une VAE sans diplôme ?",
    reponse:
      "Oui, c'est justement l'objectif de la VAE : valider un diplôme à partir de votre expérience, que vous ayez ou non un diplôme antérieur. Ce qui compte, c'est que votre pratique — professionnelle ou bénévole — corresponde au référentiel du diplôme visé.",
  },
  {
    question: "Et si mon dossier est refusé ?",
    reponse:
      "Le jury peut prononcer une validation totale, partielle ou un refus. En cas de validation partielle, les blocs de compétences validés sont acquis définitivement : vous n'avez pas à tout recommencer, seulement à compléter ce qui manque (formation ciblée, travaux complémentaires ou nouvelle présentation), sans délai imposé pour vous représenter. Nous vous accompagnons dans tous les cas pour construire la suite.",
  },
  {
    question: "Qui finance la VAE ?",
    reponse:
      "Plusieurs solutions existent selon votre situation : votre CPF, un abondement de votre employeur ou de votre OPCO (OPCO Santé pour le secteur social et médico-social), une aide de France Travail si vous êtes demandeur d'emploi, ou Transitions Pro dans le cadre d'une reconversion. Nous identifions avec vous la solution la plus adaptée avant tout engagement.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — pitch + formulaire intégré directement (moins de friction pour le trafic Ads).
          3 blocs distincts (accroche / formulaire / réassurance) plutôt que 2, pour que le
          formulaire remonte juste après le titre sur mobile — l'ordre DOM = l'ordre d'affichage
          en une colonne, et l'auto-placement CSS Grid reconstitue la mise en page 2 colonnes à
          partir de lg (accroche+réassurance à gauche, formulaire à droite sur toute la hauteur). */}
      <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-8 pt-6 sm:pb-20 sm:pt-20">
        <Container className="px-3 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-center sm:gap-3">
                <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                  <span aria-hidden>✅</span>
                  <span className="hidden sm:inline">Secteur social &amp; médico-social</span>
                  <span className="sm:hidden">Secteur social</span>
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800">
                  <span aria-hidden>⭐</span>
                  {AVIS.note}/5{" "}
                  <span className="hidden sm:inline">({AVIS.nombre} avis bénéficiaires)</span>
                  <span className="sm:hidden">({AVIS.nombre} avis)</span>
                </span>
              </div>
              <h1 className="mt-3 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl sm:leading-tight lg:text-5xl">
                On vous dit d&apos;abord si vous êtes{" "}
                <span className="text-brand-600">éligible</span>.
                <br />
                Pas l&apos;inverse.
              </h1>
              <p className="mt-2.5 text-sm font-semibold text-slate-800 sm:mt-4 sm:text-lg">
                ✨ Votre expérience vaut un diplôme. Vérifiez gratuitement si vous êtes éligible
                en moins de 3 minutes.
              </p>
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <PrediagnosticForm />
              <p className="mt-3 text-center text-xs text-slate-500 sm:mt-4">
                🔒 Vos informations restent confidentielles — jamais revendues à des tiers.
              </p>
            </div>

            <div>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Que vous visiez le DEES, le DEAES, le DEEJE ou le DEME, on vous guide à chaque
                étape 🤝 — sans reprendre une formation complète, et sans aucun engagement de
                votre part avant d&apos;avoir la réponse.
              </p>

              <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6">
                {VALEURS.map((v) => (
                  <li
                    key={v.titre}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    <span className="text-lg" aria-hidden>
                      {v.icon}
                    </span>
                    {v.titre}
                  </li>
                ))}
              </ul>

              {/* Rappel condensé des compétences valorisables — répond à
                  "est-ce que je suis concerné ?" et évite un vide visuel face au
                  formulaire, plus haut que ce bloc de texte à lui seul. */}
              <div className="mt-4 rounded-2xl border border-slate-100 bg-white/60 p-4 sm:mt-6 sm:p-6">
                <p className="text-sm font-semibold text-slate-900">
                  👉 Ce sont exactement les compétences évaluées dans un dossier de VAE. Vous en
                  pratiquez peut-être déjà certaines :
                </p>
                <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {COMPETENCES.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-0.5 text-brand-600" aria-hidden>
                        ✓
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Peu importe l&apos;intitulé exact de votre poste : le jury regarde ce que vous
                  avez réellement pratiqué, en salarié·e, bénévole ou aidant·e.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* EMPATHIE + PERSONAS */}
      <section className="bg-white py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pour qui ?</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Quel que soit votre parcours, une voie existe vers le diplôme.
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Structure, domicile, autodidacte ou en reconversion : chaque situation a ses propres
              leviers pour accéder à un diplôme d&apos;État par la VAE.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {PERSONAS.map((p) => (
              <div
                key={p.titre}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:block sm:p-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                  <span aria-hidden>{p.icon}</span>
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

          <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] sm:p-6">
              <p className="text-sm font-semibold text-slate-700">
                Votre expérience correspond peut-être déjà à :
              </p>
              <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                {COMPETENCES.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-brand-600" aria-hidden>
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm text-brand-900 sm:p-6">
              <p className="font-semibold">🤝 Notre promesse : la transparence avant tout</p>
              <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                {REASSURANCES.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-brand-800">
                    <span className="mt-0.5 text-brand-600" aria-hidden>
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* DIPLÔMES — chaque carte pointe vers sa page dédiée pour Google Ads */}
      <section id="diplomes" className="bg-brand-50/60 py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Nos diplômes</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Les diplômes accessibles par la VAE
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Trouvez le vôtre — chaque diplôme a sa propre page avec toutes les informations
              utiles pour vous décider.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6">
            {DIPLOMES.map((d) => (
              <Link
                key={d.sigle}
                href={`/${d.slug}`}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                    <span aria-hidden>🎓</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">{d.sigle}</p>
                    <p className="text-xs font-medium text-brand-600 sm:text-sm">{d.nom}</p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-sm">
                  {d.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 sm:mt-5 sm:text-sm">
                  Voir ce diplôme →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <MethodeSection />
      <FinancementSection />
      <TemoignagesSection />

      {/* FAQ */}
      <section id="faq" className="bg-brand-50/60 py-12 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Vos questions sur la VAE
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Toutes les réponses pour démarrer en confiance.
            </p>
          </div>
          <div className="mt-6 sm:mt-12">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
          <FaqJsonLd items={FAQ_ITEMS} />
        </Container>
      </section>

      <EngagementsSection />
      <CtaFinalSection />
    </>
  );
}
