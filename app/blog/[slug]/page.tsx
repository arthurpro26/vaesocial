import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleStickyCta from "@/components/blog/ArticleStickyCta";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import { BLOG_ARTICLES, getArticleBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

// Page article dédiée (/blog/[slug]) — même pattern que app/[diplome]/page.tsx :
// une seule route dynamique, pilotée par lib/blog-data.ts, generateStaticParams
// pour un export statique de chaque article au build.
export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

function getArticleOrNotFound(slug: string) {
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleOrNotFound(slug);
  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
      publishedTime: article.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleOrNotFound(slug);

  return (
    <>
      <ArticleJsonLd article={article} />
      {/* pb-24 : réserve la hauteur de la barre d'accès fixe (ArticleStickyCta)
          pour qu'elle ne recouvre jamais la fin de l'article. */}
      <article className="py-10 pb-24 sm:py-16 sm:pb-28">
        <Container className="max-w-2xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            ← Retour au blog
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-700 sm:text-sm">
            <span className="rounded-full bg-brand-50 px-3 py-1">{article.category}</span>
            <span className="text-slate-400">·</span>
            <time dateTime={article.datePublished} className="text-slate-500">
              {formatDate(article.datePublished)}
            </time>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">{article.readingTime}</span>
          </div>

          <h1 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-4 sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-8 sm:mt-10">
            <ArticleBody blocks={article.content} />
          </div>
        </Container>
      </article>
      <ArticleStickyCta />
    </>
  );
}
