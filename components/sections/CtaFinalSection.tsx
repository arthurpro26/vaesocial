import Link from "next/link";
import Container from "@/components/Container";
import Trico from "@/components/Trico";
import { Ico } from "@/components/Kit";

// Dernier appel à l'action de la page. `id="cta-final"` est lu par le bouton collant mobile (StickyCta)
// pour se retirer quand ce bloc est à l'écran. Par défaut le bouton mène au formulaire de la page ;
// sur « Qui sommes-nous » (qui n'a pas de formulaire) il mène à /prediagnostic.
export default function CtaFinalSection({
  titre = "Prêt·e à savoir si vous êtes éligible ?",
  texte = "Un conseiller vous recontacte gratuitement, sans engagement, pour faire le point sur votre situation.",
  cta = "Savoir si je suis éligible",
  href = "#prediagnostic-form",
}: {
  titre?: string;
  texte?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section id="cta-final" className="bg-white pb-16 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-6 py-12 text-center text-white shadow-2xl shadow-brand-900/25 sm:px-12 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[28px] border-white/5" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[28px] border-white/5" />
          <Trico band onDark className="absolute inset-x-0 bottom-0 h-1.5" />
          <h2 className="relative text-3xl font-bold tracking-tight [text-wrap:balance] sm:text-4xl">{titre}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-50 sm:text-lg">{texte}</p>
          <Link
            href={href}
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent-900/30 transition hover:-translate-y-0.5 hover:bg-accent-500"
          >
            {cta} <Ico name="arrow" className="h-5 w-5" />
          </Link>
          <ul className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-brand-50">
            {["100 % gratuit", "Sans engagement", "Réponse sous 24h"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Ico name="check" className="h-4 w-4 text-brand-200" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
