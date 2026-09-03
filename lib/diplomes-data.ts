import type { FaqItem } from "@/components/FaqAccordion";
import type { DiplomeSlug } from "@/lib/site-data";

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
  sigle: string;
  nomComplet: string;
  niveau: string;
  metaTitle: string;
  metaDescription: string;
  heroSuffixe: string; // ex. "au DEES" — inséré après "éligible" dans le H1
  heroIntro: string;
  heroParagraphe: string;
  publicIntro: string;
  publicConcerne: { titre: string; texte: string }[];
  debouchesIntro: string;
  debouches: { icon: string; texte: string }[];
  debouchesConclusion: string;
  noteReferentiel?: string;
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
      "✨ Votre expérience auprès d'enfants, d'adolescents ou d'adultes en difficulté vaut le DEES. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
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
      "✨ Votre expérience auprès de personnes âgées, en situation de handicap ou en perte d'autonomie vaut le DEAES. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
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
      "✨ Votre expérience auprès de jeunes enfants vaut le DEEJE. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
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
      "✨ Votre expérience auprès de personnes en difficulté sociale ou en situation de handicap vaut le DEME. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
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
    metaTitle: "VAE Auxiliaire de Puériculture (DEAP) par expérience | VAESocial",
    metaDescription:
      "Obtenez le diplôme d'État d'auxiliaire de puériculture par la VAE grâce à votre expérience auprès des jeunes enfants. Diagnostic gratuit en 3 minutes.",
    heroSuffixe: "au DEAP",
    heroIntro:
      "✨ Votre expérience auprès des tout-petits vaut le diplôme d'État d'auxiliaire de puériculture. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
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
};
