import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { AVIS, TEMOIGNAGES, type DiplomeSlug } from "@/lib/site-data";

// Affiche les 3 témoignages réels. Sur une page diplôme, celui qui concerne
// le diplôme visé est mis en avant en premier (sans jamais en inventer un
// nouveau ni en masquer les autres : on garde toujours de la preuve sociale
// même quand un seul témoignage nomme explicitement ce diplôme).
export default function TemoignagesSection({ highlight }: { highlight?: DiplomeSlug }) {
  const items = highlight
    ? [...TEMOIGNAGES].sort(
        (a, b) => Number(b.diplomes.includes(highlight)) - Number(a.diplomes.includes(highlight))
      )
    : TEMOIGNAGES;

  return (
    <section className="bg-white py-12 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ils nous font confiance</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            Ils ont obtenu leur diplôme par la VAE
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
            <span aria-hidden>⭐⭐⭐⭐⭐</span>
            {AVIS.note}/5 · {AVIS.nombre} avis bénéficiaires
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.nom}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
            >
              <div aria-hidden>⭐⭐⭐⭐⭐</div>
              <p className="mt-3 text-sm italic leading-relaxed text-slate-600 sm:mt-4">
                &ldquo;{t.texte}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900 sm:mt-5">{t.nom}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
