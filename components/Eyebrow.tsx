import Trico from "./Trico";

// Petit titre de section : un mini-filet tricolore au-dessus du texte (signature de marque, voir Trico).
export default function Eyebrow({ children, left = false }: { children: React.ReactNode; left?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 ${left ? "items-start" : "items-center"}`}>
      <Trico className="h-1.5 w-12" />
      <p className="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">{children}</p>
    </div>
  );
}
