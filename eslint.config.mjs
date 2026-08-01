import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Next.js 16 a retiré la commande `next lint` : ESLint s'utilise désormais
// directement (`eslint .`), avec le format de configuration "flat config".
// Ce fichier remplace l'ancien .eslintrc.json (à supprimer).
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"]),
]);

export default eslintConfig;
