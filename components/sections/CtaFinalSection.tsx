import Link from "next/link";
import Container from "@/components/Container";

export default function CtaFinalSection({
  titre = "Prêt·e à savoir si vous êtes éligible ?",
  texte = "Un conseiller vous recontacte gratuitement, sans engagement, pour faire le point sur votre situation.",
  cta = "Savoir si je suis éligible →",
}: {
  titre?: string;
  texte?: string;
  cta?: string;
}) {
  return (
    <section className="bg-brand-50/60 py-12 sm:py-24">
      <Container>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-5 py-9 text-center text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm">
            🚀 Dernière étape
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">{titre}</h2>
          <p className="mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg">
            {texte}
          </p>
          <Link
            href="#prediagnostic-form"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:mt-8 sm:inline-flex sm:w-auto sm:py-3.5 sm:text-sm"
          >
            {cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
