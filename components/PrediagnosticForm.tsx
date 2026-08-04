"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useForm, Controller, useController, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { prediagnosticSchema, type PrediagnosticFormValues } from "@/lib/prediagnostic-schema";
import { formatPhoneInput, isValidPhoneFr, normalizePhoneOnBlur } from "@/lib/phone";
import { useFormProgress } from "@/lib/form-progress-context";
import { trackConversion } from "@/lib/tracking";
import { trackFormConversion, type FormKey } from "@/lib/google-ads-conversions";

// --- Données des étapes à choix unique (cartes larges, sélection = avance automatique) ---

const DIPLOME_OPTIONS = [
  { value: "DEES", label: "DEES", helper: "Éducateur spécialisé · Bac+3" },
  { value: "DEAES", label: "DEAES", helper: "Accompagnant éducatif et social · CAP/BEP" },
  { value: "DEEJE", label: "DEEJE", helper: "Éducateur de jeunes enfants · Bac+3" },
  { value: "DEME", label: "DEME", helper: "Moniteur-éducateur · Bac" },
  { value: "Je ne sais pas", label: "Je ne sais pas" },
];

// Étape 2 — refonte du 2026-08-01 : la question porte sur le statut
// professionnel (et non plus sur le secteur), plus rapide à répondre et plus
// simple à qualifier côté conseiller. Pas de sous-texte "financement" par
// option ici : le site ne présente ces dispositifs (CPF, OPCO Santé, France
// Travail...) que de façon générale, jamais garantis par statut précis — on
// évite d'induire une promesse de financement qu'on ne peut pas tenir pour
// chaque cas.
const SITUATION_OPTIONS = [
  { value: "Salarié du secteur privé", label: "Salarié du secteur privé", icon: "briefcase" as const },
  { value: "Agent du secteur public", label: "Agent du secteur public", icon: "landmark" as const },
  { value: "Demandeur d'emploi", label: "Demandeur d'emploi", icon: "search" as const },
  { value: "Indépendant", label: "Indépendant", icon: "network" as const },
  { value: "Autre", label: "Autre" },
];

// Suggestions d'autocomplétion pour "Dans quelle structure exercez-vous ?",
// adaptées au diplôme visé (choisi à l'étape 1). Liste indicative, non
// exhaustive : la saisie manuelle reste toujours possible si la structure de
// l'utilisateur n'y figure pas.
const STRUCTURE_SUGGESTIONS: Record<string, string[]> = {
  DEES: ["IME", "ITEP", "MECS", "CHRS", "ESAT", "FAM", "MAS", "SESSAD", "SAVS", "SAMSAH", "AEMO", "ASE"],
  DEAES: ["EHPAD", "SSIAD", "SAAD", "Domicile", "FAM", "MAS", "IME"],
  DEME: ["IME", "ITEP", "MECS", "SESSAD", "ESAT"],
  DEEJE: ["Crèche", "Micro-crèche", "Multi-accueil", "Halte-garderie", "PMI", "Relais Petite Enfance"],
};
// Liste de secours si le diplôme n'est pas encore déterminé ("Je ne sais
// pas") : toutes les suggestions réunies, sans doublons.
const ALL_STRUCTURES = Array.from(new Set(Object.values(STRUCTURE_SUGGESTIONS).flat()));

// Ancienneté dans l'activité décrite à l'étape précédente. Ajoutée le
// 2026-08-04 : la durée d'exercice est la première condition légale
// d'éligibilité à la VAE (un an minimum d'activité en rapport avec le
// diplôme), et c'était la seule information manquante pour trancher un
// dossier sans décrocher le téléphone.
//
// Choix fermés et non champ libre : 78 % du trafic est mobile, et un champ
// texte y ouvre le clavier — le pire ennemi du taux de complétion. Un tap
// suffit ici. Les bornes sont calées sur le seuil réglementaire d'un an, pour
// que la première option isole immédiatement les dossiers non recevables.
const ANCIENNETE_OPTIONS = [
  { value: "Moins d'un an", label: "Moins d'un an" },
  { value: "1 à 3 ans", label: "1 à 3 ans" },
  { value: "3 à 5 ans", label: "3 à 5 ans" },
  { value: "Plus de 5 ans", label: "Plus de 5 ans" },
];

const ALL_STEPS = [
  { key: "diplomeVise", label: "Votre objectif" },
  { key: "situationActuelle", label: "Votre situation" },
  { key: "activiteQuotidienne", label: "Votre quotidien" },
  // Placée juste après la description de l'activité : la personne vient
  // d'expliquer ce qu'elle fait, « depuis combien de temps » s'enchaîne
  // naturellement. Placée plus tôt, elle filtrerait avant que la personne
  // ne soit engagée dans le tunnel.
  { key: "ancienneteActivite", label: "Votre ancienneté" },
  { key: "structure", label: "Votre structure" },
  { key: "coordonnees", label: "Vos coordonnées" },
] as const;

