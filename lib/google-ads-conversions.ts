"use client";

// Étiquettes de conversion Google Ads, une par formulaire — à renseigner une
// fois les actions de conversion créées côté Google Ads (Outils et
// paramètres > Conversions > Nouvelle action de conversion).
//
// Format attendu pour chaque valeur : "AW-18174606822/XXXXXXXXXXXXXXXXXXXX"
// (le "send_to" fourni par Google Ads pour CETTE action de conversion
// précise — différent de l'ID de compte AW- global déjà installé dans
// GoogleAdsTag.tsx, qui sert uniquement au chargement de la bibliothèque).
//
// Tant qu'une entrée reste `undefined`, trackFormConversion() ne fait rien
// pour ce formulaire (juste un avertissement en console) : sûr par défaut,
// aucun événement invalide n'est jamais envoyé à Google Ads. Une fois les
// libellés récupérés, il suffit de les coller ci-dessous — aucune autre
// modification (formulaire, API route...) n'est nécessaire.
export type FormKey = "dees" | "deaes" | "deeje" | "deme" | "deap" | "generique";

// Étiquette unique de l'action de conversion « Envois de formulaires de lead »
// du compte. Elle est volontairement partagée par TOUS les formulaires.
//
// INCIDENT DU 4 AOÛT 2026 — pourquoi ce changement.
// Auparavant seule la clé `dees` était renseignée, les quatre autres valant
// `undefined`. Or `formKey` vaut "generique" dès que le formulaire est envoyé
// depuis la page d'accueil ou /prediagnostic (aucun diplôme présélectionné) :
// trackFormConversion() sortait alors sans rien envoyer. Résultat, un lead
// réel reçu à 15h59 n'est jamais remonté dans Google Ads, et la stratégie
// « Maximiser les conversions » apprenait sur un signal amputé — elle
// optimisait en ignorant une partie des leads réellement générés.
//
// Une seule action de conversion pour un seul objectif commercial (obtenir un
// lead) est de toute façon la bonne architecture : la ventilation par diplôme
// se fait dans les rapports, par campagne, pas en multipliant les actions de
// conversion — ce qui fragmenterait l'apprentissage des enchères entre
// plusieurs signaux trop peu volumineux chacun pour converger.
const LEAD_FORM_CONVERSION = "AW-18174606822/BbkxCP6cxtgcEOb7qdpD";

// Le type est `Record<FormKey, string>` et NON `string | undefined` : c'est le
// garde-fou qui manquait. Si un jour une clé est oubliée, mise à undefined, ou
// qu'un nouveau diplôme est ajouté à FormKey sans son étiquette, la
// compilation TypeScript ÉCHOUE et le déploiement Hostinger s'arrête. Le bug
// ne peut plus passer en production silencieusement — c'est exactement ce qui
// s'est produit le 4 août 2026 et qui a coûté des conversions non remontées.
export const GOOGLE_ADS_CONVERSION_LABELS: Record<FormKey, string> = {
  dees: LEAD_FORM_CONVERSION,
  deaes: LEAD_FORM_CONVERSION,
  deeje: LEAD_FORM_CONVERSION,
  deme: LEAD_FORM_CONVERSION,
  // Ajouté le 03/09/2026 en même temps que la page auxiliaire de puériculture.
  // SANS cette ligne, `formKey` aurait valu "deap", la recherche dans ce
  // Record aurait renvoyé `undefined`, et AUCUNE conversion ne serait remontée
  // à Google Ads pour les leads DEAP — la campagne neuve aurait appris sur un
  // signal vide, exactement le scénario du 4 août 2026 décrit plus haut.
  deap: LEAD_FORM_CONVERSION,
  // Formulaire de la page d'accueil et de /prediagnostic, quand aucun
  // diplôme n'est présélectionné (presetDiplome absent).
  generique: LEAD_FORM_CONVERSION,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Déclenche la conversion Google Ads propre au formulaire envoyé (DEES,
 * DEAES, DEEJE, DEME, DEAP ou générique), une fois l'étiquette correspondante
 * renseignée dans GOOGLE_ADS_CONVERSION_LABELS ci-dessus.
 *
 * Appelé dès maintenant depuis PrediagnosticForm.tsx : sans effet tant que
 * les libellés ne sont pas configurés, prêt à fonctionner dès qu'ils le sont.
 */
export function trackFormConversion(formKey: FormKey) {
  if (typeof window === "undefined") return;

  const sendTo = GOOGLE_ADS_CONVERSION_LABELS[formKey];

  if (!sendTo) {
    console.warn(
      `[google-ads] Conversion "${formKey}" pas encore configurée (send_to manquant dans lib/google-ads-conversions.ts).`
    );
    return;
  }

  window.gtag?.("event", "conversion", { send_to: sendTo });
}
