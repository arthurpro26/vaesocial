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
      "Le livret 2, désormais appelé dossier de validation, est l'étape qui décourage le plus de candidats. Voici comment le structurer, combien de situations décrire, et les erreurs qui coûtent une validation partielle.",
    excerpt:
      "C'est l'étape où la moitié des candidats abandonnent. Pourtant, le livret 2 n'est pas un exercice de rédaction : c'est un travail de preuve. Voici comment s'y prendre.",
    category: "Méthode",
    datePublished: "2026-08-09",
    readingTime: "7 min",
    content: [
      {
        type: "p",
        text: "Le livret 2 est le moment où une VAE se gagne ou se perd. La recevabilité, elle, ne valide qu'une chose : que vous avez le droit de vous présenter. Le livret 2, lui, est le document sur lequel le jury va réellement décider si vous obtenez votre diplôme. Et c'est aussi l'étape où beaucoup de candidats s'arrêtent — non pas par manque de compétences, mais parce qu'ils ne savent pas quoi écrire ni comment.",
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
        text: "Concrètement, le dossier de validation vous demande de décrire un nombre limité de situations professionnelles vécues — généralement entre six et dix selon les diplômes — et de les analyser. Le mot important est « analyser ». Décrire ce que vous avez fait ne suffit pas. Il faut expliquer pourquoi vous l'avez fait ainsi, ce que vous avez pris en compte, ce que vous avez ajusté, et ce que vous en avez tiré.",
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
  {
    slug: "recevabilite-vae-guide-complet",
    title: "Recevabilité VAE : ce qu'elle vérifie vraiment (et pourquoi elle n'a rien à voir avec le jury)",
    metaTitle: "Recevabilité VAE : guide complet — conditions, délais, dossier 2026",
    metaDescription:
      "La recevabilité est la première étape d'une VAE : elle ne juge pas vos compétences, seulement votre droit à candidater. Conditions d'expérience, délai légal de réponse, contenu du dossier — le guide complet.",
    excerpt:
      "Avant même de parler de compétences, il faut franchir une première porte : la recevabilité. Beaucoup de candidats s'en inquiètent à tort — voici ce qu'elle vérifie réellement.",
    category: "Méthode",
    datePublished: "2026-08-28",
    readingTime: "6 min",
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
        text: "Le certificateur dispose légalement de deux mois pour répondre à une demande de recevabilité. Passé ce délai sans réponse, la recevabilité est réputée acquise — le silence de l'administration ne bloque jamais votre parcours.",
      },
      {
        type: "h2",
        text: "Combien d'expérience faut-il réellement",
      },
      {
        type: "p",
        text: "C'est la question qui revient le plus souvent, et c'est aussi celle où circulent le plus d'idées fausses. Depuis la réforme engagée en 2024, aucune durée minimale d'expérience n'est exigée pour candidater à une VAE — que ce soit pour le DEES, le DEAES, le DEEJE ou le DEME. Avant cette réforme, une ancienneté minimale était requise ; ce n'est plus le cas. Ce qui compte désormais, c'est la nature de votre expérience — professionnelle, bénévole ou en tant qu'aidant — au regard du référentiel du diplôme visé, pas sa durée en années.",
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
    metaTitle: "Durée d'une VAE en 2026 : combien de temps ça prend réellement",
    metaDescription:
      "Recevabilité, livret de compétences, jury : combien de temps dure chaque étape d'une VAE, et pourquoi la durée totale varie autant d'un candidat à l'autre. Le calendrier réaliste.",
    excerpt:
      "C'est la deuxième question que tout le monde pose, juste après « est-ce que mon expérience suffit ». La réponse n'est pas un chiffre unique — c'est un calendrier en plusieurs étapes.",
    category: "Méthode",
    datePublished: "2026-08-28",
    readingTime: "5 min",
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
        text: "Une fois votre dossier de recevabilité déposé, le certificateur dispose légalement de deux mois pour vous répondre. C'est un maximum, pas une norme : beaucoup de réponses arrivent avant. Et si jamais le délai est dépassé sans réponse, la recevabilité est réputée acquise — l'absence de réponse ne vous pénalise jamais.",
      },
      {
        type: "h2",
        text: "Le livret de compétences : l'étape qui prend le plus de temps",
      },
      {
        type: "p",
        text: "C'est là que se joue la majeure partie du calendrier, et c'est aussi l'étape la moins prévisible. Il n'existe pas de durée officielle pour rédiger un livret de compétences : cela dépend de votre aisance à l'écrit, du temps dont vous disposez chaque semaine, et surtout du fait que ce document se construit par allers-retours plutôt que d'un seul jet. On décrit une situation, on la relit, on s'aperçoit qu'il manque un élément d'analyse, on reprend. C'est un travail itératif, pas un exercice de rédaction qu'on boucle en un week-end.",
      },
      {
        type: "callout",
        icon: "ℹ️",
        text: "Rédiger le livret de compétences seul, sans accompagnement, c'est possible réglementairement — mais c'est souvent ce qui explique les parcours qui traînent sur un an ou deux, faute de retours réguliers pour savoir si on est sur la bonne voie.",
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
