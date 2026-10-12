import Link from "next/link";
import { DIPLOMES } from "@/lib/site-data";
import { getRelatedArticles, getRelatedDiplomes, type BlogArticle } from "@/lib/blog-data";

// Bloc « Pour aller plus loin » en bas de chaque article : liens vers la page du
// (des) diplôme(s) concerné(s) puis vers d'autres articles. Entièrement calculé
// depuis lib/blog-data.ts (champs `diplomes` et `category`) : un nouvel article
// est relié automatiquement, sans toucher au JSX. Donne aussi à Google des liens
// internes avec un texte d'ancre explicite vers les pages qui comptent (/dees…).
export default function RelatedLinks({ article }: { article: BlogArticle }) {
  const diplomes = getRelatedDiplomes(article)
    .map((slug) => DIPLOMES.find((d) => d.slug === slug))
    .filter((d): d is (typeof DIPLOMES)[number] => Boolean(d));
  const articles = getRelatedArticles(article, 3);

  if (diplomes.length === 0 && articles.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-title"
      className="mt-12 border-t border-slate-200 pt-8 sm:mt-14"
    >
      <h2 id="related-title" className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
        Pour aller plus loin
      </h2>

      {diplomes.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-500">Le diplôme concerné</p>
          <ul className="mt-2 space-y-1.5">
            {diplomes.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${d.slug}`}
                  className="text-base font-semibold text-brand-700 hover:text-brand-800"
                >
                  VAE {d.sigle} : {d.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {articles.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-500">À lire aussi</p>
          <ul className="mt-2 space-y-1.5">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="text-base text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-brand-800 hover:decoration-brand-600"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
