/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Déploiement ciblé : Hostinger, offre hébergement Node.js (support natif de Next.js
  // en mode serveur — pas besoin d'export statique). Build avec `npm run build`,
  // démarrage avec `npm run start` (voir README pour la configuration du port).

  // Filet de sécurité : un bug de compatibilité entre eslint@10 et la version
  // d'eslint-plugin-react embarquée dans eslint-config-next@16.2.12 fait
  // planter `next lint`/`eslint .` avec une erreur interne (voir package.json,
  // eslint a été repointé sur ^9.15.0 pour corriger ça). En attendant que ce
  // soit vérifié avec un `npm install` réel, on ne bloque pas le build de
  // production sur le lint — `npm run lint` reste disponible séparément
  // comme garde-fou qualité en dev/CI.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // En-têtes de sécurité de base, appliqués à toutes les routes.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Fichiers _next/static : le nom de fichier change à chaque build
        // (hash de contenu), donc un cache très long côté CDN est sûr et
        // souhaitable — un nouveau build ne peut jamais entrer en conflit
        // avec ces URLs.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Pages HTML (tout sauf assets statiques et API) : on force le CDN
        // Hostinger à revalider à chaque requête plutôt que de garder une
        // copie en cache jusqu'à un an (comportement par défaut de Next.js
        // pour les pages statiques). Cause du bug du 2026-08-01 : après un
        // déploiement, le CDN continuait de servir une page HTML en cache
        // pointant vers un fichier CSS du build précédent, supprimé par le
        // nouveau build → page 404 sur ce CSS → rendu totalement sans style.
        // Le contenu HTML reste très léger à régénérer (page statique), donc
        // le coût de revalidation systématique est négligeable comparé au
        // risque de resservir une page cassée après chaque mise en prod.
        source: "/((?!_next/static|api).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
