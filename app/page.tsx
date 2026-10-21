import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import BrandIcon from "@/components/BrandIcon";
import PrediagnosticForm from "@/components/PrediagnosticForm";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import Eyebrow from "@/components/Eyebrow";
import StickyCta from "@/components/StickyCta";
import TrustBand from "@/components/sections/TrustBand";
import LogoCards from "@/components/sections/LogoCards";
import StatsRow from "@/components/sections/StatsRow";
import MethodeSection from "@/components/sections/MethodeSection";
import FinancementSection from "@/components/sections/FinancementSection";
import TemoignagesSection from "@/components/sections/TemoignagesSection";
import CtaFinalSection from "@/components/sections/CtaFinalSection";
import { Chip, DOTS, Ico, TINTS } from "@/components/Kit";
import { COMPETENCES, DIPLOMES, REASSURANCES } from "@/lib/site-data";

// Page d'accueil — landing page principale de VAESocial.
// Structure pensée pour le SEO, le trafic Google Ads et la conversion mobile.
//
// Angle éditorial du Hero : on propose une démarche commune (« commençons par regarder votre
// parcours »), sans promettre de verdict : le formulaire déclenche un rappel, il ne rend aucun
// verdict d'éligibilité. Voir l'historique du titre (refonte du 20/09/2026) dans le dépôt.
//
// Design « institutionnel » du 13/10/2026 : fond clair, cartes à pastilles, bandeau de confiance
// bleu marine, filet tricolore discret (voir app/globals.css pour l'exception, et components/Trico.tsx).
//
// Les sections Méthode / Financement / Témoignages / Appel final / Bandeau de confiance sont partagées
// avec les pages diplôme dédiées (voir components/sections/) pour ne jamais dupliquer une donnée réelle.
// Seuls le Hero, « Pour qui ? », « Nos diplômes » et la FAQ restent spécifiques à la home.
//
// Prix, témoignages, durées et avis sont des données réelles fournies par
// Yoni (jamais de chiffre inventé) — voir mémoire projet pour la traçabilité.
//
// « Partenaire Qualiopi » / « Partenaire France VAE » (bandeau de confiance, pied de page) :
// PARTENAIRE, ET PAS « CERTIFIÉ » — la formulation est juridiquement importante. La certification
// Qualiopi et le référencement France VAE appartiennent à l'organisme de formation partenaire, pas à
// vae-social.fr. Écrire « Certifié Qualiopi » laisserait croire que ce site est lui-même l'organisme
// certifié : c'est faux, et c'est vérifiable en trente secondes sur l'annuaire public. Ne jamais
// retirer le mot « Partenaire ».
// Chiffres de réassurance (97 %, 400+) : documentés, voir RESULTATS dans lib/site-data.ts avant toute modification.

// Liste des diplômes dérivée de DIPLOMES (lib/site-data.ts) : ajouter un diplôme
// là-bas met à jour la meta description et la FAQ d'ici, ainsi que les pastilles et les
// cartes de diplômes, sans retoucher cette page. Ne plus écrire la liste en dur.
//   LISTE_SIGLES        → « DEES, DEAES, …, CAFERUIS »
const SIGLES = DIPLOMES.map((d) => d.sigle);
const LISTE_SIGLES = SIGLES.join(", ");

export const metadata: Metadata = {
  // Titre "absolute" : n'hérite pas du template du layout racine (` | VAESocial`)
  // pour rester sous ~60 caractères, la longueur idéale affichée par Google.
  // Titre volontairement NON étendu aux 7 sigles : avec les 7, il fait 80
  // caractères et Google le coupe vers 60. La meta description ci-dessous, elle,
  // liste tous les diplômes. Variante possible si besoin : « VAE secteur social :
  // 7 diplômes accessibles | VAESocial ».
  title: {
    absolute: "VAE secteur social : DEES, DEAES, DEEJE, DEME | VAESocial",
  },
  description:
    `VAE secteur social : ${LISTE_SIGLES}. 100% à distance, financement CPF possible. Vérifiez gratuitement votre éligibilité.`,
  alternates: { canonical: "/" },
};

// Ce que l'on verra à l'écran pendant la visio de 40 minutes (faits donnés par Yoni le 12/10/2026).
const AU_PROGRAMME = [
  "Votre expérience, regardée ensemble",
  "Le diplôme qui lui correspond",
  "Ce que demande la démarche, sans surprise",
];

