import { RESULTATS } from "@/lib/site-data";

// Chiffres de réassurance (97 % / 400+), version du 20/10/2026 : grand chiffre + libellé en
// petites capitales, séparés par un filet, sous le texte d'introduction (à la place des
// anciennes pastilles « jetées » en haut de page — demande d'Arthur). Les valeurs viennent
// de RESULTATS (lib/site-data.ts) : ne jamais les modifier ici.
const STATS = [
  // « depuis 2024 » retiré de l'affichage le 20/10/2026 (Arthur) ; la période reste dans les mentions légales.
  { valeur: RESULTATS.taux, libelle: RESULTATS.tauxLabel, accent: true },
  { valeur: RESULTATS.volume, libelle: RESULTATS.volumeLabel, accent: false },
];

export default function StatsRow({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid max-w-md grid-cols-2 gap-x-5 sm:flex sm:max-w-none sm:gap-x-8 ${className}`}>
      {STATS.map((s, i) => (
        <div key={s.libelle} className={`flex min-w-0 flex-col justify-center ${i > 0 ? "border-l border-brand-900/15 pl-5 sm:pl-8" : ""}`}>
          <dd className={`order-1 text-[1.65rem] font-bold leading-none tracking-[-0.02em] sm:text-3xl ${s.accent ? "text-emerald-700" : "text-brand-900"}`}>
            {s.valeur}
          </dd>
          <dt className="order-2 mt-1.5 text-[0.66rem] font-semibold uppercase leading-snug tracking-[0.1em] text-slate-500 sm:text-xs sm:tracking-[0.14em]">{s.libelle}</dt>
        </div>
      ))}
    </dl>
  );
}
