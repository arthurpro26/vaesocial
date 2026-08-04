import { z } from "zod";
import { isValidPhoneFr } from "./phone";

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
  // missions, pas sur une durée) — refonte du formulaire du 2026-08-01. Pas
  // de longueur minimale au-delà de "non vide" : une réponse courte mais
  // pertinente ne doit jamais être bloquée — retour utilisateur du 2026-08-01,
  // l'objectif est le taux de complétion, pas le filtrage.
  activiteQuotidienne: z.string().min(1, "Décrivez brièvement votre activité."),
  // Ancienneté dans l'activité décrite ci-dessus. Réintroduite le 2026-08-04
  // à côté du texte libre (et non à sa place) : la nature des missions dit si
  // le candidat correspond au référentiel, la durée dit s'il est légalement
  // recevable (un an minimum). Les deux sont nécessaires, aucune ne remplace
  // l'autre. Un lead « Moins d'un an » n'est pas bloqué — il est signalé côté
  // conseiller, voir app/api/prediagnostic/route.ts.
  ancienneteActivite: z.string().min(1, "Indiquez depuis combien de temps."),
  // Champ texte libre (autocomplétion suggérée selon le diplôme visé, mais
  // saisie manuelle toujours possible) — remplace l'ancienne question à choix
  // radio "secteur", jugée trop rigide / peu engageante.
  structure: z.string().min(1, "Indiquez votre structure d'exercice."),
  prenom: z.string().min(2, "Prénom trop court."),
  nom: z.string().min(2, "Nom trop court."),
  email: z.string().email("Adresse email invalide."),
  // Validation par FORMAT et non par longueur. L'ancienne règle (10 à 20
  // caractères) acceptait « 33 62 64 00 13 » — un numéro tronqué et
  // injoignable — et affichait une coche verte. Voir lib/phone.ts pour le
  // détail de l'incident du 4 août 2026.
  telephone: z
    .string()
    .refine(isValidPhoneFr, "Numéro invalide. Exemple : 06 12 34 56 78."),
  // Piège à robots (honeypot) : champ invisible pour les humains via CSS,
  // que les robots de spam remplissent souvent aveuglément. Toujours vide en
  // usage normal — voir PrediagnosticForm.tsx et app/api/prediagnostic/route.ts.
  honeypot: z.string().optional(),
});

export type PrediagnosticFormValues = z.infer<typeof prediagnosticSchema>;
