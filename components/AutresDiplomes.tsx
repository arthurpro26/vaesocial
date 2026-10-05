import Link from "next/link";
import { DIPLOMES, type DiplomeSlug } from "@/lib/site-data";

// Onglet « Vous cherchez un autre diplôme ? » affiché sous le formulaire des
// pages diplôme (demande de Yoni du 05/10/2026).
//
// POURQUOI. Une page diplôme reçoit du trafic Google Ads venu de mots clés
// voisins : quelqu'un qui tape « deass » ou « caferuis » peut atterrir sur la
// page DEES. Sans issue de secours, il voit un formulaire préréglé sur le mauvais
// diplôme et repart. Ici il rebondit en un clic vers la bonne page — qui porte
// son propre formulaire préréglé — au lieu de quitter le site.
//
// Ce sont de simples liens vers les pages existantes, et non un changement du
// diplôme dans le formulaire en cours : le chemin d'un lead (formulaire → API →
// Sheet → email → conversion Google Ads) reste strictement identique, chaque
// page gardant son propre `presetDiplome`.
//
// Composant serveur, sans JavaScript : le <details> natif s'ouvre et se ferme
// seul, et les liens restent dans le HTML initial, donc visibles de Google.

// Diplômes remontés en tête de liste, dans cet ordre. Tous les autres suivent
// dans l'ordre de DIPLOMES (lib/site-data.ts).
const EN_TETE: readonly DiplomeSlug[] = ["assistant-service-social", "caferuis"];

export default function AutresDiplomes({ courant }: { courant: DiplomeSlug }) {
  const autres = DIPLOMES.filter((d) => d.slug !== courant);
  const enTete = EN_TETE.flatMap((slug) => autres.filter((d) => d.slug === slug));
  const suite = autres.filter((d) => !EN_TETE.includes(d.slug));
  const liste = [...enTete, ...suite];

  return (
    <details className="group mt-3 rounded-2xl border border-slate-200 bg-white/80 sm:mt-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 hover:text-brand-700 sm:px-5 [&::-webkit-details-marker]:hidden">
        <span>Vous cherchez un autre diplôme dans le secteur social ?</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <ul className="grid gap-1 border-t border-slate-100 p-2 sm:grid-cols-2">
        {liste.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/${d.slug}`}
              className="flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-brand-50"
            >
              <span className="text-sm font-bold text-slate-900">{d.sigle}</span>
              <span className="text-xs text-slate-600">{d.nom}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
