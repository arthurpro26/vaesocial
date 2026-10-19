import type { FaqItem } from "@/components/FaqAccordion";
import type { DiplomeSigle, DiplomeSlug } from "@/lib/site-data";

// Contenu spécifique à chaque page diplôme dédiée (/dees, /deaes, /deeje,
// /deme), utilisé pour le Google Ads (mot-clé → annonce → landing page
// cohérents). Toutes les données factuelles (niveau RNCP, débouchés,
// référentiel) ont été vérifiées par recherche début août 2026 — voir mémoire
// projet. Les codes RNCP exacts ne sont volontairement pas affichés : les
// sources trouvées se contredisaient selon la date de consultation
// (renouvellements/réformes en cours), alors que le niveau lui-même était
// corroboré de façon constante par toutes les sources.

export type DiplomeData = {
  slug: DiplomeSlug;
  sigle: DiplomeSigle;
  nomComplet: string;
  niveau: string;
  metaTitle: string;
  metaDescription: string;
  heroSuffixe: string; // ex. "au DEES" — inséré après "éligible" dans le H1
  heroIntro: string;
  heroParagraphe: string;
  publicIntro: string;
  publicConcerne: { titre: string; texte: string }[];
  // Une liste de mots-repères par carte de `publicConcerne` (même ordre), affichés en pastilles.
  // Ils sont tous tirés des textes de la carte : n'ajouter aucun mot qui n'y figure pas.
  publicChips: string[][];
  debouchesIntro: string;
  debouches: { icon: string; texte: string }[];
  debouchesConclusion: string;
  noteReferentiel?: string;
  // Section « blocs de compétences » (page diplôme). Intitulés recopiés du texte
  // officiel ; `piste` = situation professionnelle à repérer pour illustrer le bloc
  // dans un dossier de VAE (conseil de méthode, pas une citation du texte).
  referentiel?: {
    titre: string;
    intro: string;
    blocs: { intitule: string; piste: string }[];
    sourceLabel: string;
    sourceUrl: string;
    guide?: { slug: string; label: string };
  };
  faq: FaqItem[];
  ctaTitre: string;
  // Thème couleur de la page. Absent = teal de marque (toutes les pages
  // historiques). "rose" applique la classe `.theme-rose` définie dans
  // app/globals.css, qui repeint la page entière en redéfinissant les
  // variables CSS de la palette — aucun composant n'est dupliqué.
  theme?: "rose";
};

