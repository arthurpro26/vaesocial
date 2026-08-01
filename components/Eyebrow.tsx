export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm">
      {children}
    </p>
  );
}
