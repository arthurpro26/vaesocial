import Container from "@/components/Container";
import BrandIcon from "@/components/BrandIcon";

// Bandeau de confiance, juste sous le héros : quatre repères, tous vérifiables.
// « Partenaire » (et jamais « Certifié ») : la certification Qualiopi et le référencement
// France VAE appartiennent à l'organisme de formation partenaire, pas à ce site.
// Voir le commentaire équivalent dans app/page.tsx. Ne jamais retirer le mot « Partenaire ».
// Remplace l'ancien StatsBar (components/sections/StatsBar.tsx, plus utilisé).
const ITEMS = [
  { icon: "seal" as const, titre: "Partenaire Qualiopi", sousTitre: "Certification qualité" },
  { icon: "gov" as const, titre: "Partenaire France VAE", sousTitre: "Référencement officiel" },
  { icon: "screen" as const, titre: "100 % à distance", sousTitre: "En visio, à votre rythme" },
  { icon: "handshake" as const, titre: "Accompagnatrice dédiée", sousTitre: "Jusqu'au jury" },
];

export default function TrustBand() {
  return (
    <section aria-label="Repères de confiance" className="bg-brand-900 text-white">
      <Container className="px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-5 py-6 lg:grid-cols-4 lg:gap-x-6 lg:py-7">
          {ITEMS.map((x, k) => (
            <li
              key={x.titre}
              className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${k > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-brand-100 ring-1 ring-white/15 sm:h-11 sm:w-11">
                <BrandIcon name={x.icon} className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="block text-[0.8rem] font-bold leading-tight sm:text-[0.95rem] lg:whitespace-nowrap">
                  {x.titre}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-brand-200 sm:text-[0.8rem] lg:whitespace-nowrap">
                  {x.sousTitre}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
