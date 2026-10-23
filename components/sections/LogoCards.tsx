// Logos officiels sous l'accroche (accueil + pages diplôme), version du 20/10/2026.
// Modèle demandé par Arthur : cartes blanches arrondies, ombre douce, qui se soulèvent
// légèrement au survol (comme sur vae-diplome.fr), placées en bas de la colonne de
// gauche du héros, pas en pleine largeur. Fichiers HD fournis par Arthur (public/logos/,
// fonds détourés). Qualiopi et France Travail seront ajoutés quand leurs fichiers HD
// seront fournis (les versions basse définition ont été écartées).
const LOGOS = [
  { fichier: "france-competences.png", alt: "France compétences — certification enregistrée au RNCP" },
  { fichier: "france-vae.png", alt: "France VAE" },
  { fichier: "cpf.png", alt: "Formation finançable par le CPF" },
];

/**
 * `variant="flat"` (23/10/2026) : les trois logos sur une ligne, sans cartes
 * blanches — pour le haut des pages diplôme, où les cartes s'empilaient avec
 * le reste et alourdissaient la colonne (demande d'Arthur).
 */
export default function LogoCards({ className = "", variant = "cards" }: { className?: string; variant?: "cards" | "flat" }) {
  if (variant === "flat") {
    return (
      <ul aria-label="Références officielles" className={`flex flex-wrap items-center gap-x-7 gap-y-3 ${className}`}>
        {LOGOS.map((l) => (
          <li key={l.fichier} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/logos/${l.fichier}`} alt={l.alt} className="h-8 w-auto object-contain sm:h-9" />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul aria-label="Références officielles" className={`flex flex-wrap items-stretch gap-3 ${className}`}>
      {LOGOS.map((l) => (
        <li
          key={l.fichier}
          className="group flex h-16 items-center justify-center rounded-2xl bg-white px-4 shadow-[0_8px_24px_-14px_rgba(20,47,42,0.35)] ring-1 ring-brand-900/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_-16px_rgba(20,47,42,0.45)] hover:ring-brand-300 sm:h-[4.5rem] sm:px-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/logos/${l.fichier}`}
            alt={l.alt}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-10"
          />
        </li>
      ))}
    </ul>
  );
}
