"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Permet à PrediagnosticForm (profondément imbriqué dans chaque page) de
// signaler au Header (dans le layout racine) que l'utilisateur est en train
// de répondre au questionnaire, pour masquer le CTA "Savoir si je suis
// éligible" — redondant et distrayant une fois qu'on est déjà dans le
// formulaire. Une seule instance de formulaire par page, donc pas de
// conflit entre plusieurs formulaires actifs en même temps.

type FormProgressContextValue = {
  isFormActive: boolean;
  setFormActive: (active: boolean) => void;
};

const FormProgressContext = createContext<FormProgressContextValue | null>(null);

export function FormProgressProvider({ children }: { children: ReactNode }) {
  const [isFormActive, setFormActive] = useState(false);
  return (
    <FormProgressContext.Provider value={{ isFormActive, setFormActive }}>
      {children}
    </FormProgressContext.Provider>
  );
}

export function useFormProgress() {
  const ctx = useContext(FormProgressContext);
  // Filet de sécurité : si jamais un composant consomme ce hook hors du
  // Provider, on retombe sur "formulaire inactif" plutôt que de planter.
  if (!ctx) return { isFormActive: false, setFormActive: () => {} };
  return ctx;
}