export const DIPLOMES_DATA: Record<DiplomeSlug, DiplomeData> = {
  dees: {
    slug: "dees",
    sigle: "DEES",
    nomComplet: "Diplôme d'État d'Éducateur Spécialisé",
    niveau: "Niveau 6 (Bac+3)",
    metaTitle: "VAE DEES : Éducateur Spécialisé par expérience | VAESocial",
    metaDescription:
      "Obtenez le DEES par la VAE grâce à votre expérience professionnelle. Aucune durée minimale exigée depuis 2024. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEES",
    heroIntro:
      "Moniteur-éducateur, AES ou faisant fonction en MECS, IME, ITEP, foyer ou protection de l'enfance : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEES est un diplôme d'État de niveau 6 (Bac+3) qui atteste de la capacité à concevoir et conduire un accompagnement éducatif auprès de publics en difficulté sociale, familiale ou en situation de handicap. Par la VAE, votre pratique de terrain — en MECS, IME, ITEP, ESAT, foyer ou protection de l'enfance — peut suffire à le valider, sans reprendre une formation complète.",
    publicIntro:
      "Vous exercez déjà, à un titre ou un autre, des missions d'accompagnement éducatif ? Votre expérience peut être recevable pour une VAE DEES.",
    publicConcerne: [
      {
        titre: "Vous êtes moniteur-éducateur ou AES",
        texte:
          "Votre pratique quotidienne d'accompagnement recouvre une bonne partie du référentiel du DEES, un diplôme de niveau supérieur.",
      },
      {
        titre: "Vous travaillez en protection de l'enfance",
        texte:
          "MECS, service d'AEMO, foyer de l'enfance... votre expérience de terrain peut être directement valorisée dans le dossier.",
      },
      {
        titre: "Vous exercez sans le diplôme requis",
        texte:
          "En IME, ITEP, ESAT ou foyer pour adultes handicapés, sans DEES, votre pratique professionnelle reste votre meilleur argument pour l'obtenir.",
      },
    ],
    publicChips: [["Moniteur-éducateur", "AES"], ["MECS", "AEMO", "Foyer de l'enfance"], ["IME", "ITEP", "ESAT", "Foyer"]],
    debouchesIntro:
      "Le DEES ouvre principalement des postes dans le secteur privé associatif, majoritaire parmi les employeurs — et des parcours très variés selon le public que vous choisissez d'accompagner :",
    debouches: [
      {
        icon: "🛡️",
        texte:
          "Protection de l'enfance : MECS, services d'AEMO, foyers de l'enfance — accompagner des enfants et adolescents dans la durée, avec un vrai impact sur leur trajectoire.",
      },
      {
        icon: "🤲",
        texte:
          "Handicap : IME, ITEP, ESAT, foyers d'hébergement — un métier de terrain, au contact direct des personnes accompagnées, chaque jour différent.",
      },
      {
        icon: "🏘️",
        texte:
          "Insertion sociale : CHRS, structures pour adultes en difficulté — un rôle de repère dans des parcours de vie parfois chaotiques.",
      },
      {
        icon: "🏛️",
        texte:
          "Fonction publique territoriale et hospitalière — des postes plus rares mais stables, avec de vraies perspectives d'évolution vers l'encadrement.",
      },
    ],
    debouchesConclusion:
      "🌟 Un diplôme, des dizaines de terrains d'action possibles : le DEES ouvre autant de portes qu'il y a de publics à accompagner.",
    referentiel: {
      titre: "Les quatre blocs de compétences du DEES",
      intro:
        "Le nouveau référentiel du DEES (arrêté du 6 octobre 2025, applicable à partir du 1er septembre 2026) s'organise en quatre blocs. Voici leurs intitulés officiels, et le type de situation professionnelle à repérer dans votre parcours pour chacun. Pendant la période de transition, nous vérifions avec vous quel cadre s'applique à votre dossier.",
      blocs: [
        {
          intitule:
            "Concevoir et conduire un accompagnement éducatif spécialisé dans une visée préventive et inclusive",
          piste:
            "Une situation où vous avez conçu et conduit un accompagnement, pas seulement appliqué un projet existant.",
        },
        {
          intitule:
            "Favoriser et soutenir l'autodétermination des individus et des collectifs dans un but d'émancipation",
          piste:
            "Une situation où la personne accompagnée a participé aux décisions qui la concernent.",
        },
        {
          intitule:
            "S'inscrire dans une dynamique partenariale et territoriale en lien avec la mise en œuvre des politiques de cohésion sociale",
          piste:
            "Une situation de travail avec des partenaires extérieurs à votre équipe : famille, école, santé, collectivité.",
        },
        {
          intitule: "S'inscrire dans un contexte professionnel du travail social",
          piste:
            "Une situation qui montre votre place dans l'institution et le recul que vous prenez sur votre pratique.",
        },
      ],
      sourceLabel: "Arrêté du 6 octobre 2025, annexe I (Légifrance)",
      sourceUrl: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052384644",
      guide: {
        slug: "reforme-dees-2026-vae",
        label: "Réforme du DEES : ce qui change pour votre VAE",
      },
    },
    faq: [
      {
        question: "Quel est le niveau du DEES obtenu par VAE ?",
        reponse:
          "Le DEES obtenu par VAE est strictement identique à celui obtenu en formation initiale : même diplôme d'État de niveau 6 (Bac+3), mêmes droits, aucune mention de la voie d'obtention sur le diplôme.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEES en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience — professionnelle, bénévole ou en tant qu'aidant — corresponde aux missions d'accompagnement éducatif évaluées dans le référentiel du DEES.",
      },
      {
        question: "Quels métiers peut-on exercer après un DEES ?",
        reponse:
          "Le DEES permet d'exercer en protection de l'enfance (MECS, AEMO), dans le champ du handicap (IME, ITEP, ESAT), ou auprès d'adultes en difficulté sociale (CHRS). Le secteur privé associatif concentre la majorité des postes.",
      },
      {
        question: "La VAE DEES est-elle plus rapide qu'une formation classique ?",
        reponse:
          "Oui : comptez en moyenne 6 à 12 mois pour un parcours VAE, contre 3 ans pour la formation initiale, puisque vous ne suivez pas les enseignements déjà couverts par votre expérience — vous rédigez et présentez un dossier devant un jury.",
      },
      {
        question: "Le référentiel du DEES change-t-il en 2026 ?",
        reponse:
          "Oui. Un nouvel arrêté (6 octobre 2025) entre en vigueur le 1er septembre 2026, avec quatre blocs de compétences. Les candidats déjà engagés avant cette date restent soumis aux anciennes modalités jusqu'au 31 juillet 2028 au plus tard, et les premiers jurys de VAE sur le nouveau référentiel sont prévus à partir de septembre 2027. Nous faisons le point sur votre situation lors du diagnostic.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEES ?",
  },

  deaes: {
    slug: "deaes",
    sigle: "DEAES",
    nomComplet: "Diplôme d'État d'Accompagnant Éducatif et Social",
    niveau: "Niveau 3 (CAP/BEP)",
    metaTitle: "VAE DEAES : Accompagnant Éducatif et Social | VAESocial",
    metaDescription:
      "Obtenez le DEAES par la VAE grâce à votre expérience d'accompagnement à domicile ou en structure. Diagnostic d'éligibilité gratuit en 3 minutes.",
    heroSuffixe: "au DEAES",
    heroIntro:
      "Aide à domicile, en EHPAD, en foyer de vie ou auprès de personnes en situation de handicap : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEAES est un diplôme d'État de niveau 3 qui atteste de la capacité à accompagner au quotidien des personnes en perte d'autonomie, en situation de handicap ou âgées, à domicile ou en structure. Par la VAE, votre expérience d'aide à domicile, en EHPAD ou auprès d'enfants en situation de handicap peut suffire à le valider, sans reprendre une formation complète.",
    publicIntro:
      "Vous accompagnez déjà des personnes fragiles au quotidien ? Votre expérience peut être recevable pour une VAE DEAES.",
    publicConcerne: [
      {
        titre: "Vous intervenez à domicile",
        texte:
          "Auxiliaire de vie, aide à domicile via un SAAD... votre pratique de l'accompagnement quotidien correspond directement au référentiel du DEAES.",
      },
      {
        titre: "Vous travaillez en EHPAD ou en structure",
        texte:
          "Agent, aide médico-psychologique, aide-soignant·e sans diplôme spécifique : votre expérience de terrain peut être valorisée dans le dossier.",
      },
      {
        titre: "Vous êtes AESH ou accompagnez des enfants handicapés",
        texte:
          "L'accompagnement d'enfants en situation de handicap à l'école ou en structure spécialisée entre dans le champ du DEAES.",
      },
    ],
    publicChips: [["Auxiliaire de vie", "Aide à domicile", "SAAD"], ["EHPAD", "AMP", "Aide-soignant·e"], ["AESH", "Handicap"]],
    debouchesIntro:
      "Le DEAES ouvre des postes très variés, à domicile comme en établissement — de quoi trouver le cadre qui vous correspond :",
    debouches: [
      {
        icon: "🏠",
        texte:
          "Aide à domicile : SAAD — accompagner au quotidien, chez elles, des personnes qui ont besoin de vous pour rester autonomes.",
      },
      {
        icon: "🌇",
        texte:
          "EHPAD et établissements pour personnes âgées — un métier de lien humain, où chaque petit geste compte vraiment.",
      },
      {
        icon: "🧩",
        texte:
          "Structures pour le handicap : IME, foyers, CHRS — un accompagnement de proximité, valorisant au quotidien.",
      },
      {
        icon: "🎈",
        texte:
          "Petite enfance et accompagnement scolaire (AESH, via l'Éducation nationale) — changer le quotidien d'un enfant en situation de handicap.",
      },
    ],
    debouchesConclusion:
      "🌟 À domicile, en EHPAD, en crèche ou à l'école : le DEAES vous ouvre des terrains d'action très différents, à choisir selon ce qui vous fait vibrer.",
    faq: [
      {
        question: "Quel est le niveau du DEAES ?",
        reponse:
          "Le DEAES est un diplôme d'État de niveau 3 (équivalent CAP/BEP). Il remplace depuis 2016 les anciens diplômes d'auxiliaire de vie sociale (DEAVS) et d'aide médico-psychologique (DEAMP), regroupés dans un référentiel commun.",
      },
      {
        question: "Quelle est la différence entre les deux spécialités du DEAES ?",
        reponse:
          "Le DEAES se décline en deux spécialités : 'accompagnement de la vie à domicile' et 'accompagnement de la vie en structure'. Votre parcours détermine généralement la spécialité la plus pertinente pour votre dossier de VAE.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEAES en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience d'accompagnement à domicile, en EHPAD, en structure pour le handicap ou en tant qu'AESH peut suffire à être recevable.",
      },
      {
        question: "Le DEAES obtenu par VAE permet-il d'évoluer ensuite vers le DEES ?",
        reponse:
          "Oui, le DEAES est souvent une première étape reconnue dans un parcours d'évolution vers des diplômes de niveau supérieur comme le DEES, notamment via des passerelles de formation ou une nouvelle VAE.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEAES ?",
  },

  deeje: {
    slug: "deeje",
    sigle: "DEEJE",
    nomComplet: "Diplôme d'État d'Éducateur de Jeunes Enfants",
    niveau: "Niveau 6 (Bac+3)",
    metaTitle: "VAE DEEJE : devenir Éducateur de Jeunes Enfants | VAESocial",
    metaDescription:
      "Obtenez le DEEJE par la VAE grâce à votre expérience auprès de jeunes enfants. Diagnostic d'éligibilité gratuit en 3 minutes, sans engagement.",
    heroSuffixe: "au DEEJE",
    heroIntro:
      "Auxiliaire de puériculture, animatrice ou faisant fonction en crèche, multi-accueil ou PMI : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEEJE est un diplôme d'État de niveau 6 (Bac+3) qui atteste de la capacité à accompagner le développement d'enfants de la naissance à 7 ans, en crèche, en PMI ou en établissement spécialisé. Par la VAE, votre expérience en structure petite enfance peut suffire à le valider, sans reprendre une formation complète.",
    publicIntro:
      "Vous travaillez déjà auprès de jeunes enfants ? Votre expérience peut être recevable pour une VAE DEEJE.",
    publicConcerne: [
      {
        titre: "Vous êtes auxiliaire de puériculture",
        texte:
          "Votre pratique quotidienne en crèche ou en structure petite enfance couvre une large part du référentiel du DEEJE, un diplôme de niveau supérieur.",
      },
      {
        titre: "Vous êtes assistant·e maternel·le agréé·e",
        texte:
          "Une expérience significative d'accompagnement du jeune enfant à domicile peut être valorisée dans le dossier de VAE.",
      },
      {
        titre: "Vous travaillez en crèche sans le diplôme d'État",
        texte:
          "Animateur·rice petite enfance, professionnel·le en crèche collective, familiale ou en halte-garderie : votre expérience reste votre meilleur argument.",
      },
    ],
    publicChips: [["Auxiliaire de puériculture", "Crèche"], ["Assistant·e maternel·le", "À domicile"], ["Crèche collective", "Crèche familiale", "Halte-garderie"]],
    debouchesIntro:
      "Le DEEJE ouvre principalement des postes dans les collectivités territoriales et le secteur de la petite enfance — au plus près des tout-petits :",
    debouches: [
      {
        icon: "🧸",
        texte:
          "Crèches collectives et familiales, haltes-garderies — accompagner l'éveil des tout-petits, jour après jour, dans leurs premières découvertes.",
      },
      {
        icon: "👶",
        texte:
          "Services de Protection Maternelle et Infantile (PMI) — un rôle de prévention et de soutien précieux auprès des familles.",
      },
      {
        icon: "🏥",
        texte:
          "CMPP et établissements médico-sociaux pour jeunes enfants — accompagner les enfants qui en ont le plus besoin.",
      },
      {
        icon: "🏛️",
        texte:
          "Mairies et collectivités territoriales — le principal recruteur du secteur, avec des postes stables et évolutifs.",
      },
    ],
    debouchesConclusion:
      "🌟 Chaque jour, contribuer à poser les toutes premières bases du développement d'un enfant : peu de métiers offrent un impact aussi concret.",
    noteReferentiel:
      "Le référentiel du DEEJE évolue à partir de septembre 2026 (décret du 6 octobre 2025) : les personnes déjà engagées dans un parcours avant cette date continuent sous l'ancien référentiel jusqu'à la session 2028. Nous vérifions avec vous quel référentiel s'applique à votre situation.",
    faq: [
      {
        question: "Quel est le niveau du DEEJE ?",
        reponse:
          "Le DEEJE est un diplôme d'État de niveau 6 (Bac+3), au même niveau que le DEES, spécialisé sur l'accompagnement des enfants de la naissance à 7 ans.",
      },
      {
        question: "Le référentiel du DEEJE change-t-il en 2026 ?",
        reponse:
          "Oui, un nouveau référentiel entre en vigueur en septembre 2026. Les candidats déjà engagés dans un parcours avant cette date restent toutefois sous l'ancien référentiel jusqu'à la session 2028. Nous faisons le point avec vous sur la version applicable à votre dossier.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEEJE en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience en crèche, en tant qu'assistant·e maternel·le ou auxiliaire de puériculture peut suffire à être recevable, quelle que soit sa durée.",
      },
      {
        question: "Où travaille-t-on après un DEEJE ?",
        reponse:
          "Principalement en crèche (collective ou familiale), en service de PMI, en établissement médico-social pour jeunes enfants, ou dans une collectivité territoriale — les mairies étant l'un des principaux recruteurs du secteur.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEEJE ?",
  },

  deme: {
    slug: "deme",
    sigle: "DEME",
    nomComplet: "Diplôme d'État de Moniteur-Éducateur",
    niveau: "Niveau 4 (Bac)",
    metaTitle: "VAE DEME : Moniteur-Éducateur par expérience | VAESocial",
    metaDescription:
      "Obtenez le DEME par la VAE grâce à votre expérience professionnelle. Aucune durée minimale exigée depuis 2024. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEME",
    heroIntro:
      "AES, surveillant de nuit ou faisant fonction de moniteur-éducateur en foyer, IME, ESAT ou MECS : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEME est un diplôme d'État de niveau 4 (équivalent Bac) qui atteste de la capacité à accompagner au quotidien des personnes en difficulté sociale ou en situation de handicap, en appui de l'éducateur spécialisé. Par la VAE, votre expérience de terrain en IME, ESAT, MAS ou MECS peut suffire à le valider, sans reprendre une formation complète.",
    publicIntro:
      "Vous accompagnez déjà des personnes en difficulté au quotidien ? Votre expérience peut être recevable pour une VAE DEME.",
    publicConcerne: [
      {
        titre: "Vous êtes AES ou AMP",
        texte:
          "Votre pratique quotidienne d'accompagnement couvre une bonne partie du référentiel du DEME, un diplôme de niveau supérieur.",
      },
      {
        titre: "Vous travaillez dans le champ du handicap",
        texte:
          "ESAT, MAS, IME : votre expérience de l'accompagnement éducatif et social peut être directement valorisée dans le dossier.",
      },
      {
        titre: "Vous exercez en protection de l'enfance ou en prévention",
        texte:
          "MECS, prévention spécialisée, insertion sociale : votre pratique de terrain reste votre meilleur argument pour obtenir le DEME.",
      },
    ],
    publicChips: [["AES", "AMP"], ["ESAT", "MAS", "IME"], ["MECS", "Prévention spécialisée", "Insertion sociale"]],
    debouchesIntro:
      "Le DEME ouvre principalement des postes dans le secteur privé associatif (80 % des recrutements), avec un taux d'insertion professionnelle élevé — et des terrains d'action très concrets :",
    debouches: [
      {
        icon: "🧩",
        texte:
          "Handicap : ESAT, MAS, IME — un accompagnement au plus près du quotidien, en appui direct de l'éducateur spécialisé.",
      },
      {
        icon: "🛡️",
        texte:
          "Protection de l'enfance : MECS, prévention spécialisée — être un repère stable pour des jeunes qui en ont besoin.",
      },
      {
        icon: "🏥",
        texte:
          "Secteur de la santé : établissements hospitaliers — accompagner des patients au-delà du seul soin médical.",
      },
      {
        icon: "🌱",
        texte:
          "Insertion sociale et professionnelle — aider concrètement des personnes à reprendre pied dans leur parcours de vie.",
      },
    ],
    debouchesConclusion:
      "🌟 Avec un taux d'insertion professionnelle d'environ 94 %, le DEME est l'un des diplômes du secteur qui débouche le plus vite sur un vrai métier.",
    faq: [
      {
        question: "Quel est le niveau du DEME ?",
        reponse:
          "Le DEME est un diplôme d'État de niveau 4, équivalent au baccalauréat, qui forme à l'accompagnement éducatif au quotidien en appui de l'éducateur spécialisé.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEME en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience en ESAT, IME, MAS, MECS ou en prévention spécialisée peut suffire à être recevable, quelle que soit sa durée.",
      },
      {
        question: "Quel est le taux d'insertion professionnelle après un DEME ?",
        reponse:
          "Le secteur affiche un taux d'insertion professionnelle élevé, autour de 94 %, le secteur privé associatif concentrant environ 80 % des recrutements.",
      },
      {
        question: "Le DEME permet-il ensuite d'évoluer vers le DEES ?",
        reponse:
          "Oui, de nombreux moniteurs-éducateurs poursuivent leur parcours vers le DEES, diplôme de niveau supérieur, soit par la formation, soit par une nouvelle VAE une fois leur expérience enrichie.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEME ?",
  },

  // ---------------------------------------------------------------------
  // DEAP — ajouté le 03/09/2026.
  //
  // Faits vérifiés le 03/09/2026 sur France Compétences (fiche RNCP40743,
  // "DE - Auxiliaire de puériculture") : fiche ACTIVE, enregistrée du
  // 01/09/2025 au 01/09/2029, NIVEAU 4, voie "Par expérience" (VAE) ouverte,
  // certificateur Ministère de la Santé et de la Prévention.
  //
  // Rien d'autre n'est affirmé ici : aucun taux d'insertion, aucun salaire,
  // aucun pourcentage d'employeurs — ces chiffres n'ont pas été vérifiés pour
  // ce diplôme et n'ont donc rien à faire sur la page (règle "real data only").
  // ---------------------------------------------------------------------
  "auxiliaire-puericulture": {
    slug: "auxiliaire-puericulture",
    sigle: "DEAP",
    nomComplet: "Diplôme d'État d'Auxiliaire de Puériculture",
    niveau: "Niveau 4 (Bac)",
    theme: "rose",
    metaTitle: "VAE Auxiliaire de Puériculture (DEAP) | VAESocial",
    metaDescription:
      "Obtenez le diplôme d'État d'auxiliaire de puériculture par la VAE grâce à votre expérience auprès des jeunes enfants. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEAP",
    heroIntro:
      "Agent de crèche, assistante maternelle, ASH ou aide-soignante en pédiatrie ou en maternité : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEAP est un diplôme d'État de niveau 4 (équivalent Bac) qui atteste de la capacité à prendre soin de l'enfant de la naissance à l'adolescence et à accompagner sa famille, en maternité, en service de pédiatrie, en PMI ou en structure d'accueil du jeune enfant. La validation des acquis de l'expérience est une voie d'accès officielle à ce diplôme : votre pratique quotidienne des soins et de l'éveil du jeune enfant peut suffire à le valider, sans reprendre une formation complète.",
    publicIntro:
      "Vous vous occupez déjà d'enfants au quotidien, sans avoir le diplôme d'État ? Votre expérience peut être recevable pour une VAE DEAP.",
    publicConcerne: [
      {
        titre: "Vous travaillez en crèche ou en multi-accueil",
        texte:
          "Agente de crèche, animatrice petite enfance, professionnelle en micro-crèche ou en halte-garderie : les soins, les repas, le change, l'éveil et la surveillance que vous assurez chaque jour sont au cœur du référentiel du DEAP.",
      },
      {
        titre: "Vous êtes assistante maternelle ou garde d'enfants",
        texte:
          "Une expérience suivie auprès de jeunes enfants à domicile, agréée ou en emploi direct, peut être valorisée dans le dossier — c'est la nature des missions qui compte, pas le lieu d'exercice.",
      },
      {
        titre: "Vous exercez en milieu hospitalier auprès d'enfants",
        texte:
          "Agente des services hospitaliers, aide-soignante ou faisant fonction en maternité, en néonatalogie ou en pédiatrie : votre pratique des soins au jeune enfant est directement transposable.",
      },
    ],
    publicChips: [["Crèche", "Micro-crèche", "Halte-garderie"], ["Assistante maternelle", "Garde d'enfants"], ["Maternité", "Néonatalogie", "Pédiatrie"]],
    debouchesIntro:
      "Le DEAP est un diplôme d'État délivré par le ministère chargé de la Santé, et il ouvre des portes dans deux univers très différents — le soin et l'accueil du jeune enfant :",
    debouches: [
      {
        icon: "🍼",
        texte:
          "Maternité et néonatalogie — accompagner les tout premiers jours d'un enfant et rassurer des parents qui découvrent tout en même temps.",
      },
      {
        icon: "🏥",
        texte:
          "Services de pédiatrie — prendre soin d'enfants hospitalisés et être, pour eux, le visage rassurant du quotidien.",
      },
      {
        icon: "🧸",
        texte:
          "Crèches, micro-crèches, multi-accueils et haltes-garderies — l'éveil, les soins et la sécurité affective des tout-petits, jour après jour.",
      },
      {
        icon: "👶",
        texte:
          "Services de Protection Maternelle et Infantile (PMI) — la prévention et le soutien aux familles, au plus près de leur réalité.",
      },
    ],
    debouchesConclusion:
      "🌟 Un diplôme d'État reconnu à l'hôpital comme en crèche : peu de métiers de la petite enfance offrent autant de terrains possibles avec un seul diplôme.",
    noteReferentiel:
      "Le DEAP est délivré par le ministère chargé de la Santé. Les modalités du parcours VAE (recevabilité, épreuves complémentaires éventuelles) sont fixées par le certificateur et peuvent évoluer : nous vérifions avec vous les conditions exactes qui s'appliquent à votre dossier avant tout engagement.",
    faq: [
      {
        question: "Peut-on vraiment obtenir le DEAP par la VAE ?",
        reponse:
          "Oui. La voie « par expérience » est officiellement ouverte sur la fiche du diplôme d'État d'auxiliaire de puériculture au Répertoire national des certifications professionnelles. C'est une voie d'accès à part entière, au même titre que la formation initiale ou l'apprentissage.",
      },
      {
        question: "Quel est le niveau du DEAP ?",
        reponse:
          "Le DEAP est un diplôme d'État de niveau 4, équivalent au baccalauréat. Il est délivré par le ministère chargé de la Santé et de la Prévention.",
      },
      {
        question: "Le diplôme obtenu par VAE est-il le même qu'en formation ?",
        reponse:
          "Oui. C'est le même diplôme d'État, avec les mêmes droits et les mêmes possibilités d'exercice. La voie d'obtention n'est pas mentionnée sur le diplôme.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEAP en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience — en crèche, à domicile, en maternité, en pédiatrie ou en PMI — corresponde aux activités de soin et d'accompagnement du jeune enfant évaluées dans le référentiel du diplôme. C'est précisément ce que le diagnostic gratuit vérifie.",
      },
      {
        question: "Faut-il arrêter de travailler pendant la VAE ?",
        reponse:
          "Non. L'accompagnement se fait à distance, en visio, avec des séances organisées autour de votre emploi du temps. C'est d'ailleurs votre activité en cours qui alimente votre dossier.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEAP ?",
  },

  // Ajouté le 05/10/2026. Contenu vérifié sur la fiche France Compétences
  // RNCP41748 (niveau 6, enregistrée du 01/09/2026 au 31/08/2031, 4 blocs de
  // compétences, voie « par expérience » ouverte). Les intitulés des blocs sont
  // recopiés mot pour mot de la fiche. Aucun chiffre ni témoignage inventé.
  "assistant-service-social": {
    slug: "assistant-service-social",
    sigle: "DEASS",
    nomComplet: "Diplôme d'État d'Assistant de Service Social",
    niveau: "Niveau 6 (Bac+3)",
    metaTitle: "VAE Assistant de Service Social (DEASS) | VAESocial",
    metaDescription:
      "Obtenez le diplôme d'État d'assistant de service social (DEASS) par la VAE grâce à votre expérience d'accompagnement social. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEASS",
    heroIntro:
      "Intervenant social en CCAS, hôpital, association ou mission locale, avec ou sans diplôme du travail social : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEASS est un diplôme d'État de niveau 6 (Bac+3) qui atteste de la capacité à concevoir et conduire un accompagnement social favorisant l'insertion et l'amélioration des conditions de vie des personnes, à soutenir leur autodétermination et à travailler avec les partenaires du territoire. La validation des acquis de l'expérience est une voie d'accès officielle à ce diplôme : votre pratique de terrain peut être valorisée dans un dossier, sans reprendre une formation complète.",
    publicIntro:
      "Vous accompagnez déjà des personnes ou des familles dans leurs démarches et leurs difficultés sociales, sans avoir le diplôme d'État ? Votre expérience peut être recevable pour une VAE DEASS.",
    publicConcerne: [
      {
        titre: "Vous accompagnez l'accès aux droits",
        texte:
          "Accueil et orientation du public, instruction de demandes d'aide, accompagnement dans les démarches de logement, de budget, de santé ou de famille : c'est le cœur de l'accompagnement social évalué par le référentiel.",
      },
      {
        titre: "Vous travaillez en collectivité ou en organisme social",
        texte:
          "Conseil départemental, CCAS, mairie, mission locale, organisme de sécurité sociale : ces structures emploient des assistants de service social, et votre pratique de terrain peut être valorisée dans le dossier.",
      },
      {
        titre: "Vous exercez en structure sociale, médico-sociale ou à l'hôpital",
        texte:
          "Hébergement, établissement médico-social, EHPAD, hôpital : si vous y assurez un accompagnement social des personnes sans avoir le titre d'assistant de service social, la VAE reconnaît votre expérience.",
      },
    ],
    publicChips: [["Accès aux droits", "Logement", "Budget", "Santé"], ["Conseil départemental", "CCAS", "Mairie", "Mission locale"], ["Hébergement", "EHPAD", "Hôpital"]],
    debouchesIntro:
      "Le DEASS ouvre l'accès au métier d'assistant de service social, exercé dans le champ de l'action sociale et médico-sociale, chez des employeurs très variés :",
    debouches: [
      {
        icon: "🏛️",
        texte:
          "Collectivités : conseil départemental, centres d'action sociale (CCAS) et communes — accompagner les habitants dans leurs démarches et leurs difficultés du quotidien.",
      },
      {
        icon: "🏥",
        texte:
          "Hôpitaux et établissements médico-sociaux, dont les EHPAD — accompagner les patients, les résidents et leurs proches dans leurs droits et leur projet.",
      },
      {
        icon: "🤝",
        texte:
          "Missions locales et organismes de sécurité sociale — soutenir l'insertion et l'accès aux droits des jeunes et des assurés.",
      },
      {
        icon: "🏫",
        texte:
          "Écoles et entreprises — accompagner des élèves, des familles ou des salariés au sein d'un établissement scolaire ou d'une entreprise.",
      },
    ],
    debouchesConclusion:
      "🌟 Un seul diplôme d'État pour exercer en collectivité, à l'hôpital, en structure médico-sociale ou en entreprise.",
    noteReferentiel:
      "Le diplôme d'assistant de service social dispose d'un nouveau référentiel de compétences depuis le 1er septembre 2026 (quatre blocs de compétences). Les modalités exactes du dépôt de votre dossier dépendent du certificateur : nous vérifions avec vous la procédure qui s'applique à votre situation avant tout engagement.",
    faq: [
      {
        question: "Peut-on obtenir le DEASS par la VAE ?",
        reponse:
          "Oui. La voie « par expérience » est ouverte sur la fiche du diplôme d'État d'assistant de service social au Répertoire national des certifications professionnelles. Le jury réunit notamment un enseignant-chercheur, des représentants de l'État, des formateurs et des professionnels de terrain, employeurs comme salariés.",
      },
      {
        question: "Quel est le niveau du DEASS ?",
        reponse:
          "Le DEASS est un diplôme d'État de niveau 6, équivalent à une licence (Bac+3). Obtenu par la VAE, c'est le même diplôme que par la formation initiale, avec les mêmes droits.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEASS en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience — professionnelle, bénévole ou en tant qu'aidant — corresponde aux missions d'accompagnement social évaluées dans le référentiel du diplôme. C'est précisément ce que le diagnostic gratuit vérifie.",
      },
      {
        question: "Quels sont les blocs de compétences du DEASS ?",
        reponse:
          "Le référentiel comporte quatre blocs : concevoir et conduire un accompagnement social favorisant l'insertion sociale et l'amélioration des conditions de vie ; favoriser et soutenir l'autodétermination des individus et des collectifs dans un but d'émancipation ; s'inscrire dans une dynamique partenariale et territoriale en lien avec la mise en œuvre des politiques de cohésion sociale ; s'inscrire dans un contexte professionnel du travail social.",
      },
      {
        question: "Faut-il arrêter de travailler pendant la VAE ?",
        reponse:
          "Non. L'accompagnement se fait à distance, en visio, avec des séances organisées autour de votre emploi du temps. C'est d'ailleurs votre activité en cours qui alimente votre dossier.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEASS ?",
  },

  // Ajouté le 05/10/2026. Contenu vérifié sur la fiche France Compétences
  // RNCP36836 (niveau 6, parcours depuis le 01/09/2022, enregistrement jusqu'au
  // 31/08/2027, 4 blocs de compétences, emplois et secteurs listés sur la fiche).
  // Les intitulés des blocs sont recopiés de la fiche. Aucun chiffre ni
  // témoignage inventé. Le niveau est affiché « Niveau 6 » sans équivalence en
  // « Bac+ » : les sources consultées divergeaient (Bac+3 / Bac+4).
  caferuis: {
    slug: "caferuis",
    sigle: "CAFERUIS",
    nomComplet:
      "Certificat d'aptitude aux fonctions d'encadrement et de responsable d'unité d'intervention sociale",
    niveau: "Niveau 6",
    metaTitle: "VAE CAFERUIS : cadre en intervention sociale | VAESocial",
    metaDescription:
      "Obtenez le CAFERUIS par la VAE grâce à votre expérience d'encadrement dans le social ou le médico-social. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au CAFERUIS",
    heroIntro:
      "Chef de service, coordinateur ou responsable d'unité faisant fonction en établissement social ou médico-social : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le CAFERUIS est un certificat de niveau 6 qui atteste de la capacité à piloter l'activité d'une unité d'intervention sociale, à manager une équipe, à gérer les volets administratif, logistique et budgétaire, et à contribuer au projet de l'établissement ou du service. Par la VAE, votre expérience de coordination ou d'encadrement — chef de service, responsable d'unité ou « faisant fonction » — peut être valorisée dans un dossier, sans reprendre une formation complète.",
    publicIntro:
      "Vous coordonnez déjà une équipe ou une unité dans le secteur social ou médico-social, avec ou sans le titre ? Votre expérience peut être recevable pour une VAE CAFERUIS.",
    publicConcerne: [
      {
        titre: "Vous êtes éducateur ou moniteur-éducateur et vous coordonnez l'équipe",
        texte:
          "Référent, coordinateur ou responsable d'équipe en plus de votre mission éducative : vous exercez déjà une partie des missions d'encadrement évaluées par le jury.",
      },
      {
        titre: "Vous faites fonction de chef de service",
        texte:
          "Vous pilotez une unité, organisez les plannings et suivez le budget sans avoir le certificat : la VAE reconnaît cette pratique de terrain.",
      },
      {
        titre: "Vous êtes adjoint de direction ou responsable de pôle",
        texte:
          "Vous managez des équipes et contribuez au projet de l'établissement : votre expérience peut être valorisée dans les quatre blocs du certificat.",
      },
    ],
    publicChips: [["Référent", "Coordinateur", "Responsable d'équipe"], ["Chef de service", "Plannings", "Budget"], ["Adjoint de direction", "Responsable de pôle"]],
    debouchesIntro:
      "Le CAFERUIS ouvre des postes d'encadrement dans l'action sociale et médico-sociale, comme ceux-ci :",
    debouches: [
      {
        icon: "🧭",
        texte:
          "Chef de service ou responsable d'unité — piloter l'activité d'une équipe au quotidien, dans un établissement ou un service.",
      },
      {
        icon: "🧩",
        texte:
          "Responsable de service éducatif ou social, cadre socio-éducatif — faire le lien entre la direction, les équipes et les personnes accompagnées.",
      },
      {
        icon: "🏢",
        texte:
          "Responsable de pôle ou adjoint de direction — contribuer au projet d'établissement et coordonner plusieurs unités.",
      },
      {
        icon: "🌍",
        texte:
          "Tous les champs de l'action sociale : protection de l'enfance, inclusion sociale, insertion professionnelle, handicap, hébergement et grand âge.",
      },
    ],
    debouchesConclusion:
      "🌟 Un seul certificat de niveau 6, valable dans tous les champs de l'action sociale et médico-sociale.",
    noteReferentiel:
      "Comme pour tout diplôme du travail social, les modalités du parcours VAE (recevabilité, calendrier de dépôt) sont fixées par le certificateur et peuvent évoluer : nous vérifions avec vous les conditions exactes qui s'appliquent à votre dossier avant tout engagement.",
    faq: [
      {
        question: "Peut-on obtenir le CAFERUIS par la VAE ?",
        reponse:
          "Oui. La voie « par expérience » est ouverte sur la fiche du CAFERUIS au Répertoire national des certifications professionnelles. Le préfet de région, ou son représentant, préside le jury, composé notamment de formateurs en travail social, de représentants de l'État et des collectivités et de professionnels de l'encadrement.",
      },
      {
        question: "Quel est le niveau du CAFERUIS ?",
        reponse:
          "Le CAFERUIS est enregistré au niveau 6 du Répertoire national des certifications professionnelles. Il atteste de compétences d'encadrement et de responsable d'unité d'intervention sociale.",
      },
      {
        question: "Quelle expérience faut-il pour viser le CAFERUIS en VAE ?",
        reponse:
          "Il faut justifier d'une expérience dans le secteur social, médico-social, éducatif, de la santé ou de l'économie sociale, et aucune durée minimale n'est exigée depuis la réforme de janvier 2024. Le jury évalue ensuite vos missions de pilotage, de management, de gestion et de contribution au projet d'établissement : ce sont elles qui comptent dans votre dossier.",
      },
      {
        question: "Quels sont les blocs de compétences du CAFERUIS ?",
        reponse:
          "Le référentiel comporte quatre blocs : piloter l'activité d'une unité d'intervention sociale ; manager et gérer les ressources humaines d'une unité d'intervention sociale ; gérer les volets administratif, logistique et budgétaire d'une unité d'intervention ; contribuer au projet d'établissement ou de service.",
      },
      {
        question: "Faut-il arrêter de travailler pendant la VAE ?",
        reponse:
          "Non. L'accompagnement se fait à distance, en visio, avec des séances organisées autour de votre emploi du temps. C'est d'ailleurs votre activité en cours qui alimente votre dossier.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au CAFERUIS ?",
  },

  // Ajouté le 13/10/2026. Faits repris de deux sources officielles : la fiche
  // RNCP41746 de France Compétences (niveau 6, quatre blocs, voies d'accès, jury,
  // parcours certifiants à partir du 01/09/2026, remplace la fiche RNCP37677) et la
  // fiche métier « Éducateur technique spécialisé » du ministère des Solidarités
  // (missions, lieux d'exercice, 180 ECTS). Rien d'autre : aucun chiffre de
  // salaire, de délai ou d'insertion propre au DEETS n'a été trouvé, donc aucun
  // n'est affiché.
  "educateur-technique-specialise": {
    slug: "educateur-technique-specialise",
    sigle: "DEETS",
    nomComplet: "Diplôme d'État d'Éducateur Technique Spécialisé",
    niveau: "Niveau 6 (grade licence)",
    metaTitle: "VAE éducateur technique spécialisé (DEETS) | VAESocial",
    metaDescription:
      "Obtenez le DEETS (éducateur technique spécialisé) par la VAE grâce à votre expérience en atelier, ESAT, IME ou chantier d'insertion. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEETS",
    heroIntro:
      "Moniteur d'atelier ou encadrant technique en ESAT, entreprise adaptée, IME ou chantier d'insertion : en 3 minutes, vous savez si votre parcours est recevable, et ce qu'il faut pour aller jusqu'au jury.",
    heroParagraphe:
      "Le DEETS est un diplôme d'État de niveau 6 (grade licence). L'éducateur technique spécialisé élabore des parcours d'insertion, met en œuvre des actions de formation professionnelle et assure l'encadrement technique d'activités professionnelles, au sein d'une équipe pluriprofessionnelle. Par la VAE, votre pratique de terrain — en ESAT, IME, entreprise adaptée ou chantier d'insertion — peut être valorisée dans un dossier, sans reprendre une formation complète.",
    publicIntro:
      "Vous transmettez déjà un savoir-faire technique à des personnes que vous accompagnez, avec ou sans le diplôme ? Votre expérience peut être recevable pour une VAE DEETS.",
    publicConcerne: [
      {
        titre: "Vous encadrez un atelier ou une activité de travail",
        texte:
          "En ESAT, en entreprise adaptée ou en atelier, vous organisez le travail, transmettez les gestes du métier et aidez chacun à tenir son rythme : c'est le cœur des missions évaluées par le jury.",
      },
      {
        titre: "Vous accompagnez des parcours d'insertion",
        texte:
          "Chantier d'insertion, IME, ITEP : vous évaluez les compétences de chaque personne, construisez avec elle un parcours d'apprentissage et l'accompagnez vers un emploi ou une formation.",
      },
      {
        titre: "Vous venez d'un métier technique et vous exercez sans le diplôme",
        texte:
          "Cuisine, espaces verts, menuiserie, entretien... vous avez un métier de base et vous encadrez aujourd'hui des personnes en atelier : votre double expérience, technique et éducative, est exactement ce que le diplôme reconnaît.",
      },
    ],
    publicChips: [["ESAT", "Entreprise adaptée", "Atelier"], ["Chantier d'insertion", "IME", "ITEP"], ["Métier de base", "Cuisine", "Espaces verts"]],
    debouchesIntro:
      "Le DEETS ouvre des postes d'encadrement technique et d'accompagnement éducatif dans le secteur public ou privé non lucratif, notamment :",
    debouches: [
      {
        icon: "🛠️",
        texte:
          "Travail adapté : ESAT, entreprise adaptée, atelier — encadrer l'activité de production d'une structure et accompagner chaque travailleur dans ses apprentissages et son parcours.",
      },
      {
        icon: "🌱",
        texte:
          "Handicap et jeunesse : IME, ITEP, centre éducatif fermé — transmettre un premier apprentissage professionnel à des enfants et des adolescents, en lien avec l'équipe éducative.",
      },
      {
        icon: "🧱",
        texte:
          "Insertion professionnelle : chantier d'insertion, atelier d'insertion — accompagner des personnes éloignées de l'emploi vers un poste ou une formation.",
      },
      {
        icon: "🤝",
        texte:
          "Autres structures : foyer de vie, entreprise, collectivité — des fonctions qui s'appuient sur les mêmes compétences : encadrer, évaluer, construire des parcours.",
      },
    ],
    debouchesConclusion:
      "🌟 Un diplôme de niveau 6 qui reconnaît à la fois votre savoir-faire technique et votre posture éducative.",
    noteReferentiel:
      "Le DEETS a un nouveau référentiel (fiche RNCP41746) dont les parcours certifiants débutent le 1er septembre 2026. Les modalités du parcours VAE (recevabilité, calendrier de dépôt) sont fixées par le certificateur et peuvent évoluer : nous vérifions avec vous les conditions exactes qui s'appliquent à votre dossier avant tout engagement.",
    referentiel: {
      titre: "Les quatre blocs de compétences du DEETS",
      intro:
        "Le référentiel du DEETS (fiche RNCP41746) s'organise en quatre blocs. Voici leurs intitulés officiels, et le type de situation professionnelle à repérer dans votre parcours pour chacun.",
      blocs: [
        {
          intitule:
            "Concevoir et conduire un accompagnement éducatif et technique spécialisé dans une visée d'insertion professionnelle",
          piste:
            "Une situation où vous avez conçu une activité ou un parcours d'apprentissage au poste de travail, pas seulement appliqué un planning.",
        },
        {
          intitule:
            "Favoriser et soutenir l'autodétermination des individus et des collectifs dans un but d'émancipation",
          piste:
            "Une situation où la personne accompagnée a choisi ou construit avec vous son parcours de travail.",
        },
        {
          intitule:
            "S'inscrire dans une dynamique partenariale et territoriale en lien avec la mise en œuvre des politiques de cohésion sociale",
          piste:
            "Une situation de travail avec des partenaires extérieurs à votre équipe : entreprises, prescripteurs, famille, collectivité.",
        },
        {
          intitule: "S'inscrire dans un contexte professionnel du travail social",
          piste:
            "Une situation qui montre votre place dans l'institution et le recul que vous prenez sur votre pratique.",
        },
      ],
      sourceLabel: "Fiche RNCP41746 du DEETS, France Compétences",
      sourceUrl: "https://www.francecompetences.fr/recherche/rncp/41746/",
    },
    faq: [
      {
        question: "Peut-on obtenir le DEETS par la VAE ?",
        reponse:
          "Oui. La voie « par expérience » est ouverte sur la fiche du diplôme au Répertoire national des certifications professionnelles. Le jury est présidé par un enseignant-chercheur ; le préfet de région et le recteur d'académie, ou leurs représentants, en sont vice-présidents, et il compte des formateurs ainsi que des professionnels qualifiés, employeurs et salariés.",
      },
      {
        question: "Quel est le niveau du DEETS ?",
        reponse:
          "Le DEETS est un diplôme d'État de niveau 6 (grade licence), qui correspond à 180 crédits ECTS en formation. Obtenu par la VAE, c'est le même diplôme que par la formation.",
      },
      {
        question: "Quelle expérience faut-il pour viser le DEETS en VAE ?",
        reponse:
          "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience corresponde aux missions évaluées : encadrer des activités professionnelles, concevoir des parcours d'apprentissage et d'insertion, accompagner des personnes individuellement et en groupe.",
      },
      {
        question: "Quels sont les blocs de compétences du DEETS ?",
        reponse:
          "Le référentiel comporte quatre blocs : concevoir et conduire un accompagnement éducatif et technique spécialisé dans une visée d'insertion professionnelle ; favoriser et soutenir l'autodétermination des individus et des collectifs dans un but d'émancipation ; s'inscrire dans une dynamique partenariale et territoriale en lien avec la mise en œuvre des politiques de cohésion sociale ; s'inscrire dans un contexte professionnel du travail social.",
      },
      {
        question: "Quelle différence entre le DEETS et le DEES ?",
        reponse:
          "Les deux sont des diplômes d'État de niveau 6 du travail social. Le DEES est centré sur l'accompagnement éducatif ; le DEETS s'appuie en plus sur une activité professionnelle : l'éducateur technique spécialisé encadre des apprentissages, évalue les compétences et construit des parcours d'insertion. Si votre quotidien est un atelier ou une production, c'est plutôt le DEETS. Nous vous aidons à trancher lors du premier échange.",
      },
      {
        question: "Faut-il arrêter de travailler pendant la VAE ?",
        reponse:
          "Non. L'accompagnement se fait à distance, en visio, avec des séances organisées autour de votre emploi du temps. C'est d'ailleurs votre activité en cours qui alimente votre dossier.",
      },
    ],
    ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEETS ?",
  },
};
