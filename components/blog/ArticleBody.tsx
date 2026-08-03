import Link from "next/link";
import type { ArticleBlock } from "@/lib/blog-data";

// Rendu des blocs de contenu d'un article (lib/blog-data.ts). Un seul
// renderer pour tous les articles, sur le même principe que FaqAccordion /
// StatsBar : le contenu vient des données, jamais du JSX dupliqué par article.
export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-5 sm:space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="!mt-10 text-xl font-bold tracking-tight text-slate-900 sm:!mt-12 sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base text-slate-700 sm:text-lg">
                    <span className="mt-1.5 text-brand-600" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 sm:p-5 sm:text-base"
              >
                <span className="mr-1.5" aria-hidden>
                  {block.icon}
                </span>
                {block.text}
              </div>
            );
          case "cta":
            return (
              <div
                key={i}
                className="!mt-10 rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 p-6 text-center text-white shadow-xl shadow-brand-900/20 sm:!mt-12 sm:p-10"
              >
                <h3 className="text-lg font-bold sm:text-2xl">{block.titre}</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-50 sm:mt-3 sm:text-base">
                  {block.texte}
                </p>
                <Link
                  href="/prediagnostic"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:mt-6 sm:px-8"
                >
                  {block.cta}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
