import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  // noindex tant que le contenu réel n'est pas renseigné — à retirer une fois complété.
  robots: { index: false, follow: true },
};

export default function CGVPage() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Conditions générales de vente
        </h1>

        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          ⚠️ Page à compléter avant mise en ligne (tarifs, modalités de paiement, conditions
          d&apos;annulation, droit de rétractation...). Contenu à faire rédiger ou valider par un
          professionnel du droit — ce squelette ne constitue pas des CGV valides en l&apos;état.
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Prestations concernées</h2>
            <p className="mt-2">
              Accompagnement individuel à la Validation des Acquis de l&apos;Expérience pour les
              diplômes DEES, DEAES, DEEJE et DEME, incluant l&apos;aide à la constitution des
              livrets 1 et 2 et la préparation à l&apos;oral devant le jury.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Tarifs et paiement</h2>
            <p className="mt-2">
              L&apos;accompagnement est facturé entre 1 800 € et 3 500 € selon le nombre
              d&apos;heures nécessaires (15 à 20 h), finançable via le CPF et les autres
              dispositifs présentés sur le site.{" "}
              <span className="rounded bg-amber-50 px-1 text-amber-800">
                [modalités précises de paiement et d&apos;échelonnement — à confirmer]
              </span>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Droit de rétractation</h2>
            <p className="mt-2">
              <span className="rounded bg-amber-50 px-1 text-amber-800">
                [délai et conditions de rétractation applicables — à confirmer]
              </span>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">{siteConfig.email}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
