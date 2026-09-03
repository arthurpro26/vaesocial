import { normalizePhoneFr } from "@/lib/phone";
import { siteConfig } from "@/lib/site-config";

/**
 * Construction du SMS de relance envoyé à un lead qui n'a pas décroché.
 *
 * POURQUOI CE FICHIER EXISTE (29/08/2026).
 * Arthur appelle chaque lead ; quand la personne ne répond pas, il laisse un
 * message vocal puis envoie un SMS. Ce texte était rédigé à la main à chaque
 * fois. Il est désormais généré ici, et arrive prêt à l'emploi dans l'email de
 * lead : un lien `sms:` pré-rempli, plus le texte en clair à copier.
 *
 * Le SMS part de la ligne personnelle d'Arthur (Free), pas d'une passerelle :
 * les réponses arrivent donc normalement dans ses messages. C'est aussi ce qui
 * évite tout sujet de conformité — c'est un humain qui envoie, à la main, à
 * une personne qui a elle-même demandé à être rappelée.
 *
 * NOTE — l'API SMS de Free ne peut PAS servir à ça : elle n'envoie qu'au
 * titulaire de la ligne. Vérifié le 29/08/2026. Elle ne pourrait servir qu'à
 * s'auto-alerter de l'arrivée d'un lead.
 *
 * ⚠️ LE FORMAT DE CE MESSAGE N'EST PAS ARBITRAIRE (révision du 30/08/2026).
 * Il reprend celui d'un message d'Arthur qui a réellement converti : 9 rendez-
 * vous obtenus sur 13 leads. Les règles à ne pas casser :
 *   - aéré, un saut de ligne entre chaque idée (jamais un pavé compact) ;
 *   - le nom complet du diplôme entre parenthèses après le sigle ;
 *   - emoji comme repères visuels seulement (🎓 le diplôme, 👉 les liens) ;
 *   - on demande D'ABORD un créneau précis, l'agenda vient APRÈS ;
 *   - vouvoiement chaleureux, signature « Arthur » (jamais « Yoni »).
 * Une première version tenait en un seul bloc sans emoji : rejetée en test
 * réel par Arthur (« pas d'espace, pas d'emoji, c'est affreux »).
 */

/** Libellés officiels des diplômes, pour que le SMS nomme le bon métier. */
const DIPLOME_LIBELLE: Record<string, string> = {
  DEES: "Diplôme d'État d'Éducateur Spécialisé",
  DEAES: "Diplôme d'État d'Accompagnant Éducatif et Social",
  DEEJE: "Diplôme d'État d'Éducateur de Jeunes Enfants",
  DEME: "Diplôme d'État de Moniteur-Éducateur",
  // Ajouté le 03/09/2026 avec la page auxiliaire de puériculture. Sans cette
  // ligne, `DIPLOME_LIBELLE["DEAP"]` vaut `undefined` : l'objet de l'accusé de
  // réception perd le sigle (« votre demande de VAE est bien reçue » au lieu de
  // « votre demande de VAE DEAP ») et le corps du message retombe sur le
  // générique « un diplôme d'État ». Aucun lead n'est perdu, mais chaque
  // candidate DEAP recevrait un message visiblement moins soigné que les
  // autres — au moment précis où on teste ce marché.
  DEAP: "Diplôme d'État d'Auxiliaire de Puériculture",
};

/**
 * Nom qui signe le message, via LEADS_SMS_SIGNATURE. Arthur est le nom
 * professionnel utilisé avec les prospects — ne jamais coder un prénom en dur
 * ici, la variable existe précisément pour qu'il change sans redéploiement.
 */
function signature(): string {
  return process.env.LEADS_SMS_SIGNATURE?.trim() || "L'équipe VAESocial";
}

/**
 * Lien de prise de rendez-vous (plages Google Agenda), via LEADS_AGENDA_URL.
 * Si la variable est absente, le paragraphe correspondant disparaît purement
 * et simplement : mieux vaut un message sans lien qu'un message avec un lien
 * mort. On ne code pas l'URL en dur — elle change si Arthur recrée sa plage.
 */
export function agendaUrl(): string | null {
  const u = process.env.LEADS_AGENDA_URL?.trim();
  return u && /^https?:\/\//.test(u) ? u : null;
}

