import { siteConfig } from "@/lib/site-config";

// Balisage schema.org BreadcrumbList : indique à Google la place de la page dans
// le site (Accueil > Blog > Article). N'ajoute rien de visible, reprend
// uniquement la navigation réelle.
export default function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
