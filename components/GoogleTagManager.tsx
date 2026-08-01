import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

// Chargement conditionnel : si NEXT_PUBLIC_GTM_ID n'est pas défini (.env),
// rien n'est injecté — évite d'avoir un conteneur GTM vide en développement.
export function GoogleTagManagerScript() {
  if (!siteConfig.gtmId) return null;

  return (
    <Script id="gtm-script" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${siteConfig.gtmId}');
      `}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!siteConfig.gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}
