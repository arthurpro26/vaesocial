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
function agendaUrl(): string | null {
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