type SubmitState = "idle" | "loading" | "success" | "error";

// --- Petit set d'icônes maison (traits fins, cohérents avec l'identité de
// marque) qui remplace les emojis utilisés jusqu'ici. Les emojis rendent de
// façon incohérente selon l'appareil (styles Apple/Android/Windows tous
// différents) et donnent un ton familier, presque enfantin, à l'opposé du
// rendu sobre et maîtrisé attendu d'un site "officiel" — un point relevé
// explicitement par le client. Un seul set vectoriel, une seule couleur
// (currentColor), garantit un rendu identique partout et beaucoup plus premium.
type IconName = "briefcase" | "info" | "landmark" | "network" | "search" | "chat" | "phone" | "check";

function StepIcon({ name, className }: { name: IconName; className?: string }) {
  if (name === "check") {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414l2.792 2.792 6.793-6.793a1 1 0 011.415 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const common = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="2.5" y="6.5" width="15" height="9.5" rx="1.5" />
          <path d="M7 6.5V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0113 5v1.5" />
          <line x1="2.5" y1="10.75" x2="17.5" y2="10.75" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7.25" />
          <line x1="10" y1="9.25" x2="10" y2="13.5" />
          <circle cx="10" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "landmark":
      return (
        <svg {...common}>
          <polygon points="10,2.5 2.75,7.75 17.25,7.75" />
          <line x1="4.25" y1="9" x2="4.25" y2="15.5" />
          <line x1="8" y1="9" x2="8" y2="15.5" />
          <line x1="12" y1="9" x2="12" y2="15.5" />
          <line x1="15.75" y1="9" x2="15.75" y2="15.5" />
          <line x1="2.75" y1="17" x2="17.25" y2="17" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="10" r="4" />
          <circle cx="12.5" cy="10" r="4" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="8.75" cy="8.75" r="5.5" />
          <line x1="16.25" y1="16.25" x2="12.75" y2="12.75" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M3.5 9a5 5 0 015-5h3a5 5 0 015 5v1.5a5 5 0 01-5 5H9l-3.2 2.7v-2.9A5 5 0 013.5 10.5V9z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="7.2" y="3.2" width="5.6" height="13.6" rx="2.8" transform="rotate(45 10 10)" />
        </svg>
      );
    default:
      return null;
  }
}

/** Badge circulaire brand-color qui encadre une StepIcon — traitement visuel
 *  cohérent partout où une icône accompagne un texte (aide au choix, étapes
 *  de l'écran de succès), au lieu d'emojis disparates. */
function IconBadge({ name, size = "sm" }: { name: IconName; size?: "sm" | "lg" }) {
  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600",
        size === "sm" ? "h-6 w-6" : "h-12 w-12"
      )}
    >
      <StepIcon name={name} className={size === "sm" ? "h-3.5 w-3.5" : "h-6 w-6"} />
    </span>
  );
}

/** Flèche fine utilisée dans les boutons "Continuer" — glisse légèrement au
 *  survol pour un feedback discret plutôt qu'un simple changement de couleur. */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3.5" y1="10" x2="15.5" y2="10" />
      <polyline points="10,4.5 15.5,10 10,15.5" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={clsx("animate-spin", className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Petite coche qui "pop" à l'intérieur d'un champ dès qu'il devient valide —
 *  feedback en temps réel façon Stripe, plutôt que de n'informer l'utilisateur
 *  qu'au moment de l'erreur (au blur). Purement visuel : la validation qui
 *  bloque réellement l'envoi reste celle du schéma zod. */
function ValidMark() {
  return (
    <span className="check-pop pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-brand-500">
      <StepIcon name="check" className="h-4 w-4" />
    </span>
  );
}

/** Vrai uniquement sur les appareils pilotés à la souris (desktop). Sert à
 *  n'activer l'autofocus qu'où il est sans risque : sur mobile, un focus
 *  programmatique après un délai n'ouvre généralement pas le clavier virtuel
 *  (les navigateurs l'exigent en réponse directe à un geste) et peut en
 *  revanche déclencher un saut de défilement imprévu — on préfère s'abstenir
 *  plutôt que de risquer l'expérience mobile, explicitement prioritaire ici. */
function isFinePointerDevice() {
  return typeof window !== "undefined" && !!window.matchMedia?.("(pointer: fine)").matches;
}

/** Formatage du téléphone : voir lib/phone.ts. Cette logique a été sortie du
 *  composant après l'incident du 4 août 2026 (troncature silencieuse des
 *  saisies au format international), pour que le formulaire, le schéma Zod et
 *  l'enregistrement partagent exactement la même définition d'un numéro
 *  valide — au lieu de trois règles divergentes. */
const formatPhoneNumber = formatPhoneInput;

// Corrections des fautes de frappe les plus courantes sur les fournisseurs
// email les plus répandus en France — liste générique de bon sens (pas une
// donnée propre au projet), utile pour rattraper un lead qui aurait sinon
// jamais reçu notre réponse sous 24h faute d'une adresse valide.
const EMAIL_DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gmailcom": "gmail.com",
  "gnail.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "hotmal.com": "hotmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.fre": "yahoo.fr",
  "outlok.com": "outlook.com",
  "outllok.com": "outlook.com",
  "orange.f": "orange.fr",
  "orange.frr": "orange.fr",
  "free.frr": "free.fr",
  "free.f": "free.fr",
  "laposte.fr": "laposte.net",
  "wanadoo.frr": "wanadoo.fr",
};

/** Retourne l'adresse corrigée si le domaine saisi est une faute de frappe
 *  connue, sinon `null`. */
function suggestEmailDomain(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at === -1) return null;
  const domain = email.slice(at + 1).trim().toLowerCase();
  const fix = EMAIL_DOMAIN_TYPOS[domain];
  return fix ? `${email.slice(0, at + 1)}${fix}` : null;
}

