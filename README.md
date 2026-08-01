# VAESocial

Site de génération de leads VAE pour le secteur social et médico-social.

Stack : Next.js (App Router) + TypeScript + Tailwind CSS.

## État actuel du projet

Cette première version contient la **structure technique**, une **page d'accueil provisoire**, et un **formulaire de prédiagnostic** au design abouti :

- Layout global (header, footer, SEO de base, JSON-LD Organization, emplacement Google Tag Manager)
- Page d'accueil provisoire (`app/page.tsx`) — textes à personnaliser
- Formulaire de prédiagnostic multi-étapes (`/prediagnostic`) : une question par étape, cartes de réponse larges, avance automatique au clic, transitions fluides, barre de progression, envoi des leads par email
- Sitemap et robots.txt générés automatiquement

**À venir** (prochaines étapes) : pages diplômes (DEES, DEAES, DEEJE, DEME...) avec contenu SEO complet et différencié par diplôme, blog.

## Démarrer en local

```bash
npm install
cp .env.example .env
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Variables d'environnement (`.env`)

Voir `.env.example` pour la liste complète. Les plus importantes :

- `NEXT_PUBLIC_SITE_URL` — URL finale du site (utilisée pour le SEO, le sitemap, les balises Open Graph)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` — pour l'envoi des leads par email
- `LEADS_RECIPIENT_EMAIL` — adresse qui reçoit les leads du formulaire de prédiagnostic
- `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_PRIVATE_KEY`, `GOOGLE_SHEETS_SPREADSHEET_ID` — ajout automatique de chaque lead dans un Google Sheet (compte de service, indépendant de l'email)
- `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` — tracking (facultatif, rien n'est chargé si non renseigné)

Email et Google Sheets sont deux canaux indépendants : si l'un des deux n'est pas configuré ou échoue, l'autre continue de fonctionner normalement. Si les deux échouent, le formulaire affiche une erreur à l'utilisateur au lieu d'un faux succès.

## Le formulaire de prédiagnostic

Design original inspiré (UX uniquement, pas d'identité visuelle copiée) de bonnes pratiques du secteur : carte centrale, une question par étape, grandes réponses tactiles, avance automatique à la sélection (pas de clic "Continuer" superflu sur les questions à choix), barre de progression, transitions douces, bandeau de réassurance (gratuit / sans engagement / réponse sous 24h). Palette teal + corail propre à VAESocial, sans reprise de logo, textes, couleurs ni images d'un site tiers.

## Formulaire de prédiagnostic → email → CRM/BDD plus tard

Le formulaire (`components/PrediagnosticForm.tsx`) appelle l'API route `app/api/prediagnostic/route.ts`, qui valide les données (zod) et appelle **une seule fonction** : `sendPrediagnosticLead()` dans `lib/email.ts`.

Pour brancher une base de données ou un CRM plus tard, il suffit d'ajouter l'appel correspondant dans cette fonction (`saveLeadToDatabase()`, `pushLeadToCrm()`, etc.) — le formulaire et l'API route n'ont pas besoin d'être modifiés.

## Déploiement sur Hostinger

Ce projet cible une offre d'hébergement Hostinger **compatible Node.js** (hébergement web avec support Node.js, ou VPS). Étapes générales :

1. Dans le panneau Hostinger, créer/configurer une application Node.js et pointer vers ce projet (ou déployer via Git).
2. Définir les variables d'environnement du `.env` dans la configuration Node.js de Hostinger.
3. Commande de build : `npm run build`
4. Commande de démarrage : `npm run start`
5. Hostinger assigne généralement le port via la variable d'environnement `PORT` — Next.js la respecte automatiquement (`next start` écoute sur `process.env.PORT` si définie).

## Structure du projet

```
app/                    Routes (App Router)
  layout.tsx            Layout global, SEO, GTM
  page.tsx              Page d'accueil (provisoire)
  prediagnostic/         Formulaire de prédiagnostic
  api/prediagnostic/     API route (validation + envoi email)
  sitemap.ts / robots.ts SEO technique
components/             Composants réutilisables (Header, Footer, formulaire...)
lib/                    Config du site, schéma de validation, envoi d'email
```

## Note sur la vérification du build

Le build (`npm install` + `npm run build`) n'a pas pu être exécuté dans cet environnement de génération (accès réseau restreint vers le registre npm). Merci de lancer `npm install && npm run build` en local pour confirmer avant mise en production — le code a été écrit et relu avec soin, mais cette étape reste la vérification de référence.
