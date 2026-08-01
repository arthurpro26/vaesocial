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
export type FormKey = "dees" | "deaes" | "deeje" | "deme" | "generique";

export const GOOGLE_ADS_CONVERSION_LABELS: Record<FormKey, string | undefined> = {
  dees: undefined,
  deaes: undefined,
  deeje: undefined,
  deme: undefined,
  // Formulaire de la page d'accueil et de /prediagnostic, quand aucun
  // diplôme n'est présélectionné (presetDiplome absent).
  generique: undefined,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Déclenche la conversion Google Ads propre au formulaire envoyé (DEES,
 * DEAES, DEEJE, DEME ou générique), une fois l'étiquette correspondante
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