// Clé sessionStorage du brouillon en cours — volontairement sessionStorage
// (pas localStorage) : le brouillon disparaît tout seul à la fermeture de
// l'onglet, aucune donnée personnelle qui traîne indéfiniment sur l'appareil.
const DRAFT_STORAGE_KEY = "vaesocial-prediagnostic-draft";

export default function PrediagnosticForm({
  presetDiplome,
}: {
  /** Quand fourni (pages diplôme dédiées), l'étape "Quel diplôme ?" est sautée et préremplie. */
  presetDiplome?: "DEES" | "DEAES" | "DEEJE" | "DEME";
}) {
  const [step, setStep] = useState(0);
  // Sens de la dernière navigation, pour orienter l'animation de transition
  // entre étapes (glisse depuis la droite en avançant, depuis la gauche en
  // reculant) — repère spatial qui renforce la sensation de parcours guidé.
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const { setFormActive } = useFormProgress();

  // Étapes effectives : on retire "diplomeVise" si le diplôme est déjà connu, puis on
  // renumérote l'eyebrow "Étape X/Y" dynamiquement.
  const steps = (presetDiplome
    ? ALL_STEPS.filter((s) => s.key !== "diplomeVise")
    : ALL_STEPS
  ).map((s, i, arr) => ({ ...s, eyebrow: `Étape ${i + 1}/${arr.length} — ${s.label}` }));
  const totalSteps = steps.length;

  // Signale au Header qu'on est "dans" le questionnaire dès que l'utilisateur
  // a répondu à la première question, pour masquer son CTA redondant. On
  // repasse à false une fois la demande envoyée (plus rien à distraire).
  useEffect(() => {
    setFormActive(step > 0 && submitState !== "success");
  }, [step, submitState, setFormActive]);

  const {
    register,
    control,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<PrediagnosticFormValues>({
    resolver: zodResolver(prediagnosticSchema),
    mode: "onBlur",
    defaultValues: presetDiplome ? { diplomeVise: presetDiplome } : undefined,
  });

  // Restauration d'un brouillon abandonné (fermeture accidentelle de
  // l'onglet, navigation involontaire) — volontairement APRÈS le premier
  // rendu (jamais dans `defaultValues` ci-dessus) pour ne jamais faire
  // diverger le rendu serveur du premier rendu client : Next.js comparerait
  // les deux et lèverait une erreur d'hydratation. En passant par un effet,
  // la restauration n'intervient qu'après coup, via un re-rendu normal.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { values?: Partial<PrediagnosticFormValues>; step?: number };
      if (!saved.values) return;
      const restored: Partial<PrediagnosticFormValues> = { ...saved.values };
      // Le diplôme préréglé par la page (/dees, /deaes...) prime toujours sur
      // un brouillon enregistré depuis une autre page.
      if (presetDiplome) restored.diplomeVise = presetDiplome;
      reset(restored as PrediagnosticFormValues, { keepDefaultValues: false });
      if (typeof saved.step === "number") {
        setStep(Math.min(Math.max(saved.step, 0), totalSteps - 1));
      }
    } catch {
      // Brouillon corrompu ou stockage indisponible (navigation privée) : on
      // continue simplement avec un formulaire vide, sans bloquer personne.
    }
    // Volontairement exécuté une seule fois, au montage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sauvegarde continue du brouillon à chaque changement — permet de
  // reprendre exactement où on en était après une fermeture accidentelle.
  const watchedValues = useWatch({ control });
  useEffect(() => {
    if (typeof window === "undefined" || submitState === "success") return;
    try {
      const { honeypot: _honeypot, ...rest } = watchedValues;
      window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({ values: rest, step }));
    } catch {
      // Quota dépassé / stockage désactivé : on n'interrompt pas la saisie pour ça.
    }
  }, [watchedValues, step, submitState]);

  function goNext() {
    setDirection("forward");
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  function goBack() {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function selectAndAdvance(
    field: "diplomeVise" | "situationActuelle" | "ancienneteActivite",
    value: string,
    onChange: (v: string) => void
  ) {
    onChange(value);
    // petit délai pour laisser voir l'état "sélectionné" avant de passer à l'étape suivante
    setTimeout(async () => {
      const valid = await trigger(field);
      if (valid) goNext();
    }, 220);
  }

  // Étapes "texte libre" (pas de sélection discrète comme les ChoiceStep) :
  // une fonction d'avance dédiée par champ, réutilisée à la fois par le
  // clic sur une suggestion et par le bouton "Continuer".
  async function advanceActiviteStep() {
    const valid = await trigger("activiteQuotidienne");
    if (valid) goNext();
  }

  async function advanceStructureStep() {
    const valid = await trigger("structure");
    if (valid) goNext();
  }

  async function onSubmit(values: PrediagnosticFormValues) {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/prediagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Envoi échoué");

      // Point de suivi unique pour toutes les pages (home + 4 diplômes) : un
      // seul endroit à câbler plus tard à un vrai tag de conversion Google
      // Ads / GTM. Déclenché uniquement après un envoi réellement réussi.
      trackConversion("prediagnostic_lead_submitted", {
        diplome: values.diplomeVise,
        page: presetDiplome ? `diplome_${presetDiplome.toLowerCase()}` : "home",
      });

      // Conversion Google Ads propre au formulaire envoyé (DEES/DEAES/DEEJE/
      // DEME sur les pages dédiées, "générique" sur la home et /prediagnostic).
      // Sans effet tant que lib/google-ads-conversions.ts n'a pas reçu les
      // libellés de conversion — voir ce fichier pour l'activer.
      const formKey: FormKey = presetDiplome ? (presetDiplome.toLowerCase() as FormKey) : "generique";
      trackFormConversion(formKey);

      setSubmitState("success");
      try {
        window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {
        // Rien de grave si l'effacement échoue : la clé expirera de toute
        // façon à la fermeture de l'onglet (sessionStorage).
      }
    } catch {
      setSubmitState("error");
    }
  }

  const progressPercent = ((step + 1) / totalSteps) * 100;
  const stepTransitionClass = direction === "forward" ? "step-transition-forward" : "step-transition-back";

  if (submitState === "success") {
    const prenom = getValues("prenom");
    return (
      <div className="mx-auto w-full max-w-md rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-2xl shadow-brand-900/15 sm:p-8 step-transition">
        <div className="mx-auto mb-4">
          <IconBadge name="check" size="lg" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {prenom ? `Merci ${prenom}, votre étude personnalisée démarre !` : "Votre étude personnalisée démarre !"}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          {/* Prénoms réels de l'équipe de formateurs VAE Social — remplace la
              mention générique "un expert VAE" par des personnes réelles et
              vérifiables, sans rien inventer (retour utilisateur du
              2026-08-02) : la spécificité rassure plus qu'une formule
              anonyme, à un coût de mise en œuvre nul. */}
          Aurore, Karine, Pamela et Jean, nos formateurs VAE spécialisés dans le secteur social,
          vont maintenant analyser votre parcours avec attention.
        </p>

        <div className="mt-5 space-y-3 rounded-2xl bg-brand-50/60 p-4 text-left text-sm text-brand-900">
          <div className="flex items-center gap-2.5">
            <IconBadge name="phone" />
            <span>Vous serez recontacté·e très rapidement</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconBadge name="search" />
            <span>Nous étudierons votre éligibilité ensemble, en toute transparence</span>
          </div>
          <div className="flex items-center gap-2.5">
            <IconBadge name="chat" />
            <span>Vous pourrez poser toutes les questions que vous avez en tête</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">En toute simplicité, et sans engagement.</p>
        {/* Note de fin volontairement humaine — seul emoji du formulaire,
            réservé à ce dernier mot d'accueil pour laisser une impression
            chaleureuse sans revenir sur le choix des icônes vectorielles
            partout ailleurs (retour utilisateur du 2026-08-01). */}
        <p className="mt-3 text-sm font-medium text-brand-700">Nous avons hâte d&apos;échanger avec vous 😊</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-brand-900/15">
      {/* En-tête dégradé avec titre constant + barre de progression */}
      <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-4 pb-2.5 pt-3.5 text-white sm:px-7 sm:pb-4 sm:pt-5">
        <p className="text-[11px] font-medium text-brand-50/90 sm:text-xs">{steps[step].eyebrow}</p>
        <h2 className="mt-0.5 text-base font-bold sm:mt-1 sm:text-xl">Testez votre éligibilité à la VAE</h2>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3">
          <div
            className="h-full rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3 sm:px-7 sm:py-6">
        <div key={step} className={stepTransitionClass}>
          {steps[step].key === "diplomeVise" && (
            <ChoiceStep
              question="Quel diplôme souhaitez-vous obtenir par la VAE ?"
              name="diplomeVise"
              control={control}
              options={DIPLOME_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.diplomeVise?.message}
            />
          )}

          {steps[step].key === "situationActuelle" && (
            <ChoiceStep
              question="Quelle est votre situation actuelle ?"
              subtitle="Cette information nous permet de cibler tout de suite les solutions de financement adaptées à votre profil."
              name="situationActuelle"
              control={control}
              options={SITUATION_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.situationActuelle?.message}
            />
          )}

          {steps[step].key === "activiteQuotidienne" && (
            <ActiviteStep control={control} onAdvance={advanceActiviteStep} error={errors.activiteQuotidienne?.message} />
          )}

          {steps[step].key === "ancienneteActivite" && (
            <ChoiceStep
              question="Depuis combien de temps exercez-vous cette activité ?"
              subtitle="La VAE demande au moins un an d'expérience en rapport avec le diplôme visé — c'est la première chose que nous vérifions pour vous."
              name="ancienneteActivite"
              control={control}
              options={ANCIENNETE_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.ancienneteActivite?.message}
            />
          )}

          {steps[step].key === "structure" && (
            <StructureStep
              control={control}
              diplomeVise={getValues("diplomeVise")}
              onAdvance={advanceStructureStep}
              error={errors.structure?.message}
            />
          )}

          {steps[step].key === "coordonnees" && (
            <CoordonneesStep
              control={control}
              register={register}
              errors={errors}
              submitState={submitState}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
            />
          )}
        </div>

        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="-ml-2 mt-4 flex items-center gap-1 rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-500 transition hover:text-slate-700"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            Retour
          </button>
        )}
      </form>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-brand-100 bg-brand-50/60 px-4 py-2 text-[11px] font-medium text-brand-800 sm:gap-x-5 sm:gap-y-1.5 sm:px-7 sm:py-3 sm:text-xs">
        <span>✓ 100% gratuit</span>
        <span>✓ Sans engagement</span>
        <span>✓ Réponse sous 24h</span>
      </div>
    </div>
  );
}

