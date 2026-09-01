/**
 * Contrôle d'accès de la console de relance — 01/09/2026.
 *
 * La page /relance/liste affiche l'intégralité du fichier de leads : noms,
 * téléphones, adresses email de personnes réelles. Laisser cette page en accès
 * libre serait une fuite de données personnelles, pas une simple négligence.
 *
 * La protection est volontairement minimale mais stricte : une clé secrète,
 * définie par la variable d'environnement RELANCE_ACCESS_KEY, passée dans
 * l'URL. Si la variable n'est pas définie, la page N'EXISTE PAS (404) et
 * l'API refuse tout. Aucune valeur par défaut, jamais.
 *
 * Ce n'est pas de l'authentification forte : l'URL peut se retrouver dans un
 * historique de navigateur. C'est proportionné à l'usage — un seul
 * utilisateur, sur ses propres appareils — et infiniment supérieur à une page
 * publique. Le jour où plusieurs personnes y accèdent, il faudra un vrai
 * compte.
 */

/** Comparaison à durée constante : ne révèle pas la clé caractère par caractère. */
export function cleRelanceValide(fournie: string): boolean {
  const attendue = process.env.RELANCE_ACCESS_KEY?.trim();
  if (!attendue || !fournie || fournie.length !== attendue.length) return false;
  let ecart = 0;
  for (let i = 0; i < attendue.length; i += 1) {
    ecart |= attendue.charCodeAt(i) ^ fournie.charCodeAt(i);
  }
  return ecart === 0;
}

/** La relance est-elle activée côté serveur ? */
export function relanceActivee(): boolean {
  return Boolean(process.env.RELANCE_ACCESS_KEY?.trim());
}
