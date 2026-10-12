import Link from "next/link";
import Container from "@/components/Container";
import { getArticlesForDiplome } from "@/lib/blog-data";
import type { DiplomeSlug } from "@/lib/site-data";

// Liens internes de la page d'un diplôme vers les guides du blog. Volontairement
// placé tout en bas de la page, APRÈS le CTA final : le parcours de conversion
// (hero → formulaire → CTA) reste intact pour le trafic Google Ads, et Google
// voit quand même des liens contextuels vers les articles. Liste calculée depuis
// lib/blog-data.ts (champ `diplomes`) : rien à maintenir à la main.
export default function GuidesSection({ diplome, sigle }: { diplome: DiplomeSlug; sigle: string }) {
  const articles = getArticlesForDiplome(diplome, 3);
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="guides-title" className="border-t border-slate-100 bg-white py-10 sm:py-14">
      <Container className="max-w-3xl">
        <h2 id="guides-title" className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          Nos guides pour préparer votre VAE {sigle}
        </h2>
        <ul className="mt-4 space-y-2">
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
        <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800">
          Tous les guides →
        </Link>
      </Container>
    </section>
  );
}
