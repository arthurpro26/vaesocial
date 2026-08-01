import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/JsonLd";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationJsonLd />
        <GoogleTagManagerScript />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
