"use client";

/**
 * Attribution Google Ads d'un lead — ajouté le 19/10/2026.
 *
 * POURQUOI. Jusqu'ici un lead arrivait sans aucune trace de la recherche qui
 * l'avait amené : impossible de dire quel mot clé, quelle annonce ou quelle
 * campagne produit les bons dossiers, et impossible de renvoyer à Google Ads
 * l'information « ce lead était qualifié » (import de conversions hors
 * connexion, qui exige l'identifiant du clic, le « gclid »).
 *
 * COMMENT. Le suffixe d'URL final de la campagne ajoute à chaque clic
 * `kw={keyword}&mt={matchtype}&cr={creative}&cp={campaignid}&ag={adgroupid}`,
 * et le marquage automatique de Google Ads ajoute `gclid=` (ou gbraid/wbraid
 * sur iOS). À l'arrivée sur le site, on mémorise ces paramètres dans le
 * navigateur (localStorage) ; au moment de l'envoi du formulaire, on les joint
 * au lead, quelle que soit la page où il est rempli, même plusieurs jours plus
 * tard. Dernier clic gagnant : un nouveau clic publicitaire remplace l'ancien.
 *
 * Repli : si le stockage a été vidé, le cookie `_gcl_aw` posé par la balise
 * Google Ads (format `GCL.<horodatage>.<gclid>`) fournit encore le gclid.
 *
 * Aucune donnée personnelle : identifiants techniques de clic et de mot clé,
 * conservés 90 jours au plus (durée de validité d'un gclid côté Google).
 */

export const ATTRIBUTION_STORAGE_KEY = "vaesocial_attribution_v1";
const DUREE_MAX_MS = 90 * 24 * 3600 * 1000;

/** Clés transmises au serveur avec le lead (toutes facultatives). */
export type Attribution = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  /** Mot clé Google Ads ({keyword}). */
  kwAds?: string;
  /** Type de correspondance ({matchtype} : e, p ou b). */
  mtAds?: string;
  /** Identifiant de l'annonce ({creative}). */
  crAds?: string;
  /** Identifiant de la campagne ({campaignid}). */
  cpAds?: string;
  /** Identifiant du groupe d'annonces ({adgroupid}). */
  agAds?: string;
  /** Chemin de la page d'arrivée (ex. « /dees »). */
  landing?: string;
  /** Horodatage ISO du clic (arrivée sur le site). */
  clickAt?: string;
  /**
   * Origine de la visite hors Google Ads — ajoutée le 23/10/2026 à la demande
   * d'Arthur (« d'où vient ce lead ? »). Valeurs : « Facebook », « Instagram »,
   * « Google naturel », « Bing », « Direct », un utm_source, ou le domaine du
   * site d'origine. Première visite gagnante : une navigation interne ne
   * remplace jamais la source d'arrivée. Un clic Google Ads reste prioritaire
   * (voir sourceDuLead dans lib/email.ts).
   */
  source?: string;
};

const SOURCE_STORAGE_KEY = "vaesocial_source_v1";

/** Devine l'origine d'une arrivée sur le site à partir de l'URL et du referrer. */
function devinerSource(sp: URLSearchParams, referrer: string): string | undefined {
  const utm = propre(sp.get("utm_source"), 40);
  if (utm) {
    const medium = propre(sp.get("utm_medium"), 20);
    const camp = propre(sp.get("utm_campaign"), 40);
    return [utm, medium, camp].filter(Boolean).join(" / ");
  }
  if (sp.get("fbclid")) return "Facebook";
  if (!referrer) return "Direct";
  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return undefined;
  }
  if (!host || host === window.location.hostname.toLowerCase()) return undefined;
  if (/(^|\.)(facebook|fb)\.com$|^fb\.me$|^l\.facebook\.com$|^lm\.facebook\.com$/.test(host)) return "Facebook";
  if (/(^|\.)instagram\.com$|^l\.instagram\.com$/.test(host)) return "Instagram";
  if (/(^|\.)google\.[a-z.]+$/.test(host)) return "Google naturel";
  if (/(^|\.)bing\.com$/.test(host)) return "Bing";
  if (/(^|\.)(linkedin|lnkd)\.(com|in)$/.test(host)) return "LinkedIn";
  if (/(^|\.)(youtube|youtu)\.(com|be)$/.test(host)) return "YouTube";
  return host.replace(/^www\./, "");
}

