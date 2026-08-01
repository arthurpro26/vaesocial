import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

// Balise Google Ads (gtag.js) — installée une seule fois ici, dans le layout
// racine (app/layout.tsx). L'App Router de Next.js partage ce layout entre
// toutes les routes (/, /dees, /deaes, /deeje, /deme, /prediagnostic...) sans
// jamais le remonter lors d'une navigation interne : il n'y a donc qu'un seul
// exemplaire de ces <script> dans le DOM, sur toutes les pages, sans avoir à
// les copier où que ce soit.
//
// Un seul chargement de la bibliothèque gtag.js pour tout le site : si
// NEXT_PUBLIC_GA_MEASUREMENT_ID est renseigné en plus de l'ID Google Ads, on
// réutilise CE MÊME chargement pour configurer aussi Google Analytics (un
// second appel gtag('config', ...), jamais un second <script src=gtag.js>)
// — c'est la pratique recommandée par Google pour éviter tout risque de
// double comptage entre Ads et GA4 sur un même site.
//
// Coexiste avec GoogleTagManager.tsx (conteneur GTM, géré séparément) : les
// deux mécanismes partagent le même window.dataLayer sans se marcher dessus.
// Point de vigilance pour plus tard : si un tag "Conversion Google Ads" pour
// ce même identifiant AW- est un jour ajouté DANS le conteneur GTM, retirer
// l'un des deux mécanismes pour ne jamais déclencher la même conversion deux fois.
export function GoogleAdsTag() {
  const { googleAdsConversionId: adsId, gaId } = siteConfig;

  // Rien n'est injecté tant que NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID n'est
  // pas défini — même logique que GoogleTagManagerScript : pas de balise
  // vide/cassée en environnement de développement ou avant configuration.
  if (!adsId) return null;

  return (
    <>
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
          ${gaId ? `gtag('config', '${gaId}');` : ""}
        `}
      </Script>
    </>
  );
}
