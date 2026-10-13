// Filet tricolore : touche de marque discrète, JAMAIS un habillage officiel (pas de Marianne, pas de « RF »,
// pas de bleu de l'État). Voir l'exception expliquée dans app/globals.css. Trois modes :
//  - par défaut : petit filet, le blanc est cerné d'un liseré pour rester visible sur fond blanc ;
//  - `band` : bande pleine largeur ; le blanc devient gris très clair (un vrai blanc se confondrait avec la page
//    et le filet semblerait coupé en deux) ;
//  - `onDark` : sur un fond bleu foncé, le bleu passe à une teinte plus claire pour rester visible.
// Le bleu vient de `--trico-blue` (app/globals.css) et non de `brand-*` : il reste bleu sur la page rose du DEAP.
export default function Trico({
  className = "",
  band = false,
  onDark = false,
}: {
  className?: string;
  band?: boolean;
  onDark?: boolean;
}) {
  return (
    <span aria-hidden className={`flex overflow-hidden ${band ? "" : "rounded-full ring-1 ring-black/10"} ${className}`}>
      <span className={`flex-1 ${onDark ? "bg-[rgb(var(--trico-blue-light))]" : "bg-[rgb(var(--trico-blue))]"}`} />
      <span className={`flex-1 ${band ? "bg-slate-200" : "bg-white"}`} />
      <span className="flex-1 bg-[#d8323c]" />
    </span>
  );
}
