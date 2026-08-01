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
        brand: {
          50: "#eff7f5",
          100: "#d9ece7",
          200: "#b3d9d0",
          300: "#82beb0",
          400: "#55a08f",
          500: "#368475",
          600: "#296b5f",
          700: "#21564d",
          800: "#1b443d",
          900: "#142f2a",
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
