// Logos officiels sous l'accroche (accueil + pages diplôme).
//
// 18/11/2026 — UNE SEULE présentation pour tout le site (Arthur : « quand tu modifies
// une page il faut que ce soit homogène avec les autres, sinon c'est plus un site »).
// Avant, l'accueil avait des cartes (20/10) et les pages diplôme des images nues
// (23/10), dont le fond blanc faisait un rectangle sur le fond teinté. Désormais les
// deux affichent les mêmes pastilles blanches arrondies, de taille égale, avec un fin
// contour, qui se soulèvent au survol.
// Fichiers HD fournis par Arthur (public/logos/). Qualiopi et France Travail seront
// ajoutés quand leurs fichiers HD seront fournis.
const LOGOS = [
  // largeur/hauteur = dimensions réelles des fichiers : le navigateur réserve la place
  // avant le chargement de l'image. 18/11/2026 : fichiers réduits à 300 px de large
  // (affichés à moins de 100 px) — 383 Ko au total avant, pour la vitesse sur téléphone.
  { fichier: "france-competences.png", alt: "France compétences — certification enregistrée au RNCP", w: 300, h: 125 },
  { fichier: "france-vae.png", alt: "France VAE", w: 300, h: 138 },
  { fichier: "cpf.png", alt: "Formation finançable par le CPF", w: 300, h: 163 },
];

/**
 * `variant` est conservé pour ne pas toucher aux pages qui l'appellent ("cards" sur
 * l'accueil, "flat" sur les pages diplôme), mais il ne change plus rien : même rendu.
 */
export default function LogoCards({ className = "" }: { className?: string; variant?: "cards" | "flat" }) {
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
