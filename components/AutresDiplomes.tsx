import Link from "next/link";
import { DIPLOMES, type DiplomeSlug } from "@/lib/site-data";

// Bloc « Vous cherchez un autre diplôme dans le secteur social ? » affiché sous
// le formulaire des pages diplôme (demande de Yoni du 05/10/2026).
//
// POURQUOI. Une page diplôme reçoit du trafic Google Ads venu de mots clés
// voisins : quelqu'un qui tape « deass » ou « caferuis » peut atterrir sur la
// page DEES. Sans issue de secours, il voit un formulaire préréglé sur le mauvais
// diplôme et repart. Ici il rebondit en un clic vers la bonne page — qui porte
// son propre formulaire préréglé — au lieu de quitter le site.
//
// REFONTE DU 05/10/2026 (retour de Yoni : « pas du tout assez mis en valeur »).
// La première version était une simple ligne grise repliée : invisible sous un
// formulaire aussi imposant. Trois changements :
//   1. Une carte teintée (couleur de marque) avec icône, titre en gras et une
//      phrase d'explication : on la voit sans la chercher.
//   2. DEASS et CAFERUIS sortent de la liste repliée et s'affichent d'emblée en
//      deux boutons : c'est précisément ce que cherche le visiteur égaré, il ne
//      doit pas avoir à ouvrir quoi que ce soit.
//   3. La liste complète reste derrière un bouton « Voir tous les diplômes ».
// L'orange (accent) reste réservé au bouton d'envoi du formulaire : ce bloc ne
// doit pas lui voler la vedette, seulement rattraper ceux qui se sont trompés
// de page.
//
// Ce sont de simples liens vers les pages existantes, et non un changement du
// diplôme dans le formulaire en cours : le chemin d'un lead (formulaire → API →
// Sheet → email → conversion Google Ads) reste strictement identique, chaque
// page gardant son propre `presetDiplome`.
//
// Composant serveur, sans JavaScript : le <details> natif s'ouvre et se ferme
// seul, et les liens restent dans le HTML initial, donc visibles de Google.
// Le titre est un <p> et non un <h2> : ce bloc ne doit pas modifier le plan de
// titres de la page (SEO).

// Diplômes remontés en tête, dans cet ordre. Tous les autres suivent dans
// l'ordre de DIPLOMES (lib/site-data.ts).
const EN_TETE: readonly DiplomeSlug[] = ["assistant-service-social", "caferuis"];

function Fleche({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AutresDiplomes({ courant }: { courant: DiplomeSlug }) {
  const autres = DIPLOMES.filter((d) => d.slug !== courant);
  const enTete = EN_TETE.flatMap((slug) => autres.filter((d) => d.slug === slug));
  const suite = autres.filter((d) => !EN_TETE.includes(d.slug));
  const liste = [...enTete, ...suite];

  return (
    <section
      aria-label="Autres diplômes du secteur social"
      className="mx-auto mt-4 w-full max-w-md overflow-hidden rounded-3xl border-2 border-brand-200 bg-brand-50 shadow-lg shadow-brand-900/10 sm:mt-5"
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
            aria-hidden="true"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M10 2a.75.75 0 01.75.75v1.5a5.75 5.75 0 014.995 4.995h1.505a.75.75 0 010 1.5h-1.505A5.75 5.75 0 0110.75 15.74v1.51a.75.75 0 01-1.5 0v-1.51A5.75 5.75 0 014.255 10.75H2.75a.75.75 0 010-1.5h1.505A5.75 5.75 0 019.25 4.255V2.75A.75.75 0 0110 2zm0 4.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 2.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-base font-bold leading-snug text-slate-900 sm:text-[1.0625rem]">
              Vous cherchez un autre diplôme dans le secteur social ?
            </p>
            <p className="mt-1 text-sm leading-snug text-slate-600">
              Chaque diplôme a sa propre page et son propre pré-diagnostic gratuit.
            </p>
          </div>
        </div>

        {enTete.length > 0 && (
          <ul className={`mt-4 grid gap-2.5 ${enTete.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {enTete.map((d) => (
              <li key={d.slug} className="min-w-0">
                <Link
                  href={`/${d.slug}`}
                  className="group/lien flex h-full items-center justify-between gap-2 rounded-2xl bg-white px-3.5 py-3 shadow-sm ring-1 ring-brand-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-brand-500"
                >
                  <span className="min-w-0">
                    <span className="block text-base font-bold leading-tight text-brand-700">
                      {d.sigle}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-slate-600">{d.nom}</span>
                  </span>
                  <Fleche className="h-4 w-4 shrink-0 text-brand-600 transition-transform duration-200 group-hover/lien:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <details className="group border-t-2 border-brand-200 bg-white/70">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-bold text-brand-700 transition hover:bg-white sm:px-5 [&::-webkit-details-marker]:hidden">
          <span>Voir tous les diplômes ({liste.length})</span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </summary>
        <ul className="grid gap-1 border-t border-brand-100 p-2 sm:grid-cols-2">
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
    </section>
  );
}
