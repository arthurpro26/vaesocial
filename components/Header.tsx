import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Logo id="header" />
        </Link>
        <nav className="hidden items-center gap-11 text-sm font-medium text-slate-600 md:flex">
          <Link href="/#diplomes" className="hover:text-brand-700">
            Diplômes
          </Link>
          <Link href="/#methode" className="hover:text-brand-700">
            Notre méthode
          </Link>
          <Link href="/#financement" className="hover:text-brand-700">
            Financement
          </Link>
          <Link href="/#faq" className="hover:text-brand-700">
            FAQ
          </Link>
          {/* Le lien vers le blog sera ajouté une fois les pages blog créées */}
        </nav>
        <Link
          href="/#prediagnostic-form"
          className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-500/25 transition hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30"
        >
          Savoir si je suis éligible
        </Link>
      </Container>
    </header>
  );
}
