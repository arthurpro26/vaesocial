import { z } from "zod";

export const prediagnosticSchema = z.object({
  diplomeVise: z.string().min(1, "Sélectionnez un diplôme."),
  situationActuelle: z.string().min(1, "Sélectionnez votre situation actuelle."),
  anneesExperience: z.string().min(1, "Sélectionnez votre nombre d'années d'expérience."),
  secteur: z.string().min(1, "Sélectionnez votre secteur d'activité."),
  prenom: z.string().min(2, "Prénom trop court."),
  nom: z.string().min(2, "Nom trop court."),
  email: z.string().email("Adresse email invalide."),
  telephone: z
    .string()
    .min(10, "Numéro de téléphone invalide.")
    .max(20, "Numéro de téléphone invalide."),
  messageLibre: z.string().optional(),
  consentement: z.literal(true, {
    errorMap: () => ({ message: "Merci d'accepter d'être recontacté." }),
  }),
});

export type PrediagnosticFormValues = z.infer<typeof prediagnosticSchema>;
