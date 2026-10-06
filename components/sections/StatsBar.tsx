import { clsx } from "clsx";
import Container from "@/components/Container";
import { STATS } from "@/lib/site-data";

// Repères chiffrés qui rassurent en un coup d'œil, juste après le Hero.
// Regroupés dans une carte blanche avec séparateurs (pas une grille éclatée
// sur toute la largeur) pour rester lisible et structuré même sur grand écran.
export default function StatsBar() {
  return (
    <section className="border-t border-slate-100 bg-brand-50/40 py-5 sm:py-10">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-3 gap-y-4 rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-sm shadow-slate-900/[0.03] sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-slate-200 sm:px-4 sm:py-7">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={clsx(
                "text-center sm:flex-1 sm:px-5",
                // 5 items en grille 2 colonnes = le dernier se retrouve seul sur sa
                // ligne, décentré à gauche. On lui fait prendre toute la largeur
                // pour qu'il reste centré, uniquement sur mobile.
                i === STATS.length - 1 && "col-span-2 sm:col-span-1"
              )}
            >
              <p className="text-xl font-bold text-brand-700 sm:text-3xl">{s.chiffre}</p>
              <p className="mt-0.5 text-xs font-medium text-slate-500 sm:mt-1 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
