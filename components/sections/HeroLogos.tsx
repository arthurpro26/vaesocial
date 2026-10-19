// Logos officiels en haut de page (accueil + pages diplôme), ajoutés le 19/10/2026 à la
// demande d'Arthur, à la place des pastilles « VAE DEES · 97 % · 400+ » (les chiffres
// restent affichés juste sous le titre). Fichiers haute définition fournis par Arthur,
// dans public/logos/ (PNG recadrés, fond blanc).
const LOGOS = [
  { fichier: "france-competences.png", alt: "France compétences — certification enregistrée au RNCP", h: "h-11 sm:h-14" },
  { fichier: "france-vae.png", alt: "France VAE", h: "h-11 sm:h-14" },
  { fichier: "cpf.png", alt: "Formation finançable par le CPF", h: "h-10 sm:h-12" },
];

export default function HeroLogos() {
  return (
    <ul aria-label="Références officielles" className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8">
      {LOGOS.map((l) => (
        <li key={l.fichier} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/logos/${l.fichier}`} alt={l.alt} className={`${l.h} w-auto object-contain`} />
        </li>
      ))}
    </ul>
  );
}
