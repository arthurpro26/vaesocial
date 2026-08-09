"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Barre d'accès permanent au prédiagnostic, affichée en bas d'écran pendant la
 * lecture d'un article.
 *
 * POURQUOI — demande explicite du client (9 août 2026) : « rajouter un lien
 * d'accès facile pour les articles de blog pour simplifier l'outil qui permet
 * d'accéder au formulaire ». Un article fait 7 minutes de lecture ; jusqu'ici le
 * seul chemin vers le formulaire était un bloc CTA au fil du texte. Si le lecteur
 * se décide au milieu d'un paragraphe, il devait faire défiler pour retrouver un
 * lien. Cette barre supprime ce frottement — 78 % du trafic est mobile, où
 * remonter dans une page longue est particulièrement pénible.
 *
 * TROIS PRÉCAUTIONS, parce que ce composant peut nuire s'il est mal fait :
 *
 * 1. Aucun décalage de mise en page (CLS). La barre est en `fixed`, donc hors du
 *    flux : elle ne pousse aucun contenu. Le score Core Web Vitals du site est de
 *    100/100 sur mobile, on ne l'abîme pas.
 * 2. Elle n'apparaît qu'après 600 px de défilement. Sur le haut de page, le titre
 *    et l'introduction doivent respirer : une barre immédiate ferait publicitaire
 *    et ferait fuir un lecteur venu chercher de l'information.
 * 3. Elle est masquée à l'impression et laisse une marge basse au contenu (voir la
 *    classe `pb-24` sur l'article) pour ne jamais recouvrir la fin du texte.
 */
export default function ArticleStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // `passive: true` : indique au navigateur qu'on n'appellera jamais
    // preventDefault, ce qui lui permet de ne pas bloquer le défilement pendant
    // l'exécution du gestionnaire. Sans ça, on introduirait des à-coups au scroll
    // sur mobile — exactement ce qu'on cherche à éviter.
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 backdrop-blur transition-transform duration-300 print:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      // Masqué des lecteurs d'écran quand il est hors champ : sinon un lecteur
      // d'écran annoncerait un bouton invisible en permanence.
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-3">
        <p className="hidden text-sm font-medium text-slate-700 sm:block">
          Votre expérience suffit-elle&nbsp;? Réponse en 3&nbsp;minutes.
        </p>
        <Link
          href="/prediagnostic"
          tabIndex={visible ? 0 : -1}
          className="w-full rounded-full bg-accent-600 px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-accent-700 sm:w-auto"
        >
          Tester mon éligibilité — gratuit
        </Link>
      </div>
    </div>
  );
}
