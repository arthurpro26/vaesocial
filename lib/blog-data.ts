// Contenu des articles du blog VAESocial — même logique que lib/diplomes-data.ts :
// une seule base de données, un seul template (app/blog/[slug]/page.tsx), zéro
// duplication de JSX. Chaque article cible un sujet réglementaire réel et récent
// (sourcé pendant les sessions de travail — jamais de chiffre inventé), pensé
// pour capter du trafic informationnel avant même que le candidat cherche un
// prestataire. Objectif SEO : mots-clés longue traîne peu concurrentiels sur des
// actualités très récentes (fenêtre d'opportunité avant que le reste du secteur
// publie du contenu dessus).
//
// Chaque article inclut au moins un bloc `cta` : contrainte explicite du projet,
// un article informationnel ne doit jamais être une impasse sans rappel du
// prédiagnostic gratuit.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; icon: string; text: string }
  | { type: "cta"; titre: string; texte: string; cta: string };

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  datePublished: string; // ISO — utilisé pour le tri, le sitemap et le JSON-LD
  readingTime: string;
  content: ArticleBlock[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "cpf-reste-a-charge-2026",
    title: "CPF et VAE en 2026 : le reste à charge passe à 150 €, ce qui change pour vous",
    metaTitle: "CPF 2026 : reste à charge à 150 € pour la VAE — ce qui change",
    metaDescription:
      "Depuis le 2 avril 2026, la participation obligatoire CPF passe de 103,20 € à 150 €. On vous explique qui est concerné, qui en est exonéré, et l'impact réel sur le financement de votre VAE.",
    excerpt:
      "Le reste à charge CPF a augmenté deux fois en 2026 : 103,20 € en janvier, puis 150 € depuis le 2 avril. Voici ce que ça change concrètement pour financer votre VAE.",
    category: "Financement",
    datePublished: "2026-08-03",
    readingTime: "4 min",
    content: [
      {
        type: "p",
        text: "Si vous avez commencé à vous renseigner sur le financement de votre VAE via le CPF, vous avez peut-être vu passer deux montants différents : 103,20 € et 150 €. Les deux sont réels, et la confusion est normale — la règle a changé deux fois en quelques mois. Voici ce qu'il en est exactement, à jour au 3 août 2026.",
      },
      {
        type: "h2",
        text: "Une participation obligatoire, en deux temps",
      },
      {
        type: "p",
        text: "Depuis le 1er janvier 2026, toute personne qui mobilise son Compte Personnel de Formation — y compris pour un accompagnement à la VAE — doit régler une participation forfaitaire, prélevée automatiquement au moment de la validation du dossier sur MonCompteFormation. Ce montant a été fixé à 103,20 € pour les inscriptions réalisées entre le 1er janvier et le 1er avril 2026.",
      },
      {
        type: "p",
        text: "Un décret du 30 mars 2026 (décret n° 2026-234, publié au Journal officiel le 1er avril 2026) a ensuite relevé ce montant à 150 € pour toute demande de souscription intervenant à partir du 2 avril 2026 — soit une hausse de 50 % par rapport au montant de départ, inscrite dans la loi de finances 2026. Concrètement : si votre dossier de VAE a été validé sur MonCompteFormation avant le 2 avril 2026, vous êtes resté·e à 103,20 €. Si c'est après, c'est 150 €.",
      },
      {
        type: "h2",
        text: "Qui est exonéré de cette participation ?",
      },
      {
        type: "ul",
        items: [
          "Les demandeurs d'emploi, indemnisés ou non.",
          "Les salarié·es dont l'employeur ou l'OPCO complète le financement (abondement) : dans ce cas, l'entreprise peut prendre en charge tout ou partie du reste à charge.",
        ],
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Ce reste à charge s'ajoute au coût de l'accompagnement, il ne s'y substitue pas. Pour une VAE dont le CPF couvre l'intégralité de l'accompagnement, la participation de 150 € reste souvent la seule somme qui sort de votre poche.",
      },
      {
        type: "h2",
        text: "Ce que ça change concrètement pour votre VAE",
      },
      {
        type: "p",
        text: "150 €, ramené à un accompagnement de 15 à 20 heures qui mène à un diplôme d'État, reste une somme modeste. Ce n'est pas ce montant qui doit décider si la VAE est adaptée à votre situation — c'est votre éligibilité, et le fait que votre CPF dispose d'un solde suffisant (ou que d'autres financements viennent compléter : OPCO, France Travail, Transitions Pro). C'est justement ce qu'on vérifie avec vous dès le premier échange, avant tout engagement de votre part.",
      },
      {
        type: "cta",
        titre: "Vérifiez ce que votre CPF couvre réellement",
        texte:
          "On regarde ensemble votre solde CPF, votre éligibilité et les compléments de financement possibles — gratuitement, sans engagement.",
        cta: "Vérifier mon financement →",
      },
    ],
  },
  {
    slug: "transitions-pro-forfait-vae-2000-euros",
    title: "Financement de la VAE par Transitions Pro : le nouveau forfait de 2 000 € (décret du 27 juillet 2026)",
    metaTitle: "Transitions Pro et VAE : le forfait de 2 000 € expliqué (décret 27/07/2026)",
    metaDescription:
      "Un décret du 27 juillet 2026 encadre enfin le financement de la VAE par les associations Transitions Pro, avec un forfait plafonné à 2 000 €. Dépenses éligibles, qui est concerné, comment ça se combine avec le CPF.",
    excerpt:
      "Depuis fin juillet 2026, un décret précise enfin comment Transitions Pro finance une VAE dans le cadre d'une reconversion, avec un plafond de 2 000 € par dossier.",
    category: "Financement",
    datePublished: "2026-08-03",
    readingTime: "4 min",
    content: [
      {
        type: "p",
        text: "Si vous envisagez votre VAE dans le cadre d'une reconversion professionnelle, un texte publié tout récemment vous concerne directement : le décret n° 2026-678 du 27 juillet 2026, paru au Journal officiel le 29 juillet 2026, qui fixe enfin un cadre clair au financement de la VAE par les associations Transitions Pro (ATPro).",
      },
      {
        type: "h2",
        text: "Ce que précise le décret",
      },
      {
        type: "p",
        text: "Jusqu'ici, le financement de la VAE par Transitions Pro existait dans les textes mais restait flou dans son application concrète : quelles dépenses sont couvertes, dans quelle limite, sur quels motifs un dossier peut être refusé. Le décret du 27 juillet 2026 répond à ces trois questions. Il fixe les dépenses prises en charge dans la limite d'un forfait plafonné à 2 000 € par parcours de VAE.",
      },
      {
        type: "p",
        text: "Autre précision importante : lorsque le candidat n'utilise pas son CPF pour financer sa VAE, une convention doit être signée entre lui, l'organisme prestataire et l'ensemble des co-financeurs impliqués — une formalisation qui sécurise le parcours pour toutes les parties.",
      },
      {
        type: "h2",
        text: "Qui peut mobiliser ce financement ?",
      },
      {
        type: "p",
        text: "Transitions Pro s'adresse aux salarié·es engagé·es dans un projet de transition professionnelle — typiquement, quelqu'un qui souhaite quitter son métier actuel pour rejoindre le secteur social ou médico-social (ou évoluer au sein de ce secteur) et qui a besoin d'un diplôme d'État reconnu pour concrétiser ce changement. C'est un des quatre leviers de financement de la VAE aux côtés du CPF, de l'abondement employeur/OPCO, et de France Travail pour les demandeurs d'emploi.",
      },
      {
        type: "callout",
        icon: "🔄",
        text: "Ce forfait de 2 000 € ne remplace pas le CPF : il vient en complément lorsque le CPF ne couvre pas l'intégralité de l'accompagnement, ou comme solution principale si vous préférez ne pas mobiliser votre CPF pour ce projet.",
      },
      {
        type: "h2",
        text: "Pourquoi c'est une bonne nouvelle pour les parcours en reconversion",
      },
      {
        type: "p",
        text: "Avant ce décret, l'absence de règles précises rendait le financement Transitions Pro difficile à anticiper — dépenses éligibles floues, délais incertains. Un cadre réglementaire clair, avec un plafond connu à l'avance, permet de bâtir un plan de financement fiable dès le début du parcours, plutôt que de découvrir en cours de route ce qui est pris en charge ou non.",
      },
      {
        type: "cta",
        titre: "Votre VAE s'inscrit dans une reconversion ?",
        texte:
          "On étudie avec vous si Transitions Pro, seul ou combiné à votre CPF, peut financer votre parcours — gratuitement, sans engagement.",
        cta: "Étudier mon financement →",
      },
    ],
  },
  {
    slug: "reforme-deeje-2026",
    title: "Réforme du diplôme d'éducateur de jeunes enfants (DEEJE) : ce qui change en 2026",
    metaTitle: "Réforme DEEJE 2026 : nouveau référentiel, ce qui change pour votre VAE",
    metaDescription:
      "L'arrêté du 6 octobre 2025 réforme en profondeur le DEEJE, avec un nouveau référentiel applicable au 1er septembre 2026. Calendrier, contenu de la réforme, impact sur les parcours de VAE en cours.",
    excerpt:
      "Le DEEJE change de référentiel au 1er septembre 2026. Voici ce qui évolue, le calendrier de transition, et ce que ça signifie si vous êtes en cours de VAE ou sur le point de vous lancer.",
    category: "Réglementation",
    datePublished: "2026-08-03",
    readingTime: "5 min",
    content: [
      {
        type: "p",
        text: "Le diplôme d'État d'éducateur de jeunes enfants (DEEJE) va connaître sa réforme la plus importante depuis 2018. L'arrêté du 6 octobre 2025 modifie en profondeur le référentiel du diplôme, avec une entrée en vigueur fixée au 1er septembre 2026. Si vous envisagez une VAE DEEJE, voici ce qu'il faut savoir avant de vous lancer.",
      },
      {
        type: "h2",
        text: "Ce qui change dans le référentiel",
      },
      {
        type: "p",
        text: "Le nouveau référentiel s'organise autour de quatre blocs de compétences, avec une évaluation repensée. Le diplôme reste inscrit au niveau 6 du Répertoire national des certifications professionnelles (RNCP) et continue de conférer le grade de licence, soit 180 crédits ECTS — sur ce point, rien ne change : le DEEJE garde son niveau de reconnaissance.",
      },
      {
        type: "h2",
        text: "Le calendrier de transition, étape par étape",
      },
      {
        type: "ul",
        items: [
          "À partir du 1er septembre 2026 : toute nouvelle entrée dans un parcours DEEJE (formation initiale comme VAE) suit le nouveau référentiel 2025.",
          "Les personnes déjà engagées dans un parcours avant cette date terminent selon l'ancien référentiel — l'arrêté du 22 août 2018 reste applicable pour elles.",
          "Ce régime transitoire pour l'ancien référentiel court jusqu'au 31 juillet 2028, date au-delà de laquelle seul le nouveau référentiel existera.",
        ],
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "En clair : si votre dossier de recevabilité VAE est déposé avant le 1er septembre 2026, vous restez sur l'ancien référentiel jusqu'au bout de votre parcours. Aucune obligation de tout recommencer avec le nouveau cadre.",
      },
      {
        type: "h2",
        text: "Ce que ça signifie si vous hésitez encore à vous lancer",
      },
      {
        type: "p",
        text: "Deux référentiels vont temporairement coexister, ce qui peut sembler complexe de l'extérieur. En pratique, la question qui compte pour vous est simple : à quelle date votre dossier de recevabilité sera-t-il déposé ? C'est cette date, et non la date du jury, qui détermine quel référentiel s'applique à votre parcours. C'est un point qu'on clarifie systématiquement avec chaque candidat·e au moment du diagnostic initial, pour éviter toute mauvaise surprise en cours de route.",
      },
      {
        type: "cta",
        titre: "Votre VAE DEEJE, au bon moment et selon le bon référentiel",
        texte:
          "On fait le point sur votre situation et sur le référentiel qui s'appliquera à votre dossier — gratuitement, sans engagement.",
        cta: "Vérifier mon éligibilité DEEJE →",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

// Tri du plus récent au plus ancien pour l'index — aujourd'hui les 3 articles
// partagent la même date de publication, mais ce tri reste correct dès que de
// nouveaux articles viendront s'ajouter à des dates différentes.
export function getSortedArticles(): BlogArticle[] {
  return [...BLOG_ARTICLES].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
