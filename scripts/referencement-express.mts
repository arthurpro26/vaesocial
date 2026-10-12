// RÉFÉRENCEMENT EXPRESS — contrôle qualité SEO du site, en une commande.
//
//   npm run seo              rapport complet (code de sortie 1 s'il y a des erreurs)
//   npm run seo -- --strict  les alertes comptent aussi comme des échecs
//
// Ce que ça vérifie, page par page : longueur des titres et descriptions (Google
// tronque au-delà de ~60 et ~160 caractères), doublons, sources officielles et date
// de vérification des faits, appel à l'action, profondeur du texte, ton (pas de
// promesse invérifiable), liens internes entrants (article orphelin), diplômes
// référencés valides. Il lit les mêmes données que le site (lib/blog-data.ts et
// lib/diplomes-data.ts) : rien à configurer, rien à maintenir à côté.
//
// Nécessite Node 22.6 ou plus (exécute le TypeScript directement).

import { readFileSync } from "node:fs";
import {
  BLOG_ARTICLES,
  getArticlesForDiplome,
  getRelatedArticles,
  getRelatedDiplomes,
} from "../lib/blog-data.ts";
import type { BlogArticle } from "../lib/blog-data.ts";
import { DIPLOMES_DATA } from "../lib/diplomes-data.ts";
import { DIPLOMES } from "../lib/site-data.ts";

const TITLE_MAX = 60;
const DESC_MIN = 110;
const DESC_MAX = 160;
const MIN_WORDS = 400;
const STALE_DAYS = 180; // au-delà, les faits sont à revérifier
const PROMESSES = /(le meilleur|la meilleure|n°\s?1|numéro 1|garanti|100\s?%|sans effort|résultat assuré)/i;

type Level = "erreur" | "alerte";
type Issue = { level: Level; page: string; msg: string };
const issues: Issue[] = [];
const add = (level: Level, page: string, msg: string) => issues.push({ level, page, msg });

const strict = process.argv.includes("--strict");

// ── Pages diplômes ──────────────────────────────────────────────────────────
type Meta = { page: string; title: string; description: string };
const metas: Meta[] = [];

for (const d of Object.values(DIPLOMES_DATA)) {
  const page = `/${d.slug}`;
  metas.push({ page, title: d.metaTitle, description: d.metaDescription });
  if (d.faq.length < 4) add("alerte", page, `FAQ courte (${d.faq.length} questions, 4 minimum)`);
}

// ── Articles ────────────────────────────────────────────────────────────────
const validSlugs = new Set<string>(DIPLOMES.map((d) => d.slug));
const today = new Date();

function textOf(a: BlogArticle): string {
  return a.content
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "cta") return `${b.titre} ${b.texte}`;
      return b.text;
    })
    .join(" ");
}

for (const a of BLOG_ARTICLES) {
  const page = `/blog/${a.slug}`;
  metas.push({ page, title: a.metaTitle, description: a.metaDescription });
  const text = textOf(a);
  const words = text.split(/\s+/).filter(Boolean).length;

  if (new Date(a.datePublished).getTime() > today.getTime())
    add("erreur", page, `date de publication dans le futur (${a.datePublished})`);
  if (!a.content.some((b) => b.type === "cta")) add("erreur", page, "aucun bloc d'appel à l'action (cta)");
  if (words < MIN_WORDS) add("alerte", page, `texte court (${words} mots, ${MIN_WORDS} conseillés)`);
  if (a.content.filter((b) => b.type === "h2").length < 2) add("alerte", page, "moins de 2 intertitres (h2)");
  if (/\p{Extended_Pictographic}/u.test(a.title + a.metaTitle)) add("alerte", page, "emoji dans le titre");
  const promesse = text.match(PROMESSES);
  if (promesse) add("alerte", page, `formule invérifiable : « ${promesse[0]} »`);

  for (const slug of a.diplomes ?? [])
    if (!validSlugs.has(slug)) add("erreur", page, `diplôme inconnu dans \`diplomes\` : ${slug}`);

  // Sources et fraîcheur
  const sourcesEnTexte = a.content.some((b) => b.type === "p" && /sources? (officielles? )?consult/i.test(b.text));
  if (!a.sources || a.sources.length === 0) {
    if (sourcesEnTexte) add("alerte", page, "sources en simple paragraphe : à migrer vers le champ `sources` (liens)");
    else add("erreur", page, "aucune source citée");
  } else {
    if (!a.verifiedOn) add("alerte", page, "`verifiedOn` manquant (date de vérification des faits)");
    if (a.sources.some((s) => !s.url)) add("alerte", page, "source sans lien (`url`)");
  }
  if (a.verifiedOn) {
    const age = Math.floor((today.getTime() - new Date(a.verifiedOn).getTime()) / 86_400_000);
    if (age > STALE_DAYS) add("alerte", page, `faits vérifiés il y a ${age} jours : à revérifier`);
  } else if (a.sources?.length === 0 || !a.sources) {
    const age = Math.floor((today.getTime() - new Date(a.dateModified ?? a.datePublished).getTime()) / 86_400_000);
    if (age > STALE_DAYS) add("alerte", page, `dernière mise à jour il y a ${age} jours : à revérifier`);
  }
}

