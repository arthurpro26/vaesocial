"use client";

// Point d'intégration unique pour le tracking de conversion, utilisé par
// TOUS les formulaires du site (home + 4 pages diplôme, un seul composant
// PrediagnosticForm partagé). Aujourd'hui : aucun tag Google Ads / GTM n'est
// installé — cette fonction pousse juste l'événement dans window.dataLayer
// (créé si besoin), sans effet tant qu'aucun conteneur GTM n'est configuré.
//
// Quand le tag de conversion Google Ads sera prêt à être branché, il suffira
// de créer un déclencheur GTM sur l'événement "prediagnostic_lead_submitted"
// — aucune modification du formulaire ne sera nécessaire.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackConversion(eventName: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...data });
}
