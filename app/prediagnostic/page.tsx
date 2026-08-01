import type { Metadata } from "next";
import Container from "@/components/Container";
import PrediagnosticForm from "@/components/PrediagnosticForm";

export const metadata: Metadata = {
  title: "Prédiagnostic VAE gratuit",
  description:
    "Vérifiez gratuitement votre éligibilité à la VAE dans le secteur social et médico-social (DEES, DEAES, DEEJE, DEME...) en quelques minutes.",
};

export default function PrediagnosticPage() {
  return (
    <section className="bg-brand-50/60 py-12 sm:py-16">
      <Container>
        {/* Le titre principal, la progression et le récap des garanties sont
            portés par la carte du formulaire elle-même (PrediagnosticForm). */}
        <PrediagnosticForm />
      </Container>
    </section>
  );
}
