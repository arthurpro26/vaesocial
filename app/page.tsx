import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";

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
};

// Reprend la logique des 4 domaines de compétences (DC1-DC4) communs aux
// référentiels DEES/DEAES/DEEJE/DEME, en langage accessible plutôt que le
// jargon administratif du Livret 2 — c'est exactement ce qu'un jury de VAE
// évalue dans le dossier.
const COMPETENCES = [
  "Accompagnement éducatif et social au quotidien",
  "Conception et conduite de projets personnalisés",
  "Communication professionnelle et travail en équipe pluridisciplinaire",
  "Implication dans la vie institutionnelle et le partenariat",
  "Gestion de situations sensibles ou de crise",
];

const VALEURS = [
  { icon: "🎓", titre: "4 diplômes accessibles" },
  { icon: "💻", titre: "100% à distance" },
  { icon: "💳", titre: "Financement CPF" },
  { icon: "🏢", titre: "Financement OPCO Santé" },
];

const STATS = [
  { chiffre: "< 24h", label: "Délai de réponse" },
  { chiffre: "100%", label: "À distance" },
  { chiffre: "100%", label: "Financement possible" },
  { chiffre: "15-20h", label: "D'accompagnement" },
  { chiffre: "Gratuit", label: "Diagnostic initial" },
];

const REASSURANCES = [
  "Aucune durée minimale d'expérience n'est exigée depuis la réforme 2024.",
  "Vous accompagnez un public concerné.",
  "Nous vérifions gratuitement votre éligibilité avant tout engagement.",
  "Si la VAE n'est pas adaptée, nous vous le dirons honnêtement.",
];

// Descriptions officielles courtes des 4 diplômes — contenu factuel (métiers
// et publics accompagnés), pas une donnée commerciale inventée.
const DIPLOMES = [
  {
    sigle: "DEES",
    nom: "Éducateur spécialisé",
    description:
      "Accompagnement des enfants, adolescents et adultes en difficulté sociale, familiale ou en situation de handicap.",
  },
  {
    sigle: "DEAES",
    nom: "Accompagnant éducatif et social",
    description:
      "Accompagnement des personnes âgées, en situation de handicap ou en perte d'autonomie, en structure ou à domicile.",
  },
  {
    sigle: "DEEJE",
    nom: "Éducateur de jeunes enfants",
    description:
      "Accompagnement des enfants de la naissance à 7 ans, en crèche, halte-garderie ou service de protection maternelle et infantile.",
  },
  {
    sigle: "DEME",
    nom: "Moniteur-éducateur",
    description:
      "Accompagnement au quotidien de personnes en difficulté sociale ou en situation de handicap, en appui de l'éducateur spécialisé.",
  },
];

