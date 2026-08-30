"use client";

import { useState } from "react";

/**
 * Écran de relance SMS — partie interactive.
 *
 * POURQUOI CETTE PAGE EXISTE (30/08/2026).
 * Arthur voulait un bouton « Copier » directement dans l'email de lead. C'est
 * impossible : les clients mail bloquent tout JavaScript, un lien d'email ne
 * peut qu'ouvrir une adresse. Cette page est la réponse — l'email pointe vers
 * une adresse `https://` (que AUCUNE messagerie ne filtre, contrairement aux
 * liens `sms:` que Gmail supprime), et ici le JavaScript fonctionne.
 *
 * Deux gestes possibles, un seul tap chacun :
 *   - « Ouvrir Messages » : lance la conversation avec le texte pré-rempli ;
 *   - « Copier le texte » : met le message dans le presse-papier.
 *
 * Pas de copie automatique au chargement : Safari iOS exige un geste de
 * l'utilisateur pour accéder au presse-papier. Promettre une copie auto qui
 * échoue silencieusement serait pire que de demander un tap.
 */
export default function RelanceClient({
  message,
  smsHref,
  prenom,
  telephoneAffiche,
}: {
  message: string;
  smsHref: string | null;
  prenom: string;
  telephoneAffiche: string;
}) {
  const [copie, setCopie] = useState(false);

  async function copier() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
      } else {
        // Repli pour les navigateurs anciens sans API presse-papier.
        const zone = document.createElement("textarea");
        zone.value = message;
        zone.setAttribute("readonly", "");
        zone.style.position = "fixed";
        zone.style.opacity = "0";
        document.body.appendChild(zone);
        zone.select();
        document.execCommand("copy");
        document.body.removeChild(zone);
      }
      setCopie(true);
      setTimeout(() => setCopie(false), 2500);
    } catch {
      // Si la copie échoue (permission refusée), le texte reste affiché
      // ci-dessous et reste sélectionnable à la main : jamais de cul-de-sac.
      setCopie(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-10">
      <p className="text-sm font-medium text-brand-600">Relance SMS</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">{prenom}</h1>
      <p className="mt-1 text-slate-500">{telephoneAffiche}</p>

      <div className="mt-6 space-y-3">
        {smsHref && (
          <a
            href={smsHref}
            className="block w-full rounded-xl bg-brand-600 px-5 py-4 text-center text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Ouvrir Messages
          </a>
        )}
        <button
          type="button"
          onClick={copier}
          className="block w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-center text-base font-semibold text-slate-800 transition hover:border-slate-400"
        >
          {copie ? "Copié ✓" : "Copier le texte"}
        </button>
      </div>

      <p className="mt-8 mb-2 text-sm text-slate-500">Message envoyé</p>
      <p className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-800">
        {message}
      </p>
    </div>
  );
}
