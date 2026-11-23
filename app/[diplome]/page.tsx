import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DIPLOMES, type DiplomeSlug } from "@/lib/site-data";
import DiplomePageView from "@/components/DiplomePageView";
import { DIPLOMES_DATA } from "@/lib/diplomes-data";
import { siteConfig } from "@/lib/site-config";

// Page diplôme dédiée (/dees, /deaes, /deeje, /deme, /auxiliaire-puericulture,
// /assistant-service-social, /caferuis) — pilotée par lib/diplomes-data.ts. Une
// seule base de code, un seul template : chaque page adapte son contenu au
// diplôme via les données, sans dupliquer de JSX.
// Les sections Méthode / Financement / Témoignages / Appel final / Bandeau de
// confiance sont strictement les mêmes composants que sur la home (voir
// components/sections/) : même design, mêmes données réelles, zéro copie.
//
// Design « institutionnel » du 13/10/2026 (voir app/globals.css pour l'exception
// du filet tricolore) : fond clair, cartes à pastilles, bandeau bleu marine.
//
// Formulaire : le diplôme est préréglé via `presetDiplome`, l'étape "Quel
// diplôme ?" est donc masquée pour réduire la friction du trafic Google Ads
// qui arrive déjà avec une intention précise. Le formulaire lui-même n'a pas
// été touché : seul son cadre (halo, ombre) a changé.

const VALID_SLUGS = DIPLOMES.map((d) => d.slug);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ diplome: slug }));
}

function getDiplomeOrNotFound(slug: string) {
  if (!VALID_SLUGS.includes(slug as DiplomeSlug)) notFound();
  return DIPLOMES_DATA[slug as DiplomeSlug];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ diplome: string }>;
}): Promise<Metadata> {
  const { diplome } = await params;
  const d = getDiplomeOrNotFound(diplome);
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: `/${d.slug}` },
    // Chaque page diplôme avait jusqu'ici son Title/description propres, mais
    // héritait de l'Open Graph et Twitter Card génériques de la home (définis
    // dans app/layout.tsx) — un partage sur les réseaux affichait donc le
    // mauvais titre. On surcharge ici avec les mêmes données déjà utilisées
    // pour le title/description, sans rien inventer de nouveau.
    //
    // Important : Next.js fusionne les métadonnées "à plat" — dès qu'une page
    // définit son propre `openGraph`/`twitter`, ça REMPLACE entièrement celui
    // du layout parent (pas de fusion profonde). On reprend donc aussi
    // type/locale/siteName et card pour ne pas les perdre.
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: siteConfig.name,
      title: d.metaTitle,
      description: d.metaDescription,
      url: `/${d.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: d.metaTitle,
      description: d.metaDescription,
    },
  };
}

export default async function DiplomePage({
  params,
}: {
  params: Promise<{ diplome: string }>;
}) {
  const { diplome } = await params;
  return <DiplomePageView d={getDiplomeOrNotFound(diplome)} />;
}
