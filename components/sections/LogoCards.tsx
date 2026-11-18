// Logos officiels sous l'accroche (accueil + pages diplôme), version du 20/10/2026.
// Modèle demandé par Arthur : cartes blanches arrondies, ombre douce, qui se soulèvent
// légèrement au survol (comme sur vae-diplome.fr), placées en bas de la colonne de
// gauche du héros, pas en pleine largeur. Fichiers HD fournis par Arthur (public/logos/,
// fonds détourés). Qualiopi et France Travail seront ajoutés quand leurs fichiers HD
// seront fournis (les versions basse définition ont été écartées).
const LOGOS = [
  // largeur/hauteur = dimensions réelles des fichiers (28/10/2026) : le navigateur
  // réserve la place avant le chargement de l'image.
  { fichier: "france-competences.png", alt: "France compétences — certification enregistrée au RNCP", w: 509, h: 212 },
  { fichier: "france-vae.png", alt: "France VAE", w: 352, h: 162 },
  { fichier: "cpf.png", alt: "Formation finançable par le CPF", w: 800, h: 435 },
];

/**
 * `variant="flat"` (23/10/2026) : les trois logos sur une ligne, sans cartes
 * blanches — pour le haut des pages diplôme, où les cartes s'empilaient avec
 * le reste et alourdissaient la colonne (demande d'Arthur).
 */
export default function LogoCards({ className = "", variant = "cards" }: { className?: string; variant?: "cards" | "flat" }) {
  if (variant === "flat") {
    // 18/11/2026 (retour d'Arthur : « des images collées, c'est moche ») : les fichiers
    // ont un fond blanc qui faisait un rectangle sur le fond teinté de la page. Chaque
    // logo est maintenant dans une pastille blanche arrondie, toutes de la même taille,
    // avec un fin contour, qui se soulève au survol. Plus légères que les cartes de
    // l'accueil (retirées ici le 23/10 parce qu'elles alourdissaient la colonne).
    return (
      <ul aria-label="Références officielles" className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
        {LOGOS.map((l) => (
          <li
            key={l.fichier}
            title={l.alt}
            className="group flex h-12 w-[6.4rem] items-center justify-center rounded-full bg-white px-3.5 shadow-[0_6px_16px_-10px_rgba(20,47,42,0.45)] ring-1 ring-brand-900/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_22px_-12px_rgba(20,47,42,0.5)] hover:ring-brand-300 sm:h-[3.25rem] sm:w-[7.25rem] sm:px-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/logos/${l.fichier}`}
              alt={l.alt}
              width={l.w}
              height={l.h}
              decoding="async"
              className="max-h-7 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.05] sm:max-h-8"
            />
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
            width={l.w}
            height={l.h}
            decoding="async"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-10"
          />
        </li>
      ))}
    </ul>
  );
}
