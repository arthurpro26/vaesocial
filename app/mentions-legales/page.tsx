import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Mentions légales</h1>

        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          ⚠️ Cette page reprend vos informations officielles (registre des entreprises) et des
          formulations standards — une relecture par un professionnel du droit reste recommandée
          avant mise en ligne définitive.
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Éditeur du site</h2>
            <p className="mt-2">
              Le site {siteConfig.name} ({siteConfig.url}) est édité par YL KADIMA, société par
              actions simplifiée (SAS) au capital social de 1 000 €, immatriculée au Registre
              du Commerce et des Sociétés sous le numéro SIREN 939 443 867 (SIRET 939 443 867
              00014), dont le siège social est situé 34 avenue du 8 Mai 1945, 95200 Sarcelles.
              Numéro de TVA intracommunautaire : FR08 939443867.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Directeur de la publication</h2>
            <p className="mt-2">Yoni Lellouche, Président de YL KADIMA.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Hébergement</h2>
            <p className="mt-2">
              Le site est hébergé par Hostinger International Ltd, 61 Lordou Vironos Street, 6023
              Larnaca, Chypre —{" "}
              <a
                href="https://www.hostinger.fr"
                className="text-brand-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hostinger.fr
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, structure,
              charte graphique) est protégé par le droit d&apos;auteur et reste la propriété de{" "}
              {siteConfig.name}. Toute reproduction ou réutilisation, totale ou partielle, sans
              autorisation écrite préalable est interdite.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Responsabilité</h2>
            <p className="mt-2">
              Les informations publiées sur ce site sont fournies à titre indicatif. Nous mettons
              tout en œuvre pour en assurer l&apos;exactitude, sans pouvoir garantir
              l&apos;absence totale d&apos;erreur. Tout engagement (inscription, tarifs, calendrier
              d&apos;accompagnement) fait l&apos;objet d&apos;un devis et d&apos;une confirmation
              écrite préalable.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Données personnelles</h2>
            <p className="mt-2">
              Les données transmises via le formulaire de prédiagnostic sont traitées
              conformément au RGPD, dans le cadre strict de votre demande d&apos;accompagnement.
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
              données. Pour en savoir plus, consultez notre{" "}
              <Link href="/confidentialite" className="font-semibold text-brand-700 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              <a href={`mailto:${siteConfig.email}`} className="text-brand-700 hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
