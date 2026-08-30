import type { Metadata } from "next";
import RelanceClient from "@/components/RelanceClient";
import { buildRelanceSms, buildSmsHref } from "@/lib/relance-sms";
import { formatPhoneFr, normalizePhoneFr } from "@/lib/phone";

// Page privée d'usage interne : elle n'est destinée qu'à Arthur, depuis
// l'email de lead. Jamais indexée, jamais dans le sitemap (qui est une liste
// manuelle — voir app/sitemap.ts), et elle ne contient aucun contenu public.
export const metadata: Metadata = {
  title: "Relance SMS — VAESocial",
  robots: { index: false, follow: false, nocache: true },
};

// Le message dépend entièrement des paramètres d'URL : aucune génération
// statique possible, et rien à mettre en cache.
export const dynamic = "force-dynamic";

export default async function RelancePage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string; d?: string; t?: string }>;
}) {
  const { p = "", d = "", t = "" } = await searchParams;

  // On ne fait confiance à rien de ce qui arrive par l'URL. Le numéro doit
  // être un numéro français exploitable, sinon on n'affiche pas de bouton
  // d'envoi : mieux vaut un écran honnête qu'un lien qui ne mène nulle part.
  const national = normalizePhoneFr(t);
  const prenom = p.trim().slice(0, 60);

  if (!national || !prenom) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-10">
        <h1 className="text-xl font-bold text-slate-900">Lien incomplet</h1>
        <p className="mt-2 leading-relaxed text-slate-600">
          Ce lien ne contient pas de prénom ou de numéro exploitable. Revenez à l&apos;email du
          lead : le texte du SMS y est aussi affiché en clair, prêt à être copié.
        </p>
      </div>
    );
  }

  const telephone = formatPhoneFr(national);
  const lead = { prenom, diplomeVise: d.trim().slice(0, 20), telephone };

  return (
    <RelanceClient
      message={buildRelanceSms(lead)}
      smsHref={buildSmsHref(lead)}
      prenom={prenom}
      telephoneAffiche={telephone}
    />
  );
}
