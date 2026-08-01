import { clsx } from "clsx";

// Logo original VAESocial : un badge en dégradé teal (identité de marque)
// représentant deux silhouettes qui se soutiennent — le symbole de l'entraide
// et de l'accompagnement humain, au cœur du secteur social. `id` doit être
// unique si le logo apparaît plusieurs fois sur la même page (header +
// footer), pour éviter un id de <linearGradient> dupliqué dans le DOM.
export default function Logo({
  variant = "color",
  id = "logo",
  className,
}: {
  variant?: "color" | "light";
  id?: string;
  className?: string;
}) {
  const gradientId = `${id}-gradient`;

  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill={`url(#${gradientId})`} />
        {/* Silhouette arrière — soutenue */}
        <circle cx="13" cy="13.5" r="3" fill="white" fillOpacity="0.55" />
        <path
          d="M7.5 26C7.5 19.8 9.8 17.5 13 17.5C16.2 17.5 18.5 19.8 18.5 26Z"
          fill="white"
          fillOpacity="0.55"
        />
        {/* Silhouette avant — qui accompagne */}
        <circle cx="20.5" cy="12.5" r="3.4" fill="white" />
        <path
          d="M14.5 27C14.5 20.3 17 17.7 20.5 17.7C24 17.7 26.5 20.3 26.5 27Z"
          fill="white"
        />
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55a08f" />
            <stop offset="1" stopColor="#21564d" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={clsx(
          "font-logo text-xl font-extrabold leading-none tracking-tight",
          variant === "light" ? "text-white" : "text-slate-900"
        )}
      >
        <span className={variant === "light" ? "text-brand-200" : "text-brand-700"}>VAE</span>
        Social
      </span>
    </span>
  );
}
