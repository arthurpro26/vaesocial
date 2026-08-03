import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { DIPLOMES } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center py-1">
            <Logo id="footer" variant="light" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            Accompagnement à la VAE pour les professionnels du secteur social et médico-social —
            100&nbsp;% à distance, financement CPF possible.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300">Diplômes</p>
          <ul className="mt-2 text-sm">
            {DIPLOMES.map((d) => (
              <li key={d.sigle}>
                <Link
                  href={`/${d.slug}`}
                  className="inline-block py-2 text-brand-200 hover:text-white"
                >
                  VAE {d.nom} ({d.sigle})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300">Contact</p>
          <ul className="mt-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block break-all py-2 text-brand-200 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href="#prediagnostic-form" className="inline-block py-2 text-brand-200 hover:text-white">
                Être rappelé·e gratuitement
              </Link>
            </li>
            <li>
              <Link href="/blog" className="inline-block py-2 text-brand-200 hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300">Légal</p>
          <ul className="mt-2 text-sm">
            <li>
              <Link href="/mentions-legales" className="inline-block py-2 text-brand-200 hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="inline-block py-2 text-brand-200 hover:text-white">
                CGV
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="inline-block py-2 text-brand-200 hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Financement possible via CPF, OPCO Santé, France Travail ou Transitions Pro.</p>
        </Container>
      </div>
    </footer>
  );
}
