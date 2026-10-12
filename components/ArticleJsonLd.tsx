import type { BlogArticle } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

// Balisage schema.org Article — même logique que FaqJsonLd/CourseJsonLd :
// reprend les données déjà affichées à l'écran, rien d'ajouté, pour permettre
// à Google d'identifier correctement l'article (auteur, date, organisation).
export default function ArticleJsonLd({ article }: { article: BlogArticle }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-square-1200.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
    // Sources officielles citées (si renseignées) : reprend ce qui est affiché en bas de l'article.
    ...(article.sources?.some((s) => s.url)
      ? {
          citation: article.sources
            .filter((s) => s.url)
            .map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