// Les 3 profils (textes inchangés). Les pastilles sont extraites de ces textes : n'y ajouter aucun mot qui n'y figure pas.
const PERSONAS = [
  { icon: "building" as const, titre: "Vous travaillez dans une structure médico-sociale", texte: "IME, ITEP, MECS, foyer, EHPAD... votre expérience peut déjà être reconnue pour obtenir un diplôme d'État.", chips: ["IME", "ITEP", "MECS", "Foyer", "EHPAD"] },
  { icon: "users" as const, titre: "Vous accompagnez à domicile", texte: "AES, TISF, auxiliaire de vie... vos années d'expérience peuvent être valorisées grâce à la VAE.", chips: ["AES", "TISF", "Auxiliaire de vie"] },
  { icon: "diploma" as const, titre: "Vous exercez sans diplôme d'État", texte: "Même sans diplôme, votre expérience professionnelle peut ouvrir droit à une validation.", chips: ["Sans diplôme", "Expérience professionnelle"] },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qu'est-ce que la VAE exactement ?",
    reponse:
      `La Validation des Acquis de l'Expérience est un dispositif officiel qui permet d'obtenir un diplôme ou un certificat d'État (${LISTE_SIGLES}...) en faisant reconnaître son expérience professionnelle, sans reprendre une formation complète. Vous constituez un dossier qui décrit vos pratiques, puis vous le présentez devant un jury qui valide tout ou partie du diplôme visé.`,
  },
  {
    question: "Combien d'expérience faut-il pour se lancer ?",
    reponse:
      "Depuis la réforme de janvier 2024, il n'y a plus de durée minimale d'expérience à justifier. Toute activité, professionnelle ou bénévole, en lien direct avec le diplôme visé peut être recevable, quelle que soit sa durée. C'est justement l'objet du prédiagnostic : vérifier avec vous si votre expérience correspond bien au référentiel du diplôme.",
  },
  {
    question: "Combien de temps dure un parcours VAE ?",
    reponse:
      "En moyenne, comptez entre 6 et 12 mois entre le dépôt de candidature et le passage devant le jury : environ 2 mois pour la décision de recevabilité, puis plusieurs mois pour la rédaction du dossier de validation, qui dépendent surtout de votre disponibilité. Un accompagnement structuré permet généralement de tenir cette fourchette sans à-coups.",
  },
  {
    question: "Comment utiliser mon CPF pour financer la VAE ?",
    reponse:
      "L'accompagnement à la VAE est éligible au CPF. Vous mobilisez votre compte personnel de formation (via moncompteformation.gouv.fr) pour financer tout ou partie de la prestation. Nous vérifions avec vous votre solde disponible et, s'il ne couvre pas l'intégralité, nous regardons ensemble les autres solutions de financement possibles (OPCO, France Travail, Transitions Pro...).",
  },
  {
    question: "Puis-je faire ma VAE tout en travaillant ?",
    reponse:
      "Oui, c'est même la situation la plus fréquente. Le parcours est conçu pour s'organiser en parallèle de votre activité professionnelle : rédaction du dossier à votre rythme, rendez-vous d'accompagnement à distance, sans interruption de votre emploi.",
  },
  {
    question: "Puis-je faire une VAE sans diplôme ?",
    reponse:
      "Oui, c'est justement l'objectif de la VAE : valider un diplôme à partir de votre expérience, que vous ayez ou non un diplôme antérieur. Ce qui compte, c'est que votre pratique — professionnelle ou bénévole — corresponde au référentiel du diplôme visé.",
  },
  {
    question: "Et si mon dossier est refusé ?",
    reponse:
      "Le jury peut prononcer une validation totale, partielle ou un refus. En cas de validation partielle, les blocs de compétences validés sont acquis définitivement : vous n'avez pas à tout recommencer, seulement à compléter ce qui manque (formation ciblée, travaux complémentaires ou nouvelle présentation), sans délai imposé pour vous représenter. Nous vous accompagnons dans tous les cas pour construire la suite.",
  },
  {
    question: "Qui finance la VAE ?",
    reponse:
      "Plusieurs solutions existent selon votre situation : votre CPF, un abondement de votre employeur ou de votre OPCO (OPCO Santé pour le secteur social et médico-social), une aide de France Travail si vous êtes demandeur d'emploi, ou Transitions Pro dans le cadre d'une reconversion. Nous identifions avec vous la solution la plus adaptée avant tout engagement.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-x-clip bg-gradient-to-b from-brand-50 via-white to-white pb-10 pt-6 sm:pb-20 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute left-0 top-24 hidden h-56 w-72 opacity-70 lg:block" style={DOTS} />
        <Container className="relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-x-14 lg:gap-y-8">
            <div>
              <h1 className="text-[clamp(1.9rem,7.4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-900">
                Commençons par regarder <span className="mot-cle text-brand-500">votre parcours</span> et le diplôme qui lui correspond.
              </h1>
              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                Trois minutes de questions, puis un expert du secteur social vous rappelle : la VAE, les livrets, le financement, et ce qui est possible dans votre situation.
              </p>
              <p className="mt-6 text-sm font-semibold text-brand-900">Que vous visiez :</p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {DIPLOMES.map((d, i) => (
                  <li key={d.sigle}>
                    <Link href={`/${d.slug}`} className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-bold ring-1 ring-brand-900/10 transition hover:-translate-y-0.5 ${i % 2 === 0 ? "bg-white text-brand-700" : "bg-brand-50 text-brand-800"}`}>{d.sigle}</Link>
                  </li>
                ))}
              </ul>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">On vous guide à chaque étape, sans reprendre une formation complète, et sans aucun engagement de votre part avant d&apos;avoir la réponse.</p>
              <StatsRow className="mt-6 sm:mt-7" />
              <LogoCards className="mt-6 sm:mt-7" />
            </div>

            <div id="prediagnostic-form" className="scroll-mt-24 lg:row-span-2">
              <div className="relative">
                <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-accent-100/60 blur-xl" />
                <div className="rounded-3xl bg-white p-1.5 shadow-[0_30px_70px_-30px_rgba(20,47,42,0.45)] ring-1 ring-brand-900/10 sm:p-2">
                  <PrediagnosticForm />
                </div>
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-600 sm:mt-4">
                <BrandIcon name="lock" className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                Vos informations restent confidentielles, jamais revendues à des tiers.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-34px_rgba(20,47,42,0.45)] ring-1 ring-brand-900/10">
                <div className="flex items-center gap-1.5 border-b border-brand-900/10 bg-brand-50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
                  <span className="ml-3 text-xs font-semibold text-brand-700">Ensuite : votre visio · 40 minutes</span>
                </div>
                <div className="p-5 sm:p-6">
                  <ul className="space-y-3">
                    {AU_PROGRAMME.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-[0.95rem] font-medium leading-snug text-brand-900">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-100 text-brand-600"><Ico name="check" className="h-3.5 w-3.5" /></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl bg-brand-50 px-4 py-2.5 text-center text-sm text-brand-800"><span className="font-semibold">Gratuite</span> · aucune inscription sans cet échange</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* POUR QUI */}
      <section className="relative bg-white py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Pour qui ?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Quel que soit votre parcours, une voie existe vers le diplôme.</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Structure, domicile, autodidacte ou en reconversion : chaque situation a ses propres leviers pour accéder à un diplôme d&apos;État par la VAE.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {PERSONAS.map((p, i) => {
              const t = TINTS[i];
              return (
                <div key={p.titre} className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10 sm:p-7">
                  <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.tile}`}><BrandIcon name={p.icon} className="h-6 w-6" /></span>
                    <span className="text-4xl font-bold text-brand-100">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-900">{p.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.texte}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">{p.chips.map((c) => (<Chip key={c} className={t.chip}>{c}</Chip>))}</div>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-900/10 sm:p-7">
              <p className="text-sm font-bold text-brand-900">Votre expérience correspond peut-être déjà à :</p>
              <ul className="mt-3 space-y-2">
                {COMPETENCES.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700"><span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600"><Ico name="check" className="h-3 w-3" /></span>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-900/10 sm:p-7">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-900"><BrandIcon name="handshake" className="h-5 w-5 shrink-0 text-brand-600" />Notre promesse : la transparence avant tout</p>
              <ul className="mt-3 space-y-2">
                {REASSURANCES.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-brand-900"><span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-brand-600 shadow-sm"><Ico name="check" className="h-3 w-3" /></span>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* NOS DIPLÔMES */}
      <section id="diplomes" className="relative scroll-mt-16 overflow-hidden bg-brand-50/70 py-12 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border-[28px] border-brand-100/70" />
        <div aria-hidden className="pointer-events-none absolute right-6 top-8 hidden h-40 w-56 opacity-70 sm:block" style={DOTS} />
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <Eyebrow>Nos diplômes</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Les diplômes accessibles par la VAE</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Trouvez le vôtre : chaque diplôme a sa propre page avec toutes les informations utiles pour vous décider.</p>
          </div>
          <div className="relative mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {DIPLOMES.map((d, i) => {
              const t = TINTS[i % 4];
              return (
                <Link key={d.sigle} href={`/${d.slug}`} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-sm ring-1 ring-brand-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10 sm:p-6">
                  <div aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${t.bar}`} />
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-2xl ${t.tile}`}><BrandIcon name="diploma" className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="text-xl font-bold leading-none text-brand-900">{d.sigle}</p>
                      <p className="mt-1 text-xs font-semibold leading-snug text-brand-600">{d.nom}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">{d.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Voir ce diplôme <Ico name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
            <Link href="#prediagnostic-form" className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-600 p-5 text-white shadow-xl shadow-brand-900/20 sm:p-6">
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-white/10" />
              <div className="relative">
                <p className="text-lg font-bold leading-snug [text-wrap:balance]">Vous hésitez entre deux diplômes ?</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-50">Le premier échange sert aussi à ça : repérer celui qui correspond à votre expérience.</p>
              </div>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold">Être rappelé·e gratuitement <Ico name="arrow" className="h-4 w-4" /></span>
            </Link>
          </div>
        </Container>
      </section>

      <MethodeSection />

      <FinancementSection />

      <TemoignagesSection />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16 bg-brand-50/70 py-12 sm:py-20">
        <Container className="max-w-3xl">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 [text-wrap:balance] sm:text-4xl">Vos questions sur la VAE</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">Toutes les réponses pour démarrer en confiance.</p>
          </div>
          <div className="mt-8 sm:mt-10"><FaqAccordion items={FAQ_ITEMS} /></div>
          <FaqJsonLd items={FAQ_ITEMS} />
        </Container>
      </section>

      <CtaFinalSection />

      <StickyCta href="#prediagnostic-form" label="Mon prédiagnostic gratuit" hideWhenVisible={["#prediagnostic-form", "#cta-final", "footer"]} />
    </>
  );
}
