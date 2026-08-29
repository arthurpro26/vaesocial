import { normalizePhoneFr } from "@/lib/phone";

/**
 * Construction du SMS de relance envoyé à un lead qui n'a pas décroché.
 *
 * POURQUOI CE FICHIER EXISTE (29/08/2026).
 * Yoni appelle chaque lead ; quand la personne ne répond pas, il laisse un
 * message vocal puis envoie un SMS. Ce SMS était rédigé à la main à chaque
 * fois. L'objectif ici est qu'il tienne en UN geste : l'email de lead contient
 * un lien `sms:` avec le destinataire ET le texte déjà remplis — il relit et
 * appuie sur envoyer.
 *
 * Le SMS part de la ligne personnelle de Yoni (Free), pas d'une passerelle :
 * les réponses arrivent donc normalement dans ses messages. C'est aussi ce qui
 * évite tout sujet de conformité — c'est un humain qui envoie, à la main, à
 * une personne qui a elle-même demandé à être rappelée.
 *
 * NOTE — l'API SMS de Free ne peut PAS servir à ça : elle n'envoie qu'au
 * titulaire de la ligne. Vérifié le 29/08/2026. Elle sert uniquement à
 * s'auto-alerter (voir l'alerte "nouveau lead").
 */

/** Libellés officiels des diplômes, pour que le SMS nomme le bon métier. */
const DIPLOME_LIBELLE: Record<string, string> = {
  DEES: "Éducateur spécialisé",
  DEAES: "Accompagnant éducatif et social",
  DEEJE: "Éducateur de jeunes enfants",
  DEME: "Moniteur-éducateur",
};

/**
 * Nom affiché dans le SMS (« c'est Untel de VAESocial »). Renseigné via
 * LEADS_SMS_SIGNATURE. Si la variable est absente, la phrase reste correcte
 * sans le prénom — on n'invente jamais un nom.
 */
function signature(): string {
  const s = process.env.LEADS_SMS_SIGNATURE?.trim();
  return s ? `${s} de VAESocial` : "VAESocial";
}

/**
 * Texte du SMS de relance. Volontairement construit sur un seul appel à
 * l'action — « matin ou après-midi ? » — parce qu'un SMS à deux propositions
 * fait chuter le taux de réponse. La question binaire se répond en un mot,
 * et un mot suffit à ouvrir la conversation.
 *
 * Aucun contenu promotionnel : c'est un message de service faisant suite à
 * une demande de rappel de la personne elle-même.
 */
export function buildRelanceSms(lead: { prenom: string; diplomeVise: string }): string {
  const libelle = DIPLOME_LIBELLE[lead.diplomeVise];
  // Si le diplôme n'est pas dans la table (ex. « Je ne sais pas »), on reste
  // générique plutôt que d'écrire un libellé faux.
  const objet = libelle ? `votre demande pour la VAE ${libelle}` : "votre demande de VAE";

  return [
    `Bonjour ${lead.prenom}, c'est ${signature()}.`,
    `Je viens d'essayer de vous joindre au sujet de ${objet} — je vous ai laissé un message vocal.`,
    `Rien d'urgent, je voulais surtout faire le point avec vous sur votre parcours et vérifier votre éligibilité. Comptez 15 minutes.`,
    `Vous préférez plutôt le matin ou l'après-midi ? Répondez-moi ici, je m'adapte.`,
  ].join(" ");
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
 * Android attend « ?body= ». Yoni est sur iPhone : on retient la forme iOS.
 * Si un jour le pré-remplissage ne fonctionne plus, le texte complet reste
 * disponible en clair dans le corps de l'email — le repli est toujours là.
 */
export function buildSmsHref(lead: { prenom: string; diplomeVise: string; telephone: string }): string | null {
  const intl = toInternational(lead.telephone);
  if (!intl) return null;
  return `sms:${intl}&body=${encodeURIComponent(buildRelanceSms(lead))}`;
}
