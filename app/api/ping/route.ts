// TEMPORAIRE — route de contrôle minimale, sans rapport avec SMTP/Sheets.
// Sert uniquement à vérifier si l'app Next.js déployée sur Hostinger sert
// bien les routes API récemment ajoutées, ou si /api/debug-env est bloquée
// spécifiquement (ex. règle de sécurité/WAF sur des noms comme "debug"/"env").
// Réponse texte brute volontairement, pour éliminer toute variable JSON.
export async function GET() {
  return new Response("pong", { status: 200, headers: { "Content-Type": "text/plain" } });
}