function ChoiceStep({
  question,
  subtitle,
  name,
  control,
  options,
  onSelect,
  error,
}: {
  question: string;
  /** Ligne courte sous la question, pour expliquer pourquoi on la pose — réduit la friction perçue. */
  subtitle?: string;
  name: "diplomeVise" | "situationActuelle" | "ancienneteActivite";
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  options: { value: string; label: string; helper?: string; icon?: IconName }[];
  onSelect: (field: typeof name, value: string, onChange: (v: string) => void) => void;
  error?: string;
}) {
  const { field } = useController({ name, control });

  // Raccourcis clavier 1-9 : sélectionne directement l'option correspondante
  // — gain de vitesse appréciable pour qui remplit le formulaire au clavier
  // (desktop), sans rien changer pour les autres (le badge indice n'est
  // affiché que sur les écrans assez larges pour avoir un clavier physique).
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const index = Number(e.key) - 1;
      if (!Number.isInteger(index) || index < 0 || index >= options.length) return;
      onSelect(name, options[index].value, field.onChange);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, name]);

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{question}</h3>
      {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
      <div className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
        {options.map((opt, index) => {
          const selected = field.value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(name, opt.value, field.onChange)}
              className={clsx(
                "flex min-h-11 w-full items-center justify-between rounded-2xl border-2 px-3.5 py-2 text-left transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-4 sm:py-3",
                selected
                  ? "border-brand-600 bg-brand-50 shadow-sm"
                  : "border-slate-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-slate-50 hover:shadow-sm active:translate-y-0 active:scale-[0.99]"
              )}
            >
              <span className="flex items-start gap-2.5">
                {opt.icon && (
                  <span className="mt-0.5">
                    <IconBadge name={opt.icon} />
                  </span>
                )}
                <span>
                  <span className="block text-sm font-medium text-slate-800">{opt.label}</span>
                  {opt.helper && (
                    <span className="mt-0.5 block text-xs text-slate-500">{opt.helper}</span>
                  )}
                </span>
              </span>
              <span className="ml-3 flex shrink-0 items-center gap-2 sm:ml-4">
                {/* Indice clavier — desktop uniquement (pas de clavier physique sur mobile) */}
                <span className="hidden h-5 w-5 items-center justify-center rounded-md border border-slate-200 text-[11px] font-medium text-slate-400 sm:flex">
                  {index + 1}
                </span>
                <span
                  className={clsx(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5",
                    selected ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"
                  )}
                >
                  {selected && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-2.5 w-2.5 check-pop sm:h-3 sm:w-3">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414l2.792 2.792 6.793-6.793a1 1 0 011.415 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
}

/** Étape "Décrivez votre activité au quotidien" : grand champ texte libre à
 *  auto-hauteur (pas de barre de défilement interne pendant la saisie). Pas
 *  de longueur minimale ni de compteur de caractères — une réponse courte
 *  mais pertinente ne doit jamais être bloquée ; l'objectif est le taux de
 *  complétion, pas le filtrage (retour utilisateur du 2026-08-01). */
function ActiviteStep({
  control,
  onAdvance,
  error,
}: {
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  onAdvance: () => void;
  error?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function autoResize(el: HTMLTextAreaElement | null) {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }

  // Cette étape n'est jamais la toute première vue par l'utilisateur (elle
  // arrive après au moins deux choix déjà faits) : le focus programmatique
  // est donc la continuité naturelle d'un geste déjà entamé, pas une
  // interruption surprise.
  useEffect(() => {
    if (isFinePointerDevice()) textareaRef.current?.focus();
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        Décrivez votre activité au quotidien
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        Décrivez les personnes que vous accompagnez, vos missions quotidiennes, vos responsabilités
        et les tâches que vous réalisez régulièrement.
      </p>
      <Controller
        name="activiteQuotidienne"
        control={control}
        render={({ field }) => (
          <div className="mt-2.5 sm:mt-4">
            <textarea
              {...field}
              ref={(el) => {
                field.ref(el);
                textareaRef.current = el;
                autoResize(el);
              }}
              onChange={(e) => {
                field.onChange(e);
                autoResize(e.target);
              }}
              rows={5}
              placeholder="Ex : J'accompagne au quotidien 8 résidents en situation de handicap, j'organise des activités adaptées, je participe aux réunions d'équipe pluridisciplinaire..."
              className="form-input min-h-[140px] resize-none leading-relaxed"
            />
            {/* Texte d'aide statique — pas de compteur ni de seuil : une
                réponse courte mais sincère est tout aussi recevable. */}
            <p className="mt-1.5 text-xs text-slate-400">
              Pas besoin d&apos;un roman : quelques mots sincères suffisent.
            </p>
          </div>
        )}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <div className="mt-3 flex items-start gap-2 rounded-xl bg-brand-50/60 p-3 text-xs leading-relaxed text-brand-900">
        <IconBadge name="info" />
        <span>
          Cette question nous permet de mieux comprendre votre quotidien pour évaluer votre
          éligibilité avec attention.
        </span>
      </div>

      <button
        type="button"
        onClick={onAdvance}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
      >
        Continuer
        <ArrowIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

function StructureStep({
  control,
  diplomeVise,
  onAdvance,
  error,
}: {
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  diplomeVise?: string;
  onAdvance: () => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const suggestions = STRUCTURE_SUGGESTIONS[diplomeVise ?? ""] ?? ALL_STRUCTURES;

  useEffect(() => {
    if (isFinePointerDevice()) inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        Dans quelle structure exercez-vous actuellement ?
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        Ex : Foyer de vie, IME, ESAT, MECS, EHPAD, MAS, SESSAD, service d&apos;aide à domicile, etc.
        Tapez librement ou choisissez une suggestion — votre structure n&apos;y figure pas ?
        Indiquez-la simplement, c&apos;est très bien aussi.
      </p>
      <Controller
        name="structure"
        control={control}
        render={({ field }) => {
          const query = field.value?.trim().toLowerCase() ?? "";
          const filtered = suggestions
            .filter((s) => query === "" || s.toLowerCase().includes(query))
            .slice(0, 8);

          function choose(value: string) {
            field.onChange(value);
            setOpen(false);
            setTimeout(onAdvance, 220);
          }

          return (
            <div className="relative mt-2.5 sm:mt-4">
              <input
                {...field}
                ref={(el) => {
                  field.ref(el);
                  inputRef.current = el;
                }}
                type="text"
                autoComplete="off"
                placeholder="Ex : IME, ESAT, EHPAD, domicile..."
                className="form-input"
                onFocus={() => setOpen(true)}
                onBlur={() => {
                  // léger délai pour laisser le temps au clic sur une suggestion
                  // de s'exécuter avant que la liste ne se ferme
                  setTimeout(() => setOpen(false), 150);
                  field.onBlur();
                }}
                onKeyDown={(e) => {
                  // Un <input> seul dans un <form> sans bouton "submit" visible
                  // déclenche la soumission implicite du formulaire entier sur
                  // Entrée — on l'intercepte pour avancer d'une étape à la place.
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setOpen(false);
                    onAdvance();
                  }
                }}
              />
              {open && filtered.length > 0 && (
                <div className="absolute z-20 mt-1.5 max-h-56 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-1.5 shadow-xl shadow-slate-900/10">
                  {filtered.map((s) => (
                    <button
                      key={s}
                      type="button"
                      // évite que le blur de l'input ne se déclenche avant le clic
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => choose(s)}
                      className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }}
      />
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <button
        type="button"
        onClick={onAdvance}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
      >
        Continuer
        <ArrowIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

/** Dernière étape : coordonnées. Champs pilotés en `Controller` (plutôt que
 *  `register`) pour permettre le formatage du téléphone au fil de la frappe,
 *  la suggestion anti-typo sur l'email et la coche de validation en temps
 *  réel — trois détails "premium" qui rassurent avant l'envoi plutôt que de
 *  sanctionner après coup. Ton retravaillé le 2026-08-01 (retour utilisateur) :
 *  l'étape doit se sentir humaine et rassurante, pas administrative — d'où le
 *  bloc de réassurance juste avant les champs, au moment précis où on demande
 *  des coordonnées personnelles (le point de friction le plus sensible). */
function CoordonneesStep({
  control,
  register,
  errors,
  submitState,
  isSubmitting,
  isSubmitted,
}: {
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  register: ReturnType<typeof useForm<PrediagnosticFormValues>>["register"];
  errors: ReturnType<typeof useForm<PrediagnosticFormValues>>["formState"]["errors"];
  submitState: SubmitState;
  isSubmitting: boolean;
  /** true dès qu'un envoi a été tenté (validé ou non) — sert à autoriser
   *  l'affichage des erreurs "champ requis" sur les champs jamais touchés,
   *  voir shouldShowError ci-dessous. */
  isSubmitted: boolean;
}) {
  const prenomRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isFinePointerDevice()) prenomRef.current?.focus();
  }, []);

  const prenom = useController({ name: "prenom", control });
  const nom = useController({ name: "nom", control });
  const telephone = useController({ name: "telephone", control });
  const email = useController({ name: "email", control });

  const prenomValid = (prenom.field.value ?? "").trim().length >= 2;
  const nomValid = (nom.field.value ?? "").trim().length >= 2;
  // La coche verte ne s'affiche que si le numéro est réellement joignable —
  // l'ancien test « 10 chiffres » validait des numéros tronqués (voir lib/phone.ts).
  const phoneValid = isValidPhoneFr(telephone.field.value ?? "");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.field.value ?? "");
  const emailSuggestion = suggestEmailDomain(email.field.value ?? "");

  // Le Prénom est auto-focusé au chargement de cette étape (voir l'effet
  // ci-dessus) : si l'utilisateur clique ailleurs (téléphone, email...) ou
  // lit simplement le bloc de réassurance avant de taper, ce focus se perd
  // (blur) alors que le champ est encore vide. En mode "onBlur", ça faisait
  // apparaître un "Required" rouge sur un champ que la personne n'a même pas
  // encore essayé de remplir — repéré en testant le formulaire en direct le
  // 2026-08-02, un des pires endroits pour montrer une erreur qui fait peur
  // (juste avant l'envoi). On n'affiche donc une erreur que si (a) la
  // personne a déjà tapé quelque chose dans le champ (erreur légitime, ex.
  // "Prénom trop court.") ou (b) elle a réellement tenté d'envoyer le
  // formulaire au moins une fois (isSubmitted) : dans ces deux cas, l'erreur
  // est méritée ; jamais avant.
  function shouldShowError(value: string | undefined, error?: string) {
    if (!error) return false;
    return Boolean((value ?? "").trim()) || isSubmitted;
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2.5 text-slate-900">
        <IconBadge name="chat" />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
            Vous y êtes presque
          </p>
          <h3 className="text-sm font-semibold sm:text-base">
            Un accompagnateur VAE va étudier votre dossier avec attention
          </h3>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-slate-500">
        Laissez-nous vos coordonnées : notre équipe de formateurs — Aurore, Karine, Pamela et
        Jean — examine chaque demande personnellement, et vous recontacte pour faire le point
        ensemble sur votre projet — sans jargon, sans pression.
      </p>

      {/* Bloc de réassurance placé juste avant les champs personnels — le
          moment où la friction/hésitation est la plus forte, donc le plus
          utile pour rassurer avant de demander un numéro et un email. */}
      <div className="space-y-2 rounded-2xl bg-brand-50/60 p-3.5 text-xs text-brand-900">
        <div className="flex items-center gap-2.5">
          <IconBadge name="check" />
          <span>100% gratuit et sans engagement</span>
        </div>
        <div className="flex items-center gap-2.5">
          <IconBadge name="chat" />
          <span>Une vraie personne étudie votre dossier, pas un algorithme</span>
        </div>
        <div className="flex items-center gap-2.5">
          <IconBadge name="phone" />
          <span>Réponse sous 24h, pour en discuter ensemble en toute simplicité</span>
        </div>
      </div>

      {/* Piège à robots : invisible et exclu du tabulateur pour les
          humains (souris, clavier, lecteur d'écran), mais présent
          dans le DOM pour les robots qui remplissent tous les champs
          sans distinction — voir app/api/prediagnostic/route.ts. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="site-web">Ne pas remplir ce champ</label>
        <input
          id="site-web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register("honeypot")}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <Field
          label="Prénom"
          error={shouldShowError(prenom.field.value, errors.prenom?.message) ? errors.prenom?.message : undefined}
        >
          <div className="relative">
            <input
              ref={(el) => {
                prenom.field.ref(el);
                prenomRef.current = el;
              }}
              name={prenom.field.name}
              value={prenom.field.value ?? ""}
              onChange={prenom.field.onChange}
              onBlur={prenom.field.onBlur}
              placeholder="Votre prénom"
              className="form-input pr-9"
            />
            {prenomValid && <ValidMark />}
          </div>
        </Field>
        <Field
          label="Nom"
          error={shouldShowError(nom.field.value, errors.nom?.message) ? errors.nom?.message : undefined}
        >
          <div className="relative">
            <input
              ref={nom.field.ref}
              name={nom.field.name}
              value={nom.field.value ?? ""}
              onChange={nom.field.onChange}
              onBlur={nom.field.onBlur}
              placeholder="Votre nom"
              className="form-input pr-9"
            />
            {nomValid && <ValidMark />}
          </div>
        </Field>
      </div>

      <Field
        label="Téléphone"
        error={
          shouldShowError(telephone.field.value, errors.telephone?.message) ? errors.telephone?.message : undefined
        }
      >
        <div className="relative">
          <input
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            name={telephone.field.name}
            ref={telephone.field.ref}
            value={telephone.field.value ?? ""}
            onChange={(e) => telephone.field.onChange(formatPhoneNumber(e.target.value))}
            // La normalisation (+33 / 0033 → 06…) se fait ici, à la sortie du
            // champ, et surtout pas pendant la frappe : réécrire la valeur en
            // cours de saisie replace le curseur au début et corrompt le
            // numéro. Voir lib/phone.ts.
            onBlur={() => {
              telephone.field.onChange(normalizePhoneOnBlur(telephone.field.value ?? ""));
              telephone.field.onBlur();
            }}
            placeholder="06 XX XX XX XX"
            className="form-input pr-9"
          />
          {phoneValid && <ValidMark />}
        </div>
      </Field>

      <Field
        label="Email"
        error={shouldShowError(email.field.value, errors.email?.message) ? errors.email?.message : undefined}
      >
        <div className="relative">
          <input
            type="email"
            autoComplete="email"
            name={email.field.name}
            ref={email.field.ref}
            value={email.field.value ?? ""}
            onChange={email.field.onChange}
            onBlur={email.field.onBlur}
            placeholder="votre@email.fr"
            className="form-input pr-9"
          />
          {emailValid && <ValidMark />}
        </div>
        {emailSuggestion && (
          <button
            type="button"
            onClick={() => email.field.onChange(emailSuggestion)}
            className="mt-1.5 text-xs font-medium text-brand-600 transition hover:text-brand-700 hover:underline"
          >
            Vouliez-vous dire {emailSuggestion} ?
          </button>
        )}
      </Field>

      {/* Consentement passif plutôt qu'une case à cocher séparée : l'envoi du
          formulaire n'a qu'une seule finalité (être recontacté au sujet de
          cette demande), donc l'action elle-même vaut acceptation explicite —
          voir la note dans lib/prediagnostic-schema.ts. */}
      <p className="text-xs leading-relaxed text-slate-500">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté·e par VAESocial au
        sujet de votre demande. Vos données restent confidentielles — voir notre{" "}
        <Link href="/confidentialite" className="underline hover:text-slate-700">
          politique de confidentialité
        </Link>
        .
      </p>

      {submitState === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submitState === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl hover:shadow-accent-600/35 active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
      >
        {submitState === "loading" ? (
          <>
            <Spinner className="h-4 w-4" />
            Envoi en cours...
          </>
        ) : (
          <>
            Vérifier mon éligibilité gratuitement
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}
