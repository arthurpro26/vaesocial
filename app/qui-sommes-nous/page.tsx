import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteConfig } from "@/lib/site-config";
import { DIPLOMES } from "@/lib/site-data";

// Page de confiance (E-E-A-T) : dit qui est derrière le site. Tout ce qui est écrit
// ici vient de Yoni (12/10/2026) : 8 à 15 personnes par jour, visio de 40 minutes avant
// toute inscription, équipe recrutée dans le social. Aucune photo : choix de Yoni.
// Ne rien ajouter ici sans qu'il l'ait confirmé (pas de chiffre, titre ou diplôme inventé).
export const metadata: Metadata = {
  title: "Qui sommes-nous ? Une équipe issue du social",
  description:
    "VAESocial accompagne les professionnels du social vers leur diplôme par la VAE. Une équipe issue du secteur, un échange de 40 minutes avant toute inscription.",
  alternates: { canonical: "/qui-sommes-nous" },
};

export default function QuiSommesNousPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Qui sommes-nous ?",
    url: `${siteConfig.url}/qui-sommes-nous`,
    about: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
        ]}
      />

      <section className="bg-brand-50/60 py-12 sm:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>Qui sommes-nous ?</Eyebrow>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Une équipe issue du social, au service des professionnels du social
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            VAESocial accompagne les professionnels du secteur social et médico-social qui
            souhaitent obtenir leur diplôme d&apos;État par la Validation des Acquis de
            l&apos;Expérience (VAE).
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
              <dt className="text-sm font-medium text-slate-500">Chaque jour</dt>
              <dd className="mt-1 text-2xl font-bold text-brand-700 sm:text-3xl">
                8 à 15 personnes
              </dd>
              <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                aidées à comprendre ce qu&apos;est une VAE.
              </dd>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
              <dt className="text-sm font-medium text-slate-500">Avant toute inscription</dt>
              <dd className="mt-1 text-2xl font-bold text-brand-700 sm:text-3xl">
                40 minutes en visio
              </dd>
              <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                avec un·e accompagnateur·rice de l&apos;équipe.
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Ce que nous faisons</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Nous aidons chaque personne à comprendre ce qu&apos;est une VAE, et si elle
              correspond à sa situation. Notre connaissance du secteur nous permet de repérer
              quel diplôme correspond à une expérience : éducateur spécialisé, moniteur-éducateur,
              accompagnant éducatif et social, assistant de service social, et les autres
              diplômes du social et du médico-social.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {DIPLOMES.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/${d.slug}`}
                    className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
                  >
                    VAE {d.nom} ({d.sigle})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Un échange avant toute inscription
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Nous n&apos;inscrivons personne à un accompagnement sans un échange préalable en
              visio de 40 minutes avec un·e accompagnateur·rice. Cet échange sert à vérifier
              deux choses : que la VAE est pertinente dans votre situation, et que vous vous
              sentez à l&apos;aise avec la démarche.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Une équipe qui connaît le terrain
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Nous recrutons nos accompagnateurs et accompagnatrices parmi des personnes issues
              du secteur social. Elles connaissent le quotidien des éducateurs spécialisés, des
              internats, des assistantes sociales : c&apos;est ce qui rend les échanges concrets,
              et pas théoriques.
            </p>
            <figure className="mt-6 rounded-2xl border-l-4 border-brand-500 bg-brand-50/60 p-5 sm:p-6">
              <blockquote className="leading-relaxed text-slate-700">
                Je suis moi-même issu du social : j&apos;ai grandi en famille d&apos;accueil. Le
                quotidien des éducateurs spécialisés, des internats et des assistantes sociales,
                je le connais vraiment.
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-slate-900">Arthur</figcaption>
            </figure>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ce que nous ne faisons pas
            </h2>
            <ul className="mt-4 space-y-3 leading-relaxed text-slate-600">
              <li>
                Nous ne délivrons pas le diplôme : c&apos;est le jury de VAE qui décide, au vu de
                votre dossier et de votre entretien.
              </li>
              <li>
                Nous n&apos;écrivons pas votre dossier à votre place : il décrit votre expérience,
                c&apos;est à vous de le rédiger. Nous vous aidons à le structurer et à le préparer.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <div className="rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 p-6 text-center text-white shadow-xl shadow-brand-900/20 sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">Parlons de votre situation</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-brand-50 sm:text-base">
              Un premier échange gratuit et sans engagement, pour voir si la VAE est faite pour
              vous.
            </p>
            <Link
              href="/prediagnostic"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:px-8"
            >
              Demander mon prédiagnostic gratuit
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
