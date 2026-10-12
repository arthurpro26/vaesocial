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

import type { DiplomeSlug } from "@/lib/site-data";

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
  // Date de dernière mise à jour de fond (ISO). Absente = datePublished. Utilisée
  // dans le JSON-LD et le sitemap : ne la renseigner que pour une vraie mise à jour.
  dateModified?: string;
  // Diplômes concernés. Pilote les liens internes automatiques : bloc « Pour aller
  // plus loin » en bas de l'article, et section « Nos guides » sur la page du
  // diplôme. Absent = article générique sur la VAE (diplômes par défaut, voir
  // DEFAULT_RELATED_DIPLOMES plus bas).
  diplomes?: DiplomeSlug[];
  // Sources officielles citées, avec lien : affichées en bas de l'article et reprises
  // dans le JSON-LD (citation). Remplace le paragraphe « Sources consultées » écrit à
  // la main. Obligatoire pour tout nouvel article (vérifié par `npm run seo`).
  sources?: { label: string; url?: string }[];
  // Date à laquelle les faits de l'article ont été vérifiés sur ces sources (ISO).
  verifiedOn?: string;
  content: ArticleBlock[];
};

export const BLOG_ARTICLES: BlogArticle[] = [
  // ⚠️ STRATÉGIE ÉDITORIALE — décision du 9 août 2026, après vérification chiffrée.
  // Les requêtes informationnelles génériques (« livret 2 vae », « recevabilité vae »,
  // « combien de temps dure une vae »…) pèsent ~5 700 recherches/mois en France, à
  // concurrence FAIBLE. Les mêmes intentions avec le nom du diplôme (« livret 2 éducateur
  // spécialisé ») ne pèsent que ~130 recherches/mois — 44 fois moins : les candidats ne
  // tapent pas leur diplôme quand ils cherchent de l'aide sur leur dossier.
  // D'où la règle : on se positionne sur le GÉNÉRIQUE pour capter le trafic, mais TOUS les
  // exemples viennent du secteur social et médico-social. C'est le contenu qui trie les
  // lecteurs, pas le référencement. Un lecteur hors secteur ne coûte rien ; un lecteur du
  // secteur se reconnaît immédiatement et convertit.
  {
    slug: "livret-2-vae-guide-complet",
    title: "Livret 2 VAE : le guide complet pour le remplir (et ne pas se décourager)",
    metaTitle: "Livret 2 VAE : comment le remplir — guide complet 2026",
    metaDescription:
      "Le livret 2, ou dossier de validation, décourage beaucoup de candidats. Comment le structurer, combien de situations décrire, quelles erreurs éviter.",
    excerpt:
      "C'est l'étape qui demande le plus de temps : plusieurs mois de rédaction, selon France VAE. Pourtant, le livret 2 n'est pas un exercice de rédaction : c'est un travail de preuve. Voici comment s'y prendre.",
    category: "Méthode",
    datePublished: "2026-08-09",
    dateModified: "2026-10-12",
    readingTime: "7 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "France VAE : rédiger son dossier de validation", url: "https://vae.gouv.fr/savoir-plus/articles/rediger-dossier-validation/" },
      { label: "France VAE : les étapes du parcours", url: "https://vae.gouv.fr/savoir-plus/articles/etapes-parcours-france-vae/" },
    ],
    content: [
      {
        type: "p",
        text: "Le livret 2 est le moment où une VAE se gagne ou se perd. La recevabilité, elle, ne valide qu'une chose : que vous avez le droit de vous présenter. Le livret 2, lui, est le document sur lequel le jury va réellement décider si vous obtenez votre diplôme. Et c'est aussi l'étape la plus longue : France VAE indique une durée moyenne de rédaction de 4 à 6 mois, pour 2 à 4 heures de travail personnel par semaine. On y bute rarement par manque de compétences, plus souvent parce qu'on ne sait pas quoi écrire ni comment.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Depuis la réforme engagée en 2022 et la mise en place du portail France VAE, le vocabulaire officiel a changé : le livret 1 est devenu le « dossier de faisabilité », et le livret 2 le « dossier de validation ». Les deux appellations coexistent encore partout, y compris chez les certificateurs. Si vous lisez « dossier de validation », il s'agit bien du livret 2.",
      },
      {
        type: "h2",
        text: "Ce que le jury lit vraiment",
      },
      {
        type: "p",
        text: "L'erreur la plus fréquente est de raconter son parcours. Un jury de VAE ne lit pas une biographie professionnelle : il cherche, dans ce que vous décrivez, les compétences inscrites au référentiel du diplôme. Chaque paragraphe que vous écrivez doit pouvoir être rattaché à une compétence attendue. Si un passage ne prouve rien, il ne sert à rien — même s'il est bien écrit et sincère.",
      },
      {
        type: "p",
        text: "Concrètement, le dossier de validation vous demande de décrire des activités et des situations professionnelles vécues, en montrant comment elles couvrent chacun des blocs de compétences du diplôme, et de les analyser. France VAE ne fixe pas de nombre unique de situations : il dépend du diplôme et de la trame fournie par le certificateur. Le mot important est « analyser ». Décrire ce que vous avez fait ne suffit pas. Il faut expliquer pourquoi vous l'avez fait ainsi, ce que vous avez pris en compte, ce que vous avez ajusté, et ce que vous en avez tiré.",
      },
      {
        type: "p",
        text: "France VAE rappelle quelques règles de forme : écrire à la première personne, au présent, avec des verbes d'action précis et des phrases courtes, et expliciter le vocabulaire technique plutôt que le jargon de votre structure. Le dossier se termine par une attestation sur l'honneur : un contenu plagié ou frauduleux peut entraîner le refus ou le retrait de la certification.",
      },
      {
        type: "h2",
        text: "La différence entre décrire et prouver",
      },
      {
        type: "p",
        text: "Prenons un exemple concret dans le secteur social. Écrire « j'accompagne des adultes en situation de handicap dans un foyer de vie » ne prouve rien : c'est une fiche de poste. En revanche, décrire une situation précise — l'élaboration du projet individualisé d'un résident, la façon dont vous avez recueilli ses attentes malgré des difficultés de communication, les objectifs que vous avez posés avec l'équipe, la mise en place d'un atelier adapté, puis la manière dont vous avez réévalué le projet six mois plus tard — voilà qui démontre une compétence.",
      },
      {
        type: "p",
        text: "La règle est simple : une situation, un contexte, des personnes réelles, une difficulté rencontrée, des choix que vous avez faits, et un résultat. Le jury doit pouvoir vous imaginer en train de travailler.",
      },
      {
        type: "cta",
        titre: "Vous ne savez pas si votre expérience suffit ?",
        texte:
          "C'est la question qui bloque le plus de candidats avant même de commencer. En quelques minutes, dites-nous ce que vous faites au quotidien : nous vous disons franchement si votre parcours correspond au diplôme visé, et lequel serait le plus adapté. C'est gratuit et sans engagement.",
        cta: "Tester mon éligibilité gratuitement",
      },
      {
        type: "h2",
        text: "Comment choisir les situations à décrire",
      },
      {
        type: "p",
        text: "Le réflexe naturel est de choisir ses plus belles réussites. C'est rarement le bon critère. Ce qu'il faut choisir, ce sont les situations qui couvrent le plus largement le référentiel — quitte à retenir une situation ordinaire mais riche plutôt qu'un moment exceptionnel mais étroit.",
      },
      {
        type: "p",
        text: "Une méthode qui fonctionne : imprimez le référentiel du diplôme, listez les compétences attendues, puis en face de chacune, notez une situation vécue. Les compétences qui restent sans situation en face sont vos angles morts. C'est là qu'il faut chercher dans votre mémoire, ou parfois reconnaître qu'il vous manque une expérience — et le jury préférera toujours une lacune assumée à une compétence inventée.",
      },
      {
        type: "ul",
        items: [
          "Privilégiez les situations où vous avez décidé quelque chose, pas seulement exécuté.",
          "Choisissez des situations récentes : vous vous en souviendrez précisément, et elles reflètent votre pratique actuelle.",
          "Variez les contextes — travail direct, coordination en équipe, lien avec les familles ou les partenaires extérieurs.",
          "Gardez les traces : comptes rendus, projets écrits, plannings d'activités. Ils vous aideront à retrouver les détails.",
        ],
      },
      {
        type: "h2",
        text: "Les erreurs qui coûtent une validation partielle",
      },
      {
        type: "p",
        text: "Une validation partielle signifie que le jury reconnaît une partie de vos compétences, mais pas toutes. Ce n'est pas un échec — vous conservez le bénéfice des blocs validés — mais c'est souvent évitable. Trois causes reviennent constamment.",
      },
      {
        type: "p",
        text: "La première : un dossier qui reste au niveau du « nous ». Beaucoup de professionnels du social écrivent naturellement au nom de l'équipe, par culture du collectif. Mais le jury valide une personne, pas une équipe. Il faut assumer le « je », même si cela met mal à l'aise.",
      },
      {
        type: "p",
        text: "La deuxième : l'absence de recul. Décrire correctement ce que l'on fait sans jamais interroger ses propres choix donne un dossier plat. Le jury cherche un professionnel capable d'analyser sa pratique, pas seulement de l'exercer.",
      },
      {
        type: "p",
        text: "La troisième : un référentiel couvert de façon déséquilibrée. Trois situations magnifiques sur le même domaine de compétences, et rien sur les autres. Le jury n'a alors aucun élément pour valider les blocs manquants.",
      },
      {
        type: "callout",
        icon: "⚠️",
        text: "Ne recopiez jamais un livret 2 trouvé en ligne, même « pour vous inspirer de la structure ». Les jurys lisent des centaines de dossiers et repèrent immédiatement les tournures qui circulent. Un dossier qui sonne faux est bien plus pénalisant qu'un dossier maladroit mais authentique.",
      },
      {
        type: "h2",
        text: "Combien de temps y consacrer",
      },
      {
        type: "p",
        text: "Il n'existe pas de durée officielle : cela dépend du diplôme, de votre aisance à l'écrit et du temps dont vous disposez. Ce qui est constant, en revanche, c'est que le livret 2 ne s'écrit pas d'un trait. Il se construit par allers-retours — on décrit une situation, on la relit une semaine plus tard, on s'aperçoit qu'on a oublié l'essentiel, on reprend.",
      },
      {
        type: "p",
        text: "C'est précisément pour cette raison que l'accompagnement existe et qu'il est finançable. Non pas pour écrire à votre place — c'est interdit, et un jury le verrait — mais pour vous poser les bonnes questions, repérer ce qui manque au regard du référentiel, et vous éviter de découvrir un angle mort le jour du passage devant le jury.",
      },
      {
        type: "cta",
        titre: "Un accompagnement pour ne pas rester seul face au dossier",
        texte:
          "Nous accompagnons exclusivement les professionnels du secteur social et médico-social — éducateur spécialisé, moniteur-éducateur, accompagnant éducatif et social. Un premier échange gratuit permet de faire le point sur votre situation, votre expérience et vos possibilités de financement.",
        cta: "Demander mon prédiagnostic gratuit",
      },
    ],
  },
  {
    slug: "cpf-reste-a-charge-2026",
    title: "CPF et VAE en 2026 : le reste à charge passe à 150 €, ce qui change pour vous",
    metaTitle: "CPF 2026 : 150 € de reste à charge pour la VAE",
    metaDescription:
      "Depuis le 2 avril 2026, la participation obligatoire CPF passe de 103,20 € à 150 €. Qui est concerné, qui est exonéré, et l'impact sur votre VAE.",
    excerpt:
      "Le reste à charge CPF a augmenté deux fois en 2026 : 103,20 € en janvier, puis 150 € depuis le 2 avril. Voici ce que ça change concrètement pour financer votre VAE.",
    category: "Financement",
    datePublished: "2026-08-03",
    dateModified: "2026-10-12",
    readingTime: "4 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "Service-Public.gouv.fr : CPF, la participation forfaitaire obligatoire augmente", url: "https://www.service-public.gouv.fr/particuliers/actualites/A17364?lang=fr" },
      { label: "Centre Inffo : CPF, hausse du montant de la participation forfaitaire du titulaire (décret n° 2026-234)", url: "https://www.centre-inffo.fr/site-droit-formation/actualites-droit/cpf-hausse-du-montant-de-la-participation-forfaitaire-du-titulaire" },
    ],
    content: [
      {
        type: "p",
        text: "Si vous avez commencé à vous renseigner sur le financement de votre VAE via le CPF, vous avez peut-être vu passer deux montants différents : 103,20 € et 150 €. Les deux sont réels, et la confusion est normale — la règle a changé deux fois en quelques mois. Voici ce qu'il en est exactement, vérifié sur les sources officielles le 12 octobre 2026.",
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
        text: "Un décret du 30 mars 2026 (décret n° 2026-234, publié au Journal officiel le 1er avril 2026) a ensuite relevé ce montant à 150 € pour toute demande de souscription intervenant à partir du 2 avril 2026 — soit une hausse d'environ 45 % par rapport à 103,20 €. Concrètement : si votre dossier de VAE a été validé sur MonCompteFormation avant le 2 avril 2026, vous êtes resté·e à 103,20 €. Si c'est après, c'est 150 €.",
      },
      {
        type: "h2",
        text: "Qui est exonéré de cette participation ?",
      },
      {
        type: "ul",
        items: [
          "Les demandeurs d'emploi.",
          "Les cas où l'employeur abonde la formation.",
          "Les personnes qui mobilisent des points de leur compte professionnel de prévention (C2P), ou qui bénéficient d'un abondement accident du travail / maladie professionnelle.",
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
    metaTitle: "Transitions Pro et VAE : forfait de 2 000 € (décret 2026)",
    metaDescription:
      "Un décret du 27 juillet 2026 encadre le financement de la VAE par les Transitions Pro : forfait plafonné à 2 000 €, dépenses éligibles, lien avec le CPF.",
    excerpt:
      "Depuis fin juillet 2026, un décret précise enfin comment Transitions Pro finance une VAE dans le cadre d'une reconversion, avec un plafond de 2 000 € par dossier.",
    category: "Financement",
    datePublished: "2026-08-03",
    dateModified: "2026-10-12",
    readingTime: "4 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "Lefebvre Dalloz Formation : Alternance et formation, un été chargé en actualités (décret n° 2026-678 du 27 juillet 2026)", url: "https://formation.lefebvre-dalloz.fr/actualite/alternance-et-formation-un-ete-charge-en-actualites" },
    ],
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
        text: "Le décret du 27 juillet 2026 encadre la prise en charge, par les associations Transitions Pro, des dépenses liées à la VAE. L'ensemble de ces dépenses est financé sur la base d'un montant forfaitaire de 2 000 €. D'après la synthèse de Lefebvre Dalloz, elles comprennent :",
      },
      {
        type: "ul",
        items: [
          "les frais de déplacement, de restauration et d'hébergement ;",
          "l'examen de la recevabilité de la demande ;",
          "l'accompagnement personnalisé du candidat ;",
          "les formations obligatoires ou complémentaires recommandées après l'analyse de recevabilité ;",
          "les frais de la session d'évaluation organisée par le ministère ou l'organisme certificateur.",
        ],
      },
      {
        type: "p",
        text: "Le candidat doit fournir un justificatif d'inscription dans un parcours de VAE. Autre précision : lorsque le CPF n'est pas mobilisé pour financer la VAE, une convention doit être conclue entre le candidat, le ou les financeurs et les organismes intervenant dans la procédure.",
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
        text: "Le décret distingue deux cas : le CPF est mobilisé, ou il ne l'est pas, et dans ce second cas une convention est conclue. Les conditions d'accès au financement relèvent de l'association Transitions Pro de votre région : renseignez-vous auprès d'elle avant de vous engager.",
      },
      {
        type: "h2",
        text: "Pourquoi c'est une bonne nouvelle pour les parcours en reconversion",
      },
      {
        type: "p",
        text: "Un cadre écrit, avec une liste de dépenses et un plafond connu à l'avance, permet de bâtir un plan de financement dès le début du parcours, plutôt que de découvrir en cours de route ce qui est pris en charge ou non.",
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
    metaTitle: "Réforme DEEJE 2026 : nouveau référentiel et VAE",
    metaDescription:
      "L'arrêté du 6 octobre 2025 réforme le DEEJE, avec un nouveau référentiel au 1er septembre 2026. Calendrier, contenu et impact sur les VAE en cours.",
    excerpt:
      "Le DEEJE change de référentiel au 1er septembre 2026. Voici ce qui évolue, le calendrier de transition, et ce que ça signifie si vous êtes en cours de VAE ou sur le point de vous lancer.",
    category: "Réglementation",
    datePublished: "2026-08-03",
    dateModified: "2026-10-12",
    readingTime: "5 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "Instruction interministérielle du 16 mars 2026 (DEASS, DEES, DEETS, DEEJE, DECESF), Bulletin officiel Solidarités", url: "https://bulletins-officiels.social.gouv.fr/sites/textes-officiels/files/2026-04/TRSA2600137J.pdf" },
      { label: "Assemblée nationale : question écrite n° 10863 sur la réforme du DEEJE (arrêtés du 6 octobre 2025)", url: "https://questions.assemblee-nationale.fr/q17/17-10863QE.htm" },
      { label: "FNEJE : communiqué du 15 octobre 2025 sur la réforme du DEEJE (point de vue des professionnels)", url: "https://www.lemediasocial.fr/hulkStatic/EL/ELI/2025/10/f3f8371c2-f540-4fc3-b064-0c7e37b0a05b/sharp_/ANX/communique-reforme-deeje-15-10-2025.pdf" },
    ],
    diplomes: ["deeje"],
    content: [
      {
        type: "p",
        text: "Le diplôme d'État d'éducateur de jeunes enfants (DEEJE) est réformé : l'arrêté du 6 octobre 2025, publié au Journal officiel du 14 octobre 2025, modifie son référentiel, avec une mise en œuvre fixée au 1er septembre 2026. Si vous envisagez une VAE DEEJE, voici ce qu'il faut savoir avant de vous lancer, d'après les textes officiels.",
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
          "Formation : le nouveau référentiel s'applique aux personnes qui entrent en formation à partir de septembre 2026.",
          "VAE : jusqu'au passage aux référentiels révisés, les jurys évaluent sur la base des référentiels en vigueur avant le 1er septembre 2026. Le premier jury fondé sur les référentiels révisés est prévu à partir de septembre 2027 (instruction interministérielle du 16 mars 2026).",
          "Un écart subsiste dans l'instruction : une annexe fixe à août 2027 la date limite des jurys sur les anciens référentiels, une autre parle de septembre 2027. Le texte ne tranche pas explicitement.",
        ],
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "En clair : pour la VAE, l'instruction rattache la bascule à la date de réunion du jury, et ne mentionne pas la date de dépôt de la recevabilité. Confirmez la règle applicable à votre dossier auprès du certificateur, de la DREETS ou du rectorat de votre région avant de vous engager.",
      },
      {
        type: "h2",
        text: "Ce que ça signifie si vous hésitez encore à vous lancer",
      },
      {
        type: "p",
        text: "Deux référentiels coexistent temporairement, ce qui peut sembler complexe de l'extérieur. Pour un·e candidat·e à la VAE, la question pratique est : à quelle période mon jury pourrait-il se tenir ? D'après l'instruction, un jury réuni avant la fin de l'été 2027 se fonde sur l'ancien référentiel, un jury plus tardif sur le nouveau. Le point à confirmer est la date exacte de bascule et le sort des dossiers déjà engagés : c'est ce qu'on clarifie avec chaque candidat·e au moment du diagnostic initial, pour éviter toute mauvaise surprise en cours de route.",
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
  {
    slug: "recevabilite-vae-guide-complet",
    title: "Recevabilité VAE : ce qu'elle vérifie vraiment (et pourquoi elle n'a rien à voir avec le jury)",
    metaTitle: "Recevabilité VAE : conditions, délais, dossier (guide 2026)",
    metaDescription:
      "La recevabilité ne juge pas vos compétences, seulement votre droit à candidater. Conditions d'expérience, délai légal de réponse, contenu du dossier.",
    excerpt:
      "Avant même de parler de compétences, il faut franchir une première porte : la recevabilité. Beaucoup de candidats s'en inquiètent à tort — voici ce qu'elle vérifie réellement.",
    category: "Méthode",
    datePublished: "2026-08-28",
    dateModified: "2026-10-12",
    readingTime: "6 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "France VAE : compléter son dossier de faisabilité", url: "https://vae.gouv.fr/savoir-plus/articles/comment-completer-votre-dossier-de-faisabilite/" },
      { label: "France VAE : questions fréquentes", url: "https://vae.gouv.fr/faq/" },
      { label: "Centre Inffo : loi « Marché du travail », la réforme de la VAE", url: "https://www.centre-inffo.fr/site-droit-formation/loi-marche-du-travail-dispositions-relatives-a-la-vae" },
    ],
    content: [
      {
        type: "p",
        text: "Avant de parler de livret 2, de compétences ou de jury, une VAE commence par une étape plus discrète mais tout aussi déterminante : la recevabilité. C'est elle qui décide si vous avez, ne serait-ce que, le droit de vous présenter. Beaucoup de candidats l'abordent avec la même angoisse que le jury final — à tort, car elle ne vérifie pas du tout la même chose.",
      },
      {
        type: "h2",
        text: "Ce que la recevabilité vérifie (et ce qu'elle ne vérifie pas)",
      },
      {
        type: "p",
        text: "La recevabilité, c'est la constitution du dossier administratif qui ouvre officiellement le droit à candidater à la VAE auprès du certificateur. Concrètement, elle répond à une seule question : votre expérience correspond-elle, dans sa nature, au métier visé par le diplôme ? Elle ne demande pas encore de démontrer vos compétences dans le détail — c'est le rôle du livret de compétences, l'étape suivante. Elle vérifie seulement que vous n'êtes pas hors sujet : quelqu'un qui vise le DEME doit avoir accompagné, à un titre ou un autre, des personnes en difficulté sociale ou en situation de handicap ; quelqu'un qui vise le DEES, des enfants, adolescents ou adultes en difficulté.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Le délai légal de réponse du certificateur est de deux mois. D'après France VAE, il se prononce en général en trois semaines. Si les deux mois sont écoulés sans réponse, France VAE recommande de relancer le certificateur en précisant que la candidature est réputée recevable.",
      },
      {
        type: "h2",
        text: "Combien d'expérience faut-il réellement",
      },
      {
        type: "p",
        text: "C'est la question qui revient le plus souvent, et c'est aussi celle où circulent le plus d'idées fausses. Il n'existe plus de durée minimale d'expérience requise pour engager une VAE : la loi « Marché du travail » a supprimé le minimum d'un an, et la FAQ de France VAE le confirme. Les expériences prises en compte peuvent venir d'un emploi, de stages, de bénévolat ou de la vie personnelle. Ce qui compte désormais, c'est la nature de votre expérience — professionnelle, bénévole ou en tant qu'aidant — au regard du référentiel du diplôme visé, pas sa durée en années.",
      },
      {
        type: "p",
        text: "Cela ne veut pas dire que n'importe quelle expérience, aussi courte soit-elle, suffit automatiquement. Une expérience de quelques mois peut être recevable si elle est réellement représentative des missions du métier ; une expérience de dix ans peut être fragile si elle ne couvre qu'une petite partie du référentiel. C'est précisément ce qu'un diagnostic sérieux doit évaluer avant de déposer quoi que ce soit — pas seulement compter des années.",
      },
      {
        type: "cta",
        titre: "Vous ne savez pas si votre expérience est recevable ?",
        texte:
          "Décrivez-nous votre quotidien professionnel : nous vous disons franchement si votre expérience correspond au diplôme visé, sans jargon et sans vous faire perdre de temps sur un dossier voué à l'échec.",
        cta: "Tester ma recevabilité gratuitement",
      },
      {
        type: "h2",
        text: "Ce que contient le dossier de faisabilité",
      },
      {
        type: "p",
        text: "Selon France VAE, le certificateur examine si vos expériences et formations sont suffisamment liées au référentiel de la certification. Pour chaque expérience, le dossier demande la période, la durée, le poste, la structure, les activités, le niveau d'autonomie, les responsabilités, les publics concernés et les outils ou méthodes utilisés. Pour chaque bloc de compétences, vous répondez « oui », « partiellement » ou « non », avec un commentaire obligatoire. Un justificatif d'identité est obligatoire. La décision peut être : recevable, non recevable ou dossier incomplet.",
      },
      {
        type: "h2",
        text: "Comment se déroule l'évaluation avant le dépôt du dossier",
      },
      {
        type: "p",
        text: "Avant même de déposer le dossier administratif, un temps d'échange avec un accompagnateur permet de vérifier trois choses : que votre expérience est bien suffisante au regard du diplôme visé, le volume d'heures d'accompagnement dont vous aurez besoin pour construire un dossier solide, et — plus simplement — que le courant passe avec la personne qui va vous accompagner sur plusieurs mois. Ce sont ces trois points qui permettent de vous orienter en confiance avant tout engagement, plutôt que de découvrir un problème une fois le dossier déjà déposé.",
      },
      {
        type: "p",
        text: "Le dossier administratif à proprement parler demande généralement un CV détaillé, des justificatifs de votre expérience (attestations d'employeur, bulletins de salaire, ou tout document prouvant la nature de vos missions), et le cas échéant vos diplômes déjà obtenus. Rien de tout cela ne se rédige seul du jour au lendemain — c'est pour cette raison qu'un accompagnement existe dès cette étape, et non seulement à partir du livret de compétences.",
      },
      {
        type: "ul",
        items: [
          "Un CV détaillé, centré sur les missions réellement exercées plutôt que sur les intitulés de poste.",
          "Des justificatifs d'expérience : attestations d'employeur, bulletins de salaire, ou équivalent pour une expérience bénévole ou d'aidant.",
          "Vos diplômes déjà obtenus, même s'ils ne sont pas du secteur social ou médico-social.",
          "Une première formulation, même imparfaite, du métier que vous exercez au quotidien — elle sera affinée avec votre accompagnateur.",
        ],
      },
      {
        type: "h2",
        text: "Une fois la recevabilité obtenue",
      },
      {
        type: "p",
        text: "La recevabilité n'est qu'une porte d'entrée : elle ne valide rien sur le fond, elle autorise seulement à continuer. L'étape suivante, le livret de compétences, est celle où votre expérience sera réellement évaluée dans le détail — c'est un travail différent, plus long, qui mérite un accompagnement à part entière. Ce qui compte à ce stade de la recevabilité, c'est de ne pas se tromper de diplôme ni de sous-estimer le travail à venir : mieux vaut le savoir dès le diagnostic initial qu'au milieu du parcours.",
      },
      {
        type: "cta",
        titre: "Un accompagnement dès le diagnostic, pas seulement pour le dossier",
        texte:
          "Nous accompagnons exclusivement les professionnels du secteur social et médico-social. Un premier échange gratuit permet de vérifier votre recevabilité, d'estimer le volume d'accompagnement nécessaire, et de faire connaissance avant tout engagement.",
        cta: "Demander mon prédiagnostic gratuit",
      },
    ],
  },
  {
    slug: "duree-vae-2026-combien-de-temps",
    title: "Combien de temps dure une VAE en 2026 ? Le vrai calendrier, étape par étape",
    metaTitle: "Durée d'une VAE en 2026 : combien de temps, vraiment",
    metaDescription:
      "Recevabilité, livret, jury : combien de temps dure chaque étape d'une VAE, et pourquoi la durée totale varie autant d'un candidat à l'autre.",
    excerpt:
      "C'est la deuxième question que tout le monde pose, juste après « est-ce que mon expérience suffit ». La réponse n'est pas un chiffre unique — c'est un calendrier en plusieurs étapes.",
    category: "Méthode",
    datePublished: "2026-08-28",
    dateModified: "2026-10-12",
    readingTime: "5 min",
    verifiedOn: "2026-10-12",
    sources: [
      { label: "France VAE : les étapes du parcours", url: "https://vae.gouv.fr/savoir-plus/articles/etapes-parcours-france-vae/" },
      { label: "France VAE : questions fréquentes", url: "https://vae.gouv.fr/faq/" },
      { label: "France VAE : rédiger son dossier de validation", url: "https://vae.gouv.fr/savoir-plus/articles/rediger-dossier-validation/" },
    ],
    content: [
      {
        type: "p",
        text: "« Combien de temps ça va me prendre ? » C'est l'une des toutes premières questions que pose un candidat à la VAE — juste après celle de savoir si son expérience est recevable. La réponse honnête est qu'il n'existe pas de durée fixe : une VAE se déroule en plusieurs étapes distinctes, dont certaines ont un cadre réglementaire précis et d'autres dépendent entièrement de votre rythme. Voici le détail, étape par étape.",
      },
      {
        type: "h2",
        text: "Le temps calendaire n'est pas le temps de travail",
      },
      {
        type: "p",
        text: "Avant de parler de mois, il faut distinguer deux choses qu'on confond souvent. Le temps calendaire, c'est la durée totale entre le moment où vous vous lancez et celui où vous passez devant le jury. Le temps de travail réel, c'est le nombre d'heures que vous y consacrez concrètement. Un accompagnement VAE représente en général 15 à 20 heures de travail effectif avec votre accompagnateur — réparties sur plusieurs mois, pas concentrées sur une semaine. C'est ce qui rend la VAE compatible avec une activité professionnelle à temps plein : vous n'arrêtez jamais de travailler pour la préparer.",
      },
      {
        type: "h2",
        text: "Recevabilité : jusqu'à deux mois, souvent moins",
      },
      {
        type: "p",
        text: "Une fois le dossier de faisabilité complet transmis, le certificateur dispose légalement de deux mois pour vous répondre. C'est un maximum : selon France VAE, il se prononce en général en trois semaines. Si le délai est dépassé sans réponse, France VAE recommande de relancer le certificateur en précisant que la candidature est réputée recevable.",
      },
      {
        type: "h2",
        text: "Le livret de compétences : l'étape qui prend le plus de temps",
      },
      {
        type: "p",
        text: "C'est là que se joue la majeure partie du calendrier, et c'est aussi l'étape la moins prévisible. Il n'existe pas de durée imposée pour rédiger un livret de compétences : cela dépend de votre aisance à l'écrit, du temps dont vous disposez chaque semaine, et surtout du fait que ce document se construit par allers-retours plutôt que d'un seul jet. On décrit une situation, on la relit, on s'aperçoit qu'il manque un élément d'analyse, on reprend. C'est un travail itératif, pas un exercice de rédaction qu'on boucle en un week-end. France VAE donne un ordre de grandeur : en moyenne 4 à 6 mois de rédaction, à raison de 2 à 4 heures de travail personnel par semaine.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Rédiger le livret de compétences seul, sans accompagnement, est possible : France VAE propose d'ailleurs un parcours sans accompagnement. L'accompagnement apporte, lui, des retours réguliers pour savoir si l'on est sur la bonne voie.",
      },
      {
        type: "cta",
        titre: "Vous voulez une estimation pour votre propre situation ?",
        texte:
          "Le calendrier dépend beaucoup de votre expérience et de votre disponibilité. En quelques minutes, on peut vous donner une estimation réaliste plutôt qu'une moyenne générale.",
        cta: "Demander mon estimation gratuite",
      },
      {
        type: "h2",
        text: "Au global : comptez en moyenne 6 à 12 mois",
      },
      {
        type: "p",
        text: "En pratique, pour les candidats du secteur social et médico-social que nous accompagnons, un parcours VAE complet — du diagnostic initial jusqu'au passage devant le jury — dure en moyenne entre 6 et 12 mois. C'est nettement plus rapide qu'une formation initiale classique, puisque vous ne suivez pas d'enseignements déjà couverts par votre expérience : vous rédigez et présentez un dossier qui valorise ce que vous savez déjà faire.",
      },
      {
        type: "h2",
        text: "Les délais cités par France VAE",
      },
      {
        type: "ul",
        items: [
          "Premier contact de l'organisme d'accompagnement : sous 2 semaines après le dépôt de la candidature.",
          "Réponse sur la recevabilité : 2 mois au maximum (délai légal), en général 3 semaines.",
          "Rédaction du dossier de validation : 4 à 6 mois en moyenne.",
          "Décision après le jury : en général dans les 15 jours.",
          "Parcours complet avec France VAE : jusqu'à 6 à 8 mois pour certains diplômes.",
        ],
      },
      {
        type: "h2",
        text: "Ce qui peut allonger ou raccourcir ce délai",
      },
      {
        type: "ul",
        items: [
          "Votre disponibilité réelle chaque semaine — un parcours avancé par sessions régulières va plus vite qu'un parcours qui s'arrête et repart au gré de l'actualité professionnelle.",
          "La proximité entre votre expérience et le référentiel du diplôme visé — moins il y a d'angles morts à combler, moins le livret demande de recherche et de reformulation.",
          "Le calendrier des sessions de jury du certificateur, qui n'est pas entièrement sous votre contrôle ni sous le nôtre.",
          "La qualité du suivi pendant la rédaction — des retours réguliers évitent de découvrir un problème de fond à un stade avancé, ce qui est la cause la plus fréquente des parcours qui s'éternisent.",
        ],
      },
      {
        type: "p",
        text: "Le point important à retenir : la durée d'une VAE se pilote. Ce n'est pas une contrainte administrative subie du début à la fin — c'est un calendrier que vous construisez avec votre rythme, et qu'un accompagnement régulier permet de tenir sans mauvaise surprise.",
      },
      {
        type: "cta",
        titre: "Un accompagnement qui tient le calendrier avec vous",
        texte:
          "Un seul interlocuteur dédié, du diagnostic jusqu'au jury, avec des séances qui s'organisent autour de votre emploi du temps. Premier échange gratuit et sans engagement.",
        cta: "Demander mon prédiagnostic gratuit",
      },
    ],
  },
  {
    slug: "jury-vae-entretien-deroule-frais",
    title: "Jury VAE : déroulé de l'entretien, durée, préparation et frais (guide 2026)",
    metaTitle: "Jury VAE 2026 : entretien, durée, préparation et frais",
    metaDescription:
      "Comment se passe le jury VAE : qui siège, durée de l'entretien, préparation, décisions possibles et frais de jury dans le social, selon les sources officielles.",
    excerpt:
      "Le jury est l'étape qui impressionne le plus, alors qu'il a déjà lu votre dossier. Voici comment se déroule l'entretien, ce que le jury vérifie, comment s'y préparer — et ce qu'il en coûte vraiment.",
    category: "Méthode",
    datePublished: "2026-10-05",
    dateModified: "2026-10-12",
    readingTime: "6 min",
    verifiedOn: "2026-10-05",
    sources: [
      { label: "Ministère des Solidarités : guide à l'attention des membres de jury pour la validation des acquis de l'expérience (février 2026)", url: "https://solidarites.gouv.fr/sites/solidarite/files/2026-02/guide-jury-VAE-2026.pdf" },
      { label: "Ministère des Solidarités : la VAE et le jury VAE", url: "https://solidarites.gouv.fr/VAE" },
      { label: "France VAE : comment se déroule un jury VAE ?", url: "https://vae.gouv.fr/savoir-plus/articles/comment-se-deroule-un-jury-vae/" },
      { label: "France VAE : entretien jury VAE, comment se préparer ?", url: "https://vae.gouv.fr/savoir-plus/articles/entretien-jury-vae-comment-se-preparer/" },
    ],
    content: [
      {
        type: "p",
        text: "Le jury est la dernière étape d'une VAE, et celle qui impressionne le plus. Pourtant, quand vous vous asseyez face à lui, l'essentiel du travail est derrière vous : votre dossier de validation (le livret 2) est rédigé et, pour les diplômes du social, il a déjà été lu. Voici comment se déroule concrètement le jury, ce qu'il cherche à vérifier, comment s'y préparer et ce qu'il en coûte — en s'appuyant uniquement sur les documents officiels.",
      },
      {
        type: "h2",
        text: "Qui siège dans le jury ?",
      },
      {
        type: "p",
        text: "Un jury de VAE compte au minimum deux membres. D'après le guide que le ministère des Solidarités destine aux jurys (édition de février 2026), on y trouve des formateurs du domaine visé, des professionnels de terrain — employeurs, salariés expérimentés, indépendants — et, selon les cas, un représentant du certificateur. Pour les diplômes du travail social, l'entretien est conduit par un binôme qui associe un formateur et un professionnel.",
      },
      {
        type: "p",
        text: "Deux règles protègent le candidat. Un membre du jury ne doit avoir aucune relation professionnelle ou personnelle avec vous. Et un président est désigné parmi les membres : en cas de partage égal des voix, sa voix l'emporte.",
      },
      {
        type: "h2",
        text: "Avant l'entretien : votre dossier a déjà été lu",
      },
      {
        type: "p",
        text: "Pour les diplômes du social, les membres du jury examinent votre dossier avant la séance, à l'aide d'une grille d'évaluation fournie par la DREETS. L'entretien n'est donc pas une première lecture : il sert à vérifier, préciser et compléter ce que le dossier montre déjà. Le jury arrive avec ses questions, notamment pour lever les doutes que la lecture du dossier a pu laisser.",
      },
      {
        type: "h2",
        text: "Comment se déroule l'entretien",
      },
      {
        type: "p",
        text: "D'après France VAE, l'entretien suit généralement le même fil : vérification de votre identité, explication du déroulé, courte présentation de votre parcours et de votre motivation, puis questions du jury. Selon le diplôme, l'épreuve peut aussi comporter une mise en situation professionnelle, au cours de laquelle vous réalisez des tâches sous le regard du jury.",
      },
      {
        type: "p",
        text: "Côté durée, les chiffres varient selon la source et le certificateur. Pour les diplômes du social, le document de procédure du ministère (édition 2023) indique un entretien d'une heure au maximum, destiné à apporter des précisions complémentaires à votre dossier. De façon plus générale, France VAE évoque des entretiens qui durent de 30 minutes à 1 h 30 selon les certifications.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Retenez surtout ceci : on ne vous demande pas de réciter votre livret 2. Le jury cherche à vérifier que vous êtes bien l'auteur de votre dossier et que votre expérience correspond aux compétences du référentiel du diplôme.",
      },
      {
        type: "h2",
        text: "Ce que le jury cherche à vérifier",
      },
      {
        type: "ul",
        items: [
          "Que l'expérience décrite est bien la vôtre : vous devez pouvoir détailler une situation, expliquer vos choix et ce que vous avez fait vous-même.",
          "Que vos compétences correspondent au référentiel du diplôme, bloc de compétences par bloc de compétences.",
          "Que les zones d'ombre du dossier peuvent être levées : une situation décrite trop vite, un rôle qui n'est pas clair, une analyse qui manque de recul.",
        ],
      },
      {
        type: "cta",
        titre: "Un jury, ça se prépare avant le jour J",
        texte:
          "Notre accompagnement comprend une mise en situation face à un jury, pour travailler votre posture et vos réponses avant le passage réel. Le premier échange est gratuit et sans engagement.",
        cta: "Demander mon prédiagnostic gratuit",
      },
      {
        type: "h2",
        text: "Comment se préparer à l'entretien",
      },
      {
        type: "p",
        text: "Les conseils officiels de France VAE tiennent en trois gestes : relire le référentiel du diplôme et votre propre dossier, repérer des exemples concrets qui illustrent chaque compétence, et s'entraîner à présenter votre parcours à l'oral, de façon ordonnée et en quelques minutes. Concrètement :",
      },
      {
        type: "ul",
        items: [
          "Relisez votre dossier comme le ferait le jury : repérez les passages où l'on aurait envie de vous demander « comment, concrètement ? ».",
          "Pour chaque situation importante, ayez en tête le contexte, votre rôle précis, ce que vous avez fait, ce que cela a donné et ce que vous referiez autrement.",
          "Entraînez-vous à voix haute, idéalement avec votre accompagnateur : France VAE précise que celui-ci peut proposer des simulations d'entretien.",
          "Le jour J, arrivez environ 30 minutes à l'avance, avec votre convocation, une pièce d'identité, votre dossier, un résumé de votre parcours si on vous l'a demandé et de quoi prendre des notes.",
        ],
      },
      {
        type: "h2",
        text: "Les trois décisions possibles",
      },
      {
        type: "p",
        text: "Après l'entretien, le jury délibère et propose l'une de ces trois issues :",
      },
      {
        type: "ul",
        items: [
          "La validation totale : tous les blocs de compétences sont validés et le diplôme est délivré.",
          "La validation partielle : certains blocs sont validés, d'autres restent à acquérir.",
          "L'absence de validation : aucune certification n'est délivrée.",
        ],
      },
      {
        type: "p",
        text: "Une validation partielle n'est pas un échec. Selon France VAE, les blocs obtenus sont acquis à vie, et le guide du ministère demande au jury de formuler des préconisations précises, claires et opérationnelles pour obtenir les blocs restants.",
      },
      {
        type: "p",
        text: "Le résultat vous est communiqué par le certificateur : selon France VAE, dans les 15 jours qui suivent l'épreuve ; pour les diplômes du social, le ministère indique une notification par courrier. Si vous n'êtes pas d'accord avec la décision, les modalités de recours sont précisées par le certificateur.",
      },
      {
        type: "h2",
        text: "Frais de jury : combien ça coûte ?",
      },
      {
        type: "p",
        text: "Pour les diplômes du travail social, la réponse est rassurante. D'après le document de procédure du ministère des Solidarités (édition 2023), la démarche de VAE — information, dépôt de candidature, instruction de la recevabilité et organisation du jury — ne fait l'objet d'aucune facturation. Autrement dit, passer devant le jury ne vous est pas facturé.",
      },
      {
        type: "p",
        text: "Restent à votre charge les frais annexes, comme les photocopies et les déplacements, et, si vous en prenez un, l'accompagnement. Cet accompagnement est facultatif et peut être financé par d'autres dispositifs, comme le CPF : nous détaillons le reste à charge dans notre article sur le CPF et la VAE en 2026.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Ce document de procédure date de 2023, et la VAE a connu plusieurs textes depuis. Avant de vous lancer, confirmez les conditions auprès de la DREETS de votre région, service des professions sociales.",
      },
      {
        type: "p",
        text: "En résumé : le jury est exigeant, mais ce n'est pas un piège. Il vérifie que l'expérience que vous avez décrite est la vôtre et qu'elle correspond au diplôme. Bien préparé, c'est l'étape où votre dossier prend vie.",
      },
      {
        type: "cta",
        titre: "Votre expérience est-elle prête pour le jury ?",
        texte:
          "On fait le point sur votre parcours et sur le diplôme que vous visez, gratuitement et sans engagement. Un seul interlocuteur dédié, du diagnostic jusqu'au jury.",
        cta: "Vérifier mon éligibilité",
      },
    ],
  },
  // ── Ajoutés le 12/10/2026 — grappe « DEES » ─────────────────────────────────
  // Faits vérifiés le 12/10/2026 sur : arrêté du 6 octobre 2025 (Légifrance,
  // articles 6, 12, 17, 18 et annexe I), instruction interministérielle du
  // 16 mars 2026 (bulletins-officiels.social.gouv.fr), fiche France Compétences
  // RNCP37676 (inactive, remplacée par RNCP41747), page DEES de la DREETS
  // Nouvelle-Aquitaine. Aucun chiffre hors de ces sources.
  {
    slug: "reforme-dees-2026-vae",
    title: "Réforme du DEES en 2026 : ce qui change, et ce que ça implique pour votre VAE",
    metaTitle: "Réforme DEES 2026 : nouveau référentiel, impact sur la VAE",
    metaDescription:
      "Nouveau référentiel du DEES au 1er septembre 2026 : quatre blocs de compétences, calendrier de transition et conséquences pour votre VAE.",
    excerpt:
      "L'arrêté du 6 octobre 2025 remplace le référentiel du DEES à partir du 1er septembre 2026. Les quatre nouveaux blocs, le calendrier de transition et ce que cela change pour une VAE.",
    category: "Réglementation",
    datePublished: "2026-10-12",
    readingTime: "5 min",
    diplomes: ["dees"],
    content: [
      {
        type: "p",
        text: "Le diplôme d'État d'éducateur spécialisé (DEES) change de référentiel. L'arrêté du 6 octobre 2025 entre en vigueur le 1er septembre 2026 et remplace, à terme, celui du 22 août 2018. Le diplôme reste de niveau 6, à 180 crédits ECTS : ce qui change, c'est la manière de décrire et d'évaluer les compétences. Voici ce que disent les textes, et ce que cela implique si vous préparez une VAE.",
      },
      {
        type: "h2",
        text: "Les quatre blocs de compétences du nouveau référentiel",
      },
      {
        type: "p",
        text: "Le nouveau référentiel est organisé en quatre blocs, chacun validé séparément, sans compensation de l'un par l'autre. Leurs intitulés figurent à l'annexe I de l'arrêté :",
      },
      {
        type: "ul",
        items: [
          "Bloc 1 : concevoir et conduire un accompagnement éducatif spécialisé dans une visée préventive et inclusive.",
          "Bloc 2 : favoriser et soutenir l'autodétermination des individus et des collectifs dans un but d'émancipation.",
          "Bloc 3 : s'inscrire dans une dynamique partenariale et territoriale en lien avec la mise en œuvre des politiques de cohésion sociale.",
          "Bloc 4 : s'inscrire dans un contexte professionnel du travail social.",
        ],
      },
      {
        type: "p",
        text: "Côté fiche officielle, l'ancienne certification (RNCP37676, organisée en huit blocs) est désormais inactive : son enregistrement s'est terminé le 31 août 2026 et France Compétences indique qu'elle est remplacée par la fiche RNCP41747.",
      },
      {
        type: "h2",
        text: "Le calendrier de transition",
      },
      {
        type: "ul",
        items: [
          "1er septembre 2026 : entrée en vigueur du nouvel arrêté.",
          "Les candidats déjà engagés avant cette date restent soumis aux anciennes modalités, en formation comme en VAE, jusqu'au 31 juillet 2028 au plus tard.",
          "L'arrêté du 22 août 2018 est abrogé à l'issue de la session d'examen 2028.",
          "Selon l'instruction interministérielle du 16 mars 2026, les premiers jurys de VAE fondés sur les référentiels révisés se tiendront à partir de septembre 2027 ; d'ici là, les jurys s'appuient sur les référentiels en vigueur avant le 1er septembre 2026.",
        ],
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Ces dates viennent de textes différents, et la notion de candidat « engagé » doit être confirmée pour votre situation. Le plus sûr est de poser la question au service VAE de votre rectorat ou à votre DREETS avant de fixer un calendrier.",
      },
      {
        type: "h2",
        text: "Ce qui change, et ce qui ne change pas, pour une VAE",
      },
      {
        type: "p",
        text: "Le niveau ne bouge pas : le DEES obtenu par la VAE reste le même diplôme d'État de niveau 6 que celui obtenu par la formation. Ce qui évolue, c'est la grille de lecture : à terme, votre expérience sera regardée à travers les quatre blocs ci-dessus. Leurs intitulés donnent la direction : concevoir un accompagnement, soutenir l'autodétermination des personnes, travailler avec les partenaires du territoire, se situer dans un contexte professionnel.",
      },
      {
        type: "p",
        text: "Pour vous préparer, une méthode vaut quel que soit le référentiel retenu : repérez dans votre parcours des situations où vous avez conçu une action (et pas seulement exécuté un projet), où la personne accompagnée a participé aux décisions qui la concernent, et où vous avez travaillé avec des partenaires extérieurs à votre équipe. Ce sont ces situations que vous aurez à décrire dans votre dossier.",
      },
      {
        type: "h2",
        text: "Pour comparaison : la formation initiale",
      },
      {
        type: "p",
        text: "Le parcours complet en formation représente 3 442 heures sur trois ans, dont 1 517 heures d'enseignement théorique et 1 925 heures de formation pratique. La VAE ne remplace pas ce volume par un raccourci : elle fait valider ce que votre expérience a déjà couvert.",
      },
      {
        type: "cta",
        titre: "Votre VAE DEES, selon le bon référentiel",
        texte:
          "On fait le point sur votre situation et sur le cadre qui s'applique à votre dossier — gratuitement, sans engagement.",
        cta: "Vérifier mon éligibilité DEES →",
      },
    ],
    verifiedOn: "2026-10-12",
    sources: [
      {
        label: "Arrêté du 6 octobre 2025 relatif au diplôme d'État d'éducateur spécialisé (Légifrance)",
        url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052384644",
      },
      {
        label: "Instruction interministérielle du 16 mars 2026 sur la révision des diplômes d'État du travail social",
        url: "https://bulletins-officiels.social.gouv.fr/sites/textes-officiels/files/2026-04/TRSA2600137J.pdf",
      },
      {
        label: "Fiche RNCP37676 « DE - Éducateur spécialisé » (France Compétences)",
        url: "https://www.francecompetences.fr/recherche/rncp/37676/",
      },
      {
        label: "Page « DEES » de la DREETS Nouvelle-Aquitaine",
        url: "https://nouvelle-aquitaine.dreets.gouv.fr/DEES-Diplome-d-Etat-d-Educateur-Specialise",
      },
    ],
  },
  {
    slug: "moniteur-educateur-vers-educateur-specialise-vae",
    title: "De moniteur-éducateur à éducateur spécialisé : passer le DEES par la VAE",
    metaTitle: "Moniteur-éducateur à éducateur spécialisé : DEES par la VAE",
    metaDescription:
      "Vous êtes moniteur-éducateur et visez le DEES ? Ce qui sépare les deux diplômes, quelles situations choisir selon les quatre blocs, et les étapes de la VAE.",
    excerpt:
      "Même terrain, autre niveau de responsabilité : comment faire valoir votre expérience de moniteur-éducateur pour obtenir le DEES, sans reprendre trois ans de formation.",
    category: "Parcours",
    datePublished: "2026-10-12",
    readingTime: "5 min",
    diplomes: ["dees", "deme"],
    content: [
      {
        type: "p",
        text: "Passer de moniteur-éducateur (DEME) à éducateur spécialisé (DEES) est l'une des évolutions les plus naturelles du secteur : même terrain, mêmes publics, mais un niveau de responsabilité différent. La VAE permet de franchir cette étape sans reprendre trois années de formation, à condition de présenter son expérience sous le bon angle.",
      },
      {
        type: "h2",
        text: "Ce qui sépare les deux diplômes",
      },
      {
        type: "p",
        text: "Le DEME est un diplôme de niveau 4 (équivalent bac), le DEES un diplôme de niveau 6 (équivalent licence, 180 crédits ECTS). Dans beaucoup d'équipes, le moniteur-éducateur accompagne la personne au quotidien, en appui de l'éducateur spécialisé ; ce dernier conçoit et conduit l'accompagnement éducatif, l'inscrit dans un projet et dans un réseau de partenaires. Le nouveau référentiel du DEES le dit dès l'intitulé de son premier bloc : « concevoir et conduire un accompagnement éducatif spécialisé ».",
      },
      {
        type: "h2",
        text: "Ce que le jury regarde dans un dossier DEES",
      },
      {
        type: "p",
        text: "Le jury évalue votre expérience au regard du référentiel du diplôme. Pour le DEES, il comporte quatre blocs : concevoir et conduire un accompagnement éducatif ; soutenir l'autodétermination des personnes ; s'inscrire dans une dynamique partenariale et territoriale ; s'inscrire dans un contexte professionnel du travail social. Votre quotidien de moniteur-éducateur nourrit sans doute déjà le premier. Pour les autres, il faut souvent chercher des situations précises.",
      },
      {
        type: "p",
        text: "Quelques situations à repérer dans votre parcours :",
      },
      {
        type: "ul",
        items: [
          "Une situation où vous avez construit ou fait évoluer un projet d'accompagnement, avec ses objectifs, ses moyens et son évaluation.",
          "Une situation où la personne accompagnée a participé aux décisions qui la concernent, et où vous avez adapté votre pratique en conséquence.",
          "Une situation où vous avez travaillé avec un partenaire extérieur à votre structure : famille, école, médecin, mandataire, service social, collectivité.",
          "Une situation où vous avez pris du recul sur votre pratique : réunion de synthèse, analyse de pratique, écrit professionnel, place dans l'équipe.",
        ],
      },
      {
        type: "h2",
        text: "Les étapes d'une VAE DEES",
      },
      {
        type: "p",
        text: "Le parcours suit trois temps : la recevabilité, qui vérifie que vous avez le droit de vous présenter ; le dossier de validation (le « livret 2 »), où vous décrivez vos situations ; puis l'entretien devant le jury. Depuis janvier 2024, aucune durée minimale d'expérience n'est exigée : ce qui compte, c'est que votre expérience corresponde au diplôme visé.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Une expérience courte n'est plus un obstacle administratif, mais le dossier doit rester solide : avoir au moins quelques situations de conception ou de partenariat à décrire fait la différence. Un diagnostic permet de le vérifier avant de vous lancer.",
      },
      {
        type: "cta",
        titre: "Du DEME au DEES : faisons le point sur votre parcours",
        texte:
          "On regarde ensemble vos situations professionnelles et leur correspondance avec les quatre blocs du DEES — gratuitement, sans engagement.",
        cta: "Vérifier mon éligibilité DEES →",
      },
    ],
    verifiedOn: "2026-10-12",
    sources: [
      {
        label: "Arrêté du 6 octobre 2025 relatif au diplôme d'État d'éducateur spécialisé, annexe I (Légifrance)",
        url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052384644",
      },
      {
        label: "Fiche RNCP37676 « DE - Éducateur spécialisé » : accès par la voie de l'expérience (France Compétences)",
        url: "https://www.francecompetences.fr/recherche/rncp/37676/",
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


// ── Liens internes automatiques ──────────────────────────────────────────────
// Diplômes proposés en bas d'un article quand il n'a pas de champ `diplomes`
// (articles génériques sur la VAE). DEES en premier : c'est la priorité SEO.
const DEFAULT_RELATED_DIPLOMES: DiplomeSlug[] = ["dees", "deme", "deaes"];

export function getRelatedDiplomes(article: BlogArticle): DiplomeSlug[] {
  return article.diplomes && article.diplomes.length > 0
    ? article.diplomes
    : DEFAULT_RELATED_DIPLOMES;
}

function byDateDesc(a: BlogArticle, b: BlogArticle) {
  return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime();
}

// Articles à suggérer à la fin d'un article : mêmes diplômes d'abord, puis même
// catégorie, puis les plus récents. Un nouvel article est relié sans rien d'autre
// à écrire que ses champs `diplomes` et `category`.
export function getRelatedArticles(article: BlogArticle, limit = 3): BlogArticle[] {
  const own = new Set(article.diplomes ?? []);
  const score = (a: BlogArticle) =>
    ((a.diplomes ?? []).some((d) => own.has(d)) ? 2 : 0) +
    (a.category === article.category ? 1 : 0);
  return BLOG_ARTICLES.filter((a) => a.slug !== article.slug)
    .sort((a, b) => score(b) - score(a) || byDateDesc(a, b))
    .slice(0, limit);
}

// Articles à lier depuis la page d'un diplôme : ceux qui le ciblent
// explicitement d'abord, puis les articles génériques sur la VAE.
export function getArticlesForDiplome(slug: DiplomeSlug, limit = 3): BlogArticle[] {
  const targeted = BLOG_ARTICLES.filter((a) => a.diplomes?.includes(slug)).sort(byDateDesc);
  const generic = BLOG_ARTICLES.filter((a) => !a.diplomes || a.diplomes.length === 0).sort(
    byDateDesc
  );
  return [...targeted, ...generic].slice(0, limit);
}
