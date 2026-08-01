import Link from "next/link";
import Container from "@/components/Container";
import { FINANCEMENTS } from "@/lib/site-data";

// Panneau financement — fort visuellement. Le prix et les sources de
// financement sont identiques quel que soit le diplôme visé (données réelles
// fournies par Yoni), donc entièrement partagé entre la home et les pages
// diplôme, avec juste le sous-titre qui peut être personnalisé.
export default function FinancementSection({
  sousTitre = "Votre CPF couvre généralement l'intégralité de l'accompagnement. Nous vérifions avec vous votre solde et les autres aides mobilisables, avant tout engagement.",
}: {
  sousTitre?: string;
}) {
  return (
    <section className="bg-brand-50/60 py-12 sm:py-24">
      <Container>
        <div
          id="financement"
          className="relative scroll-mt-24 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-4 py-8 text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-20"
        >
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm">
              💰 Financement
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
              Une solution de financement adaptée à votre situation
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg">
              {sousTitre}
            </p>
          </div>

          <div className="relative mx-auto mt-6 max-w-xl sm:mt-12">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-sm sm:p-6">
              <p className="text-sm text-brand-50">Le prix de l&apos;accompagnement</p>
              <p className="mt-2 text-2xl font-bold sm:text-3xl">1 800 € à 3 500 €</p>
              <p className="mt-1 text-xs text-brand-100">
                selon le nombre d&apos;heures nécessaires (15 à 20 h)
              </p>
              <div className="mt-5 rounded-xl bg-white/15 p-4">
                <p className="text-xs text-brand-50">Votre CPF couvre généralement</p>
                <p className="mt-1 text-2xl font-bold">100 %</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-6 max-w-4xl sm:mt-10">
            <p className="text-center text-sm font-semibold text-brand-50">
              Sources de financement possibles
            </p>
            <div className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-4">
              {FINANCEMENTS.map((f) => (
                <div
                  key={f.titre}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg" aria-hidden>
                      {f.icon}
                    </span>
                    <p className="text-sm font-semibold sm:text-base">{f.titre}</p>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-50 sm:mt-2 sm:text-sm">
                    {f.texte}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-brand-100">
              Selon votre situation, d&apos;autres aides régionales peuvent également exister —
              nous les identifions avec vous.
            </p>
          </div>

          <div className="relative mt-6 text-center sm:mt-10">
            <Link
              href="#prediagnostic-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8"
            >
              Vérifier mon financement gratuitement →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
