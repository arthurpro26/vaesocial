import type { FaqItem } from "@/components/FaqAccordion";

// Balisage schema.org FAQPage — reprend tel quel le contenu déjà affiché à
// l'écran (aucun texte ajouté ni modifié), pour permettre à Google d'afficher
// des extraits enrichis (accordéon FAQ) dans les résultats de recherche.
export default function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.reponse,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
