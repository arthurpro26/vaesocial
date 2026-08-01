import { siteConfig } from "@/lib/site-config";
import type { DiplomeData } from "@/lib/diplomes-data";

// Balisage schema.org Course, un par page diplôme — complète l'Organization
// JSON-LD global (voir components/JsonLd.tsx). Reprend uniquement des
// informations déjà affichées et vérifiées sur la page elle-même (nom
// complet, niveau RNCP, description) : aucune donnée inventée (pas de prix,
// pas de note, pas de durée) pour rester strictement exact vis-à-vis de
// Google. Le "Course" est ici l'accompagnement VAE proposé par VAESocial
// vers le diplôme visé, pas une formation initiale classique.
export default function CourseJsonLd({ diplome }: { diplome: DiplomeData }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Accompagnement VAE ${diplome.sigle} — ${diplome.nomComplet}`,
    description: diplome.metaDescription,
    url: `${siteConfig.url}/${diplome.slug}`,
    inLanguage: "fr-FR",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    educationalCredentialAwarded: `${diplome.nomComplet} (${diplome.niveau})`,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