const ENGAGEMENTS = [
  {
    icon: "🎯",
    titre: "Un accompagnement individuel",
    texte: "Un seul interlocuteur dédié, du positionnement jusqu'au jury — pas un parcours générique.",
  },
  {
    icon: "🤝",
    titre: "Une transparence totale",
    texte: "Sur l'éligibilité, les tarifs et le financement : ce qu'on vous annonce, c'est ce que vous obtenez.",
  },
  {
    icon: "📅",
    titre: "Un rythme adapté à votre vie",
    texte:
      "Accompagnement 100 % à distance, en visio, avec des séances qui s'organisent autour de votre emploi du temps — sans interrompre votre activité.",
  },
  {
    icon: "🛡️",
    titre: "Un suivi jusqu'au bout",
    texte:
      "Quelle que soit la décision du jury — validation totale ou partielle — vous n'êtes jamais seul·e pour la suite de votre parcours.",
  },
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

// Les 5 étapes ci-dessous correspondent au déroulé réglementaire réel d'une VAE
// en France (positionnement, Livret 1 de recevabilité, Livret 2 de compétences,
// oral, décision du jury) — ce sont des termes officiels, communs à tout
// parcours VAE, pas une spécificité d'un site en particulier. Les libellés et
// descriptions ont été écrits from scratch pour VAESocial.
const ETAPES = [
  {
    icon: "🧭",
    titre: "Diagnostic & orientation",
    texte: "On fait le point sur votre parcours pour confirmer que la VAE est la voie la plus pertinente pour vous, et vers quel diplôme.",
  },
  {
    icon: "📋",
    titre: "Livret de recevabilité",
    texte: "Constitution du dossier administratif qui ouvre officiellement le droit à candidater à la VAE auprès du certificateur.",
  },
  {
    icon: "✍️",
    titre: "Livret de compétences",
    texte: "L'étape centrale : formuler par écrit, avec votre accompagnateur, comment votre expérience couvre le référentiel du diplôme visé.",
  },
  {
    icon: "🎤",
    titre: "Entraînement à l'oral",
    texte: "Mise en situation face à un jury pour travailler votre posture et vos réponses avant le passage réel.",
  },
  {
    icon: "🏅",
    titre: "Après la décision du jury",
    texte: "Accompagnement adapté selon l'issue : validation complète, partielle, ou plan d'action pour la suite.",
  },
];

const FINANCEMENTS = [
  {
    icon: "💳",
    titre: "Votre CPF",
    texte: "La solution principale pour la majorité des candidats.",
  },
  {
    icon: "🏢",
    titre: "OPCO Santé",
    texte:
      "Pour les salariés du secteur social et médico-social (MECS, IME, ITEP, MAS, FAM, foyers, EHPAD...), via votre employeur lorsque c'est possible.",
  },
  {
    icon: "🏛️",
    titre: "France Travail",
    texte: "Pour les demandeurs d'emploi.",
  },
  {
    icon: "🔄",
    titre: "Transitions Pro",
    texte: "Dans le cadre d'un projet de reconversion.",
  },
];

// Note collectée auprès des bénéficiaires via la plateforme d'avis dédiée du centre de
// formation (non affiliée à un tiers type Google/Trustpilot).
const AVIS = { note: "4,9", nombre: 1257 };

const TEMOIGNAGES = [
  {
    nom: "Carine S.",
    role: "VAE DEES",
    texte:
      "L'accompagnement m'a permis de structurer mon dossier et d'arriver sereinement devant le jury. J'ai toujours eu des réponses à mes questions et je me suis sentie accompagnée du début à la fin. Je recommande !!",
  },
  {
    nom: "Melissa H.",
    role: "VAE DEAES",
    texte:
      "Je pensais que la VAE était beaucoup trop compliquée. Finalement, avec un accompagnement étape par étape, j'ai pu obtenir mon diplôme tout en continuant à travailler.",
  },
  {
    nom: "Valérie B.",
    role: "VAE DEME / DEEJE",
    texte:
      "Le prédiagnostic m'a tout de suite rassurée. La préparation du dossier et de l'oral a fait toute la différence. Je recommande cet accompagnement.",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — pitch + formulaire intégré directement (moins de friction pour le trafic Ads).
          3 blocs distincts (accroche / formulaire / réassurance) plutôt que 2, pour que le
          formulaire remonte juste après le titre sur mobile — l'ordre DOM = l'ordre d'affichage
          en une colonne, et l'auto-placement CSS Grid reconstitue la mise en page 2 colonnes à
          partir de lg (accroche+réassurance à gauche, formulaire à droite sur toute la hauteur). */}
      <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-10 pt-8 sm:pb-20 sm:pt-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                  ✅ Secteur social &amp; médico-social
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800">
                  <span aria-hidden>⭐⭐⭐⭐⭐</span>
                  {AVIS.note}/5 ({AVIS.nombre} avis bénéficiaires)
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                On vous dit d&apos;abord si vous êtes{" "}
                <span className="text-brand-600">éligible</span>.
                <br />
                Pas l&apos;inverse.
              </h1>
              <p className="mt-4 text-lg font-semibold text-slate-800">
                ✨ Votre expérience vaut un diplôme. Vérifiez gratuitement si vous êtes éligible
                en moins de 3 minutes.
              </p>
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <PrediagnosticForm />
              <p className="mt-4 text-center text-xs text-slate-400">
                🔒 Vos informations restent confidentielles — jamais revendues à des tiers.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-slate-600">
                Que vous visiez le DEES, le DEAES, le DEEJE ou le DEME, on vous guide à chaque
                étape 🤝 — sans reprendre une formation complète, et sans aucun engagement de
                votre part avant d&apos;avoir la réponse.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2.5">
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
              <div className="mt-6 rounded-2xl border border-slate-100 bg-white/60 p-6">
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

      {/* STATS — repères chiffrés qui rassurent en un coup d'œil, juste après le Hero.
          Regroupés dans une carte blanche avec séparateurs (pas une grille éclatée sur
          toute la largeur) pour rester lisible et structuré même sur grand écran. */}
      <section className="border-t border-slate-100 bg-brand-50/40 py-5 sm:py-10">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-3 gap-y-4 rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-sm shadow-slate-900/[0.03] sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-slate-200 sm:px-4 sm:py-7">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:flex-1 sm:px-5">
                <p className="text-xl font-bold text-brand-700 sm:text-3xl">{s.chiffre}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500 sm:mt-1 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 sm:grid-cols-3">
            {PERSONAS.map((p) => (
              <div
                key={p.titre}
                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                  <span aria-hidden>{p.icon}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 sm:mt-4 sm:text-base">
                  {p.titre}
                </h3>
                <p className="mt-1.5 line-clamp-4 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:line-clamp-none sm:text-sm">
                  {p.texte}
                </p>
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

      {/* DIPLÔMES */}
      <section id="diplomes" className="bg-brand-50/60 py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Nos diplômes</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Les diplômes accessibles par la VAE
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Trouvez le vôtre — une page dédiée à chaque diplôme arrivera bientôt avec un contenu
              encore plus complet.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6">
            {DIPLOMES.map((d) => (
              <div
                key={d.sigle}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                    <span aria-hidden>🎓</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">{d.sigle}</p>
                    <p className="text-xs font-medium text-brand-600 sm:text-sm">{d.nom}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-4 flex-1 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:line-clamp-none sm:text-sm">
                  {d.description}
                </p>
                {/* Les pages dédiées par diplôme n'existent pas encore : ce lien
                    pointe vers le prédiagnostic pour ne jamais envoyer vers une
                    page inexistante. À remplacer par /diplomes/{slug} une fois
                    ces pages construites. */}
                <Link
                  href="/#prediagnostic-form"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800 sm:mt-5 sm:text-sm"
                >
                  Voir ce diplôme →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MÉTHODE — frise verticale */}
      <section id="methode" className="bg-white py-12 sm:py-24">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>Notre méthode</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              5 étapes, du diagnostic jusqu&apos;au jury
            </h2>
            <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
              15 à 20 heures d&apos;accompagnement au total, réparties sur plusieurs mois, à
              distance et à votre rythme.
            </p>
          </div>

          <div className="relative mt-8 sm:mt-16">
            <div
              className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-100 sm:left-7"
              aria-hidden
            />
            <div className="space-y-4 sm:space-y-10">
              {ETAPES.map((etape, i) => (
                <div key={etape.titre} className="relative flex gap-3 sm:gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-lg shadow-md shadow-brand-600/30 sm:h-14 sm:w-14 sm:text-2xl">
                    <span aria-hidden>{etape.icon}</span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-900/[0.03] sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-500">
                      Étape {i + 1}
                    </p>
                    <h3 className="mt-1 font-semibold text-slate-900">{etape.titre}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{etape.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/#prediagnostic-form"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Tout commence par votre prédiagnostic gratuit →
            </Link>
          </div>
        </Container>
      </section>

      {/* FINANCEMENT — panneau fort visuellement */}
      <section className="bg-brand-50/60 py-12 sm:py-24">
        <Container>
          <div
            id="financement"
            className="relative scroll-mt-24 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-4 py-8 text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-20"
          >
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm">
                💰 Financement
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
                Une solution de financement adaptée à votre situation
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg">
                Votre CPF couvre généralement l&apos;intégralité de l&apos;accompagnement. Nous
                vérifions avec vous votre solde et les autres aides mobilisables, avant tout
                engagement.
              </p>
            </div>

            <div className="relative mx-auto mt-6 max-w-xl sm:mt-12">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-sm sm:p-6">
                <p className="text-sm text-brand-50">Le prix de l&apos;accompagnement</p>
                <p className="mt-2 text-3xl font-bold">1 800 € à 3 500 €</p>
                <p className="mt-1 text-xs text-brand-100">
                  selon le nombre d&apos;heures nécessaires (15 à 20 h)
                </p>
                <div className="mt-5 rounded-xl bg-white/15 p-4">
                  <p className="text-xs text-brand-50">Votre CPF couvre généralement</p>
                  <p className="mt-1 text-2xl font-bold">100 %</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto mt-6 max-w-4xl sm:mt-10">
              <p className="text-center text-sm font-semibold text-brand-50">
                Sources de financement possibles
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-4">
                {FINANCEMENTS.map((f) => (
                  <div
                    key={f.titre}
                    className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm sm:p-5"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2.5">
                      <span className="text-base sm:text-lg" aria-hidden>
                        {f.icon}
                      </span>
                      <p className="text-xs font-semibold sm:text-base">{f.titre}</p>
                    </div>
                    <p className="mt-1.5 line-clamp-4 text-xs leading-relaxed text-brand-50 sm:mt-2 sm:line-clamp-none sm:text-sm">
                      {f.texte}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-brand-100">
                Selon votre situation, d&apos;autres aides régionales peuvent également exister —
                nous les identifions avec vous.
              </p>
            </div>

            <div className="relative mt-6 text-center sm:mt-10">
              <Link
                href="/#prediagnostic-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Vérifier mon financement gratuitement →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-white py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Ils nous font confiance</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Ils ont obtenu leur diplôme par la VAE
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
              <span aria-hidden>⭐⭐⭐⭐⭐</span>
              {AVIS.note}/5 · {AVIS.nombre} avis bénéficiaires
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-3">
            {TEMOIGNAGES.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
              >
                <div aria-hidden>⭐⭐⭐⭐⭐</div>
                <p className="mt-3 text-sm italic leading-relaxed text-slate-600 sm:mt-4">
                  &ldquo;{t.texte}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900 sm:mt-5">{t.nom}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
        </Container>
      </section>

      {/* ENGAGEMENTS — comble l'espace entre FAQ et CTA final, répond à "puis-je vous faire confiance ?" */}
      <section className="bg-white py-12 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pourquoi VAESocial</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
              Nos engagements envers vous
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6">
            {ENGAGEMENTS.map((e) => (
              <div
                key={e.titre}
                className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:flex-row sm:gap-4 sm:p-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                  <span aria-hidden>{e.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{e.titre}</h3>
                  <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-slate-600 sm:mt-1.5 sm:line-clamp-none sm:text-sm">
                    {e.texte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-50/60 py-12 sm:py-24">
        <Container>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-5 py-9 text-center text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm">
              🚀 Dernière étape
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
              Prêt·e à savoir si vous êtes éligible ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg">
              Un conseiller vous recontacte gratuitement, sans engagement, pour faire le point sur
              votre situation.
            </p>
            <Link
              href="/#prediagnostic-form"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:mt-8 sm:inline-flex sm:w-auto sm:py-3.5 sm:text-sm"
            >
              Savoir si je suis éligible →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
