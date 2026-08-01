import { clsx } from "clsx";
import type { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  // Si `className` définit déjà sa propre largeur max (ex. "max-w-3xl"), on
  // n'ajoute pas "max-w-6xl" : les deux classes ciblent la même propriété CSS
  // et, avec Tailwind, celle définie en dernier dans la feuille de style
  // l'emporte quel que soit l'ordre dans l'attribut className — pas l'ordre
  // "logique" qu'on pourrait attendre. Les inclure toutes les deux créerait
  // un conflit silencieux où la largeur voulue ne s'applique jamais. Même
  // logique pour le padding horizontal : le Hero a besoin d'un peu plus de
  // largeur utile sur mobile (texte moins étroit), donc il passe son propre
  // "px-3 sm:px-6 lg:px-8" — sm/lg restent identiques au défaut, donc tablette
  // et desktop ne changent jamais, seul le mobile est concerné.
  const hasCustomMaxWidth = className?.includes("max-w-");
  const hasCustomPadding = className?.includes("px-");

  return (
    <div
      className={clsx(
        "mx-auto w-full",
        !hasCustomPadding && "px-4 sm:px-6 lg:px-8",
        !hasCustomMaxWidth && "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}
