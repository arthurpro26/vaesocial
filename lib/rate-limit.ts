// Rate-limit basique en mémoire pour limiter le spam/abus sur l'API de leads.
// Fonctionne pour un hébergement Node.js classique à process persistant
// (type Hostinger) : la fenêtre glissante est stockée en RAM le temps que le
// process tourne. Limite connue : ne protège pas contre un abus réparti sur
// plusieurs instances/process (pas de store partagé) — si le trafic grandit
// au point de justifier plusieurs instances, prévoir un store centralisé
// (Redis/Upstash) à la place de ce Map en mémoire.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // 5 envois par IP toutes les 10 minutes

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Purge occasionnelle pour éviter une fuite mémoire lente si beaucoup
  // d'IP différentes appellent l'API sur la durée de vie du process.
  if (hits.size > 5000) {
    for (const [k, timestamps] of hits) {
      if (timestamps.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_REQUESTS;
}
