"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { prediagnosticSchema, type PrediagnosticFormValues } from "@/lib/prediagnostic-schema";
import { useFormProgress } from "@/lib/form-progress-context";
import { trackConversion } from "@/lib/tracking";

// --- Données des étapes à choix unique (cartes larges, sélection = avance automatique) ---

const DIPLOME_OPTIONS = [
  { value: "DEES", label: "DEES", helper: "Éducateur spécialisé · Bac+3" },
  { value: "DEAES", label: "DEAES", helper: "Accompagnant éducatif et social · CAP/BEP" },
  { value: "DEEJE", label: "DEEJE", helper: "Éducateur de jeunes enfants · Bac+3" },
  { value: "DEME", label: "DEME", helper: "Moniteur-éducateur · Bac" },
  { value: "Autre / je ne sais pas encore", label: "Autre / je ne sais pas encore" },
];

// Étape 2 repensée pour être plus engageante et plus utile à la conversion :
// chaque option explique tout de suite en quoi elle change concrètement le
// financement ou le parcours (au lieu d'une simple case administrative), en
// s'appuyant uniquement sur des dispositifs déjà présentés ailleurs sur le
// site (CPF, OPCO Santé, France Travail...) — aucune donnée inventée.
const SITUATION_OPTIONS = [
  {
    value: "Salarié(e) secteur social/médico-social",
    label: "Salarié(e) dans le secteur social ou médico-social",
    helper: "💳 Financement via votre OPCO Santé souvent possible",
  },
  {
    value: "Salarié(e) autre secteur",
    label: "Salarié(e) dans un autre secteur (avec une expérience en lien avec le diplôme visé)",
    helper: "ℹ️ Une expérience en rapport avec le diplôme est nécessaire pour être éligible à la VAE.",
  },
  {
    value: "Demandeur d'emploi",
    label: "Demandeur d'emploi",
    helper: "🏛️ Un accompagnement finançable via France Travail",
  },
  {
    value: "Indépendant(e) ou bénévole",
    label: "Indépendant(e) ou bénévole",
    helper: "🤝 Votre expérience non-salariée compte aussi pour la VAE",
  },
  { value: "Autre", label: "Autre situation" },
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
// Liste de secours si le diplôme n'est pas encore déterminé ("Autre / je ne
// sais pas encore") : toutes les suggestions réunies, sans doublons.
const ALL_STRUCTURES = Array.from(new Set(Object.values(STRUCTURE_SUGGESTIONS).flat()));

const EXPERIENCE_OPTIONS = [
  { value: "Moins de 1 an", label: "Moins d'1 an" },
  { value: "1 à 3 ans", label: "Entre 1 et 3 ans" },
  { value: "3 à 5 ans", label: "Entre 3 et 5 ans" },
  { value: "Plus de 5 ans", label: "Plus de 5 ans" },
];

const ALL_STEPS = [
  { key: "diplomeVise", label: "Votre objectif" },
  { key: "situationActuelle", label: "Votre statut" },
  { key: "structure", label: "Votre structure" },
  { key: "anneesExperience", label: "Votre expérience" },
  { key: "coordonnees", label: "Vos coordonnées" },
] as const;

type SubmitState = "idle" | "loading" | "success" | "error";

export default function PrediagnosticForm({
  presetDiplome,
}: {
  /** Quand fourni (pages diplôme dédiées), l'étape "Quel diplôme ?" est sautée et préremplie. */
  presetDiplome?: "DEES" | "DEAES" | "DEEJE" | "DEME";
}) {
  const [step, setStep] = useState(0);
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
    formState: { errors, isSubmitting },
  } = useForm<PrediagnosticFormValues>({
    resolver: zodResolver(prediagnosticSchema),
    mode: "onBlur",
    defaultValues: presetDiplome ? { diplomeVise: presetDiplome } : undefined,
  });

  function goNext() {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function selectAndAdvance(field: "diplomeVise" | "situationActuelle" | "anneesExperience", value: string, onChange: (v: string) => void) {
    onChange(value);
    // petit délai pour laisser voir l'état "sélectionné" avant de passer à l'étape suivante
    setTimeout(async () => {
      const valid = await trigger(field);
      if (valid) goNext();
    }, 220);
  }

  // Étape "structure" (texte libre + suggestions) : pas de sélection discrète
  // comme les ChoiceStep, donc une fonction d'avance dédiée, réutilisée à la
  // fois par le clic sur une suggestion et par le bouton "Continuer"/Entrée.
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

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const progressPercent = ((step + 1) / totalSteps) * 100;

  if (submitState === "success") {
    const prenom = getValues("prenom");
    return (
      <div className="mx-auto w-full max-w-md rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-2xl shadow-brand-900/15 sm:p-8 step-transition">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl">
          🎉
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {prenom ? `Merci ${prenom}, votre demande est bien enregistrée !` : "Votre demande est bien enregistrée !"}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Un expert VAE spécialisé dans le secteur social va maintenant analyser votre parcours
          avec attention.
        </p>

        <div className="mt-5 space-y-3 rounded-2xl bg-brand-50/60 p-4 text-left text-sm text-brand-900">
          <div className="flex items-start gap-2.5">
            <span aria-hidden>📞</span>
            <span>Vous serez recontacté·e très rapidement</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span aria-hidden>🔍</span>
            <span>Nous étudierons votre éligibilité ensemble, en toute transparence</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span aria-hidden>💬</span>
            <span>Vous pourrez poser toutes les questions que vous avez en tête</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">En toute simplicité, et sans engagement. 😊</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-brand-900/15">
      {/* En-tête dégradé avec titre constant + barre de progression */}
      <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-4 pb-2.5 pt-3.5 text-white sm:px-7 sm:pb-4 sm:pt-5">
        <p className="text-[11px] font-medium text-brand-50/90 sm:text-xs">{steps[step].eyebrow}</p>
        <h2 className="mt-0.5 text-base font-bold sm:mt-1 sm:text-xl">Testez votre éligibilité à la VAE</h2>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3">
          <div
            className="h-full rounded-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3 sm:px-7 sm:py-6">
        <div key={step} className="step-transition">
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
              question="Où en êtes-vous dans votre parcours professionnel ?"
              subtitle="Cette information nous permet de cibler tout de suite les solutions de financement adaptées à votre profil."
              name="situationActuelle"
              control={control}
              options={SITUATION_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.situationActuelle?.message}
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

          {steps[step].key === "anneesExperience" && (
            <ChoiceStep
              question="Depuis combien de temps exercez-vous dans cette structure ?"
              name="anneesExperience"
              control={control}
              options={EXPERIENCE_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.anneesExperience?.message}
            />
          )}

          {steps[step].key === "coordonnees" && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-slate-900">
                <span aria-hidden>📞</span>
                <h3 className="text-sm font-semibold sm:text-base">
                  Un conseiller vous recontacte gratuitement pour faire le point
                </h3>
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
                <Field label="Prénom" error={errors.prenom?.message}>
                  <input {...register("prenom")} placeholder="Votre prénom" className="form-input" />
                </Field>
                <Field label="Nom" error={errors.nom?.message}>
                  <input {...register("nom")} placeholder="Votre nom" className="form-input" />
                </Field>
              </div>
              <Field label="Téléphone" error={errors.telephone?.message}>
                <input
                  type="tel"
                  {...register("telephone")}
                  placeholder="06 XX XX XX XX"
                  className="form-input"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="votre@email.fr"
                  className="form-input"
                />
              </Field>
              <Field label="Un message à ajouter ? (facultatif)">
                <textarea {...register("messageLibre")} rows={3} className="form-input" />
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
                className="w-full rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition hover:bg-accent-700 disabled:opacity-60"
              >
                {submitState === "loading" ? "Envoi..." : "Être recontacté·e gratuitement"}
              </button>
            </div>
          )}
        </div>

        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="-ml-2 mt-4 rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700"
          >
            ← Retour
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
  name: "diplomeVise" | "situationActuelle" | "anneesExperience";
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  options: { value: string; label: string; helper?: string }[];
  onSelect: (field: typeof name, value: string, onChange: (v: string) => void) => void;
  error?: string;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{question}</h3>
      {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
            {options.map((opt) => {
              const selected = field.value === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onSelect(name, opt.value, field.onChange)}
                  className={clsx(
                    "flex min-h-11 w-full items-center justify-between rounded-2xl border-2 px-3.5 py-2 text-left transition sm:px-4 sm:py-3",
                    selected
                      ? "border-brand-600 bg-brand-50 shadow-sm"
                      : "border-slate-200 hover:border-brand-300 hover:bg-slate-50"
                  )}
                >
                  <span>
                    <span className="block text-sm font-medium text-slate-800">{opt.label}</span>
                    {opt.helper && (
                      <span className="mt-0.5 block text-xs text-slate-500">{opt.helper}</span>
                    )}
                  </span>
                  <span
                    className={clsx(
                      "ml-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 sm:ml-4 sm:h-5 sm:w-5",
                      selected ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"
                    )}
                  >
                    {selected && (
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-2.5 w-2.5 sm:h-3 sm:w-3">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414l2.792 2.792 6.793-6.793a1 1 0 011.415 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      />
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
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
  const suggestions = STRUCTURE_SUGGESTIONS[diplomeVise ?? ""] ?? ALL_STRUCTURES;

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        Dans quelle structure exercez-vous principalement ?
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        Tapez librement ou choisissez une suggestion. Votre structure n&apos;y figure pas ? Indiquez-la
        simplement, c&apos;est très bien aussi.
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
        className="mt-4 w-full rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition hover:bg-accent-700"
      >
        Continuer →
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
