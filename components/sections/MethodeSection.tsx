import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { ETAPES } from "@/lib/site-data";

// Frise verticale — déroulé réglementaire d'un parcours VAE. Volontairement
// générique (identique quel que soit le diplôme visé) : ce sont les mêmes
// étapes officielles pour DEES, DEAES, DEEJE et DEME.
export default function MethodeSection() {
  return (
    <section id="methode" className="bg-white py-12 sm:py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>Notre méthode</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            5 étapes, du diagnostic jusqu&apos;au jury
          </h2>
          <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
            15 à 20 heures d&apos;accompagnement au total, réparties sur plusieurs mois, à
            distance et à votre rythme.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-16">
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-100 sm:left-7"
            aria-hidden
          />
          <div className="space-y-4 sm:space-y-10">
            {ETAPES.map((etape, i) => (
              <div key={etape.titre} className="relative flex gap-3 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-lg shadow-md shadow-brand-600/30 sm:h-14 sm:w-14 sm:text-2xl">
                  <span aria-hidden>{etape.icon}</span>
                </div>
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-900/[0.03] sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-500">
                    Étape {i + 1}
                  </p>
                  <h3 className="mt-1 font-semibold text-slate-900">{etape.titre}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{etape.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="#prediagnostic-form"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm shadow-brand-900/5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-100 hover:shadow-md"
          >
            Tout commence par votre prédiagnostic gratuit →
          </Link>
        </div>
      </Container>
    </section>
  );
}