/** Texte complet du SMS de relance, prêt à envoyer. */
export function buildRelanceSms(lead: { prenom: string; diplomeVise: string }): string {
  const libelle = DIPLOME_LIBELLE[lead.diplomeVise];
  // Si le diplôme n'est pas dans la table (ex. « Je ne sais pas »), on reste
  // générique plutôt que d'écrire un libellé faux.
  const objet = libelle
    ? `votre demande concernant la VAE ${lead.diplomeVise} (${libelle}) 🎓`
    : "votre demande de VAE 🎓";

  const lignes: string[] = [
    `Bonjour ${lead.prenom},`,
    "",
    `Je viens d'essayer de vous joindre au sujet de ${objet} — je vous ai laissé un message vocal.`,
    "",
    "Rien d'urgent ! Je souhaitais faire le point avec vous sur votre parcours et vérifier ensemble votre éligibilité. Comptez une vingtaine de minutes.",
    "",
    "À quel moment puis-je vous rappeler ?",
    "",
    "☀️ En matinée (10h - 12h)",
    "🕐 L'après-midi (14h - 18h)",
    "🌙 En soirée, après 18h",
    "",
    "Répondez-moi simplement avec le créneau qui vous arrange, je m'adapte à vos disponibilités.",
  ];

  const agenda = agendaUrl();
  if (agenda) {
    lignes.push(
      "",
      "Vous pouvez aussi choisir directement le jour et l'heure qui vous conviennent dans mon agenda :",
      `👉 ${agenda}`
    );
  }

  lignes.push("", "Je me réjouis d'échanger avec vous !", "", signature());

  return lignes.join("\n");
}

/** « 06 26 40 01 33 » → « +33626400133 ». null si le numéro est inexploitable. */
export function toInternational(telephone: string): string | null {
  const national = normalizePhoneFr(telephone);
  return national ? `+33${national.slice(1)}` : null;
}

/** Lien d'appel direct. */
export function buildTelHref(telephone: string): string | null {
  const intl = toInternational(telephone);
  return intl ? `tel:${intl}` : null;
}

/**
 * Lien SMS pré-rempli.
 *
 * La forme « sms:NUMERO&body=... » est celle qu'attend iOS (Messages).
 * Android attend « ?body= ». Arthur est sur iPhone : on retient la forme iOS.
 *
 * ⚠️ Ce message est long (sauts de ligne, emoji, lien d'agenda) et se retrouve
 * encodé dans l'URL : certains clients tronquent au-delà d'une taille limite,
 * et plusieurs messageries (Gmail) suppriment purement et simplement les liens
 * `sms:`. C'est pourquoi l'email affiche TOUJOURS le texte en clair à côté :
 * le copier-coller reste le chemin qui ne casse jamais.
 */
export function buildSmsHref(lead: { prenom: string; diplomeVise: string; telephone: string }): string | null {
  const intl = toInternational(lead.telephone);
  if (!intl) return null;
  return `sms:${intl}&body=${encodeURIComponent(buildRelanceSms(lead))}`;
}

/**
 * Lien vers la page /relance du site, qui porte les boutons « Ouvrir
 * Messages » et « Copier le texte ».
 *
 * POURQUOI PASSER PAR UNE PAGE plutôt que de mettre `sms:` directement dans
 * l'email : les messageries filtrent les schémas d'URL qu'elles ne
 * connaissent pas, et Gmail supprime systématiquement les liens `sms:` — le
 * bouton s'affiche mais ne réagit pas (constaté en test réel le 30/08/2026).
 * Un lien `https://` passe partout, et la page peut faire ce qu'un email ne
 * pourra jamais : copier dans le presse-papier.
 *
 * Seules trois valeurs transitent : prénom, diplôme, numéro. La page les
 * revalide et ne fait confiance à rien. Elle est en noindex.
 */
export function buildRelancePageHref(lead: {
  prenom: string;
  diplomeVise: string;
  telephone: string;
}): string | null {
  const intl = toInternational(lead.telephone);
  if (!intl) return null;
  const params = new URLSearchParams({
    p: lead.prenom,
    d: lead.diplomeVise,
    t: intl,
  });
  return `${siteConfig.url}/relance?${params.toString()}`;
}

