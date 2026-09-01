import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // La route API du formulaire n'a aucun contenu indexable (POST only) —
      // on l'exclut explicitement du crawl par bonne pratique.
      // /relance et /relance/liste sont des écrans internes qui affichent des
      // données personnelles de leads : jamais de crawl, jamais d'index.
      disallow: ["/api/", "/relance"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
