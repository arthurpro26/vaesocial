import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/JsonLd";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { GoogleAdsTag } from "@/components/GoogleAdsTag";
import { FormProgressProvider } from "@/lib/form-progress-context";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// Police dédiée au logo uniquement (géométrique, plus de caractère qu'Inter en
// gras) — le reste du site continue d'utiliser Inter pour rester cohérent et léger.
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-logo" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Explicite plutôt que de compter sur le défaut de Next.js : garantit un
// rendu 1:1 avec la largeur de l'écran sur tous les mobiles, sans zoom forcé.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationJsonLd />
        <GoogleTagManagerScript />
        <GoogleAdsTag />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        {/* Lien d'évitement : invisible tant qu'il n'a pas le focus clavier,
            permet de sauter directement au contenu sans repasser par tout le
            header à chaque page (accessibilité clavier). */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <FormProgressProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </FormProgressProvider>
      </body>
    </html>
  );
}
