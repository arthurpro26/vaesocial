"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

// Bouton d'action collé en bas de l'écran, sur téléphone uniquement (sm:hidden).
// Il apparaît une fois le premier écran passé et se retire dès que le bloc final
// d'appel à l'action ou le pied de page est visible, pour ne jamais masquer
// du contenu ni doubler un bouton déjà à l'écran.
// Aucune donnée de formulaire ici : c'est un simple lien vers la page de prédiagnostic.
export default function StickyCta({
  href,
  label,
  hideWhenVisible,
}: {
  href: string;
  label: string;
  /** Sélecteurs CSS des éléments qui, une fois visibles, font disparaître le bouton. */
  hideWhenVisible: string[];
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let blocked = false;
    const update = () => setShow(window.scrollY > 480 && !blocked);

    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      blocked = visible.size > 0;
      update();
    });

    for (const selector of hideWhenVisible) {
      const el = document.querySelector(selector);
      if (el) observer.observe(el);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [hideWhenVisible]);

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 pt-6 transition-[opacity,transform,visibility] duration-300 sm:hidden",
        "bg-gradient-to-t from-white/95 via-white/70 to-transparent",
        // `invisible` en plus de l'opacité : le bouton caché (poussé sous le bord
        // de l'écran) ne doit plus pouvoir teinter la barre de Safari (20/10/2026).
        show ? "visible translate-y-0 opacity-100" : "invisible translate-y-full opacity-0"
      )}
      aria-hidden={!show}
    >
      <Link
        href={href}
        tabIndex={show ? 0 : -1}
        className={clsx(
          "flex w-full items-center justify-center rounded-full bg-accent-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent-600/30 transition active:scale-[0.98]",
          show && "pointer-events-auto"
        )}
      >
        {label}
      </Link>
    </div>
  );
}
