"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { prediagnosticSchema, type PrediagnosticFormValues } from "@/lib/prediagnostic-schema";
import { siteConfig } from "@/lib/site-config";

// --- Données des étapes à choix unique (cartes larges, sélection = avance automatique) ---

const DIPLOME_OPTIONS = [
  { value: "DEES", label: "DEES", helper: "Éducateur spécialisé · Bac+3" },
  { value: "DEAES", label: "DEAES", helper: "Accompagnant éducatif et social · CAP/BEP" },
  { value: "DEEJE", label: "DEEJE", helper: "Éducateur de jeunes enfants · Bac+3" },
  { value: "DEME", label: "DEME", helper: "Moniteur-éducateur · Bac" },
  { value: "Autre / je ne sais pas encore", label: "Autre / je ne sais pas encore" },
];

const SITUATION_OPTIONS = [
  { value: "Salarié(e) secteur social/médico-social", label: "Salarié(e) dans le secteur social ou médico-social" },
  { value: "Salarié(e) autre secteur", label: "Salarié(e) dans un autre secteur" },
  { value: "Demandeur d'emploi", label: "Demandeur d'emploi" },
  { value: "Indépendant(e)", label: "Indépendant(e)" },
  { value: "Autre", label: "Autre" },
];

const SECTEUR_OPTIONS = [
  { value: "Protection de l'enfance", label: "Protection de l'enfance" },
  { value: "Handicap", label: "Handicap" },
  { value: "Personnes âgées", label: "Personnes âgées" },
  { value: "Petite enfance", label: "Petite enfance" },
  { value: "Insertion / précarité", label: "Insertion / précarité" },
  { value: "Autre", label: "Autre" },
];

const EXPERIENCE_OPTIONS = [
  { value: "Moins de 1 an", label: "Moins d'1 an" },
  { value: "1 à 3 ans", label: "Entre 1 et 3 ans" },
  { value: "3 à 5 ans", label: "Entre 3 et 5 ans" },
  { value: "Plus de 5 ans", label: "Plus de 5 ans" },
];

const ALL_STEPS = [
  { key: "diplomeVise", label: "Votre objectif" },
  { key: "situationActuelle", label: "Votre statut" },
  { key: "secteur", label: "Votre secteur" },
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

  // Étapes effectives : on retire "diplomeVise" si le diplôme est déjà connu, puis on
  // renumérote l'eyebrow "Étape X/Y" dynamiquement.
  const steps = (presetDiplome
    ? ALL_STEPS.filter((s) => s.key !== "diplomeVise")
    : ALL_STEPS
  ).map((s, i, arr) => ({ ...s, eyebrow: `Étape ${i + 1}/${arr.length} — ${s.label}` }));
  const totalSteps = steps.length;

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

  async function selectAndAdvance(field: "diplomeVise" | "situationActuelle" | "secteur" | "anneesExperience", value: string, onChange: (v: string) => void) {
    onChange(value);
    // petit délai pour laisser voir l'état "sélectionné" avant de passer à l'étape suivante
    setTimeout(async () => {
      const valid = await trigger(field);
      if (valid) goNext();
    }, 220);
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

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const progressPercent = ((step + 1) / totalSteps) * 100;

  if (submitState === "success") {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-2xl shadow-brand-900/15 step-transition">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl">
          🎉
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Demande bien reçue !</h3>
        <p className="mt-3 text-slate-600">
          Merci {getValues("prenom") || ""} ! Un conseiller VAESocial revient vers vous très
          prochainement pour étudier votre éligibilité.
        </p>
        <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
          Besoin d&apos;une réponse plus rapide ? Écrivez-nous directement à{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-brand-900/15">
      {/* En-tête dégradé avec titre constant + barre de progression */}
      <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 pb-4 pt-5 text-white sm:px-7">
        <p className="text-xs font-medium text-brand-50/90">{steps[step].eyebrow}</p>
        <h2 className="mt-1 text-lg font-bold sm:text-xl">Testez votre éligibilité à la VAE</h2>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/25">
          <div
            className="h-full rounded-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 sm:px-7">
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
              question="Quelle est votre situation actuelle ?"
              name="situationActuelle"
              control={control}
              options={SITUATION_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.situationActuelle?.message}
            />
          )}

          {steps[step].key === "secteur" && (
            <ChoiceStep
              question="Dans quel secteur exercez-vous ?"
              name="secteur"
              control={control}
              options={SECTEUR_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.secteur?.message}
            />
          )}

          {steps[step].key === "anneesExperience" && (
            <ChoiceStep
              question="Depuis combien de temps exercez-vous dans ce secteur ?"
              name="anneesExperience"
              control={control}
              options={EXPERIENCE_OPTIONS}
              onSelect={selectAndAdvance}
              error={errors.anneesExperience?.message}
            />
          )}

          {steps[step].key === "coordonnees" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900">
                <span aria-hidden>📞</span>
                <h3 className="text-base font-semibold">
                  Un conseiller vous recontacte gratuitement pour faire le point
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" {...register("consentement")} className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span>
                  J&apos;accepte d&apos;être recontacté(e) par VAESocial au sujet de ma demande de
                  prédiagnostic.
                </span>
              </label>
              {errors.consentement && (
                <p className="text-sm text-red-600">{errors.consentement.message}</p>
              )}

              {submitState === "error" && (
                <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  Une erreur est survenue lors de l&apos;envoi. Merci de réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitState === "loading"}
                className="w-full rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition hover:bg-accent-600 disabled:opacity-60"
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
            className="mt-6 text-sm font-semibold text-slate-400 hover:text-slate-600"
          >
            ← Retour
          </button>
        )}
      </form>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 border-t border-brand-100 bg-brand-50/60 px-6 py-3 text-xs font-medium text-brand-800 sm:px-7">
        <span>✓ 100% gratuit</span>
        <span>✓ Sans engagement</span>
        <span>✓ Réponse sous 24h</span>
      </div>
    </div>
  );
}

function ChoiceStep({
  question,
  name,
  control,
  options,
  onSelect,
  error,
}: {
  question: string;
  name: "diplomeVise" | "situationActuelle" | "secteur" | "anneesExperience";
  control: ReturnType<typeof useForm<PrediagnosticFormValues>>["control"];
  options: { value: string; label: string; helper?: string }[];
  onSelect: (field: typeof name, value: string, onChange: (v: string) => void) => void;
  error?: string;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold text-slate-900">{question}</h3>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="mt-4 space-y-2.5">
            {options.map((opt) => {
              const selected = field.value === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onSelect(name, opt.value, field.onChange)}
                  className={clsx(
                    "flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition",
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
                      "ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                      selected ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"
                    )}
                  >
                    {selected && (
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
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
