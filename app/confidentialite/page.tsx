import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  // noindex tant que la durée de conservation et l'identité de l'éditeur ne sont
  // pas confirmées — à retirer une fois ces informations complétées.
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Politique de confidentialité
        </h1>

        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          ⚠️ Le formulaire de prédiagnostic collecte des données personnelles : cette page doit
          être en ligne avant le lancement public du site. Une donnée reste à confirmer avec vous
          (repérable ci-dessous) — le reste peut servir de base mais gagnerait à être relu par un
          professionnel du droit.
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Responsable du traitement</h2>
            <p className="mt-2">
              {siteConfig.name} est responsable du traitement des données collectées sur ce site.
              Contact :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Données collectées</h2>
            <p className="mt-2">
              Via le formulaire de prédiagnostic : prénom, nom, téléphone, email, ainsi que vos
              réponses sur le diplôme visé, votre situation professionnelle, votre secteur
              d&apos;activité et votre expérience.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Finalité du traitement</h2>
            <p className="mt-2">
              Ces données sont utilisées exclusivement pour étudier votre éligibilité à un
              accompagnement VAE et vous recontacter à ce sujet. Elles ne sont ni revendues ni
              transmises à des tiers à des fins commerciales.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Durée de conservation</h2>
            <p className="mt-2">
              <span className="rounded bg-amber-50 px-1 text-amber-800">
                [durée de conservation de vos leads — à nous confirmer, par exemple 3 ans à
                compter du dernier contact]
              </span>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Cookies et mesure d&apos;audience</h2>
            <p className="mt-2">
              Ce site peut utiliser des outils de mesure d&apos;audience et de suivi des
              conversions (Google Tag Manager, Google Analytics, Google Ads) pour comprendre la
              fréquentation du site et l&apos;efficacité de nos campagnes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;opposition et de suppression de vos données. Pour l&apos;exercer, écrivez-nous
              à{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
