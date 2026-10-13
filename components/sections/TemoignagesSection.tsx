import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { Chip } from "@/components/Kit";
import { TEMOIGNAGES, type DiplomeSlug } from "@/lib/site-data";

// Les 3 témoignages réels (prénom + initiale du nom, jamais de nom complet). Sur une page diplôme, celui qui
// concerne le diplôme visé passe en premier et prend la carte bleue (sans jamais en inventer un nouveau ni en
// masquer les autres : on garde toujours de la preuve sociale même quand un seul témoignage nomme ce diplôme).
export default function TemoignagesSection({
  highlight,
  fond = "blanc",
}: {
  highlight?: DiplomeSlug;
  /** Couleur du fond de la section : « blanc » (par défaut) ou « teinte » (bleu très pâle). */
  fond?: "blanc" | "teinte";
}) {
  const items = highlight
    ? [...TEMOIGNAGES].sort((a, b) => Number(b.diplomes.includes(highlight)) - Number(a.diplomes.includes(highlight)))
    : TEMOIGNAGES;
  const teinte = fond === "teinte";

  return (
    <section className={`relative overflow-hidden py-12 sm:py-20 ${teinte ? "bg-brand-50/70" : "bg-white"}`}>
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <Eyebrow>Ils l&apos;ont fait</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">
            Ce que disent celles et ceux qu&apos;on a accompagnés
          </h2>
        </div>
        <div className="relative mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {items.map((t, i) => {
            const fort = i === 0;
            return (
              <figure
                key={t.nom}
                className={
                  fort
                    ? "relative flex flex-col overflow-hidden rounded-3xl bg-brand-600 p-7 text-white shadow-xl shadow-brand-900/20"
                    : `relative flex flex-col overflow-hidden rounded-3xl p-7 ring-1 ring-brand-900/5 ${teinte ? "bg-white" : "bg-brand-50"}`
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className={fort ? "absolute -right-1 -top-1 h-24 w-24 text-white/10" : "absolute -right-1 -top-1 h-24 w-24 text-brand-100"}
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.5 6C6.5 7 4 9.8 4 13.5V18h6v-6H7c0-2 1.3-3.4 3.3-4L9.5 6zm10 0c-3 1-5.5 3.8-5.5 7.5V18h6v-6h-3c0-2 1.3-3.4 3.3-4L19.5 6z" />
                </svg>
                <Chip className={fort ? "relative w-fit bg-white/15 text-white" : `relative w-fit text-brand-700 ${teinte ? "bg-brand-50" : "bg-white"}`}>
                  {t.role}
                </Chip>
                <blockquote className={fort ? "relative mt-4 flex-1 text-base leading-relaxed text-white" : "relative mt-4 flex-1 text-base leading-relaxed text-slate-800"}>
                  «&nbsp;{t.texte}&nbsp;»
                </blockquote>
                <figcaption className={fort ? "relative mt-6 flex items-center gap-3 border-t border-white/20 pt-4" : "relative mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-4"}>
                  <span
                    aria-hidden
                    className={
                      fort
                        ? "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white"
                        : `flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-brand-700 ${teinte ? "bg-brand-50" : "bg-white"}`
                    }
                  >
                    {t.nom.charAt(0)}
                  </span>
                  <span className={fort ? "text-sm font-semibold text-white" : "text-sm font-semibold text-brand-900"}>{t.nom}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
