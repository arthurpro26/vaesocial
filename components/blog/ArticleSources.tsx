import type { BlogArticle } from "@/lib/blog-data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Sources officielles d'un article, avec liens, et date de vérification des faits.
// Tout est lu dans lib/blog-data.ts (champs `sources` et `verifiedOn`) : aucun
// paragraphe à écrire à la main. Pour le lecteur comme pour Google, citer ses
// sources (Légifrance, France Compétences, ministère) est un signal de fiabilité,
// et c'est exactement ce que la plupart des sites concurrents ne font pas.
export default function ArticleSources({ article }: { article: BlogArticle }) {
  if (!article.sources || article.sources.length === 0) return null;

  return (
    <section aria-labelledby="sources-title" className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h2 id="sources-title" className="text-base font-bold text-slate-900 sm:text-lg">
        Sources officielles
      </h2>
      {article.verifiedOn && (
        <p className="mt-1 text-sm text-slate-500">
          Faits vérifiés le{" "}
          <time dateTime={article.verifiedOn}>{formatDate(article.verifiedOn)}</time>. Les textes peuvent
          évoluer : confirmez les points qui engagent votre dossier auprès de votre rectorat ou de votre DREETS.
        </p>
      )}
      <ul className="mt-3 space-y-2">
        {article.sources.map((source) => (
          <li key={source.label} className="text-sm leading-relaxed text-slate-700 sm:text-base">
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-300 underline-offset-4 hover:text-brand-800 hover:decoration-brand-600"
              >
                {source.label}
              </a>
            ) : (
              source.label
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
