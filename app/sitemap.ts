import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Sitemap minimal pour la structure actuelle (accueil + prédiagnostic).
// À étendre automatiquement avec les pages diplômes et le blog dès leur création.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/prediagnostic`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
