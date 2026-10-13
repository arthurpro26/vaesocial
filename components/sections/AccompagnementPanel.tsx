import BrandIcon from "@/components/BrandIcon";
import Eyebrow from "@/components/Eyebrow";
import { TINTS } from "@/components/Kit";
import { ENGAGEMENTS } from "@/lib/site-data";

// Bloc « Votre accompagnement » (affiché sous la méthode). Faits donnés par Yoni le 12/10/2026 :
// équipe recrutée dans le social, 8 à 15 personnes aidées chaque jour. Les quatre cartes sont les
// ENGAGEMENTS existants (lib/site-data.ts). Ne rien ajouter ici sans l'accord de Yoni.
// Remplace l'ancienne section EngagementsSection (components/sections/EngagementsSection.tsx, plus utilisée).
const ICONS = ["users", "handshake", "screen", "shield"] as const;

export default function AccompagnementPanel() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-brand-50 p-5 ring-1 ring-brand-900/10 sm:mt-20 sm:p-10">
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div className="text-left">
          <Eyebrow left>Votre accompagnement</Eyebrow>
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-3xl">
            Une équipe issue du social, à vos côtés jusqu&apos;au jury.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Nos accompagnatrices sont recrutées parmi des personnes issues du secteur social. Elles connaissent le
            quotidien des éducateurs spécialisés, des internats, des assistantes sociales : les échanges sont concrets,
            pas théoriques.
          </p>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-900/10">
            <span className="whitespace-nowrap text-4xl font-bold tracking-tight text-brand-600 sm:text-5xl">8 à 15</span>
            <span className="text-sm leading-snug text-slate-700">personnes à qui l&apos;équipe explique la VAE, chaque jour.</span>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {ENGAGEMENTS.map((e, i) => {
            const t = TINTS[i % TINTS.length];
            return (
              <li
                key={e.titre}
                className="relative flex items-start gap-3.5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-900/10 sm:block sm:p-5"
              >
                <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${t.tile}`}>
                  <BrandIcon name={ICONS[i % ICONS.length]} className="h-5 w-5" />
                </span>
                <div className="min-w-0 sm:mt-4">
                  <h4 className="text-base font-bold leading-snug text-brand-900">{e.titre}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:mt-1.5">{e.texte}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
