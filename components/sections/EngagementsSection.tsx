import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { ENGAGEMENTS } from "@/lib/site-data";

// Comble l'espace entre FAQ et CTA final, répond à "puis-je vous faire confiance ?"
// Contenu générique, identique sur toutes les pages.
export default function EngagementsSection() {
  return (
    <section className="bg-white py-12 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pourquoi VAESocial</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            Nos engagements envers vous
          </h2>
        </div>
        <div className="mt-6 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {ENGAGEMENTS.map((e) => (
            <div
              key={e.titre}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:gap-4 sm:p-7"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl">
                <span aria-hidden>{e.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{e.titre}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:mt-1.5 sm:text-sm">
                  {e.texte}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
