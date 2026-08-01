import { z } from "zod";

// Pas de champ "consentement" par case à cocher séparée : l'action d'envoyer
// ce formulaire (dont l'unique objet est "être recontacté au sujet de ma
// demande") vaut consentement explicite pour cette finalité précise — la
// case à cocher ajoutait de la friction sans être requise pour ce cas d'usage.
// Une notice de confidentialité reste affichée à côté du bouton d'envoi
// (voir PrediagnosticForm.tsx). Décision produit du 2026-08-01, à faire
// confirmer par un professionnel du droit si le formulaire évolue vers une
// finalité marketing (newsletter, partage à des tiers, etc.).
export const prediagnosticSchema = z.object({
  diplomeVise: z.string().min(1, "Sélectionnez un diplôme."),
  situationActuelle: z.string().min(1, "Sélectionnez votre situation actuelle."),
  // Remplace l'ancienne question fermée "années d'expérience" : un texte
  // libre sur l'activité réelle du candidat est bien plus utile pour évaluer
  // l'éligibilité VAE (le référentiel du diplôme se juge sur la nature des
  // missions, pas sur une durée) — refonte du formulaire du 2026-08-01.
  activiteQuotidienne: z
    .string()
    .min(25, "Décrivez votre activité en quelques phrases (25 caractères minimum)."),
  // Champ texte libre (autocomplétion suggérée selon le diplôme visé, mais
  // saisie manuelle toujours possible) — remplace l'ancienne question à choix
  // radio "secteur", jugée trop rigide / peu engageante.
  structure: z.string().min(1, "Indiquez votre structure d'exercice."),
  prenom: z.string().min(2, "Prénom trop court."),
  email: z.string().email("Adresse email invalide."),
  telephone: z
    .string()
    .min(10, "Numéro de téléphone invalide.")
    .max(20, "Numéro de téléphone invalide."),
  // Piège à robots (honeypot) : champ invisible pour les humains via CSS,
  // que les robots de spam remplissent souvent aveuglément. Toujours vide en
  // usage normal — voir PrediagnosticForm.tsx et app/api/prediagnostic/route.ts.
  honeypot: z.string().optional(),
});

export type PrediagnosticFormValues = z.infer<typeof prediagnosticSchema>;
