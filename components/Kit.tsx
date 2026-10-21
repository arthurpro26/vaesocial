// Petites pièces visuelles partagées par les sections du site (design « institutionnel », 13/10/2026).
// Aucune donnée ici : uniquement de la présentation.
import type { ReactNode } from "react";

// Trame de points décorative (fonds de héros).
export const DOTS = {
  backgroundImage: "radial-gradient(rgba(41,107,95,0.14) 1.2px, transparent 1.6px)",
  backgroundSize: "22px 22px",
} as const;

// Une teinte douce par carte : même famille que le site, juste un peu de vie.
export const TINTS = [
  { tile: "bg-brand-50 text-brand-600", chip: "bg-brand-50 text-brand-700", bar: "from-brand-500 to-brand-300" },
  { tile: "bg-emerald-50 text-emerald-700", chip: "bg-emerald-50 text-emerald-800", bar: "from-emerald-500 to-emerald-300" },
  { tile: "bg-amber-50 text-amber-700", chip: "bg-amber-50 text-amber-800", bar: "from-amber-500 to-amber-300" },
  { tile: "bg-sky-50 text-sky-700", chip: "bg-sky-50 text-sky-800", bar: "from-sky-500 to-sky-300" },
] as const;

type IcoName = "clock" | "loop" | "check" | "spark" | "calendar" | "arrow" | "info";

// Icônes vectorielles complémentaires à BrandIcon (coches, flèches…).
export function Ico({ name, className }: { name: IcoName; className?: string }) {
  const common = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7.25" />
          <path d="M10 5.5V10l3 1.75" />
        </svg>
      );
    case "loop":
      return (
        <svg {...common}>
          <path d="M4 9a6 6 0 0110.2-3.9L16 7" />
          <path d="M16 3.5V7h-3.5" />
          <path d="M16 11a6 6 0 01-10.2 3.9L4 13" />
          <path d="M4 16.5V13h3.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M4 10.5l4 4 8-9" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M10 2.5l1.6 4.4 4.4 1.6-4.4 1.6L10 14.5l-1.6-4.4L4 8.5l4.4-1.6L10 2.5z" />
          <path d="M15.5 13.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="14" height="12.5" rx="2" />
          <path d="M3 8.5h14M7 3v3M13 3v3" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M4 10h11M11 5.5L15.5 10 11 14.5" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7.25" />
          <path d="M10 9v4.5M10 6.5v.01" />
        </svg>
      );
  }
}

// Pastille de texte (mots repérés dans les textes existants : MECS, IME, EHPAD…).
export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-black/5 ${className}`}>
      {children}
    </span>
  );
}

export const cap = (s: string) => s.replace(/^./, (c) => c.toUpperCase());
