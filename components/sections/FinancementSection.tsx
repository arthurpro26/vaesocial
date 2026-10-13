import Link from "next/link";
import Container from "@/components/Container";
import BrandIcon from "@/components/BrandIcon";
import { Ico } from "@/components/Kit";
import { siteConfig } from "@/lib/site-config";
import { FINANCEMENTS } from "@/lib/site-data";

// Panneau financement, partagé entre l'accueil et les pages diplôme.
//
// À GAUCHE : le message (trois points, rien de chiffré). À DROITE : la carte « cadre réglementaire »,
// qui dit les faits vérifiés le 13/10/2026 : la participation forfaitaire du titulaire du CPF est
// obligatoire depuis le 2 mai 2024, elle est de 150 € depuis le 2 avril 2026 (décret n° 2026-234 du
// 30 mars 2026) et les demandeurs d'emploi en sont exonérés. À RELIRE si un décret change le montant.
// Dessous : les autres sources de financement (FINANCEMENTS dans lib/site-data.ts, sans le CPF qui a sa carte).
//
// Le prix de l'accompagnement n'est volontairement plus affiché ici (l'ancienne fourchette ne
// correspondait pas aux offres) : il est donné lors de l'échange, avant tout engagement.
const ICONES: ("wallet" | "building" | "gov" | "loop")[] = ["wallet", "building", "gov", "loop"];

function IconeFinancement({ name, className }: { name: (typeof ICONES)[number]; className?: string }) {
  return name === "loop" ? <Ico name="loop" className={className} /> : <BrandIcon name={name} className={className} />;
}

export default function FinancementSection({ sigle }: { sigle?: string }) {
  return (
    <section id="financement" className="scroll-mt-16 bg-brand-50/70 py-12 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-5 py-10 text-white shadow-2xl shadow-brand-900/25 sm:px-12 sm:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[30px] border-white/5" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[30px] border-white/5" />
          <div
            aria-hidden
            className="pointer-events-none absolute right-10 top-1/2 hidden h-40 w-56 opacity-30 lg:block"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1.2px, transparent 1.6px)", backgroundSize: "22px 22px" }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-200 sm:text-sm">
                <BrandIcon name="wallet" className="h-4 w-4" /> Financement
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight [text-wrap:balance] sm:text-4xl">
                Une solution de financement adaptée à votre situation
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-50 sm:text-lg">
                Nous vous indiquons le coût réel de votre parcours avant tout engagement.
              </p>
              <ul className="mt-6 space-y-3">
                {["Votre solde CPF", "Les autres aides mobilisables", "Tout cela avant tout engagement"].map((t, i) => (
                  <li key={t} className="flex items-center gap-3 text-base font-medium">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/15 text-sm font-bold ring-1 ring-white/20">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white text-brand-900 shadow-2xl shadow-black/20">
              <div className="flex items-center gap-3 border-b border-brand-900/10 bg-brand-50 px-5 py-4 sm:px-6">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-700 text-white">
                  <BrandIcon name="gov" className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-widest text-brand-600">Cadre réglementaire</span>
                  <span className="block text-base font-bold leading-tight">Participation forfaitaire du titulaire du CPF</span>
                </span>
              </div>
              <div className="space-y-3 p-5 sm:p-6">
                <p className="text-left text-sm leading-relaxed text-slate-700">
                  Obligatoire depuis le <strong className="font-semibold text-brand-900">2 mai 2024</strong>, elle reste à la charge de
                  toute personne qui finance une action avec son CPF. Elle est fixée par décret et ne dépend pas de {siteConfig.name}.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 rounded-2xl bg-brand-50 p-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <BrandIcon name="wallet" className="h-5 w-5" />
                    </span>
                    <span className="text-left">
                      <span className="block text-sm font-bold leading-tight">Pris en charge par votre CPF</span>
                      <span className="mt-0.5 block text-sm text-slate-600">
                        Le reste de l&apos;accompagnement vers {sigle ? `le ${sigle}` : "votre diplôme"}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-2xl bg-brand-50 p-4">
                    <span className="text-left">
                      <span className="block text-sm font-bold leading-tight">Reste à charge</span>
                      <span className="mt-0.5 block text-sm text-slate-600">Depuis le 2 avril 2026</span>
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-brand-800">150&nbsp;€</span>
                  </li>
                  <li className="flex items-center justify-between gap-3 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-900/10">
                    <span className="text-left">
                      <span className="block text-sm font-bold leading-tight text-emerald-900">Demandeurs d&apos;emploi</span>
                      <span className="mt-0.5 block text-sm text-emerald-800">Exonérés de cette participation</span>
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-emerald-800">0&nbsp;€</span>
                  </li>
                </ul>
                <p className="text-left text-xs leading-relaxed text-slate-500">Montant fixé par le décret n° 2026-234 du 30 mars 2026.</p>
              </div>
            </div>
          </div>

          <p className="relative mt-10 text-center text-sm font-semibold text-brand-100">Autres sources de financement possibles</p>
          <div className="relative mx-auto mt-4 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4">
            {FINANCEMENTS.slice(1).map((f, k) => {
              const nom = ICONES[(k + 1) % ICONES.length];
              return (
                <div key={f.titre} className="relative overflow-hidden rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm sm:p-6">
                  <IconeFinancement name={nom} className="absolute -bottom-3 -right-3 h-24 w-24 text-white/[0.07]" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 shadow-md">
                    <IconeFinancement name={nom} className="h-5 w-5" />
                  </span>
                  <p className="relative mt-4 text-base font-bold">{f.titre}</p>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-brand-50">{f.texte}</p>
                </div>
              );
            })}
          </div>
          <p className="relative mt-6 text-center text-xs text-brand-100">
            Selon votre situation, d&apos;autres aides régionales peuvent également exister : nous les identifions avec vous.
          </p>

          <div className="relative mt-8 text-center">
            <Link
              href="#prediagnostic-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8"
            >
              Vérifier mon financement gratuitement <Ico name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
