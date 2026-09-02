"use client";

import { type ReactNode, useMemo, useState } from "react";
import type { LeadSheet } from "@/lib/google-sheets";

/**
 * Console de relance — partie interactive. Voir app/relance/liste/page.tsx.
 *
 * Trois principes de conception, dans cet ordre :
 *   1. On ne peut pas envoyer par accident. Rien n'est coché au départ, et le
 *      bouton d'envoi passe par un écran de confirmation qui nomme les
 *      personnes concernées.
 *   2. On ne peut pas envoyer deux fois. Les lignes déjà relancées sont
 *      grisées ici — et refusées côté serveur, qui relit le Sheet.
 *   3. On voit le message avant de l'envoyer, tel qu'il partira.
 */

const MAX_PAR_ENVOI = 20;

type Apercu = { sujet: string; texte: string; prenom: string } | null;

type Reponse = {
  envoyes?: { ligne: number; prenom: string; email: string }[];
  ignores?: { ligne: number; prenom: string; raison: string }[];
  echecs?: { ligne: number; prenom: string; message: string }[];
  erreur?: string;
};

type Filtre = "marques" | "tous" | "faits";

export default function RelanceListeClient({
  leads,
  cle,
  apercu,
}: {
  leads: LeadSheet[];
  cle: string;
  apercu: Apercu;
}) {
  const relancable = (l: LeadSheet) => Boolean(l.email) && !l.relanceLe && l.marque;

  // Les leads marqués dans le Sheet sont cochés d'entrée : Arthur a déjà fait
  // son choix là-bas, l'écran ne fait que l'exécuter.
  const [selection, setSelection] = useState<Set<number>>(
    () => new Set(leads.filter(relancable).slice(0, MAX_PAR_ENVOI).map((l) => l.ligne))
  );
  const [filtre, setFiltre] = useState<Filtre>("marques");
  const [confirmation, setConfirmation] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [reponse, setReponse] = useState<Reponse | null>(null);
  const [voirMessage, setVoirMessage] = useState(false);

  const stats = useMemo(
    () => ({
      total: leads.length,
      relancables: leads.filter(relancable).length,
      faits: leads.filter((l) => l.relanceLe).length,
      sansEmail: leads.filter((l) => l.marque && !l.email).length,
    }),
    [leads]
  );

  const visibles = useMemo(() => {
    if (filtre === "tous") return leads;
    if (filtre === "faits") return leads.filter((l) => l.relanceLe);
    return leads.filter((l) => l.marque && !l.relanceLe);
  }, [leads, filtre]);

  function basculer(ligne: number) {
    setReponse(null);
    setSelection((precedent) => {
      const suivant = new Set(precedent);
      if (suivant.has(ligne)) suivant.delete(ligne);
      else suivant.add(ligne);
      return suivant;
    });
  }

  /** Recoche tous les marqués, dans la limite d'un envoi. */
  function selectionnerLot() {
    setReponse(null);
    setSelection(new Set(leads.filter(relancable).slice(0, MAX_PAR_ENVOI).map((l) => l.ligne)));
  }

  const choisis = leads.filter((l) => selection.has(l.ligne) && relancable(l));

  async function envoyer() {
    setEnvoiEnCours(true);
    setConfirmation(false);
    setReponse(null);
    try {
      const r = await fetch("/api/relance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cle, lignes: choisis.map((l) => l.ligne) }),
      });
      const data: Reponse = await r.json();
      setReponse(data);
      if (r.ok) setSelection(new Set());
    } catch {
      setReponse({ erreur: "La connexion a échoué. Vérifiez le résultat dans le Sheet avant de relancer." });
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Console de relance</h1>
      <p className="mt-2 leading-relaxed text-slate-600">
        Marquez la colonne <strong>Mail</strong> de votre Google Sheet, en face des leads à
        relancer — n&apos;importe quel signe suffit. Ils apparaissent ici, déjà cochés.
        Vous vérifiez, vous envoyez : {MAX_PAR_ENVOI} au maximum à la fois.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Chiffre valeur={stats.total} libelle="leads au total" />
        <Chiffre valeur={stats.relancables} libelle="marqués, prêts à partir" accent />
        <Chiffre valeur={stats.faits} libelle="déjà relancés" />
        <Chiffre valeur={stats.sansEmail} libelle="marqués sans email" />
      </div>

      {apercu ? (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <button
            type="button"
            onClick={() => setVoirMessage((v) => !v)}
            className="text-sm font-semibold text-teal-800 underline underline-offset-2"
          >
            {voirMessage ? "Masquer le message" : "Voir le message qui sera envoyé"}
          </button>
          {voirMessage ? (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Objet</p>
              <p className="mt-1 font-medium text-slate-900">{apercu.sujet}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Corps du message
              </p>
              <p className="mt-1 whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-4 leading-relaxed text-slate-800">
                {apercu.texte}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Le prénom et le diplôme changent pour chaque destinataire.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Onglet actif={filtre === "marques"} onClick={() => setFiltre("marques")}>
          Marqués ({stats.relancables})
        </Onglet>
        <Onglet actif={filtre === "faits"} onClick={() => setFiltre("faits")}>
          Déjà relancés ({stats.faits})
        </Onglet>
        <Onglet actif={filtre === "tous"} onClick={() => setFiltre("tous")}>
          Tous ({stats.total})
        </Onglet>
        <button
          type="button"
          onClick={selectionnerLot}
          className="ml-auto rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Tout recocher
        </button>
        {selection.size > 0 ? (
          <button
            type="button"
            onClick={() => setSelection(new Set())}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Tout décocher
          </button>
        ) : null}
      </div>

      <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
        {visibles.length === 0 ? (
          <li className="p-6 text-center leading-relaxed text-slate-500">
            {filtre === "marques"
              ? "Aucun lead marqué. Mettez une croix dans la colonne Mail de votre Sheet, puis rechargez cette page."
              : "Aucun lead dans cette vue."}
          </li>
        ) : null}
        {visibles.map((lead) => {
          const possible = relancable(lead);
          const coche = selection.has(lead.ligne);
          return (
            <li key={lead.ligne} className={possible ? "" : "bg-slate-50"}>
              <label className="flex cursor-pointer items-start gap-3 p-3">
                <input
                  type="checkbox"
                  checked={coche}
                  disabled={!possible}
                  onChange={() => basculer(lead.ligne)}
                  className="mt-1 h-5 w-5 shrink-0 accent-teal-700 disabled:opacity-40"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold text-slate-900">
                      {lead.prenom} {lead.nom}
                    </span>
                    {lead.diplomeVise ? (
                      <span className="rounded bg-teal-50 px-1.5 py-0.5 text-xs font-semibold text-teal-800">
                        {lead.diplomeVise}
                      </span>
                    ) : null}
                    <span className="text-xs text-slate-500">{lead.date}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-slate-600">
                    {lead.email || "— aucune adresse email —"}
                    {lead.telephone ? ` · ${lead.telephone}` : ""}
                  </span>
                  {lead.relanceLe ? (
                    <span className="mt-1 block text-xs font-medium text-slate-500">
                      Relancé le {lead.relanceLe}
                    </span>
                  ) : null}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {reponse ? <Resultat reponse={reponse} /> : null}

      {choisis.length > 0 ? (
        <div className="sticky bottom-0 mt-6 border-t border-slate-200 bg-white/95 py-4 backdrop-blur">
          {confirmation ? (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4">
              <p className="font-semibold text-amber-900">
                Envoyer la relance à {choisis.length} personne{choisis.length > 1 ? "s" : ""} ?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-amber-900">
                {choisis.map((l) => l.prenom).join(", ")}
              </p>
              <p className="mt-2 text-sm text-amber-900">
                Les messages partent un par un, avec une pause entre chacun. Ne fermez pas
                cette page avant la fin.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={envoyer}
                  className="rounded-lg bg-teal-700 px-4 py-2.5 font-semibold text-white hover:bg-teal-800"
                >
                  Oui, envoyer maintenant
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmation(false)}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700"
                >
                  Annuler
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              disabled={envoiEnCours}
              onClick={() => setConfirmation(true)}
              className="w-full rounded-lg bg-teal-700 px-4 py-3 font-semibold text-white hover:bg-teal-800 disabled:opacity-60"
            >
              {envoiEnCours
                ? "Envoi en cours, patientez…"
                : `Relancer ${choisis.length} lead${choisis.length > 1 ? "s" : ""}`}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

function Chiffre({ valeur, libelle, accent }: { valeur: number; libelle: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        accent ? "border-teal-200 bg-teal-50" : "border-slate-200 bg-white"
      }`}
    >
      <p className={`text-2xl font-bold ${accent ? "text-teal-800" : "text-slate-900"}`}>{valeur}</p>
      <p className="text-xs text-slate-600">{libelle}</p>
    </div>
  );
}

function Onglet({
  actif,
  onClick,
  children,
}: {
  actif: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
        actif ? "bg-teal-700 text-white" : "border border-slate-300 text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function Resultat({ reponse }: { reponse: Reponse }) {
  if (reponse.erreur) {
    return (
      <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-900">
        <p className="font-semibold">Envoi refusé</p>
        <p className="mt-1 text-sm leading-relaxed">{reponse.erreur}</p>
      </div>
    );
  }

  const envoyes = reponse.envoyes ?? [];
  const ignores = reponse.ignores ?? [];
  const echecs = reponse.echecs ?? [];

  return (
    <div className="mt-6 rounded-xl border border-teal-300 bg-teal-50 p-4">
      <p className="font-semibold text-teal-900">
        {envoyes.length} relance{envoyes.length > 1 ? "s" : ""} envoyée
        {envoyes.length > 1 ? "s" : ""}.
      </p>
      {envoyes.length > 0 ? (
        <p className="mt-1 text-sm text-teal-900">{envoyes.map((e) => e.prenom).join(", ")}</p>
      ) : null}
      {ignores.length > 0 ? (
        <div className="mt-3 text-sm text-slate-700">
          <p className="font-semibold">Ignorés :</p>
          <ul className="mt-1 list-disc pl-5">
            {ignores.map((i) => (
              <li key={i.ligne}>
                {i.prenom || `ligne ${i.ligne}`} — {i.raison}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {echecs.length > 0 ? (
        <div className="mt-3 text-sm text-red-800">
          <p className="font-semibold">Échecs :</p>
          <ul className="mt-1 list-disc pl-5">
            {echecs.map((e) => (
              <li key={e.ligne}>
                {e.prenom || `ligne ${e.ligne}`} — {e.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-3 text-sm text-slate-600">
        Rechargez la page pour voir la liste à jour.
      </p>
    </div>
  );
}