/** Mémorise l'origine de la première arrivée (jamais écrasée par une navigation interne). */
function captureSource(sp: URLSearchParams): void {
  try {
    if (window.localStorage.getItem(SOURCE_STORAGE_KEY)) return;
    const src = devinerSource(sp, document.referrer || "");
    if (src) window.localStorage.setItem(SOURCE_STORAGE_KEY, src);
  } catch {
    // Stockage indisponible : le lead partira sans source, jamais sans le lead.
  }
}

function lireSource(): string | undefined {
  try {
    return propre(window.localStorage.getItem(SOURCE_STORAGE_KEY), 60);
  } catch {
    return undefined;
  }
}

type Stocke = Attribution & { at: number };

// Paramètre d'URL -> clé envoyée au serveur.
const PARAMS: Array<[string, keyof Attribution]> = [
  ["gclid", "gclid"],
  ["gbraid", "gbraid"],
  ["wbraid", "wbraid"],
  ["kw", "kwAds"],
  ["mt", "mtAds"],
  ["cr", "crAds"],
  ["cp", "cpAds"],
  ["ag", "agAds"],
];

// Nettoyage défensif : ces valeurs viennent de l'URL, donc de n'importe qui.
// On ne garde que des caractères imprimables et une longueur bornée ; le
// serveur refait la même chose (lib/prediagnostic-schema.ts).
function propre(v: string | null | undefined, max = 200): string | undefined {
  if (!v) return undefined;
  const s = String(v).replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
  return s || undefined;
}

function lireStockage(): Stocke | null {
  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stocke;
    if (!parsed || typeof parsed.at !== "number") return null;
    if (Date.now() - parsed.at > DUREE_MAX_MS) {
      window.localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/** gclid du cookie `_gcl_aw` (posé par gtag.js), ou undefined. */
function gclidDuCookie(): string | undefined {
  try {
    const m = document.cookie.match(/(?:^|;\s*)_gcl_aw=([^;]+)/);
    if (!m) return undefined;
    const parts = decodeURIComponent(m[1]).split(".");
    // GCL.<timestamp>.<gclid>
    return parts.length >= 3 ? propre(parts.slice(2).join(".")) : undefined;
  } catch {
    return undefined;
  }
}

/**
 * À appeler une fois au chargement de la page (voir
 * components/AttributionCapture.tsx). Si l'URL porte un identifiant de clic
 * ou un mot clé Google Ads, on l'enregistre ; sinon on ne touche à rien.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const sp = new URLSearchParams(window.location.search);
    captureSource(sp);
    const trouve: Attribution = {};
    for (const [param, cle] of PARAMS) {
      const v = propre(sp.get(param));
      if (v) trouve[cle] = v;
    }
    const estUnClicAds = Boolean(trouve.gclid || trouve.gbraid || trouve.wbraid || trouve.kwAds);
    if (!estUnClicAds) return;

    const stocke: Stocke = {
      ...trouve,
      landing: propre(window.location.pathname, 120),
      clickAt: new Date().toISOString(),
      at: Date.now(),
    };
    window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(stocke));
  } catch {
    // Stockage indisponible (navigation privée, quota) : le lead partira sans
    // attribution, jamais sans le lead.
  }
}

/**
 * Attribution à joindre au lead au moment de l'envoi. Toujours un objet
 * (éventuellement vide) : n'échoue jamais.
 */
export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const stocke = lireStockage();
    const resultat: Attribution = {};
    if (stocke) {
      for (const [, cle] of PARAMS) {
        const v = stocke[cle];
        if (v) resultat[cle] = v;
      }
      if (stocke.landing) resultat.landing = stocke.landing;
      if (stocke.clickAt) resultat.clickAt = stocke.clickAt;
    }
    if (!resultat.gclid) {
      const c = gclidDuCookie();
      if (c) resultat.gclid = c;
    }
    const src = lireSource();
    if (src) resultat.source = src;
    return resultat;
  } catch {
    return {};
  }
}
