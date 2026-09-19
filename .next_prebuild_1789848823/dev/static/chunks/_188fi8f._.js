(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/FaqAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FaqAccordion({ items }) {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        children: items.map((item, i)=>{
            const open = openIndex === i;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOpenIndex(open ? null : i),
                        "aria-expanded": open,
                        className: "flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-8 sm:py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-900 sm:text-base",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/components/FaqAccordion.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-200 sm:h-8 sm:w-8", open && "rotate-45"),
                                "aria-hidden": true,
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/components/FaqAccordion.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaqAccordion.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("grid overflow-hidden transition-all duration-300 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-8 sm:pb-6",
                                children: item.reponse
                            }, void 0, false, {
                                fileName: "[project]/components/FaqAccordion.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FaqAccordion.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaqAccordion.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                ]
            }, item.question, true, {
                fileName: "[project]/components/FaqAccordion.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/FaqAccordion.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(FaqAccordion, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FaqAccordion;
var _c;
__turbopack_context__.k.register(_c, "FaqAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PrediagnosticForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrediagnosticForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prediagnostic$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prediagnostic-schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/phone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$form$2d$progress$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/form-progress-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tracking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$google$2d$ads$2d$conversions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/google-ads-conversions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// --- Données des étapes à choix unique (cartes larges, sélection = avance automatique) ---
const DIPLOME_OPTIONS = [
    {
        value: "DEES",
        label: "DEES",
        helper: "Éducateur spécialisé · Bac+3"
    },
    {
        value: "DEAES",
        label: "DEAES",
        helper: "Accompagnant éducatif et social · CAP/BEP"
    },
    {
        value: "DEEJE",
        label: "DEEJE",
        helper: "Éducateur de jeunes enfants · Bac+3"
    },
    {
        value: "DEME",
        label: "DEME",
        helper: "Moniteur-éducateur · Bac"
    },
    // Ajouté le 03/09/2026. Comme pour les autres, la `value` est le sigle :
    // c'est elle qui part dans l'email et dans la colonne "Diplôme" du Sheet.
    // Ne jamais la modifier ensuite (voir l'avertissement sur SITUATION_OPTIONS).
    {
        value: "DEAP",
        label: "DEAP",
        helper: "Auxiliaire de puériculture · Bac"
    },
    {
        value: "Je ne sais pas",
        label: "Je ne sais pas"
    }
];
// Étape 2 — refonte du 2026-08-01 : la question porte sur le statut
// professionnel (et non plus sur le secteur), plus rapide à répondre et plus
// simple à qualifier côté conseiller. Pas de sous-texte "financement" par
// option ici : le site ne présente ces dispositifs (CPF, OPCO Santé, France
// Travail...) que de façon générale, jamais garantis par statut précis — on
// évite d'induire une promesse de financement qu'on ne peut pas tenir pour
// chaque cas. CETTE RÈGLE RESTE VALABLE : les `helper` ci-dessous ne parlent
// que du type d'employeur, jamais d'un dispositif de financement.
//
// AJOUT DU 29/08/2026 — pourquoi ces `helper`.
// Constat terrain de Yoni : les salariés d'établissements ASSOCIATIFS (IME,
// ITEP, MECS, ESAT, foyers) se déclarent très souvent "Agent du secteur
// public", parce qu'ils assimilent leur mission de service public à un statut
// public. La colonne "Statut" du Google Sheet devenait donc inexploitable :
// elle mélangeait de vrais agents publics (mairie, hôpital) et des salariés
// de droit privé, deux profils dont l'aiguillage de financement n'a rien à
// voir. Les deux lignes d'aide se répondent volontairement : la première est
// INCLUSIVE (elle rattrape l'associatif), la seconde est RESTRICTIVE (elle
// dissuade de la cocher par défaut).
//
// ⚠️ Ne jamais modifier les `value` : ce sont eux qui partent dans l'email et
// dans la colonne "Statut" du Sheet. Changer une `value` désaligne
// l'historique des leads déjà enregistrés. Seuls `label` et `helper` sont de
// l'affichage.
//
// AJOUT DU 03/09/2026 — les exemples suivent maintenant le diplôme visé.
// Les structures citées (IME, ITEP, MECS, ESAT, foyer) sont celles du secteur
// social : parfaites pour un DEES ou un DEME, muettes pour une professionnelle
// de crèche qui vise le DEAP ou le DEEJE. Or c'est exactement sur cette
// question que le tri se joue — une auxiliaire en crèche municipale doit se
// reconnaître dans « public », une auxiliaire en crèche associative dans
// « privé ». Avec des exemples qui ne lui parlent pas, elle coche au hasard, et
// la colonne "Statut" du Sheet redevient inexploitable.
//
// La logique des deux lignes reste la même quel que soit le diplôme :
// la première est INCLUSIVE (elle rattrape l'associatif et le privé),
// la seconde est RESTRICTIVE (elle dissuade de cocher "public" par défaut).
const SITUATION_HELPERS = {
    // Secteur social — le texte historique, inchangé.
    social: {
        prive: "Y compris associatif : IME, ITEP, MECS, ESAT, foyer…",
        public: "Mairie, département, hôpital public uniquement"
    },
    // Petite enfance et santé — DEAP et DEEJE. « Crèche municipale » est nommée
    // explicitement du côté public : c'est le cas le plus fréquent et le plus
    // souvent mal coché dans ce métier.
    petiteEnfance: {
        prive: "Crèche associative ou privée, micro-crèche, clinique privée…",
        public: "Crèche municipale, PMI, hôpital public uniquement"
    }
};
// Quel jeu d'exemples pour quel diplôme. Tout ce qui n'est pas listé ici
// (dont « Je ne sais pas ») retombe sur le texte social historique.
const SITUATION_HELPERS_PAR_DIPLOME = {
    DEES: "social",
    DEME: "social",
    DEAES: "social",
    DEEJE: "petiteEnfance",
    DEAP: "petiteEnfance"
};
const SITUATION_OPTIONS = [
    {
        value: "Salarié du secteur privé",
        label: "Salarié du secteur privé",
        helper: "Y compris associatif : IME, ITEP, MECS, ESAT, foyer…",
        icon: "briefcase"
    },
    {
        value: "Agent du secteur public",
        label: "Agent du secteur public",
        helper: "Mairie, département, hôpital public uniquement",
        icon: "landmark"
    },
    {
        value: "Demandeur d'emploi",
        label: "Demandeur d'emploi",
        helper: "Inscrit ou non à France Travail",
        icon: "search"
    },
    {
        value: "Indépendant",
        label: "Indépendant",
        helper: "Libéral, auto-entrepreneur",
        icon: "network"
    },
    {
        value: "Autre",
        label: "Autre"
    }
];
// Renvoie les options de situation avec les exemples adaptés au diplôme visé.
// ⚠️ Seul le `helper` est remplacé — les `value` sont recopiées telles quelles
// par le spread, donc ce qui part dans l'email et dans la colonne "Statut" du
// Sheet est rigoureusement identique à avant. L'historique des leads reste
// aligné.
function situationOptions(diplomeVise) {
    const jeu = SITUATION_HELPERS[SITUATION_HELPERS_PAR_DIPLOME[diplomeVise ?? ""] ?? "social"];
    return SITUATION_OPTIONS.map((o)=>{
        if (o.value === "Salarié du secteur privé") return {
            ...o,
            helper: jeu.prive
        };
        if (o.value === "Agent du secteur public") return {
            ...o,
            helper: jeu.public
        };
        return o;
    });
}
// Suggestions d'autocomplétion pour "Dans quelle structure exercez-vous ?",
// adaptées au diplôme visé (choisi à l'étape 1). Liste indicative, non
// exhaustive : la saisie manuelle reste toujours possible si la structure de
// l'utilisateur n'y figure pas.
const STRUCTURE_SUGGESTIONS = {
    DEES: [
        "IME",
        "ITEP",
        "MECS",
        "CHRS",
        "ESAT",
        "FAM",
        "MAS",
        "SESSAD",
        "SAVS",
        "SAMSAH",
        "AEMO",
        "ASE"
    ],
    DEAES: [
        "EHPAD",
        "SSIAD",
        "SAAD",
        "Domicile",
        "FAM",
        "MAS",
        "IME"
    ],
    DEME: [
        "IME",
        "ITEP",
        "MECS",
        "SESSAD",
        "ESAT"
    ],
    DEEJE: [
        "Crèche",
        "Micro-crèche",
        "Multi-accueil",
        "Halte-garderie",
        "PMI",
        "Relais Petite Enfance"
    ],
    // DEAP : le diplôme est délivré par le ministère de la Santé et s'exerce
    // aussi bien à l'hôpital qu'en accueil du jeune enfant — les suggestions
    // couvrent donc les deux univers, contrairement au DEEJE (petite enfance
    // seule).
    DEAP: [
        "Crèche",
        "Micro-crèche",
        "Multi-accueil",
        "Halte-garderie",
        "Maternité",
        "Néonatalogie",
        "Pédiatrie",
        "PMI",
        "Domicile"
    ]
};
// Liste de secours si le diplôme n'est pas encore déterminé ("Je ne sais
// pas") : toutes les suggestions réunies, sans doublons.
const ALL_STRUCTURES = Array.from(new Set(Object.values(STRUCTURE_SUGGESTIONS).flat()));
// Exemple affiché en filigrane dans « Décrivez votre activité au quotidien »,
// adapté au diplôme choisi à l'étape 1.
//
// AJOUT DU 03/09/2026 — pourquoi. L'exemple était unique et parlait de
// « résidents en situation de handicap » et de « réunions d'équipe
// pluridisciplinaire » : parfaitement juste pour un éducateur spécialisé,
// totalement hors sujet pour une professionnelle de crèche qui vise le DEAP.
// Un exemple qui ne ressemble pas au métier de la personne produit deux
// dégâts : soit elle décrit son travail avec les mots du modèle plutôt que
// les siens, soit elle n'ose pas répondre du tout.
//
// Ce n'est pas cosmétique. Ce champ est la matière première du Livret 2 et
// c'est LE prédicteur de signature : plus la description est concrète et
// écrite avec les mots du métier, mieux le dossier se qualifie. Chaque
// exemple suit donc la même structure — qui j'accompagne, ce que je fais
// concrètement, ce dont je suis responsable.
const ACTIVITE_PLACEHOLDER = {
    DEES: "Ex : J'accompagne au quotidien 8 résidents en situation de handicap, j'organise des activités adaptées, je participe aux réunions d'équipe pluridisciplinaire...",
    DEME: "Ex : J'accompagne un groupe de six adolescents en MECS, je gère les levers, les repas et les devoirs, et je rédige les comptes rendus pour l'équipe éducative...",
    DEAES: "Ex : J'interviens chez trois personnes âgées, je les aide à la toilette, aux repas et aux déplacements, et je repère les changements dans leur autonomie...",
    DEEJE: "Ex : J'anime les temps d'éveil auprès d'enfants de 1 à 3 ans en multi-accueil, je participe au projet pédagogique et j'accompagne les familles au quotidien...",
    DEAP: "Ex : Je m'occupe d'un groupe de 10 enfants en crèche, j'assure les soins, les repas, les changes et les temps de sieste, je surveille leur développement et je fais les transmissions aux parents..."
};
// Filigrane par défaut : volontairement neutre, ni social ni petite enfance.
// Utilisé quand la personne a répondu « Je ne sais pas » à l'étape 1 — c'est
// justement le cas où il ne faut orienter sa réponse vers aucun métier.
const ACTIVITE_PLACEHOLDER_DEFAUT = "Ex : Je m'occupe au quotidien des personnes dont j'ai la charge, j'assure les gestes et les activités de leur journée, et je transmets à mon équipe ce que j'observe...";
// Ancienneté dans l'activité décrite à l'étape précédente. Ajoutée le
// 2026-08-04 : la durée d'exercice est la première condition légale
// d'éligibilité à la VAE (un an minimum d'activité en rapport avec le
// diplôme), et c'était la seule information manquante pour trancher un
// dossier sans décrocher le téléphone.
//
// Choix fermés et non champ libre : 78 % du trafic est mobile, et un champ
// texte y ouvre le clavier — le pire ennemi du taux de complétion. Un tap
// suffit ici. Les bornes sont calées sur le seuil réglementaire d'un an, pour
// que la première option isole immédiatement les dossiers non recevables.
const ANCIENNETE_OPTIONS = [
    {
        value: "Moins d'un an",
        label: "Moins d'un an"
    },
    {
        value: "1 à 3 ans",
        label: "1 à 3 ans"
    },
    {
        value: "3 à 5 ans",
        label: "3 à 5 ans"
    },
    {
        value: "Plus de 5 ans",
        label: "Plus de 5 ans"
    }
];
// Ajouté le 2026-09-14 — voir lib/prediagnostic-schema.ts pour le pourquoi.
//
// Trois options et non un oui/non : une personne qui a quitté le secteur il y a
// deux ans reste un candidat VAE parfaitement valable (la VAE valide une
// expérience acquise, pas une expérience en cours). Un oui/non l'aurait écartée
// à tort, et ces profils-là sont parmi les meilleurs dossiers.
const EXPERIENCE_SECTEUR_OPTIONS = [
    {
        value: "Oui, actuellement",
        label: "Oui, actuellement"
    },
    {
        value: "Oui, par le passé",
        label: "Oui, par le passé"
    },
    {
        value: "Non, jamais",
        label: "Non, jamais"
    }
];
// Seule valeur qui interrompt le parcours. Isolée dans une constante pour que
// le libellé ne puisse jamais diverger entre la liste d'options et le test de
// blocage : deux chaînes recopiées à la main finissent toujours par diverger,
// et ici la divergence serait silencieuse (plus aucun blocage, sans erreur).
const EXPERIENCE_SECTEUR_BLOQUANTE = "Non, jamais";
// Statut qui déclenche l'écran de confirmation puis le blocage (2026-09-15).
// Dans la fonction publique le financement ne passe pas par le CPF mais par
// l'ANFH ou le CNFPT, via le service formation de l'employeur : circuit long,
// incertain, et hors de notre périmètre. Plutôt que de laisser le candidat
// aller au bout d'un parcours qui n'aboutira pas, on l'oriente tout de suite
// vers son service des ressources humaines.
//
// ⚠️ Une CONFIRMATION précède le blocage, et elle n'est pas décorative : dans
// le social, beaucoup de salariés d'ASSOCIATIONS gérant des établissements
// (IME, MECS, foyers) cochent « secteur public » parce qu'ils se vivent comme
// agents du service public. Ce sont pourtant des salariés de droit privé,
// finançables au CPF, et d'excellents candidats. Sans cette étape on les
// perdrait tous.
const SITUATION_BLOQUANTE = "Agent du secteur public";
const ALL_STEPS = [
    {
        key: "diplomeVise",
        label: "Votre objectif"
    },
    {
        key: "situationActuelle",
        label: "Votre situation"
    },
    {
        key: "activiteQuotidienne",
        label: "Votre quotidien"
    },
    // Placée juste après la description libre de l'activité : la personne vient
    // d'écrire ce qu'elle fait, on lui demande dans la foulée si c'est auprès de
    // personnes accompagnées. Placée avant, la question serait abstraite ; placée
    // après l'ancienneté, elle laisserait passer le cas qu'elle doit arrêter.
    {
        key: "experienceSecteur",
        label: "Votre expérience"
    },
    // FUSION DU 17/09/2026 — « ancienneté » et « structure » ne forment plus
    // qu'une seule étape (« Votre poste »). Le tunnel passe de 7 à 6 écrans.
    //
    // POURQUOI. Les deux questions portent sur le même objet — le poste occupé
    // aujourd'hui — et la personne vient de le décrire librement à l'étape
    // précédente ; beaucoup y ont déjà donné leur ancienneté ET leur structure.
    // On leur faisait donc franchir deux écrans supplémentaires pour une
    // information partiellement redonnée. Sur mobile (78 % du trafic), chaque
    // transition d'écran est une occasion de fermer l'onglet.
    //
    // CE QUI NE CHANGE PAS : les deux champs restent distincts dans le schéma,
    // dans l'email et dans le Google Sheet. La qualification du lead est
    // strictement identique, seul le nombre d'écrans diminue.
    {
        key: "posteActuel",
        label: "Votre poste"
    },
    {
        key: "coordonnees",
        label: "Vos coordonnées"
    }
];
function StepIcon({ name, className }) {
    if (name === "check") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: className,
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414l2.792 2.792 6.793-6.793a1 1 0 011.415 0z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 286,
            columnNumber: 7
        }, this);
    }
    const common = {
        viewBox: "0 0 20 20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        "aria-hidden": true
    };
    switch(name){
        case "briefcase":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2.5",
                        y: "6.5",
                        width: "15",
                        height: "9.5",
                        rx: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7 6.5V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0113 5v1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2.5",
                        y1: "10.75",
                        x2: "17.5",
                        y2: "10.75"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this);
        case "info":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "10",
                        r: "7.25"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "10",
                        y1: "9.25",
                        x2: "10",
                        y2: "13.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "6.75",
                        r: "0.9",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 318,
                columnNumber: 9
            }, this);
        case "landmark":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "10,2.5 2.75,7.75 17.25,7.75"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4.25",
                        y1: "9",
                        x2: "4.25",
                        y2: "15.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "8",
                        y1: "9",
                        x2: "8",
                        y2: "15.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "9",
                        x2: "12",
                        y2: "15.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "15.75",
                        y1: "9",
                        x2: "15.75",
                        y2: "15.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2.75",
                        y1: "17",
                        x2: "17.25",
                        y2: "17"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 326,
                columnNumber: 9
            }, this);
        case "network":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "7.5",
                        cy: "10",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12.5",
                        cy: "10",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this);
        case "search":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8.75",
                        cy: "8.75",
                        r: "5.5"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "16.25",
                        y1: "16.25",
                        x2: "12.75",
                        y2: "12.75"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, this);
        case "chat":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.5 9a5 5 0 015-5h3a5 5 0 015 5v1.5a5 5 0 01-5 5H9l-3.2 2.7v-2.9A5 5 0 013.5 10.5V9z"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this);
        case "phone":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "7.2",
                    y: "3.2",
                    width: "5.6",
                    height: "13.6",
                    rx: "2.8",
                    transform: "rotate(45 10 10)"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 358,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 357,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c = StepIcon;
