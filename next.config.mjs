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
    ];
  },
};

export default nextConfig;
