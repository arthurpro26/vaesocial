/**
 * Normalisation des numéros de téléphone français.
 *
 * POURQUOI CE FICHIER EXISTE — incident du 4 août 2026.
 * L'ancien formatage vivait dans PrediagnosticForm.tsx et faisait :
 *     raw.replace(/\D/g, "").slice(0, 10)
 * Une personne qui saisit son numéro au format international
 * (« +33 6 26 40 01 33 », ce que fait spontanément quelqu'un dont le
 * téléphone enregistre l'indicatif) produisait 11 chiffres : « 33626400133 ».
 * Le slice(0, 10) coupait le DERNIER chiffre et laissait « 3362640013 »,
 * affiché « 33 62 64 00 13 ». Le schéma ne contrôlant que la longueur, la
 * validation passait au vert et le lead partait avec un numéro injoignable.
 * Deux leads réels ont été perdus de cette façon (03 et 04 août 2026).
 *
 * Règle depuis : on ne tronque JAMAIS une saisie utilisateur silencieusement.
 * Soit on sait normaliser, soit on refuse explicitement avec un message clair.
 */

/** Longueur maximale conservée pendant la frappe. Large exprès : elle doit
 *  couvrir « 0033 » + 9 chiffres = 13, avec de la marge. Elle ne sert qu'à
 *  éviter un collage aberrant, jamais à « corriger » une saisie. */
const MAX_INPUT_DIGITS = 15;

/**
 * Ramène n'importe quelle saisie française courante à ses 10 chiffres
 * nationaux (« 0626400133 »), ou renvoie null si ce n'est pas un numéro
 * français valide.
 *
 * Formats acceptés :
 *   06 26 40 01 33 · 06.26.40.01.33 · 06-26-40-01-33 · 0626400133
 *   +33 6 26 40 01 33 · +33626400133 · 0033 6 26 40 01 33
 *   33 6 26 40 01 33 (indicatif sans le +)
 *   6 26 40 01 33 (zéro initial oublié)
 */
export function normalizePhoneFr(raw: string): string | null {
  const digits = (raw ?? "").replace(/\D/g, "");
  let national: string | null = null;

  if (/^0033\d{9}$/.test(digits)) {
    national = "0" + digits.slice(4);
  } else if (/^33\d{9}$/.test(digits)) {
    national = "0" + digits.slice(2);
  } else if (/^0\d{9}$/.test(digits)) {
    national = digits;
  } else if (/^[1-9]\d{8}$/.test(digits)) {
    // Zéro initial omis (« 6 26 40 01 33 ») — cas fréquent après un copier-coller.
    national = "0" + digits;
  }

  if (!national) return null;

  // 01–05 fixes, 06/07 mobiles, 09 non géographique. 00 et 08 (numéros
  // spéciaux surtaxés) sont exclus : ce ne sont pas des numéros de rappel.
  if (!/^0[1-79]\d{8}$/.test(national)) return null;

  return national;
}

/** true si la saisie correspond à un numéro français exploitable pour rappeler. */
export function isValidPhoneFr(raw: string): boolean {
  return normalizePhoneFr(raw) !== null;
}

/** « 0626400133 » → « 06 26 40 01 33 ». */
export function formatPhoneFr(national: string): string {
  return national.replace(/(\d{2})(?=\d)/g, "$1 ");
}

/**
 * Formatage au fil de la frappe. Dès que la saisie devient un numéro français
 * reconnaissable, on affiche la forme nationale canonique — l'utilisateur qui
 * a tapé « +33 6 26 40 01 33 » voit « 06 26 40 01 33 » et comprend qu'on l'a
 * bien compris. Tant que ce n'est pas le cas, on se contente de grouper par
 * paires SANS RIEN COUPER, pour ne jamais détruire une saisie en cours.
 */
export function formatPhoneInput(raw: string): string {
  const national = normalizePhoneFr(raw);
  if (national) return formatPhoneFr(national);

  const hasPlus = raw.trimStart().startsWith("+");
  const digits = raw.replace(/\D/g, "").slice(0, MAX_INPUT_DIGITS);
  return (hasPlus ? "+" : "") + digits.replace(/(\d{2})(?=\d)/g, "$1 ");
}
