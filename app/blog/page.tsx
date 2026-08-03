import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { getSortedArticles } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog VAE",
  description:
    "Financement, réglementation, réforme des diplômes : toute l'actualité de la VAE dans le secteur social et médico-social, expliquée simplement.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: "Blog VAE | VAESocial",
    description:
      "Financement, réglementation, réforme des diplômes : toute l'actualité de la VAE dans le secteur social et médico-social, expliquée simplement.",
    url: "/blog",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const articles = getSortedArticles();

  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white py-12 sm:py-20">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl">
            L&apos;actualité de la VAE, expliquée simplement
          </h1>
          <p className="mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg">
            Financement, réglementation, réforme des diplômes — on décrypte ce qui change,
            sans jargon, pour le secteur social et médico-social.
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:mt-14 sm:space-y-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-700 sm:text-sm">
                <span className="rounded-full bg-brand-50 px-3 py-1">{article.category}</span>
                <span className="text-slate-400">·</span>
                <time dateTime={article.datePublished} className="text-slate-500">
                  {formatDate(article.datePublished)}
                </time>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{article.readingTime}</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {article.excerpt}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-700">
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
