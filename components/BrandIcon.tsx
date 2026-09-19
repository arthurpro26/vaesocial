// Set d'icônes vectorielles de la page d'accueil — 19/09/2026.
//
// POURQUOI CE FICHIER EXISTE. Le premier écran affichait neuf émojis
// (✅ ⭐ ✨ 🔒 🤝 🎓 💻 💳 🏢) juste à côté du formulaire, qui avait lui
// été nettoyé de tous les siens. Les raisons sont les mêmes qu'à l'époque
// (voir StepIcon dans PrediagnosticForm.tsx) : rendu différent sur chaque
// système, ton familier là où on attend un rendu institutionnel, et surtout
// une incohérence visible — l'accroche en émojis, le formulaire en vectoriel,
// tous les deux dans le même champ de vision.
//
// Traits fins, une seule couleur (currentColor), viewBox 20×20 : strictement
// les mêmes conventions que StepIcon, pour que les deux sets se ressemblent.
type BrandIconName =
  | "shield"      // secteur / garantie
  | "award"       // réussite, taux validé
  | "users"       // VAE accompagnées
  | "wallet"      // financement CPF
  | "screen"      // 100 % à distance
  | "diploma"     // diplômes accessibles
  | "building"    // OPCO / structure
  | "lock"        // confidentialité
  | "handshake";  // accompagnement

export default function BrandIcon({
  name,
  className,
}: {
  name: BrandIconName;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M10 2.5l6 2.25v5c0 3.5-2.4 6.5-6 7.75-3.6-1.25-6-4.25-6-7.75v-5L10 2.5z" />
          <path d="M7.25 10l1.9 1.9 3.6-3.6" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="10" cy="7.75" r="4.75" />
          <path d="M7.25 11.9L6.25 17.5l3.75-2 3.75 2-1-5.6" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="7.75" cy="7" r="2.75" />
          <path d="M2.75 16.25c0-2.5 2.25-4.25 5-4.25s5 1.75 5 4.25" />
          <path d="M13.5 4.6a2.75 2.75 0 010 4.9" />
          <path d="M14.75 12.4c1.6.55 2.75 1.95 2.75 3.85" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="15" height="11" rx="2" />
          <path d="M2.5 8.5h15" />
          <circle cx="14" cy="12.25" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "screen":
      return (
        <svg {...common}>
          <rect x="2.5" y="4" width="15" height="10" rx="1.5" />
          <line x1="7" y1="17" x2="13" y2="17" />
          <line x1="10" y1="14" x2="10" y2="17" />
        </svg>
      );
    case "diploma":
      return (
        <svg {...common}>
          <path d="M10 3.25L18 7l-8 3.75L2 7l8-3.75z" />
          <path d="M5.5 8.75v3.75c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V8.75" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="3.75" y="3" width="12.5" height="14" rx="1.5" />
          <line x1="7" y1="6.5" x2="8.5" y2="6.5" />
          <line x1="11.5" y1="6.5" x2="13" y2="6.5" />
          <line x1="7" y1="10" x2="8.5" y2="10" />
          <line x1="11.5" y1="10" x2="13" y2="10" />
          <path d="M8.25 17v-3.25h3.5V17" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="4" y="8.75" width="12" height="8.25" rx="1.75" />
          <path d="M7 8.75V6.5a3 3 0 016 0v2.25" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M2.5 8.5l3-2.5 3.25 1.25L10 6.75l1.25.5L14.5 6l3 2.5" />
          <path d="M5.5 6v6.5l4.5 3 4.5-3V6" />
          <path d="M10 9.75v5.75" />
        </svg>
      );
  }
}