// ── Métas : longueur et doublons ─────────────────────────────────────────────
for (const m of metas) {
  if (!m.title.trim()) add("erreur", m.page, "title vide");
  else if (m.title.length > TITLE_MAX) add("alerte", m.page, `title de ${m.title.length} caractères (max ${TITLE_MAX}) : tronqué dans Google`);
  if (!m.description.trim()) add("erreur", m.page, "description vide");
  else if (m.description.length > DESC_MAX) add("alerte", m.page, `description de ${m.description.length} caractères (max ${DESC_MAX}) : tronquée dans Google`);
  else if (m.description.length < DESC_MIN) add("alerte", m.page, `description courte (${m.description.length} caractères, ${DESC_MIN} conseillés)`);
}
for (const field of ["title", "description"] as const) {
  const seen = new Map<string, string>();
  for (const m of metas) {
    const key = m[field].trim().toLowerCase();
    const first = seen.get(key);
    if (first) add("erreur", m.page, `${field} identique à celui de ${first}`);
    else seen.set(key, m.page);
  }
}
const slugs = BLOG_ARTICLES.map((a) => a.slug);
for (const s of slugs) if (slugs.filter((x) => x === s).length > 1) add("erreur", `/blog/${s}`, "slug en double");

// ── Liens internes entrants ──────────────────────────────────────────────────
const inbound = new Map<string, number>(slugs.map((s) => [s, 0]));
const bump = (a: BlogArticle) => inbound.set(a.slug, (inbound.get(a.slug) ?? 0) + 1);
for (const a of BLOG_ARTICLES) getRelatedArticles(a, 3).forEach(bump);
for (const d of DIPLOMES) getArticlesForDiplome(d.slug, 3).forEach(bump);
for (const [slug, n] of inbound) if (n === 0) add("alerte", `/blog/${slug}`, "aucun lien interne entrant (article orphelin)");

// ── File d'attente des sujets (referencement-express/file-sujets.json) ──────
type Sujet = { id: string; slug_propose: string; priorite: number; statut: string };
let queueInfo = "";
try {
  const queue = JSON.parse(readFileSync(new URL("../referencement-express/file-sujets.json", import.meta.url), "utf-8")) as { sujets: Sujet[] };
  const STATUTS = ["a_rediger", "en_cours", "publie", "a_verifier_avant"];
  for (const t of queue.sujets) {
    if (!STATUTS.includes(t.statut)) add("erreur", "file-sujets.json", `statut inconnu « ${t.statut} » (${t.id})`);
    if (t.statut === "publie" && !slugs.includes(t.slug_propose)) add("erreur", "file-sujets.json", `${t.id} est « publie » mais /blog/${t.slug_propose} n'existe pas`);
    if (t.statut !== "publie" && slugs.includes(t.slug_propose)) add("alerte", "file-sujets.json", `${t.id} : l'article existe déjà, passer le statut à « publie »`);
  }
  const restants = queue.sujets.filter((t) => t.statut !== "publie");
  queueInfo = `File d'attente : ${restants.length} sujet(s) à traiter, dont ${restants.filter((t) => t.priorite === 1).length} de priorité 1.`;
} catch {
  add("alerte", "file-sujets.json", "fichier introuvable ou illisible");
}

// ── Rapport ──────────────────────────────────────────────────────────────────
const erreurs = issues.filter((i) => i.level === "erreur");
const alertes = issues.filter((i) => i.level === "alerte");
const byPage = new Map<string, Issue[]>();
for (const i of issues) byPage.set(i.page, [...(byPage.get(i.page) ?? []), i]);

console.log("\nRÉFÉRENCEMENT EXPRESS — contrôle qualité\n");
console.log(`${Object.keys(DIPLOMES_DATA).length} pages diplômes · ${BLOG_ARTICLES.length} articles\n`);
for (const [page, list] of [...byPage].sort(([a], [b]) => a.localeCompare(b))) {
  console.log(page);
  for (const i of list) console.log(`  ${i.level === "erreur" ? "ERREUR" : "alerte"}  ${i.msg}`);
}
if (issues.length === 0) console.log("Aucun problème détecté.");

const score = Math.max(0, 100 - erreurs.length * 10 - alertes.length * 2);
console.log(`\n${erreurs.length} erreur(s) · ${alertes.length} alerte(s) · indice interne ${score}/100`);
console.log("(l'indice est un repère de progression interne, pas une note de Google)");
if (queueInfo) console.log(queueInfo);
console.log("");

process.exit(erreurs.length > 0 || (strict && alertes.length > 0) ? 1 : 0);
