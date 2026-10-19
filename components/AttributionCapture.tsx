"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Mémorise, à l'arrivée sur le site, les paramètres du clic Google Ads
 * (gclid, mot clé, annonce, campagne) pour les joindre au lead plus tard.
 * Monté une seule fois dans app/layout.tsx ; ne rend rien.
 * Voir lib/attribution.ts (19/10/2026).
 */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
