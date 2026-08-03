import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { DIPLOMES } from "@/lib/site-data";
import { BLOG_ARTICLES } from "@/lib/blog-data";

// N'inclut que les pages réellement indexables : /cgv et /confidentialite
// restent en noindex (contenu juridique pas encore entièrement confirmé —
// voir les commentaires dans ces fichiers) et sont donc volontairement
// absentes d'ici tant que ce n'est pas levé.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...DIPLOMES.map((d) => ({
      url: `${siteConfig.url}/${d.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${siteConfig.url}/prediagnostic`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...BLOG_ARTICLES.map((a) => ({
      url: `${siteConfig.url}/blog/${a.slug}`,
      lastModified: new Date(a.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${siteConfig.url}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
