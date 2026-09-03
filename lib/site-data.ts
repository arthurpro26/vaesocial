// Données partagées entre la page d'accueil et les pages dédiées par diplôme
// (/dees, /deaes, /deeje, /deme). Centralisées ici pour ne jamais dupliquer
// une donnée réelle (prix, avis, financement...) à plusieurs endroits.
//
// Prix, témoignages, durées et avis sont des données réelles fournies par
// Yoni (jamais de chiffre inventé) — voir mémoire projet pour la traçabilité.

export const DIPLOMES = [
  {
    slug: "dees",
    sigle: "DEES",
    nom: "Éducateur spécialisé",
    description:
      "Accompagnement des enfants, adolescents et adultes en difficulté sociale, familiale ou en situation de handicap.",
  },
  {
    slug: "deaes",
    sigle: "DEAES",
    nom: "Accompagnant éducatif et social",
    description:
      "Accompagnement des personnes âgées, en situation de handicap ou en perte d'autonomie, en structure ou à domicile.",
  },
  {
    slug: "deeje",
    sigle: "DEEJE",
    nom: "Éducateur de jeunes enfants",
    description:
      "Accompagnement des enfants de la naissance à 7 ans, en crèche, halte-garderie ou service de protection maternelle et infantile.",
  },
  {
    slug: "deme",
    sigle: "DEME",
    nom: "Moniteur-éducateur",
    description:
      "Accompagnement au quotidien de personnes en difficulté sociale ou en situation de handicap, en appui de l'éducateur spécialisé.",
  },
  // Ajouté le 03/09/2026. Le slug est le NOM DU MÉTIER et non le sigle :
  // relevé Keyword Planner du 03/09/2026 (France, 12 mois glissants) —
  // "vae auxiliaire de puericulture" = 4 400 recherches/mois, "vae deap" = 170.
  // Les candidates cherchent leur métier, pas l'acronyme. L'URL, le titre et
  // les annonces doivent suivre le même vocabulaire qu'elles.
  {
    slug: "auxiliaire-puericulture",
    sigle: "DEAP",
    nom: "Auxiliaire de puériculture",
    description:
      "Soins et accompagnement du jeune enfant, en maternité, en service de pédiatrie, en PMI ou en structure d'accueil de la petite enfance.",
  },
] as const;

export type DiplomeSlug = (typeof DIPLOMES)[number]["slug"];

export const STATS = [
  { chiffre: "< 24h", label: "Délai de réponse" },
  { chiffre: "100%", label: "À distance" },
  { chiffre: "100%", label: "Financement possible" },
  { chiffre: "15-20h", label: "D'accompagnement" },
  { chiffre: "Gratuit", label: "Diagnostic initial" },
];

// Reprend la logique des 4 domaines de compétences (DC1-DC4) communs aux
// référentiels DEES/DEAES/DEEJE/DEME, en langage accessible plutôt que le
// jargon administratif du Livret 2 — c'est exactement ce qu'un jury de VAE
// évalue dans le dossier.
export const COMPETENCES = [
  "Accompagnement éducatif et social au quotidien",
  "Conception et conduite de projets personnalisés",
  "Communication professionnelle et travail en équipe pluridisciplinaire",
  "Implication dans la vie institutionnelle et le partenariat",
  "Gestion de situations sensibles ou de crise",
];

export const REASSURANCES = [
  "Aucune durée minimale d'expérience n'est exigée depuis la réforme 2024.",
  "Vous accompagnez un public concerné.",
  "Nous vérifions gratuitement votre éligibilité avant tout engagement.",
  "Si la VAE n'est pas adaptée, nous vous le dirons honnêtement.",
];

// Les 5 étapes ci-dessous correspondent au déroulé réglementaire réel d'une VAE
// en France (positionnement, Livret 1 de recevabilité, Livret 2 de compétences,
// oral, décision du jury) — ce sont des termes officiels, communs à tout
// parcours VAE, pas une spécificité d'un site en particulier. Les libellés et
// descriptions ont été écrits from scratch pour VAESocial.
export const ETAPES = [
  {
    icon: "🧭",
    titre: "Diagnostic & orientation",
    texte:
      "On fait le point sur votre parcours pour confirmer que la VAE est la voie la plus pertinente pour vous, et vers quel diplôme.",
  },
  {
    icon: "📋",
    titre: "Livret de recevabilité",
    texte:
      "Constitution du dossier administratif qui ouvre officiellement le droit à candidater à la VAE auprès du certificateur.",
  },
  {
    icon: "✍️",
    titre: "Livret de compétences",
    texte:
      "L'étape centrale : formuler par écrit, avec votre accompagnateur, comment votre expérience couvre le référentiel du diplôme visé.",
  },
  {
    icon: "🎤",
    titre: "Entraînement à l'oral",
    texte:
      "Mise en situation face à un jury pour travailler votre posture et vos réponses avant le passage réel.",
  },
  {
    icon: "🏅",
    titre: "Après la décision du jury",
    texte:
      "Accompagnement adapté selon l'issue : validation complète, partielle, ou plan d'action pour la suite.",
  },
];

export const FINANCEMENTS = [
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

export const ENGAGEMENTS = [
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

// Note collectée auprès des bénéficiaires via la plateforme d'avis dédiée du centre de
// formation (non affiliée à un tiers type Google/Trustpilot).
export const AVIS = { note: "4,9", nombre: 1257 };

export type Temoignage = { nom: string; role: string; texte: string; diplomes: DiplomeSlug[] };

export const TEMOIGNAGES: Temoignage[] = [
  {
    nom: "Carine S.",
    role: "VAE DEES",
    texte:
      "L'accompagnement m'a permis de structurer mon dossier et d'arriver sereinement devant le jury. J'ai toujours eu des réponses à mes questions et je me suis sentie accompagnée du début à la fin. Je recommande !!",
    diplomes: ["dees"],
  },
  {
    nom: "Melissa H.",
    role: "VAE DEAES",
    texte:
      "Je pensais que la VAE était beaucoup trop compliquée. Finalement, avec un accompagnement étape par étape, j'ai pu obtenir mon diplôme tout en continuant à travailler.",
    diplomes: ["deaes"],
  },
  {
    nom: "Valérie B.",
    role: "VAE DEME / DEEJE",
    texte:
      "Le prédiagnostic m'a tout de suite rassurée. La préparation du dossier et de l'oral a fait toute la différence. Je recommande cet accompagnement.",
    diplomes: ["deme", "deeje"],
  },
];
