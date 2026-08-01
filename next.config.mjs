/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Déploiement ciblé : Hostinger, offre hébergement Node.js (support natif de Next.js
  // en mode serveur — pas besoin d'export statique). Build avec `npm run build`,
  // démarrage avec `npm run start` (voir README pour la configuration du port).
};

export default nextConfig;
