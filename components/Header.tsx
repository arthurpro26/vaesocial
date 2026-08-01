"use client";

import Link from "next/link";
import { clsx } from "clsx";
import Container from "./Container";
import Logo from "./Logo";
import { DIPLOMES } from "@/lib/site-data";
import { useFormProgress } from "@/lib/form-progress-context";

export default function Header() {
  // Une fois que l'utilisateur a commencé à répondre au questionnaire, le CTA
  // "Savoir si je suis éligible" fait doublon (il est déjà en train de le
  // faire) et distrait plus qu'il n'aide — on le masque en fondu. `invisible`
  // (et pas `hidden`) pour garder l'espace réservé : sur desktop, la nav est
  // positionnée par rapport au CTA via justify-between, donc le retirer du
  // flux ferait sauter la nav vers la droite au moment précis où on ne veut
  // surtout pas de mouvement de layout.
  const { isFormActive } = useFormProgress();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="inline-flex shrink-0 items-center py-2">
          <Logo id="header" />
        </Link>
        <nav className="hidden items-center gap-11 text-sm font-medium text-slate-600 md:flex">
          {/* Menu "Diplômes" : survol/focus révèle un lien direct vers chacune des
              4 pages dédiées, en plus du lien vers la section d'ensemble de la home. */}
          <div className="group relative">
            <Link href="/#diplomes" className="flex items-center gap-1 hover:text-brand-700">
              Diplômes
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl shadow-slate-900/10">
                {DIPLOMES.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/${d.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span className="font-semibold">{d.sigle}</span>{" "}
                    <span className="text-slate-500">— {d.nom}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="#methode" className="hover:text-brand-700">
            Notre méthode
          </Link>
          <Link href="#financement" className="hover:text-brand-700">
            Financement
          </Link>
          <Link href="#faq" className="hover:text-brand-700">
            FAQ
          </Link>
          {/* Le lien vers le blog sera ajouté une fois les pages blog créées */}
        </nav>
        <Link
          href="#prediagnostic-form"
          aria-hidden={isFormActive}
          tabIndex={isFormActive ? -1 : undefined}
          className={clsx(
            "shrink-0 whitespace-nowrap rounded-full bg-accent-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-accent-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-lg hover:shadow-accent-600/30 sm:px-5 sm:py-2.5",
            isFormActive ? "invisible opacity-0" : "visible opacity-100"
          )}
        >
          <span className="sm:hidden">Éligibilité</span>
          <span className="hidden sm:inline">Savoir si je suis éligible</span>
        </Link>
      </Container>
    </header>
  );
}
