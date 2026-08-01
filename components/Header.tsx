import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { DIPLOMES } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Logo id="header" />
        </Link>
        <nav className="hidden items-center gap-11 text-sm font-medium text-slate-600 md:flex">
          {/* Menu "Diplômes" : survol/focus révèle un lien direct vers chacune des
              4 pages dédiées, en plus du lien vers la section d'ensemble de la home. */}
          <div className="group relative">
            <Link href="/#diplomes" className="flex items-center gap-1 hover:text-brand-700">
              Diplômes
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
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
                    <span className="text-slate-400">— {d.nom}</span>
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
          className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-500/25 transition hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30"
        >
          Savoir si je suis éligible
        </Link>
      </Container>
    </header>
  );
}
