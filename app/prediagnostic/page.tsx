import type { Metadata } from "next";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";

export const metadata: Metadata = {
  title: "Prédiagnostic VAE gratuit",
  description:
    "Vérifiez gratuitement votre éligibilité à la VAE dans le secteur social et médico-social (DEES, DEAES, DEEJE, DEME...) en quelques minutes.",
  alternates: { canonical: "/prediagnostic" },
};

export default function PrediagnosticPage() {
  return (
    <section className="bg-brand-50/60 py-12 sm:py-16">
      <Container>
        {/* H1 sr-only : la page n'affichait auparavant aucun H1 (seul le H2
            "Testez votre éligibilité à la VAE" du composant de formulaire
            était présent), ce qui cassait la hiérarchie de titres pour le SEO
            et l'accessibilité. Rendu invisible pour ne rien changer au design
            existant — le H2 du formulaire reste la première chose visible. */}
        <h1 className="sr-only">Prédiagnostic VAE gratuit : vérifiez votre éligibilité</h1>
        {/* Le titre visuel, la progression et le récap des garanties sont
            portés par la carte du formulaire elle-même (PrediagnosticForm). */}
        <PrediagnosticForm />
      </Container>
    </section>
  );
}