/** Badge circulaire brand-color qui encadre une StepIcon — traitement visuel
 *  cohérent partout où une icône accompagne un texte (aide au choix, étapes
 *  de l'écran de succès), au lieu d'emojis disparates. */ function IconBadge({ name, size = "sm" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600", size === "sm" ? "h-6 w-6" : "h-12 w-12"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIcon, {
            name: name,
            className: size === "sm" ? "h-3.5 w-3.5" : "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 377,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_c1 = IconBadge;
/** Flèche fine utilisée dans les boutons "Continuer" — glisse légèrement au
 *  survol pour un feedback discret plutôt qu'un simple changement de couleur. */ function ArrowIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3.5",
                y1: "10",
                x2: "15.5",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "10,4.5 15.5,10 10,15.5"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, this);
}
_c2 = ArrowIcon;
function Spinner({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("animate-spin", className),
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "3",
                opacity: "0.25"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 00-9-9",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
_c3 = Spinner;
/** Petite coche qui "pop" à l'intérieur d'un champ dès qu'il devient valide —
 *  feedback en temps réel façon Stripe, plutôt que de n'informer l'utilisateur
 *  qu'au moment de l'erreur (au blur). Purement visuel : la validation qui
 *  bloque réellement l'envoi reste celle du schéma zod. */ function ValidMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "check-pop pointer-events-none absolute right-3 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-brand-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIcon, {
            name: "check",
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
_c4 = ValidMark;
/** Vrai uniquement sur les appareils pilotés à la souris (desktop). Sert à
 *  n'activer l'autofocus qu'où il est sans risque : sur mobile, un focus
 *  programmatique après un délai n'ouvre généralement pas le clavier virtuel
 *  (les navigateurs l'exigent en réponse directe à un geste) et peut en
 *  revanche déclencher un saut de défilement imprévu — on préfère s'abstenir
 *  plutôt que de risquer l'expérience mobile, explicitement prioritaire ici. */ function isFinePointerDevice() {
    return ("TURBOPACK compile-time value", "object") !== "undefined" && !!window.matchMedia?.("(pointer: fine)").matches;
}
/** Formatage du téléphone : voir lib/phone.ts. Cette logique a été sortie du
 *  composant après l'incident du 4 août 2026 (troncature silencieuse des
 *  saisies au format international), pour que le formulaire, le schéma Zod et
 *  l'enregistrement partagent exactement la même définition d'un numéro
 *  valide — au lieu de trois règles divergentes. */ const formatPhoneNumber = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPhoneInput"];
// Corrections des fautes de frappe les plus courantes sur les fournisseurs
// email les plus répandus en France — liste générique de bon sens (pas une
// donnée propre au projet), utile pour rattraper un lead qui aurait sinon
// jamais reçu notre réponse sous 24h faute d'une adresse valide.
const EMAIL_DOMAIN_TYPOS = {
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gmail.con": "gmail.com",
    "gmailcom": "gmail.com",
    "gnail.com": "gmail.com",
    "hotmial.com": "hotmail.com",
    "hotmai.com": "hotmail.com",
    "hotmail.con": "hotmail.com",
    "hotmal.com": "hotmail.com",
    "yaho.com": "yahoo.com",
    "yahooo.com": "yahoo.com",
    "yahoo.fre": "yahoo.fr",
    "outlok.com": "outlook.com",
    "outllok.com": "outlook.com",
    "orange.f": "orange.fr",
    "orange.frr": "orange.fr",
    "free.frr": "free.fr",
    "free.f": "free.fr",
    "laposte.fr": "laposte.net",
    "wanadoo.frr": "wanadoo.fr"
};
/** Retourne l'adresse corrigée si le domaine saisi est une faute de frappe
 *  connue, sinon `null`. */ function suggestEmailDomain(email) {
    const at = email.lastIndexOf("@");
    if (at === -1) return null;
    const domain = email.slice(at + 1).trim().toLowerCase();
    const fix = EMAIL_DOMAIN_TYPOS[domain];
    return fix ? `${email.slice(0, at + 1)}${fix}` : null;
}
// Clé sessionStorage du brouillon en cours — volontairement sessionStorage
// (pas localStorage) : le brouillon disparaît tout seul à la fermeture de
// l'onglet, aucune donnée personnelle qui traîne indéfiniment sur l'appareil.
const DRAFT_STORAGE_KEY = "vaesocial-prediagnostic-draft";
function PrediagnosticForm({ presetDiplome }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Sens de la dernière navigation, pour orienter l'animation de transition
    // entre étapes (glisse depuis la droite en avançant, depuis la gauche en
    // reculant) — repère spatial qui renforce la sensation de parcours guidé.
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("forward");
    const [submitState, setSubmitState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    // Parcours interrompu (2026-09-14, étendu le 2026-09-15). Un état à part et
    // non un SubmitState : il n'y a eu ni envoi, ni erreur — rien n'a été
    // soumis, et c'est précisément l'intérêt. La valeur porte le MOTIF, parce
    // que les deux cas n'appellent pas le même message : l'un dit « pas encore
    // pour vous », l'autre « pas par nous ».
    const [blocked, setBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Écran de confirmation affiché avant de bloquer sur le statut public.
    const [confirmPublic, setConfirmPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setFormActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$form$2d$progress$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormProgress"])();
    // Étapes effectives : on retire "diplomeVise" si le diplôme est déjà connu, puis on
    // renumérote l'eyebrow "Étape X/Y" dynamiquement.
    const steps = (presetDiplome ? ALL_STEPS.filter((s)=>s.key !== "diplomeVise") : ALL_STEPS).map((s, i, arr)=>({
            ...s,
            eyebrow: `Étape ${i + 1}/${arr.length} — ${s.label}`
        }));
    const totalSteps = steps.length;
    // Signale au Header qu'on est "dans" le questionnaire dès que l'utilisateur
    // a répondu à la première question, pour masquer son CTA redondant. On
    // repasse à false une fois la demande envoyée (plus rien à distraire).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrediagnosticForm.useEffect": ()=>{
            setFormActive(step > 0 && submitState !== "success" && !blocked && !confirmPublic);
        }
    }["PrediagnosticForm.useEffect"], [
        step,
        submitState,
        blocked,
        confirmPublic,
        setFormActive
    ]);
    // --- SUIVI D'ÉTAPE (19/09/2026) ---------------------------------------
    // Objectif : savoir À QUELLE ÉTAPE PRÉCISE les visiteurs abandonnent, pour
    // arrêter de corriger le formulaire à l'aveugle. Chaque écran affiché pousse
    // un événement dans le dataLayer, consommé ensuite par GTM/GA4.
    //
    // CE QUE ÇA NE FAIT PAS : aucune conversion Google Ads n'est déclenchée ici.
    // Seul l'envoi réel du formulaire (avec leadRecorded === true) le fait —
    // voir l'incident du 29 août 2026 plus bas. Ces événements sont purement
    // analytiques : les confondre repeuplerait le Smart Bidding de faux signaux.
    //
    // Le `ref` évite de compter deux fois la même étape quand React re-rend
    // (retour arrière, restauration de brouillon, re-rendu de validation).
    const stepSeenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrediagnosticForm.useEffect": ()=>{
            if (submitState === "success" || blocked || confirmPublic) return;
            const current = steps[step];
            if (!current) return;
            const marker = `${step}:${current.key}`;
            if (stepSeenRef.current.has(marker)) return;
            stepSeenRef.current.add(marker);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConversion"])("prediagnostic_step_view", {
                step_index: step + 1,
                step_total: totalSteps,
                step_key: current.key,
                step_label: current.label,
                diplome: presetDiplome ?? "non_defini"
            });
        }
    }["PrediagnosticForm.useEffect"], [
        step,
        steps,
        totalSteps,
        submitState,
        blocked,
        confirmPublic,
        presetDiplome
    ]);
    const { register, control, handleSubmit, trigger, getValues, // Utilisé par l'écran de confirmation du statut public : quand la personne
    // répond qu'elle est en réalité salariée d'une association, on réécrit sa
    // réponse à sa place plutôt que de la renvoyer choisir elle-même.
    setValue, reset, formState: { errors, isSubmitting, isSubmitted } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prediagnostic$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prediagnosticSchema"]),
        mode: "onBlur",
        defaultValues: presetDiplome ? {
            diplomeVise: presetDiplome
        } : undefined
    });
    // Restauration d'un brouillon abandonné (fermeture accidentelle de
    // l'onglet, navigation involontaire) — volontairement APRÈS le premier
    // rendu (jamais dans `defaultValues` ci-dessus) pour ne jamais faire
    // diverger le rendu serveur du premier rendu client : Next.js comparerait
    // les deux et lèverait une erreur d'hydratation. En passant par un effet,
    // la restauration n'intervient qu'après coup, via un re-rendu normal.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrediagnosticForm.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
                if (!raw) return;
                const saved = JSON.parse(raw);
                if (!saved.values) return;
                const restored = {
                    ...saved.values
                };
                // Le diplôme préréglé par la page (/dees, /deaes...) prime toujours sur
                // un brouillon enregistré depuis une autre page.
                if (presetDiplome) restored.diplomeVise = presetDiplome;
                reset(restored, {
                    keepDefaultValues: false
                });
                if (typeof saved.step === "number") {
                    setStep(Math.min(Math.max(saved.step, 0), totalSteps - 1));
                }
            } catch  {
            // Brouillon corrompu ou stockage indisponible (navigation privée) : on
            // continue simplement avec un formulaire vide, sans bloquer personne.
            }
        // Volontairement exécuté une seule fois, au montage.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PrediagnosticForm.useEffect"], []);
    // Sauvegarde continue du brouillon à chaque changement — permet de
    // reprendre exactement où on en était après une fermeture accidentelle.
    const watchedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrediagnosticForm.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || submitState === "success") return;
            try {
                const { honeypot: _honeypot, ...rest } = watchedValues;
                window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({
                    values: rest,
                    step
                }));
            } catch  {
            // Quota dépassé / stockage désactivé : on n'interrompt pas la saisie pour ça.
            }
        }
    }["PrediagnosticForm.useEffect"], [
        watchedValues,
        step,
        submitState
    ]);
    function goNext() {
        setDirection("forward");
        setStep((s)=>Math.min(s + 1, totalSteps - 1));
    }
    function goBack() {
        setDirection("back");
        setStep((s)=>Math.max(s - 1, 0));
    }
    async function selectAndAdvance(field, value, onChange) {
        onChange(value);
        // Aucune expérience auprès de personnes accompagnées : on s'arrête ici.
        // Le parcours ne va pas jusqu'aux coordonnées, donc aucun envoi n'a lieu :
        // ni email, ni ligne dans le Sheet, ni conversion Google Ads. Le délai
        // reprend celui de l'avance normale, pour que la sélection soit visible
        // avant le changement d'écran.
        if (field === "experienceSecteur" && value === EXPERIENCE_SECTEUR_BLOQUANTE) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConversion"])("prediagnostic_blocked", {
                raison: "sans_experience_secteur"
            });
            setTimeout(()=>setBlocked("experience"), 220);
            return;
        }
        // Statut « Agent du secteur public » : on NE bloque pas tout de suite, on
        // demande confirmation. Voir SITUATION_BLOQUANTE pour le pourquoi — le
        // faux positif « association du secteur social » est fréquent et coûteux.
        if (field === "situationActuelle" && value === SITUATION_BLOQUANTE) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConversion"])("prediagnostic_confirm_public", {});
            setTimeout(()=>setConfirmPublic(true), 220);
            return;
        }
        // petit délai pour laisser voir l'état "sélectionné" avant de passer à l'étape suivante
        setTimeout(async ()=>{
            const valid = await trigger(field);
            if (valid) goNext();
        }, 220);
    }
    // Étapes "texte libre" (pas de sélection discrète comme les ChoiceStep) :
    // une fonction d'avance dédiée par champ, réutilisée à la fois par le
    // clic sur une suggestion et par le bouton "Continuer".
    async function advanceActiviteStep() {
        const valid = await trigger("activiteQuotidienne");
        if (valid) goNext();
    }
    // Étape fusionnée « Votre poste » (17/09/2026) : les DEUX champs doivent
    // être valides pour avancer. `trigger` reçoit un tableau et ne renvoie true
    // que si tout passe — un seul des deux renseigné bloque l'avance, et le
    // message d'erreur s'affiche sous le champ concerné.
    async function advancePosteStep() {
        const valid = await trigger([
            "ancienneteActivite",
            "structure"
        ]);
        if (valid) goNext();
    }
    async function onSubmit(values) {
        setSubmitState("loading");
        try {
            const res = await fetch("/api/prediagnostic", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (!res.ok) throw new Error("Envoi échoué");
            // INCIDENT DU 29 AOÛT 2026 — pourquoi on lit le corps de la réponse.
            // Un HTTP 200 ne suffit PAS à conclure qu'un lead existe : le piège à
            // robots de /api/prediagnostic renvoie volontairement un 200 pour ne
            // pas alerter le robot (voir ce fichier côté API). Tant qu'on ne
            // testait que `res.ok`, chaque robot piégé déclenchait une conversion
            // Google Ads — 5 conversions remontées pour 2 leads réels le 29/08,
            // avec une stratégie « Maximiser les conversions » qui apprenait
            // là-dessus. Seul `leadRecorded` fait foi.
            //
            // Volontairement permissif (`!== false` et non `=== true`) : si la
            // réponse n'est pas exploitable ou provient d'une version de l'API
            // antérieure à ce drapeau, on préfère comptabiliser la conversion
            // plutôt que de perdre un lead réel — c'est le sens de l'incident du
            // 4 août 2026 (signal amputé, enchères mal apprises).
            const payload = await res.json().catch(()=>({}));
            const leadRecorded = payload?.leadRecorded !== false;
            if (leadRecorded) {
                // Point de suivi unique pour toutes les pages (home + 4 diplômes) : un
                // seul endroit à câbler plus tard à un vrai tag de conversion Google
                // Ads / GTM. Déclenché uniquement après un envoi réellement réussi.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackConversion"])("prediagnostic_lead_submitted", {
                    diplome: values.diplomeVise,
                    page: presetDiplome ? `diplome_${presetDiplome.toLowerCase()}` : "home"
                });
                // Conversion Google Ads propre au formulaire envoyé (DEES/DEAES/DEEJE/
                // DEME sur les pages dédiées, "générique" sur la home et /prediagnostic).
                const formKey = presetDiplome ? presetDiplome.toLowerCase() : "generique";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$google$2d$ads$2d$conversions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFormConversion"])(formKey);
            }
            // Le robot, lui, voit toujours l'écran de confirmation : le piège reste
            // silencieux, seule la conversion n'est plus comptée.
            setSubmitState("success");
            try {
                window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
            } catch  {
            // Rien de grave si l'effacement échoue : la clé expirera de toute
            // façon à la fermeture de l'onglet (sessionStorage).
            }
        } catch  {
            setSubmitState("error");
        }
    }
    const progressPercent = (step + 1) / totalSteps * 100;
    const stepTransitionClass = direction === "forward" ? "step-transition-forward" : "step-transition-back";
    // Écran d'arrêt (2026-09-14) : aucune expérience auprès de personnes
    // accompagnées. On le dit franchement plutôt que de laisser la personne
    // remplir un formulaire qui ne peut déboucher sur rien — et on garde la
    // porte ouverte, parce qu'elle peut devenir un vrai candidat plus tard.
    // Confirmation du statut public, AVANT blocage. Le libellé insiste sur le
    // cas associatif, parce que c'est là que se joue le faux positif.
    if (confirmPublic) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-brand-900/15 sm:p-8 step-transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-slate-900 sm:text-2xl",
                    children: "Confirmons votre statut"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 742,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: [
                        "Vous avez indiqué être agent de la fonction publique. Beaucoup de personnes du secteur social choisissent cette réponse alors qu'elles travaillent en réalité pour une",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: " association"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 748,
                            columnNumber: 11
                        }, this),
                        " qui gère un établissement — IME, MECS, foyer, service à domicile. Dans ce cas, le statut est ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "salarié du secteur privé"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 749,
                            columnNumber: 48
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 745,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 font-medium text-slate-900",
                    children: "Êtes-vous agent titulaire ou contractuel d'une mairie, d'un département, d'un hôpital public ou de l'Éducation nationale ?"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 space-y-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setConfirmPublic(false);
                                setBlocked("public");
                            },
                            className: "min-h-11 w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-brand-300 hover:bg-slate-50",
                            children: "Oui, je suis agent de la fonction publique"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 756,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setConfirmPublic(false);
                                setValue("situationActuelle", "Salarié du secteur privé");
                                goNext();
                            },
                            className: "min-h-11 w-full rounded-2xl border-2 border-brand-600 bg-brand-50 px-4 py-3 text-left text-sm font-medium text-brand-900 transition hover:bg-brand-100",
                            children: "Non, je travaille pour une association ou un employeur privé"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 755,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 741,
            columnNumber: 7
        }, this);
    }
    if (blocked === "public") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-2xl shadow-brand-900/15 sm:p-8 step-transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-slate-900 sm:text-2xl",
                    children: "Votre VAE passe par votre employeur"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 785,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: "Dans la fonction publique, une VAE ne se finance pas par le compte personnel de formation mais par votre employeur, via l'ANFH pour la fonction publique hospitalière ou le CNFPT pour la fonction publique territoriale."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 788,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: [
                        "La démarche est donc à engager directement auprès de votre ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "service des ressources humaines"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 794,
                            columnNumber: 70
                        }, this),
                        " ou de votre responsable formation, qui vous orientera vers le dispositif prévu pour les agents. Nous ne pouvons malheureusement pas vous accompagner sur ce circuit."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 793,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm text-slate-500",
                    children: "Nous préférons vous le dire maintenant plutôt que de vous faire perdre du temps."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 799,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 784,
            columnNumber: 7
        }, this);
    }
    if (blocked === "experience") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-2xl shadow-brand-900/15 sm:p-8 step-transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-slate-900 sm:text-2xl",
                    children: "La VAE ne correspond pas encore à votre situation"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 809,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: "La VAE valide une expérience déjà acquise auprès de personnes accompagnées. Sans cette expérience, il n'y a pas encore de dossier à construire — nous préférons vous le dire maintenant plutôt que de vous faire perdre du temps."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 812,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: "Dès que vous aurez travaillé dans le secteur, même en contrat court, à temps partiel ou comme bénévole, revenez vers nous : votre parcours deviendra valorisable."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 808,
            columnNumber: 7
        }, this);
    }
    if (submitState === "success") {
        const prenom = getValues("prenom");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-md rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-2xl shadow-brand-900/15 sm:p-8 step-transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                        name: "check",
                        size: "lg"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 830,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 829,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-slate-900",
                    children: prenom ? `Merci ${prenom}, votre étude personnalisée démarre !` : "Votre étude personnalisée démarre !"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 leading-relaxed text-slate-600",
                    children: "Aurore, Karine, Pamela et Jean, nos formateurs VAE spécialisés dans le secteur social, vont maintenant analyser votre parcours avec attention."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 835,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 space-y-3 rounded-2xl bg-brand-50/60 p-4 text-left text-sm text-brand-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                    name: "phone"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 847,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Vous serez recontacté·e très rapidement"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 848,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 846,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                    name: "search"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 851,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Nous étudierons votre éligibilité ensemble, en toute transparence"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 852,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 850,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                    name: "chat"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 855,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Vous pourrez poser toutes les questions que vous avez en tête"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 856,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 854,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 845,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm text-slate-500",
                    children: "En toute simplicité, et sans engagement."
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 860,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm font-medium text-brand-700",
                    children: "Nous avons hâte d'échanger avec vous 😊"
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 865,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PrediagnosticForm.tsx",
            lineNumber: 828,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-brand-900/15",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-4 pb-2.5 pt-3.5 text-white sm:px-7 sm:pb-4 sm:pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-medium text-brand-50/90 sm:text-xs",
                        children: steps[step].eyebrow
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 874,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-0.5 text-base font-bold sm:mt-1 sm:text-xl",
                        children: "Testez votre éligibilité à la VAE"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 875,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            style: {
                                width: `${progressPercent}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 877,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 876,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 873,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "px-4 py-3 sm:px-7 sm:py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: stepTransitionClass,
                        children: [
                            steps[step].key === "diplomeVise" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceStep, {
                                question: "Quel diplôme souhaitez-vous obtenir par la VAE ?",
                                name: "diplomeVise",
                                control: control,
                                options: DIPLOME_OPTIONS,
                                onSelect: selectAndAdvance,
                                error: errors.diplomeVise?.message
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this),
                            steps[step].key === "situationActuelle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceStep, {
                                question: "Quelle est votre situation actuelle ?",
                                subtitle: "Cette information nous permet de cibler tout de suite les solutions de financement adaptées à votre profil.",
                                name: "situationActuelle",
                                control: control,
                                options: situationOptions(getValues("diplomeVise")),
                                onSelect: selectAndAdvance,
                                error: errors.situationActuelle?.message
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 898,
                                columnNumber: 13
                            }, this),
                            steps[step].key === "activiteQuotidienne" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiviteStep, {
                                control: control,
                                diplomeVise: getValues("diplomeVise"),
                                onAdvance: advanceActiviteStep,
                                error: errors.activiteQuotidienne?.message
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 910,
                                columnNumber: 13
                            }, this),
                            steps[step].key === "experienceSecteur" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceStep, {
                                question: "Avez-vous déjà travaillé auprès de personnes accompagnées ?",
                                subtitle: "Handicap, protection de l'enfance, grand âge, insertion, soin… en emploi, en stage, en service civique ou comme aidant familial.",
                                name: "experienceSecteur",
                                control: control,
                                options: EXPERIENCE_SECTEUR_OPTIONS,
                                onSelect: selectAndAdvance,
                                error: errors.experienceSecteur?.message
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 919,
                                columnNumber: 13
                            }, this),
                            steps[step].key === "posteActuel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PosteActuelStep, {
                                control: control,
                                diplomeVise: getValues("diplomeVise"),
                                onAdvance: advancePosteStep,
                                erreurAnciennete: errors.ancienneteActivite?.message,
                                erreurStructure: errors.structure?.message
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 931,
                                columnNumber: 13
                            }, this),
                            steps[step].key === "coordonnees" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoordonneesStep, {
                                control: control,
                                register: register,
                                errors: errors,
                                submitState: submitState,
                                isSubmitting: isSubmitting,
                                isSubmitted: isSubmitted
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 941,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 885,
                        columnNumber: 9
                    }, this),
                    step > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: goBack,
                        className: "-ml-2 mt-4 flex items-center gap-1 rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-500 transition hover:text-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                className: "h-3.5 w-3.5 rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 958,
                                columnNumber: 13
                            }, this),
                            "Retour"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 953,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-brand-100 bg-brand-50/60 px-4 py-2 text-[11px] font-medium text-brand-800 sm:gap-x-5 sm:gap-y-1.5 sm:px-7 sm:py-3 sm:text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ 100% gratuit"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ Sans engagement"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 966,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ Réponse sous 24h"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 967,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 964,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 871,
        columnNumber: 5
    }, this);
}
_s(PrediagnosticForm, "Lc0orqloNdywrNvguQruxcNROe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$form$2d$progress$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormProgress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c5 = PrediagnosticForm;
function ChoiceStep({ question, subtitle, name, control, options, onSelect, error }) {
    _s1();
    const { field } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name,
        control
    });
    // Raccourcis clavier 1-9 : sélectionne directement l'option correspondante
    // — gain de vitesse appréciable pour qui remplit le formulaire au clavier
    // (desktop), sans rien changer pour les autres (le badge indice n'est
    // affiché que sur les écrans assez larges pour avoir un clavier physique).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChoiceStep.useEffect": ()=>{
            function handleKeyDown(e) {
                if (e.ctrlKey || e.metaKey || e.altKey) return;
                const index = Number(e.key) - 1;
                if (!Number.isInteger(index) || index < 0 || index >= options.length) return;
                onSelect(name, options[index].value, field.onChange);
            }
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "ChoiceStep.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["ChoiceStep.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChoiceStep.useEffect"], [
        options,
        name
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-slate-900 sm:text-base",
                children: question
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1011,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-500",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1012,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5",
                children: options.map((opt, index)=>{
                    const selected = field.value === opt.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect(name, opt.value, field.onChange),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex min-h-11 w-full items-center justify-between rounded-2xl border-2 px-3.5 py-2 text-left transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-4 sm:py-3", selected ? "border-brand-600 bg-brand-50 shadow-sm" : "border-slate-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-slate-50 hover:shadow-sm active:translate-y-0 active:scale-[0.99]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-start gap-2.5",
                                children: [
                                    opt.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                            name: opt.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/PrediagnosticForm.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PrediagnosticForm.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-sm font-medium text-slate-800",
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this),
                                            opt.helper && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 block text-xs text-slate-500",
                                                children: opt.helper
                                            }, void 0, false, {
                                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PrediagnosticForm.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1028,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-3 flex shrink-0 items-center gap-2 sm:ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden h-5 w-5 items-center justify-center rounded-md border border-slate-200 text-[11px] font-medium text-slate-400 sm:flex",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/PrediagnosticForm.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5", selected ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300"),
                                        children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: "h-2.5 w-2.5 check-pop sm:h-3 sm:w-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414l2.792 2.792 6.793-6.793a1 1 0 011.415 0z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PrediagnosticForm.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PrediagnosticForm.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1041,
                                columnNumber: 15
                            }, this)
                        ]
                    }, opt.value, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1017,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1013,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1067,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1010,
        columnNumber: 5
    }, this);
}
_s1(ChoiceStep, "BVwVvrNm5jowuqJ4CQHx6A4u/ic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"]
    ];
});
_c6 = ChoiceStep;
/** Étape "Décrivez votre activité au quotidien" : grand champ texte libre à
 *  auto-hauteur (pas de barre de défilement interne pendant la saisie). Pas
 *  de longueur minimale ni de compteur de caractères — une réponse courte
 *  mais pertinente ne doit jamais être bloquée ; l'objectif est le taux de
 *  complétion, pas le filtrage (retour utilisateur du 2026-08-01). */ function ActiviteStep({ control, diplomeVise, onAdvance, error }) {
    _s2();
    // Même logique que StructureStep : l'exemple suit le diplôme choisi, et
    // retombe sur un filigrane neutre si le diplôme est inconnu ou vaut
    // « Je ne sais pas ».
    const placeholder = ACTIVITE_PLACEHOLDER[diplomeVise ?? ""] ?? ACTIVITE_PLACEHOLDER_DEFAUT;
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function autoResize(el) {
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    }
    // Cette étape n'est jamais la toute première vue par l'utilisateur (elle
    // arrive après au moins deux choix déjà faits) : le focus programmatique
    // est donc la continuité naturelle d'un geste déjà entamé, pas une
    // interruption surprise.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActiviteStep.useEffect": ()=>{
            if (isFinePointerDevice()) textareaRef.current?.focus();
        }
    }["ActiviteStep.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-slate-900 sm:text-base",
                children: "Décrivez votre activité au quotidien"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-500",
                children: "Décrivez les personnes que vous accompagnez, vos missions quotidiennes, vos responsabilités et les tâches que vous réalisez régulièrement."
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                name: "activiteQuotidienne",
                control: control,
                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 sm:mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...field,
                                ref: (el)=>{
                                    field.ref(el);
                                    textareaRef.current = el;
                                    autoResize(el);
                                },
                                onChange: (e)=>{
                                    field.onChange(e);
                                    autoResize(e.target);
                                },
                                rows: 5,
                                placeholder: placeholder,
                                className: "form-input min-h-[140px] resize-none leading-relaxed"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-xs text-slate-400",
                                children: "Pas besoin d'un roman : quelques mots sincères suffisent."
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1121,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1117,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1145,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-start gap-2 rounded-xl bg-brand-50/60 p-3 text-xs leading-relaxed text-brand-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                        name: "info"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Cette question nous permet de mieux comprendre votre quotidien pour évaluer votre éligibilité avec attention."
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onAdvance,
                className: "mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl active:translate-y-0 active:scale-[0.98]",
                children: [
                    "Continuer",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1109,
        columnNumber: 5
    }, this);
}
_s2(ActiviteStep, "gSWexK8idHTRtbhGpJOt6TRUPko=");
_c7 = ActiviteStep;
/* Étape « Votre poste » — fusion du 17/09/2026 de l'ancienneté et de la
   structure sur un seul écran. Voir ALL_STEPS pour le raisonnement.

   L'ordre est délibéré : l'ancienneté d'abord (quatre boutons, un seul tap,
   aucun clavier), la structure ensuite (champ texte qui ouvre le clavier sur
   mobile). Commencer par le geste le plus facile engage la personne avant de
   lui demander l'effort de saisie.

   Contrairement aux ChoiceStep classiques, choisir une ancienneté ne fait PAS
   avancer : il reste la structure à renseigner juste en dessous. */ function PosteActuelStep({ control, diplomeVise, onAdvance, erreurAnciennete, erreurStructure }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-slate-900 sm:text-base",
                children: "Depuis combien de temps exercez-vous cette activité ?"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                name: "ancienneteActivite",
                control: control,
                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2",
                        children: ANCIENNETE_OPTIONS.map((opt)=>{
                            const selected = field.value === opt.value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>field.onChange(opt.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("min-h-11 rounded-2xl border-2 px-3 py-2 text-sm font-medium transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]", selected ? "border-brand-600 bg-brand-50 text-brand-900 shadow-sm" : "border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-slate-50"),
                                children: opt.label
                            }, opt.value, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1203,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1199,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1195,
                columnNumber: 7
            }, this),
            erreurAnciennete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs text-red-600",
                children: erreurAnciennete
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1221,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 sm:mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StructureStep, {
                    control: control,
                    diplomeVise: diplomeVise,
                    onAdvance: onAdvance,
                    error: erreurStructure
                }, void 0, false, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 1224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1191,
        columnNumber: 5
    }, this);
}
_c8 = PosteActuelStep;
function StructureStep({ control, diplomeVise, onAdvance, error }) {
    _s3();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestions = STRUCTURE_SUGGESTIONS[diplomeVise ?? ""] ?? ALL_STRUCTURES;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StructureStep.useEffect": ()=>{
            if (isFinePointerDevice()) inputRef.current?.focus();
        }
    }["StructureStep.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-slate-900 sm:text-base",
                children: "Dans quelle structure exercez-vous actuellement ?"
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-slate-500",
                children: "Ex : Foyer de vie, IME, ESAT, MECS, EHPAD, MAS, SESSAD, service d'aide à domicile, etc. Tapez librement ou choisissez une suggestion — votre structure n'y figure pas ? Indiquez-la simplement, c'est très bien aussi."
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                name: "structure",
                control: control,
                render: ({ field })=>{
                    const query = field.value?.trim().toLowerCase() ?? "";
                    const filtered = suggestions.filter((s)=>query === "" || s.toLowerCase().includes(query)).slice(0, 8);
                    function choose(value) {
                        field.onChange(value);
                        setOpen(false);
                        setTimeout(onAdvance, 220);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-2.5 sm:mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...field,
                                ref: (el)=>{
                                    field.ref(el);
                                    inputRef.current = el;
                                },
                                type: "text",
                                autoComplete: "off",
                                placeholder: "Ex : IME, ESAT, EHPAD, domicile...",
                                className: "form-input",
                                onFocus: ()=>setOpen(true),
                                onBlur: ()=>{
                                    // léger délai pour laisser le temps au clic sur une suggestion
                                    // de s'exécuter avant que la liste ne se ferme
                                    setTimeout(()=>setOpen(false), 150);
                                    field.onBlur();
                                },
                                onKeyDown: (e)=>{
                                    // Un <input> seul dans un <form> sans bouton "submit" visible
                                    // déclenche la soumission implicite du formulaire entier sur
                                    // Entrée — on l'intercepte pour avancer d'une étape à la place.
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        setOpen(false);
                                        onAdvance();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1281,
                                columnNumber: 15
                            }, this),
                            open && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-20 mt-1.5 max-h-56 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-1.5 shadow-xl shadow-slate-900/10",
                                children: filtered.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        // évite que le blur de l'input ne se déclenche avant le clic
                                        onMouseDown: (e)=>e.preventDefault(),
                                        onClick: ()=>choose(s),
                                        className: "block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/PrediagnosticForm.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1310,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1280,
                        columnNumber: 13
                    }, this);
                }
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1264,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1329,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onAdvance,
                className: "mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl active:translate-y-0 active:scale-[0.98]",
                children: [
                    "Continuer",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1255,
        columnNumber: 5
    }, this);
}
_s3(StructureStep, "EsiM6cygU2OcYxoUGx79gvFIEdA=");
_c9 = StructureStep;
/** Dernière étape : coordonnées. Champs pilotés en `Controller` (plutôt que
 *  `register`) pour permettre le formatage du téléphone au fil de la frappe,
 *  la suggestion anti-typo sur l'email et la coche de validation en temps
 *  réel — trois détails "premium" qui rassurent avant l'envoi plutôt que de
 *  sanctionner après coup. Ton retravaillé le 2026-08-01 (retour utilisateur) :
 *  l'étape doit se sentir humaine et rassurante, pas administrative — d'où le
 *  bloc de réassurance juste avant les champs, au moment précis où on demande
 *  des coordonnées personnelles (le point de friction le plus sensible). */ function CoordonneesStep({ control, register, errors, submitState, isSubmitting, isSubmitted }) {
    _s4();
    const prenomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoordonneesStep.useEffect": ()=>{
            if (isFinePointerDevice()) prenomRef.current?.focus();
        }
    }["CoordonneesStep.useEffect"], []);
    const prenom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name: "prenom",
        control
    });
    const nom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name: "nom",
        control
    });
    const telephone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name: "telephone",
        control
    });
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"])({
        name: "email",
        control
    });
    const prenomValid = (prenom.field.value ?? "").trim().length >= 2;
    const nomValid = (nom.field.value ?? "").trim().length >= 2;
    // La coche verte ne s'affiche que si le numéro est réellement joignable —
    // l'ancien test « 10 chiffres » validait des numéros tronqués (voir lib/phone.ts).
    const phoneValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPhoneFr"])(telephone.field.value ?? "");
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.field.value ?? "");
    const emailSuggestion = suggestEmailDomain(email.field.value ?? "");
    // Le Prénom est auto-focusé au chargement de cette étape (voir l'effet
    // ci-dessus) : si l'utilisateur clique ailleurs (téléphone, email...) ou
    // lit simplement le bloc de réassurance avant de taper, ce focus se perd
    // (blur) alors que le champ est encore vide. En mode "onBlur", ça faisait
    // apparaître un "Required" rouge sur un champ que la personne n'a même pas
    // encore essayé de remplir — repéré en testant le formulaire en direct le
    // 2026-08-02, un des pires endroits pour montrer une erreur qui fait peur
    // (juste avant l'envoi). On n'affiche donc une erreur que si (a) la
    // personne a déjà tapé quelque chose dans le champ (erreur légitime, ex.
    // "Prénom trop court.") ou (b) elle a réellement tenté d'envoyer le
    // formulaire au moins une fois (isSubmitted) : dans ces deux cas, l'erreur
    // est méritée ; jamais avant.
    function shouldShowError(value, error) {
        if (!error) return false;
        return Boolean((value ?? "").trim()) || isSubmitted;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 text-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                        name: "chat"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-wide text-brand-600",
                                children: "Vous y êtes presque"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold sm:text-base",
                                children: "Un accompagnateur VAE va étudier votre dossier avec attention"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs leading-relaxed text-slate-500",
                children: "Laissez-nous vos coordonnées : notre équipe de formateurs — Aurore, Karine, Pamela et Jean — examine chaque demande personnellement, et vous recontacte pour faire le point ensemble sur votre projet — sans jargon, sans pression."
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 rounded-2xl bg-brand-50/60 p-3.5 text-xs text-brand-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                name: "check"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "100% gratuit et sans engagement"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                name: "chat"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Une vraie personne étudie votre dossier, pas un algorithme"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                name: "phone"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Réponse sous 24h, pour en discuter ensemble en toute simplicité"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1437,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1435,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[-9999px] top-auto h-px w-px overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "site-web",
                        children: "Ne pas remplir ce champ"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "site-web",
                        type: "text",
                        tabIndex: -1,
                        autoComplete: "off",
                        "aria-hidden": "true",
                        ...register("honeypot")
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Prénom",
                        error: shouldShowError(prenom.field.value, errors.prenom?.message) ? errors.prenom?.message : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: (el)=>{
                                        prenom.field.ref(el);
                                        prenomRef.current = el;
                                    },
                                    name: prenom.field.name,
                                    value: prenom.field.value ?? "",
                                    onChange: prenom.field.onChange,
                                    onBlur: prenom.field.onBlur,
                                    placeholder: "Votre prénom",
                                    className: "form-input pr-9"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 1463,
                                    columnNumber: 13
                                }, this),
                                prenomValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidMark, {}, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 1475,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1462,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Nom",
                        error: shouldShowError(nom.field.value, errors.nom?.message) ? errors.nom?.message : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: nom.field.ref,
                                    name: nom.field.name,
                                    value: nom.field.value ?? "",
                                    onChange: nom.field.onChange,
                                    onBlur: nom.field.onBlur,
                                    placeholder: "Votre nom",
                                    className: "form-input pr-9"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 13
                                }, this),
                                nomValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidMark, {}, void 0, false, {
                                    fileName: "[project]/components/PrediagnosticForm.tsx",
                                    lineNumber: 1492,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1482,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "Téléphone",
                error: shouldShowError(telephone.field.value, errors.telephone?.message) ? errors.telephone?.message : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            inputMode: "numeric",
                            autoComplete: "tel",
                            name: telephone.field.name,
                            ref: telephone.field.ref,
                            value: telephone.field.value ?? "",
                            onChange: (e)=>telephone.field.onChange(formatPhoneNumber(e.target.value)),
                            // La normalisation (+33 / 0033 → 06…) se fait ici, à la sortie du
                            // champ, et surtout pas pendant la frappe : réécrire la valeur en
                            // cours de saisie replace le curseur au début et corrompt le
                            // numéro. Voir lib/phone.ts.
                            onBlur: ()=>{
                                telephone.field.onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePhoneOnBlur"])(telephone.field.value ?? ""));
                                telephone.field.onBlur();
                            },
                            placeholder: "06 XX XX XX XX",
                            className: "form-input pr-9"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1504,
                            columnNumber: 11
                        }, this),
                        phoneValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidMark, {}, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1523,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 1503,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "Email",
                error: shouldShowError(email.field.value, errors.email?.message) ? errors.email?.message : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                autoComplete: "email",
                                name: email.field.name,
                                ref: email.field.ref,
                                value: email.field.value ?? "",
                                onChange: email.field.onChange,
                                onBlur: email.field.onBlur,
                                placeholder: "votre@email.fr",
                                className: "form-input pr-9"
                            }, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1532,
                                columnNumber: 11
                            }, this),
                            emailValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidMark, {}, void 0, false, {
                                fileName: "[project]/components/PrediagnosticForm.tsx",
                                lineNumber: 1543,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1531,
                        columnNumber: 9
                    }, this),
                    emailSuggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>email.field.onChange(emailSuggestion),
                        className: "mt-1.5 text-xs font-medium text-brand-600 transition hover:text-brand-700 hover:underline",
                        children: [
                            "Vouliez-vous dire ",
                            emailSuggestion,
                            " ?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1546,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs leading-relaxed text-slate-500",
                children: [
                    "En envoyant ce formulaire, vous acceptez d'être recontacté·e par VAESocial au sujet de votre demande. Vos données restent confidentielles — voir notre",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/confidentialite",
                        className: "underline hover:text-slate-700",
                        children: "politique de confidentialité"
                    }, void 0, false, {
                        fileName: "[project]/components/PrediagnosticForm.tsx",
                        lineNumber: 1563,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1560,
                columnNumber: 7
            }, this),
            submitState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg bg-red-50 p-3 text-sm text-red-700",
                children: "Une erreur est survenue lors de l'envoi. Merci de réessayer."
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1570,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isSubmitting || submitState === "loading",
                className: "group flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl hover:shadow-accent-600/35 active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
                children: submitState === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1582,
                            columnNumber: 13
                        }, this),
                        "Envoi en cours..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 1581,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Vérifier mon éligibilité gratuitement",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                            className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/PrediagnosticForm.tsx",
                            lineNumber: 1588,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrediagnosticForm.tsx",
                    lineNumber: 1586,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1575,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1405,
        columnNumber: 5
    }, this);
}
_s4(CoordonneesStep, "2Xm+bwczH/gastL4GRnFoOx/7k0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useController"]
    ];
});
_c10 = CoordonneesStep;
function Field({ label, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1.5 block text-sm font-medium text-slate-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1607,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/PrediagnosticForm.tsx",
                lineNumber: 1609,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrediagnosticForm.tsx",
        lineNumber: 1606,
        columnNumber: 5
    }, this);
}
_c11 = Field;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "StepIcon");
__turbopack_context__.k.register(_c1, "IconBadge");
__turbopack_context__.k.register(_c2, "ArrowIcon");
__turbopack_context__.k.register(_c3, "Spinner");
__turbopack_context__.k.register(_c4, "ValidMark");
__turbopack_context__.k.register(_c5, "PrediagnosticForm");
__turbopack_context__.k.register(_c6, "ChoiceStep");
__turbopack_context__.k.register(_c7, "ActiviteStep");
__turbopack_context__.k.register(_c8, "PosteActuelStep");
__turbopack_context__.k.register(_c9, "StructureStep");
__turbopack_context__.k.register(_c10, "CoordonneesStep");
__turbopack_context__.k.register(_c11, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/google-ads-conversions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GOOGLE_ADS_CONVERSION_LABELS",
    ()=>GOOGLE_ADS_CONVERSION_LABELS,
    "trackFormConversion",
    ()=>trackFormConversion
]);
"use client";
// Étiquette unique de l'action de conversion « Envois de formulaires de lead »
// du compte. Elle est volontairement partagée par TOUS les formulaires.
//
// INCIDENT DU 4 AOÛT 2026 — pourquoi ce changement.
// Auparavant seule la clé `dees` était renseignée, les quatre autres valant
// `undefined`. Or `formKey` vaut "generique" dès que le formulaire est envoyé
// depuis la page d'accueil ou /prediagnostic (aucun diplôme présélectionné) :
// trackFormConversion() sortait alors sans rien envoyer. Résultat, un lead
// réel reçu à 15h59 n'est jamais remonté dans Google Ads, et la stratégie
// « Maximiser les conversions » apprenait sur un signal amputé — elle
// optimisait en ignorant une partie des leads réellement générés.
//
// Une seule action de conversion pour un seul objectif commercial (obtenir un
// lead) est de toute façon la bonne architecture : la ventilation par diplôme
// se fait dans les rapports, par campagne, pas en multipliant les actions de
// conversion — ce qui fragmenterait l'apprentissage des enchères entre
// plusieurs signaux trop peu volumineux chacun pour converger.
const LEAD_FORM_CONVERSION = "AW-18174606822/BbkxCP6cxtgcEOb7qdpD";
const GOOGLE_ADS_CONVERSION_LABELS = {
    dees: LEAD_FORM_CONVERSION,
    deaes: LEAD_FORM_CONVERSION,
    deeje: LEAD_FORM_CONVERSION,
    deme: LEAD_FORM_CONVERSION,
    // Ajouté le 03/09/2026 en même temps que la page auxiliaire de puériculture.
    // SANS cette ligne, `formKey` aurait valu "deap", la recherche dans ce
    // Record aurait renvoyé `undefined`, et AUCUNE conversion ne serait remontée
    // à Google Ads pour les leads DEAP — la campagne neuve aurait appris sur un
    // signal vide, exactement le scénario du 4 août 2026 décrit plus haut.
    deap: LEAD_FORM_CONVERSION,
    // Formulaire de la page d'accueil et de /prediagnostic, quand aucun
    // diplôme n'est présélectionné (presetDiplome absent).
    generique: LEAD_FORM_CONVERSION
};
function trackFormConversion(formKey) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const sendTo = GOOGLE_ADS_CONVERSION_LABELS[formKey];
    if (!sendTo) {
        console.warn(`[google-ads] Conversion "${formKey}" pas encore configurée (send_to manquant dans lib/google-ads-conversions.ts).`);
        return;
    }
    window.gtag?.("event", "conversion", {
        send_to: sendTo
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/phone.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPhoneFr",
    ()=>formatPhoneFr,
    "formatPhoneInput",
    ()=>formatPhoneInput,
    "isValidPhoneFr",
    ()=>isValidPhoneFr,
    "normalizePhoneFr",
    ()=>normalizePhoneFr,
    "normalizePhoneOnBlur",
    ()=>normalizePhoneOnBlur
]);
/**
 * Normalisation des numéros de téléphone français.
 *
 * POURQUOI CE FICHIER EXISTE — incident du 4 août 2026.
 * L'ancien formatage vivait dans PrediagnosticForm.tsx et faisait :
 *     raw.replace(/\D/g, "").slice(0, 10)
 * Une personne qui saisit son numéro au format international
 * (« +33 6 26 40 01 33 », ce que fait spontanément quelqu'un dont le
 * téléphone enregistre l'indicatif) produisait 11 chiffres : « 33626400133 ».
 * Le slice(0, 10) coupait le DERNIER chiffre et laissait « 3362640013 »,
 * affiché « 33 62 64 00 13 ». Le schéma ne contrôlant que la longueur, la
 * validation passait au vert et le lead partait avec un numéro injoignable.
 * Deux leads réels ont été perdus de cette façon (03 et 04 août 2026).
 *
 * Règle depuis : on ne tronque JAMAIS une saisie utilisateur silencieusement.
 * Soit on sait normaliser, soit on refuse explicitement avec un message clair.
 */ /** Longueur maximale conservée pendant la frappe. Large exprès : elle doit
 *  couvrir « 0033 » + 9 chiffres = 13, avec de la marge. Elle ne sert qu'à
 *  éviter un collage aberrant, jamais à « corriger » une saisie. */ const MAX_INPUT_DIGITS = 15;
function normalizePhoneFr(raw) {
    const digits = (raw ?? "").replace(/\D/g, "");
    let national = null;
    if (/^0033\d{9}$/.test(digits)) {
        national = "0" + digits.slice(4);
    } else if (/^33\d{9}$/.test(digits)) {
        national = "0" + digits.slice(2);
    } else if (/^0\d{9}$/.test(digits)) {
        national = digits;
    } else if (/^[1-9]\d{8}$/.test(digits)) {
        // Zéro initial omis (« 6 26 40 01 33 ») — cas fréquent après un copier-coller.
        national = "0" + digits;
    }
    if (!national) return null;
    // 01–05 fixes, 06/07 mobiles, 09 non géographique. 00 et 08 (numéros
    // spéciaux surtaxés) sont exclus : ce ne sont pas des numéros de rappel.
    if (!/^0[1-79]\d{8}$/.test(national)) return null;
    return national;
}
function isValidPhoneFr(raw) {
    return normalizePhoneFr(raw) !== null;
}
function formatPhoneFr(national) {
    return national.replace(/(\d{2})(?=\d)/g, "$1 ");
}
function formatPhoneInput(raw) {
    const hasPlus = raw.trimStart().startsWith("+");
    const digits = raw.replace(/\D/g, "").slice(0, MAX_INPUT_DIGITS);
    return (hasPlus ? "+" : "") + digits.replace(/(\d{2})(?=\d)/g, "$1 ");
}
function normalizePhoneOnBlur(raw) {
    const national = normalizePhoneFr(raw);
    return national ? formatPhoneFr(national) : raw;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/prediagnostic-schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prediagnosticSchema",
    ()=>prediagnosticSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/phone.ts [app-client] (ecmascript)");
;
;
const prediagnosticSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    diplomeVise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Sélectionnez un diplôme."),
    situationActuelle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Sélectionnez votre situation actuelle."),
    // Remplace l'ancienne question fermée "années d'expérience" : un texte
    // libre sur l'activité réelle du candidat est bien plus utile pour évaluer
    // l'éligibilité VAE (le référentiel du diplôme se juge sur la nature des
    // missions, pas sur une durée) — refonte du formulaire du 2026-08-01. Pas
    // de longueur minimale au-delà de "non vide" : une réponse courte mais
    // pertinente ne doit jamais être bloquée — retour utilisateur du 2026-08-01,
    // l'objectif est le taux de complétion, pas le filtrage.
    activiteQuotidienne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Décrivez brièvement votre activité."),
    // Ajouté le 2026-09-14. La question précédente ("votre activité") ne dit pas
    // dans QUEL secteur elle s'exerce. Un candidat en reconversion décrivait
    // honnêtement son métier actuel (grande distribution, logistique...), cochait
    // ensuite "Plus de 5 ans" à l'ancienneté, et ressortait "Recevabilité : OK" —
    // lead payé, appelé, inexploitable (cas du 14/09/2026).
    //
    // La VAE valide une expérience ACQUISE : sans aucune expérience auprès de
    // personnes accompagnées, il n'y a rien à valider, quel que soit le nombre
    // d'années déclarées. C'est la seule question du formulaire qui tranche ce
    // point. La valeur "Non, jamais" interrompt le parcours AVANT l'envoi (voir
    // PrediagnosticForm.tsx) : aucun lead enregistré, et surtout AUCUNE
    // conversion Google Ads — la stratégie d'enchères cesse d'apprendre sur ces
    // profils et d'aller en chercher d'autres. C'est le même raisonnement que
    // pour le piège à robots du 29/08/2026, appliqué aux humains hors cible.
    experienceSecteur: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Sélectionnez une réponse."),
    // Ancienneté dans l'activité décrite ci-dessus. Réintroduite le 2026-08-04
    // à côté du texte libre (et non à sa place) : la nature des missions dit si
    // le candidat correspond au référentiel, la durée dit s'il est légalement
    // recevable (un an minimum). Les deux sont nécessaires, aucune ne remplace
    // l'autre. Un lead « Moins d'un an » n'est pas bloqué — il est signalé côté
    // conseiller, voir app/api/prediagnostic/route.ts.
    ancienneteActivite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Indiquez depuis combien de temps."),
    // Champ texte libre (autocomplétion suggérée selon le diplôme visé, mais
    // saisie manuelle toujours possible) — remplace l'ancienne question à choix
    // radio "secteur", jugée trop rigide / peu engageante.
    structure: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Indiquez votre structure d'exercice."),
    prenom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Prénom trop court."),
    nom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Nom trop court."),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Adresse email invalide."),
    // Validation par FORMAT et non par longueur. L'ancienne règle (10 à 20
    // caractères) acceptait « 33 62 64 00 13 » — un numéro tronqué et
    // injoignable — et affichait une coche verte. Voir lib/phone.ts pour le
    // détail de l'incident du 4 août 2026.
    telephone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPhoneFr"], "Numéro invalide. Exemple : 06 12 34 56 78."),
    // Piège à robots (honeypot) : champ invisible pour les humains via CSS,
    // que les robots de spam remplissent souvent aveuglément. Toujours vide en
    // usage normal — voir PrediagnosticForm.tsx et app/api/prediagnostic/route.ts.
    honeypot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tracking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackConversion",
    ()=>trackConversion
]);
"use client";
function trackConversion(eventName, data = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...data
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_188fi8f._.js.map