/**
 * Email « le numéro fourni ne fonctionne pas » — ajouté le 31/08/2026.
 *
 * POURQUOI : sur un lead payant, un numéro mal saisi = un lead perdu sans
 * même un échange. L'email est alors le seul canal qui reste. Ce bouton fait
 * passer Arthur de « je rouvre ma messagerie, je retrouve l'adresse, je
 * rédige » à un clic.
 *
 * Un lien `mailto:` est accepté par TOUS les clients mail, contrairement à
 * `sms:` que Gmail supprime (constaté en test réel le 30/08/2026) — pas
 * besoin ici de passer par une page intermédiaire.
 *
 * Le texte suit les mêmes règles que le SMS qui a converti 9 fois sur 13 :
 * aéré, libellé complet du diplôme entre parenthèses, emoji comme repères,
 * on demande d'abord un créneau, l'agenda vient après, signature Arthur.
 */
export type MauvaisNumeroLead = {
  prenom: string;
  diplomeVise: string;
  telephone: string;
  email: string;
};

/** Adresse exploitable ? Sinon on n'affiche pas le bouton du tout. */
function destinataireValide(email: string): string | null {
  const v = (email ?? "").trim();
  return v && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? v : null;
}

/** Objet de l'email « mauvais numéro ». */
export const MAUVAIS_NUMERO_SUJET = "Je n'arrive pas à vous joindre — VAESocial";

/** Corps de l'email « mauvais numéro », en texte brut. */
export function buildMauvaisNumeroTexte(lead: MauvaisNumeroLead): string {
  const libelle = DIPLOME_LIBELLE[lead.diplomeVise];
  const objetVae = libelle
    ? `votre demande concernant la VAE ${lead.diplomeVise} (${libelle}) 🎓`
    : "votre demande de VAE 🎓";

  // Le numéro est rappelé tel que la personne l'a saisi : c'est ce qui lui
  // permet de repérer elle-même l'erreur. S'il est vide, on reste vague
  // plutôt que d'écrire un numéro faux.
  const numero = (lead.telephone ?? "").trim();
  const ligneNumero = numero
    ? `Le numéro que vous m'avez indiqué (${numero}) ne semble pas fonctionner — il y a sans doute eu une petite erreur de saisie.`
    : "Le numéro que vous m'avez indiqué ne semble pas fonctionner — il y a sans doute eu une petite erreur de saisie.";

  const lignes: string[] = [
    `Bonjour ${lead.prenom},`,
    "",
    `J'ai bien reçu ${objetVae} et j'ai essayé de vous appeler.`,
    "",
    ligneNumero,
    "",
    "Pouvez-vous simplement répondre à cet email en m'indiquant le bon numéro ? Je vous rappelle dès que possible.",
    "",
    "Précisez-moi aussi le moment qui vous arrange :",
    "",
    "☀️ En matinée (10h - 12h)",
    "🕐 L'après-midi (14h - 18h)",
    "🌙 En soirée, après 18h",
    "",
    "Comptez une vingtaine de minutes : le temps de faire le point sur votre parcours et de vérifier ensemble votre éligibilité.",
  ];

  const agenda = agendaUrl();
  if (agenda) {
    lignes.push(
      "",
      "Vous pouvez aussi choisir directement le jour et l'heure qui vous conviennent dans mon agenda :",
      `👉 ${agenda}`
    );
  }

  lignes.push("", "Au plaisir d'échanger avec vous !", "", signature());

  return lignes.join("\n");
}

/**
 * Lien `mailto:` pré-rempli (destinataire + objet + corps).
 * null si l'adresse du lead est inexploitable.
 */
export function buildMauvaisNumeroMailto(lead: MauvaisNumeroLead): string | null {
  const destinataire = destinataireValide(lead.email);
  if (!destinataire) return null;
  // Le « @ » du destinataire reste littéral : c'est la forme que RFC 6068 et
  // tous les clients mail attendent (« mailto:nom@domaine.fr »). Un « @ »
  // percent-encodé est accepté par la norme mais mal décodé par certains
  // clients, qui ouvrent alors une fenêtre avec une adresse illisible. Le
  // reste est encodé normalement : si une adresse contenait « & » ou « ? »,
  // elle casserait la suite de l'URL.
  const cible = encodeURIComponent(destinataire).replace(/%40/g, "@");
  return (
    `mailto:${cible}` +
    `?subject=${encodeURIComponent(MAUVAIS_NUMERO_SUJET)}` +
    // ⚠️ Les sauts de ligne doivent être encodés « %0D%0A » (CRLF), PAS « %0A »
    // seul. C'est ce qu'impose la RFC 6068, et c'est la cause n°1 d'un message
    // qui arrive tout collé dans la fenêtre de rédaction : beaucoup de clients
    // mail ignorent un %0A isolé et écrasent la mise en forme. Constaté en
    // test réel par Arthur le 31/08/2026 (« tout est collé »).
    `&body=${encodeURIComponent(buildMauvaisNumeroTexte(lead).replace(/\n/g, "\r\n"))}`
  );
}

