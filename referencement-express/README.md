# Référencement Express

Un petit système pour publier **moins, mais juste**, et le faire savoir vite.
Il ne promet pas de position dans Google : il garantit qu'aucun article ne part
sans sources officielles, sans liens internes, sans titre/description corrects, et
qu'il est signalé aux moteurs le jour de sa mise en ligne.

## La boucle (une fois par semaine, ~1 h)

1. **Choisir** le prochain sujet dans `file-sujets.json` (statut `a_rediger`, priorité 1 d'abord).
2. **Mesurer** la requête avant d'écrire (Planificateur de mots clés ou Search Console). On n'écrit pas sur un volume supposé.
3. **Lire les sources officielles** listées dans le sujet (Légifrance, BO Solidarités, France VAE, France Compétences, DREETS). Noter chaque fait avec sa source. Un fait sans source ne rentre pas.
4. **Rédiger** l'article dans `lib/blog-data.ts` (modèle plus bas). Ton sobre, exemples du social, aucune promesse.
5. **Contrôler** : `npm run seo`. Zéro erreur exigé ; chaque alerte se lit et se traite ou se justifie.
6. **Mettre en ligne** comme d'habitude (`npm run build`, puis déploiement).
7. **Signaler** : `npm run seo:index -- --send` (Bing, Yandex… voir limites), puis dans Search Console : « Inspection de l'URL » → « Demander une indexation » pour les 2-3 pages clés.
8. **Mesurer** à J+14 puis J+30 : impressions, clics, position moyenne dans Search Console. Un article sans impression à J+30 se réécrit ou se fusionne, il ne se double pas.

## Les commandes

| Commande | Rôle |
| --- | --- |
| `npm run seo` | Audit : titres ≤ 60, descriptions 110–160, sources, liens internes, FAQ, fraîcheur. Code de sortie 1 s'il y a une erreur. |
| `npm run seo -- --strict` | Idem, mais les alertes font aussi échouer (à brancher avant un déploiement). |
| `npm run seo:index` | Simulation : liste les URL récentes qui seraient envoyées. |
| `npm run seo:index -- --send` | Envoi réel à IndexNow, **après** la mise en ligne. `--all` pour tout le site, `--days=14` pour la fenêtre. |

Node 22.6 minimum (déjà le cas). L'indice affiché par `npm run seo` est un repère
interne de progression, **pas** une note de Google.

## Modèle d'article

Dans le tableau `BLOG_ARTICLES` de `lib/blog-data.ts` :

```ts
{
  slug: "mon-sujet",
  title: "Titre lisible de l'article",
  metaTitle: "Titre Google, 60 caractères maximum",
  metaDescription: "110 à 160 caractères, sans promesse.",
  excerpt: "Deux phrases pour la liste du blog.",
  category: "Réglementation", // ou Méthode, Financement, Parcours
  datePublished: "2026-10-19",
  readingTime: "5 min",
  diplomes: ["dees"],          // pilote les liens internes automatiques
  verifiedOn: "2026-10-19",    // date de vérification des faits
  sources: [
    { label: "Intitulé exact du texte", url: "https://…" }, // lien obligatoire
  ],
  content: [ /* p, h2, ul, callout, … et au moins un bloc cta */ ],
}
```

Les liens « Pour aller plus loin », la section « Nos guides » des pages
diplômes, le sitemap et le JSON-LD (Article, fil d'Ariane, citations) se
mettent à jour tout seuls.

## Règles d'or

- **Sources officielles uniquement** pour tout ce qui touche à un texte, une date, un montant : Légifrance, Bulletin officiel Solidarités, France VAE, France Compétences, DREETS, service-public.gouv.fr. Un blog ou un organisme de formation n'est pas une source.
- **Rien d'inventé** : pas de chiffre sans source, pas de témoignage fictif, pas de « garanti », « n° 1 », « 100 % ». Le script bloque une partie de ces formulations.
- **Pas de contenu produit en masse.** Un article = des faits vérifiés + l'expérience du terrain que seul le secteur apporte. Publier peu, vérifier tout : c'est la seule différence durable avec les sites qui recopient.
- **Ne jamais écrire d'avis juridique ou financier** : exposer les textes, renvoyer vers le certificateur ou la DREETS pour la règle qui s'applique à un dossier.
- **Fraîcheur** : un article dont les faits ont plus de 180 jours est signalé. Quand un texte change, on met à jour l'article, on change `verifiedOn` et `dateModified`, puis on relance `npm run seo:index -- --send`.
- **Stratégie du 9 août** (voir le commentaire en tête de `blog-data.ts`) : les requêtes génériques sur la VAE rapportent le trafic, les pages diplômes qualifient. Les exemples restent du social.

## Check-list du lundi (10 minutes, Search Console)

1. Performances → 28 derniers jours → requêtes contenant « dees » : impressions, clics, position.
2. Pages → repérer les pages « Découverte, actuellement non indexée » ou « Explorée, actuellement non indexée » et noter lesquelles.
3. Les 3 requêtes à fort volume sans clic (position 8–20) deviennent la priorité de la semaine : réécrire le titre ou compléter l'article.
4. Mettre à jour `file-sujets.json` (statuts) et lancer `npm run seo`.

## Limites à connaître

- **IndexNow ne concerne pas Google.** Il prévient Bing, Yandex, Naver, Seznam. Pour Google : sitemap (en place) et demande d'indexation manuelle dans Search Console.
- **Aucun outil ne garantit une position.** Le système réduit les erreurs évitables et accélère la découverte ; le classement dépend de la concurrence et du temps.
- **Le résultat de `npm run build` se vérifie sur ton poste** : l'audit contrôle les contenus, pas le rendu.
- Les résultats rich (FAQ) sont aujourd'hui réservés par Google à certains sites (institutionnels, santé) : les FAQ restent utiles aux lecteurs, mais n'attends pas d'affichage enrichi.

## Fichiers

- `file-sujets.json` : la file d'attente des sujets, avec sources à lire et statut.
- `../scripts/referencement-express.mts` : l'audit.
- `../scripts/indexnow.mts` : le signalement aux moteurs.
- `../public/<clé>.txt` : clé IndexNow (publique par conception, ne pas supprimer).
