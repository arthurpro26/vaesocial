import type { Metadata } from "next";
import DiplomePageView from "@/components/DiplomePageView";
import { PAGE_AESH } from "@/lib/diplomes-data";
import { siteConfig } from "@/lib/site-config";

// Page métier AESH (23/11/2026) : même gabarit que les pages diplôme, contenu dans
// PAGE_AESH (lib/diplomes-data.ts), formulaire préréglé sur le DEAES.
const d = PAGE_AESH;

export const metadata: Metadata = {
  title: { absolute: d.metaTitle },
  description: d.metaDescription,
  alternates: { canonical: "/vae-aesh" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: d.metaTitle,
    description: d.metaDescription,
    url: "/vae-aesh",
  },
  twitter: { card: "summary_large_image", title: d.metaTitle, description: d.metaDescription },
};

export default function VaeAeshPage() {
  return <DiplomePageView d={d} />;
}