/**
 * Email de confirmation envoyé AU LEAD, automatiquement, dès l'arrivée du
 * formulaire — ajouté le 01/09/2026.
 *
 * POURQUOI : les campagnes diffusent 7 jours sur 7, Arthur ne travaille que
 * 21 jours par mois. Un lead qui arrive un samedi attendait jusqu'au lundi
 * sans le moindre signe de vie. Or un lead qui n'a aucune nouvelle refroidit,
 * et va voir ailleurs — la concurrence sur « vae dees » est dense.
 * Ce message part dans la minute et tient la personne au chaud ; celles qui
 * sont pressées peuvent même réserver seules dans l'agenda.
 *
 * CONFORMITÉ : c'est un message TRANSACTIONNEL — il confirme une demande que
 * la personne vient elle-même de faire. Pas de consentement préalable requis,
 * pas de mention STOP, pas de restriction horaire. Ne JAMAIS y glisser de
 * contenu promotionnel (offres, prix, promotions) : ça le ferait basculer en
 * prospection commerciale, avec toutes les obligations qui vont avec.
 *
 * CE QU'ON N'Y MET PAS, VOLONTAIREMENT : le tarif et le reste à charge de
 * 150 €. Le montant dépend du solde CPF réel de la personne, qu'Arthur
 * vérifie avec elle pendant l'appel. L'annoncer avant serait au mieux
 * approximatif, au pire un engagement qu'on ne peut pas tenir.
 *
 * Format : celui qui convertit (9 RDV sur 13) — voir buildRelanceSms().
 */
export type ConfirmationLead = {
  prenom: string;
  diplomeVise: string;
  email: string;
};

/** Objet de l'email de confirmation. */
export function buildConfirmationSujet(lead: ConfirmationLead): string {
  const sigle = DIPLOME_LIBELLE[lead.diplomeVise] ? ` ${lead.diplomeVise}` : "";
  return `${lead.prenom}, votre demande de VAE${sigle} est bien reçue`;
}

/** Corps de l'email de confirmation, en texte brut. */
export function buildConfirmationTexte(lead: ConfirmationLead): string {
  const libelle = DIPLOME_LIBELLE[lead.diplomeVise];
  const objet = libelle
    ? `votre demande concernant la VAE ${lead.diplomeVise} (${libelle}) 🎓`
    : "votre demande de VAE 🎓";

  const lignes: string[] = [
    `Bonjour ${lead.prenom},`,
    "",
    `Nous vous confirmons la bonne réception de ${objet}`,
    "",
    "Je vous rappelle personnellement sous 24 à 48 heures pour faire le point sur votre parcours et vérifier ensemble votre éligibilité. Comptez une vingtaine de minutes.",
  ];

  const agenda = agendaUrl();
  if (agenda) {
    lignes.push(
      "",
      "Si vous préférez choisir vous-même le jour et l'heure qui vous conviennent, vous pouvez réserver directement dans mon agenda :",
      `👉 ${agenda}`
    );
  }

  lignes.push(
    "",
    "Une précision qui rassure souvent : depuis la réforme 2024, aucune durée minimale d'expérience n'est exigée pour entamer une VAE.",
    "",
    "À très vite,",
    "",
    signature()
  );

  return lignes.join("\n");
}

/** Le lead est-il joignable par email ? Sinon, on n'envoie rien. */
export function emailLeadExploitable(email: string): string | null {
  return destinataireValide(email);
}

