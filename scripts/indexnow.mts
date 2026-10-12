// RÉFÉRENCEMENT EXPRESS — prévenir les moteurs de recherche des pages nouvelles
// ou mises à jour, sans attendre qu'ils repassent (protocole IndexNow).
//
//   npm run seo:index                    simulation : affiche ce qui serait envoyé
//   npm run seo:index -- --send          envoie vraiment (APRÈS la mise en ligne)
//   npm run seo:index -- --send --all    envoie toutes les pages du site
//   npm run seo:index -- --days=14       fenêtre « récent » (30 jours par défaut)
//
// IndexNow est pris en charge par Bing, Yandex, Naver, Seznam et d'autres. GOOGLE
// NE LE PREND PAS EN CHARGE : pour Google, le sitemap (déjà en place) reste la voie,
// plus une demande d'indexation manuelle dans Search Console pour les pages clés.
// La clé ci-dessous est publique par conception : le fichier public/<clé>.txt doit
// être en ligne pour que les moteurs acceptent l'envoi (le script le vérifie).

import { siteConfig } from "../lib/site-config.ts";
import { BLOG_ARTICLES, getRelatedDiplomes } from "../lib/blog-data.ts";
import { DIPLOMES } from "../lib/site-data.ts";

const KEY = "6748ecbe4eb1e089e965dead4dac26c2";
const base = siteConfig.url.replace(/\/$/, "");
const send = process.argv.includes("--send");
const all = process.argv.includes("--all");
const days = Number(process.argv.find((a) => a.startsWith("--days="))?.split("=")[1] ?? 30);

const urls = new Set<string>();
if (all) {
  urls.add(base);
  DIPLOMES.forEach((d) => urls.add(`${base}/${d.slug}`));
  urls.add(`${base}/blog`);
  BLOG_ARTICLES.forEach((a) => urls.add(`${base}/blog/${a.slug}`));
} else {
  const since = Date.now() - days * 86_400_000;
  const recent = BLOG_ARTICLES.filter((a) => new Date(a.dateModified ?? a.datePublished).getTime() >= since);
  if (recent.length > 0) urls.add(`${base}/blog`);
  for (const a of recent) {
    urls.add(`${base}/blog/${a.slug}`);
    // La page du diplôme reçoit un nouveau lien depuis l'article : on la signale aussi.
    getRelatedDiplomes(a).forEach((slug) => urls.add(`${base}/${slug}`));
  }
}

const urlList = [...urls];
console.log(`\nIndexNow — ${urlList.length} URL${urlList.length > 1 ? "s" : ""}${all ? " (tout le site)" : ` (modifiées depuis ${days} jours)`}`);
urlList.forEach((u) => console.log("  " + u));

if (urlList.length === 0) {
  console.log("\nRien de récent à envoyer.\n");
  process.exit(0);
}
if (!send) {
  console.log("\nSimulation uniquement. Ajoutez --send une fois le site mis en ligne.\n");
  process.exit(0);
}

const keyLocation = `${base}/${KEY}.txt`;
const check = await fetch(keyLocation).catch(() => null);
if (!check || !check.ok || (await check.text()).trim() !== KEY) {
  console.error(`\nArrêt : le fichier clé n'est pas en ligne (${keyLocation}). Mettez d'abord le site en ligne.\n`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(base).host, key: KEY, keyLocation, urlList }),
});
console.log(`\nRéponse IndexNow : ${res.status} ${res.statusText}${res.status === 200 || res.status === 202 ? " — envoi accepté." : ""}\n`);
process.exit(res.ok ? 0 : 1);
