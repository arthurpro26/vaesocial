import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette teal/émeraude profonde — identité visuelle originale VAESocial
        // (volontairement différente des références du secteur type "bleu marine + blanc").
        // Version assombrie/désaturée par rapport au teal Tailwind standard pour un
        // rendu plus premium, moins "vif" — retour utilisateur du 2026-08-01.
        //
        // 2026-09-03 — Les valeurs ne sont plus écrites en dur ici mais lues dans
        // des variables CSS définies sur :root (voir app/globals.css). Les valeurs
        // teal sont EXACTEMENT les mêmes qu'avant : aucun changement visuel sur les
        // pages existantes. Le seul intérêt du passage par variables est de pouvoir
        // repeindre une page entière en ajoutant une classe sur un conteneur
        // (`.theme-rose` sur /auxiliaire-puericulture), sans dupliquer un seul
        // composant ni toucher aux ~37 classes `brand-*` utilisées dans le site.
        //
        // Format `rgb(var(--x) / <alpha-value>)` : indispensable pour que les
        // variantes avec opacité déjà présentes (bg-brand-50/60,
        // shadow-brand-900/5, text-brand-50/90...) continuent de fonctionner.
        brand: {
          50: "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
        },
        // Accent chaud (corail/orange) pour les CTA — fort contraste avec le teal,
        // pensé pour la conversion.
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
