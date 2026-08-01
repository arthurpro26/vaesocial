import { siteConfig } from "@/lib/site-config";

// Balisage schema.org de base (Organization) affiché sur toutes les pages.
// Chaque future page diplôme ajoutera son propre JSON-LD (Course /
// EducationalOccupationalCredential) en plus de celui-ci.
export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