/**
 * Email de RELANCE envoyé à un lead qu'on n'a jamais réussi à avoir au
 * téléphone — ajouté le 01/09/2026.
 *
 * POURQUOI : une part importante des leads payants ne décroche jamais. Sans
 * relance, ils sont perdus après avoir été payés. Le téléphone reste le
 * meilleur canal — cet email ne le remplace pas, il rattrape ceux que le
 * téléphone n'attrape plus.
 *
 * ⚠️ CONFORMITÉ — LIRE AVANT DE MODIFIER CE TEXTE.
 * La personne a rempli elle-même un formulaire en demandant à être rappelée :
 * cet email prolonge SA demande, il ne démarche personne. C'est ce qui le rend
 * légitime sans consentement supplémentaire. Ce qui le ferait basculer en
 * prospection commerciale — et donc l'exposerait à toutes les obligations
 * correspondantes : y glisser une offre, un tarif, une promotion, une
 * nouveauté. On ne le fait pas.
 * La sortie « 3 » n'est pas décorative : c'est le moyen de désinscription.
 * Une réponse « 3 » doit être respectée immédiatement et définitivement.
 *
 * FORMULATION : « nous n'avons pas encore réussi à échanger » est vrai dans
 * tous les cas — appel manqué, numéro qui sonne dans le vide, ou lead jamais
 * appelé. Écrire « j'ai essayé de vous joindre à plusieurs reprises » serait
 * faux pour une partie de la liste : on ne l'écrit pas.
 *
 * FORMAT : celui qui a converti 9 rendez-vous sur 13 (voir buildRelanceSms).
 * La nouveauté ici est le choix chiffré : répondre coûte une seule touche.
 */
export type RelanceEmailLead = {
  prenom: string;
  diplomeVise: string;
  email: string;
};

/** Objet de l'email de relance. */
export function buildRelanceEmailSujet(lead: RelanceEmailLead): string {
  const sigle = DIPLOME_LIBELLE[lead.diplomeVise] ? ` ${lead.diplomeVise}` : "";
  return `${lead.prenom}, où en êtes-vous pour votre VAE${sigle} ?`;
}

/**
 * Corps de l'email de relance, en texte brut.
 *
 * ÉCRIT DU POINT DE VUE DE LA PERSONNE QUI REÇOIT (révision du 02/09/2026).
 * Elle a rempli un formulaire il y a des semaines, n'a jamais eu personne au
 * téléphone, et se sent vaguement fautive. Trois règles :
 *   - AUCUN reproche, même implicite. Jamais « vous n'avez pas répondu ».
 *   - On lui rappelle SON projet, pas notre service.
 *   - Un seul geste demandé, et il coûte zéro effort.
 * La preuve (1 300 accompagnés, 93 % de réussite) arrive APRÈS le bénéfice :
 * on répond d'abord à « qu'est-ce que j'y gagne », ensuite à « puis-je vous
 * faire confiance ».
 */
export function buildRelanceEmailTexte(lead: RelanceEmailLead): string {
  const libelle = DIPLOME_LIBELLE[lead.diplomeVise];
  const objet = libelle ? `le ${lead.diplomeVise} (${libelle})` : "un diplôme d'État";

  const lignes: string[] = [
    `Bonjour ${lead.prenom},`,
    "",
    `Vous nous avez contactés pour faire reconnaître votre expérience par ${objet} 🎓`,
    "",
    "Nous n'avons pas encore réussi à échanger, et ce serait dommage que votre projet s'arrête sur un appel manqué.",
    "",
    "Le principe : vous obtenez exactement le même diplôme d'État que par la formation, sans retourner à l'école et sans quitter votre poste. C'est votre expérience qui compte.",
    "",
    "La prochaine étape est un échange d'une vingtaine de minutes, gratuit et sans engagement : on regarde votre parcours ensemble et on vérifie votre éligibilité.",
  ];

  const agenda = agendaUrl();
  if (agenda) {
    lignes.push("", "Choisissez directement le créneau qui vous arrange :", `👉 ${agenda}`);
  }

  lignes.push(
    "",
    "Ou répondez simplement à ce message en m'indiquant quand vous appeler :",
    "",
    "☀️ En matinée, entre 10h et 12h",
    "🕐 L'après-midi, entre 14h et 18h",
    "🌙 En soirée, après 18h",
    "",
    "Dites-moi le jour et l'heure, je m'adapte à vos disponibilités.",
    "",
    "Plus de 1 300 candidats accompagnés — 93 % obtiennent leur diplôme devant le jury.",
    "",
    "À très vite,",
    "",
    signature()
  );

  return lignes.join("\n");
}
