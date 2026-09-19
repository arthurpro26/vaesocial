module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[diplome]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiplomePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrediagnosticForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PrediagnosticForm.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaqAccordion.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaqJsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourseJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CourseJsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Eyebrow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StatsBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/StatsBar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$MethodeSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/MethodeSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FinancementSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/FinancementSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TemoignagesSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/TemoignagesSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$EngagementsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/EngagementsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CtaFinalSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/CtaFinalSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diplomes$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/diplomes-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-config.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
;
// Page diplôme dédiée (/dees, /deaes, /deeje, /deme) — pilotée par
// lib/diplomes-data.ts. Une seule base de code, un seul template : chaque
// page adapte son contenu au diplôme via les données, sans dupliquer de JSX.
// Les sections Méthode / Financement / Témoignages / Engagements / CTA final
// / Stats sont strictement les mêmes composants que sur la home (voir
// components/sections/) : même design, mêmes données réelles, zéro copie.
//
// Formulaire : le diplôme est préréglé via `presetDiplome`, l'étape "Quel
// diplôme ?" est donc masquée pour réduire la friction du trafic Google Ads
// qui arrive déjà avec une intention précise.
const VALID_SLUGS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIPLOMES"].map((d)=>d.slug);
function generateStaticParams() {
    return VALID_SLUGS.map((slug)=>({
            diplome: slug
        }));
}
function getDiplomeOrNotFound(slug) {
    if (!VALID_SLUGS.includes(slug)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$diplomes$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIPLOMES_DATA"][slug];
}
async function generateMetadata({ params }) {
    const { diplome } = await params;
    const d = getDiplomeOrNotFound(diplome);
    return {
        title: {
            absolute: d.metaTitle
        },
        description: d.metaDescription,
        alternates: {
            canonical: `/${d.slug}`
        },
        // Chaque page diplôme avait jusqu'ici son Title/description propres, mais
        // héritait de l'Open Graph et Twitter Card génériques de la home (définis
        // dans app/layout.tsx) — un partage sur les réseaux affichait donc le
        // mauvais titre. On surcharge ici avec les mêmes données déjà utilisées
        // pour le title/description, sans rien inventer de nouveau.
        //
        // Important : Next.js fusionne les métadonnées "à plat" — dès qu'une page
        // définit son propre `openGraph`/`twitter`, ça REMPLACE entièrement celui
        // du layout parent (pas de fusion profonde). On reprend donc aussi
        // type/locale/siteName et card pour ne pas les perdre.
        openGraph: {
            type: "website",
            locale: "fr_FR",
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
            title: d.metaTitle,
            description: d.metaDescription,
            url: `/${d.slug}`
        },
        twitter: {
            card: "summary_large_image",
            title: d.metaTitle,
            description: d.metaDescription
        }
    };
}
async function DiplomePage({ params }) {
    const { diplome } = await params;
    const d = getDiplomeOrNotFound(diplome);
    return(// `theme-rose` (voir app/globals.css) redéfinit les variables CSS de la
    // palette pour toute la page : le rose se propage automatiquement aux
    // sections partagées (StatsBar, Méthode, Financement, Témoignages,
    // Engagements, CTA final) sans qu'aucune d'elles ne soit dupliquée ni
    // modifiée. Sans `theme`, la valeur est `undefined` et la page garde le
    // teal de marque — les pages DEES/DEAES/DEEJE/DEME sont inchangées.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: d.theme === "rose" ? "theme-rose" : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CourseJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                diplome: d
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-b from-brand-50 via-white to-white pb-8 pt-6 sm:pb-20 sm:pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    className: "px-3 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-center gap-2.5 text-center sm:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: "✅"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    "VAE ",
                                                    d.sigle,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline",
                                                        children: [
                                                            "· ",
                                                            d.niveau
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: "⭐"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].taux,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].tauxLabel,
                                                            " ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].periode
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sm:hidden",
                                                        children: "validés"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-3 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl sm:leading-tight lg:text-5xl",
                                        children: [
                                            "On vous dit d'abord si vous êtes",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-600",
                                                children: [
                                                    "éligible ",
                                                    d.heroSuffixe
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            ".",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            "Pas l'inverse."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2.5 text-sm font-semibold text-slate-800 sm:mt-4 sm:text-lg",
                                        children: d.heroIntro
                                    }, void 0, false, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[diplome]/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "prediagnostic-form",
                                className: "scroll-mt-24 lg:row-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrediagnosticForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        presetDiplome: d.sigle
                                    }, void 0, false, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-center text-xs text-slate-500 sm:mt-4",
                                        children: "🔒 Vos informations restent confidentielles — jamais revendues à des tiers."
                                    }, void 0, false, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[diplome]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-relaxed text-slate-600 sm:text-lg",
                                        children: d.heroParagraphe
                                    }, void 0, false, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    d.noteReferentiel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 sm:mt-4 sm:p-4 sm:text-sm",
                                        children: [
                                            "ℹ️ ",
                                            d.noteReferentiel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-2xl border border-slate-100 bg-white/60 p-4 sm:mt-6 sm:p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-slate-900",
                                                children: [
                                                    "👉 ",
                                                    d.publicIntro
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-3 space-y-2",
                                                children: d.publicConcerne.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-2 text-sm text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-0.5 text-brand-600",
                                                                "aria-hidden": true,
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-800",
                                                                        children: [
                                                                            p.titre,
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    p.texte
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, p.titre, true, {
                                                        fileName: "[project]/app/[diplome]/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[diplome]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[diplome]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[diplome]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[diplome]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$StatsBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-12 sm:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-2xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    children: "Pour qui ?"
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                                    children: [
                                        "Êtes-vous concerné·e par le ",
                                        d.sigle,
                                        " ?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg",
                                    children: d.publicIntro
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-6",
                            children: d.publicConcerne.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:block sm:p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                children: "🤝"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[diplome]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-slate-900 sm:text-base",
                                                    children: p.titre
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[diplome]/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm",
                                                    children: p.texte
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[diplome]/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[diplome]/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.titre, true, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[diplome]/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-brand-50/60 py-12 sm:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    children: "Débouchés"
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                                    children: [
                                        "🚀 Où exercer avec un ",
                                        d.sigle,
                                        " ?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg",
                                    children: d.debouchesIntro
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-6 grid max-w-2xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5",
                            children: d.debouches.map((deb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg sm:h-11 sm:w-11 sm:text-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                children: deb.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/[diplome]/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[diplome]/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-slate-700",
                                            children: deb.texte
                                        }, void 0, false, {
                                            fileName: "[project]/app/[diplome]/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, deb.texte, true, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-xl text-center text-sm font-semibold text-brand-800 sm:mt-10",
                            children: d.debouchesConclusion
                        }, void 0, false, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[diplome]/page.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$MethodeSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$FinancementSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                sousTitre: `Votre CPF couvre généralement l'intégralité de l'accompagnement vers le ${d.sigle}. Nous vérifions avec vous votre solde et les autres aides mobilisables, avant tout engagement.`
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$TemoignagesSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                highlight: d.slug
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                className: "bg-brand-50/60 py-12 sm:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                                    children: [
                                        "Vos questions sur la VAE ",
                                        d.sigle
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg",
                                    children: "Toutes les réponses pour démarrer en confiance."
                                }, void 0, false, {
                                    fileName: "[project]/app/[diplome]/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                items: d.faq
                            }, void 0, false, {
                                fileName: "[project]/app/[diplome]/page.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            items: d.faq
                        }, void 0, false, {
                            fileName: "[project]/app/[diplome]/page.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[diplome]/page.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$EngagementsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CtaFinalSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                titre: d.ctaTitre
            }, void 0, false, {
                fileName: "[project]/app/[diplome]/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[diplome]/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this));
}
}),
"[project]/app/[diplome]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[diplome]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.1ajwphdkk9_47.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/icon.svg.mjs { IMAGE => \"[project]/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32
};
}),
"[project]/components/CourseJsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseJsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-config.ts [app-rsc] (ecmascript)");
;
;
function CourseJsonLd({ diplome }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `Accompagnement VAE ${diplome.sigle} — ${diplome.nomComplet}`,
        description: diplome.metaDescription,
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url}/${diplome.slug}`,
        inLanguage: "fr-FR",
        provider: {
            "@type": "Organization",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url
        },
        educationalCredentialAwarded: `${diplome.nomComplet} (${diplome.niveau})`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/CourseJsonLd.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Eyebrow.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Eyebrow({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs font-bold uppercase tracking-widest text-brand-600 sm:text-sm",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Eyebrow.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FaqAccordion.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/FaqAccordion.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/FaqAccordion.tsx", "default");
}),
"[project]/components/FaqAccordion.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/FaqAccordion.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/FaqAccordion.tsx <module evaluation>", "default");
}),
"[project]/components/FaqAccordion.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/FaqAccordion.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/FaqAccordion.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaqAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/FaqJsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqJsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function FaqJsonLd({ items }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item)=>({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.reponse
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/FaqJsonLd.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/PrediagnosticForm.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/PrediagnosticForm.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/PrediagnosticForm.tsx", "default");
}),
"[project]/components/PrediagnosticForm.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/PrediagnosticForm.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/PrediagnosticForm.tsx <module evaluation>", "default");
}),
"[project]/components/PrediagnosticForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrediagnosticForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/PrediagnosticForm.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrediagnosticForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/PrediagnosticForm.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PrediagnosticForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/sections/CtaFinalSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaFinalSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
;
;
;
function CtaFinalSection({ titre = "Prêt·e à savoir si vous êtes éligible ?", texte = "Un conseiller vous recontacte gratuitement, sans engagement, pour faire le point sur votre situation.", cta = "Savoir si je suis éligible →" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-brand-50/60 py-12 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-5 py-9 text-center text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm",
                        children: "🚀 Dernière étape"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CtaFinalSection.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-2xl font-bold tracking-tight sm:text-4xl",
                        children: titre
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CtaFinalSection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg",
                        children: texte
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CtaFinalSection.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "#prediagnostic-form",
                        className: "mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:mt-8 sm:inline-flex sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm",
                        children: cta
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CtaFinalSection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CtaFinalSection.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/CtaFinalSection.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/CtaFinalSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/EngagementsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EngagementsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Eyebrow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function EngagementsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            children: "Pourquoi VAESocial"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/EngagementsSection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                            children: "Nos engagements envers vous"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/EngagementsSection.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/EngagementsSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENGAGEMENTS"].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:gap-4 sm:p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-base sm:h-11 sm:w-11 sm:text-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        children: e.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/EngagementsSection.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/EngagementsSection.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-slate-900 sm:text-base",
                                            children: e.titre
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/EngagementsSection.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs leading-relaxed text-slate-600 sm:mt-1.5 sm:text-sm",
                                            children: e.texte
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/EngagementsSection.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/EngagementsSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, e.titre, true, {
                            fileName: "[project]/components/sections/EngagementsSection.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/EngagementsSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/EngagementsSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/EngagementsSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/FinancementSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinancementSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function FinancementSection({ sousTitre = "Votre CPF couvre généralement l'intégralité de l'accompagnement. Nous vérifions avec vous votre solde et les autres aides mobilisables, avant tout engagement." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-brand-50/60 py-12 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "financement",
                className: "relative scroll-mt-24 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-4 py-8 text-white shadow-2xl shadow-brand-900/20 sm:rounded-[2.5rem] sm:px-14 sm:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-widest text-brand-100 sm:text-sm",
                                children: "💰 Financement"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-2xl font-bold tracking-tight sm:text-4xl",
                                children: "Une solution de financement adaptée à votre situation"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-base leading-relaxed text-brand-50 sm:mt-4 sm:text-lg",
                                children: sousTitre
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/FinancementSection.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto mt-6 max-w-xl sm:mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-sm sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-brand-50",
                                    children: "Le prix de l'accompagnement"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FinancementSection.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-2xl font-bold sm:text-3xl",
                                    children: "1 800 € à 3 500 €"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FinancementSection.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-brand-100",
                                    children: "selon le nombre d'heures nécessaires (15 à 20 h)"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/FinancementSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 rounded-xl bg-white/15 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-brand-50",
                                            children: "Votre CPF couvre généralement"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/FinancementSection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-2xl font-bold",
                                            children: "100 %"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/FinancementSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/FinancementSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/FinancementSection.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FinancementSection.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto mt-6 max-w-4xl sm:mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm font-semibold text-brand-50",
                                children: "Sources de financement possibles"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FINANCEMENTS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        "aria-hidden": true,
                                                        children: f.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/FinancementSection.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold sm:text-base",
                                                        children: f.titre
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/FinancementSection.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1.5 text-xs leading-relaxed text-brand-50 sm:mt-2 sm:text-sm",
                                                children: f.texte
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.titre, true, {
                                        fileName: "[project]/components/sections/FinancementSection.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-center text-xs text-brand-100",
                                children: "Selon votre situation, d'autres aides régionales peuvent également exister — nous les identifions avec vous."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/FinancementSection.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/FinancementSection.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-6 text-center sm:mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "#prediagnostic-form",
                            className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8",
                            children: "Vérifier mon financement gratuitement →"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/FinancementSection.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/FinancementSection.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/FinancementSection.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/FinancementSection.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/FinancementSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/MethodeSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MethodeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Eyebrow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function MethodeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "methode",
        className: "bg-white py-12 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            className: "max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            children: "Notre méthode"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MethodeSection.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                            children: "5 étapes, du diagnostic jusqu'au jury"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MethodeSection.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-base text-slate-600 sm:mt-4 sm:text-lg",
                            children: "15 à 20 heures d'accompagnement au total, réparties sur plusieurs mois, à distance et à votre rythme."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MethodeSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MethodeSection.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-8 sm:mt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-100 sm:left-7",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MethodeSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 sm:space-y-10",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ETAPES"].map((etape, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex gap-3 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-lg shadow-md shadow-brand-600/30 sm:h-14 sm:w-14 sm:text-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                children: etape.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/MethodeSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MethodeSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm shadow-slate-900/[0.03] sm:p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold uppercase tracking-wide text-brand-500",
                                                    children: [
                                                        "Étape ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/MethodeSection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-1 font-semibold text-slate-900",
                                                    children: etape.titre
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MethodeSection.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 text-sm leading-relaxed text-slate-600",
                                                    children: etape.texte
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MethodeSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/MethodeSection.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, etape.titre, true, {
                                    fileName: "[project]/components/sections/MethodeSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MethodeSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MethodeSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center sm:mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "#prediagnostic-form",
                        className: "inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-sm shadow-brand-900/5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-100 hover:shadow-md",
                        children: "Tout commence par votre prédiagnostic gratuit →"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MethodeSection.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/MethodeSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/MethodeSection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/MethodeSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/StatsBar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function StatsBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-slate-100 bg-brand-50/40 py-5 sm:py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-4xl grid-cols-2 gap-x-3 gap-y-4 rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-sm shadow-slate-900/[0.03] sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-slate-200 sm:px-4 sm:py-7",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])("text-center sm:flex-1 sm:px-5", // 5 items en grille 2 colonnes = le dernier se retrouve seul sur sa
                        // ligne, décentré à gauche. On lui fait prendre toute la largeur
                        // pour qu'il reste centré, uniquement sur mobile.
                        i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].length - 1 && "col-span-2 sm:col-span-1"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-brand-700 sm:text-3xl",
                                children: s.chiffre
                            }, void 0, false, {
                                fileName: "[project]/components/sections/StatsBar.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs font-medium text-slate-500 sm:mt-1 sm:text-sm",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/components/sections/StatsBar.tsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/components/sections/StatsBar.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/StatsBar.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/StatsBar.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/StatsBar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/TemoignagesSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemoignagesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Eyebrow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function TemoignagesSection({ highlight }) {
    const items = highlight ? [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TEMOIGNAGES"]
    ].sort((a, b)=>Number(b.diplomes.includes(highlight)) - Number(a.diplomes.includes(highlight))) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TEMOIGNAGES"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12 sm:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Eyebrow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            children: "Ils nous font confiance"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TemoignagesSection.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-4xl",
                            children: "Ils ont obtenu leur diplôme par la VAE"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TemoignagesSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: "⭐⭐⭐⭐⭐"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].taux,
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].tauxLabel,
                                " · ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].volume,
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].volumeLabel,
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESULTATS"].periode
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/TemoignagesSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-3",
                    children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    children: "⭐⭐⭐⭐⭐"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm italic leading-relaxed text-slate-600 sm:mt-4",
                                    children: [
                                        "“",
                                        t.texte,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm font-semibold text-slate-900 sm:mt-5",
                                    children: t.nom
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: t.role
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.nom, true, {
                            fileName: "[project]/components/sections/TemoignagesSection.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/TemoignagesSection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/TemoignagesSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/TemoignagesSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/diplomes-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIPLOMES_DATA",
    ()=>DIPLOMES_DATA
]);
const DIPLOMES_DATA = {
    dees: {
        slug: "dees",
        sigle: "DEES",
        nomComplet: "Diplôme d'État d'Éducateur Spécialisé",
        niveau: "Niveau 6 (Bac+3)",
        metaTitle: "VAE DEES : Éducateur Spécialisé par expérience | VAESocial",
        metaDescription: "Obtenez le DEES par la VAE grâce à votre expérience professionnelle. Aucune durée minimale exigée depuis 2024. Diagnostic gratuit en 3 minutes.",
        heroSuffixe: "au DEES",
        heroIntro: "✨ Votre expérience auprès d'enfants, d'adolescents ou d'adultes en difficulté vaut le DEES. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
        heroParagraphe: "Le DEES est un diplôme d'État de niveau 6 (Bac+3) qui atteste de la capacité à concevoir et conduire un accompagnement éducatif auprès de publics en difficulté sociale, familiale ou en situation de handicap. Par la VAE, votre pratique de terrain — en MECS, IME, ITEP, ESAT, foyer ou protection de l'enfance — peut suffire à le valider, sans reprendre une formation complète.",
        publicIntro: "Vous exercez déjà, à un titre ou un autre, des missions d'accompagnement éducatif ? Votre expérience peut être recevable pour une VAE DEES.",
        publicConcerne: [
            {
                titre: "Vous êtes moniteur-éducateur ou AES",
                texte: "Votre pratique quotidienne d'accompagnement recouvre une bonne partie du référentiel du DEES, un diplôme de niveau supérieur."
            },
            {
                titre: "Vous travaillez en protection de l'enfance",
                texte: "MECS, service d'AEMO, foyer de l'enfance... votre expérience de terrain peut être directement valorisée dans le dossier."
            },
            {
                titre: "Vous exercez sans le diplôme requis",
                texte: "En IME, ITEP, ESAT ou foyer pour adultes handicapés, sans DEES, votre pratique professionnelle reste votre meilleur argument pour l'obtenir."
            }
        ],
        debouchesIntro: "Le DEES ouvre principalement des postes dans le secteur privé associatif, majoritaire parmi les employeurs — et des parcours très variés selon le public que vous choisissez d'accompagner :",
        debouches: [
            {
                icon: "🛡️",
                texte: "Protection de l'enfance : MECS, services d'AEMO, foyers de l'enfance — accompagner des enfants et adolescents dans la durée, avec un vrai impact sur leur trajectoire."
            },
            {
                icon: "🤲",
                texte: "Handicap : IME, ITEP, ESAT, foyers d'hébergement — un métier de terrain, au contact direct des personnes accompagnées, chaque jour différent."
            },
            {
                icon: "🏘️",
                texte: "Insertion sociale : CHRS, structures pour adultes en difficulté — un rôle de repère dans des parcours de vie parfois chaotiques."
            },
            {
                icon: "🏛️",
                texte: "Fonction publique territoriale et hospitalière — des postes plus rares mais stables, avec de vraies perspectives d'évolution vers l'encadrement."
            }
        ],
        debouchesConclusion: "🌟 Un diplôme, des dizaines de terrains d'action possibles : le DEES ouvre autant de portes qu'il y a de publics à accompagner.",
        faq: [
            {
                question: "Quel est le niveau du DEES obtenu par VAE ?",
                reponse: "Le DEES obtenu par VAE est strictement identique à celui obtenu en formation initiale : même diplôme d'État de niveau 6 (Bac+3), mêmes droits, aucune mention de la voie d'obtention sur le diplôme."
            },
            {
                question: "Quelle expérience faut-il pour viser le DEES en VAE ?",
                reponse: "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience — professionnelle, bénévole ou en tant qu'aidant — corresponde aux missions d'accompagnement éducatif évaluées dans le référentiel du DEES."
            },
            {
                question: "Quels métiers peut-on exercer après un DEES ?",
                reponse: "Le DEES permet d'exercer en protection de l'enfance (MECS, AEMO), dans le champ du handicap (IME, ITEP, ESAT), ou auprès d'adultes en difficulté sociale (CHRS). Le secteur privé associatif concentre la majorité des postes."
            },
            {
                question: "La VAE DEES est-elle plus rapide qu'une formation classique ?",
                reponse: "Oui : comptez en moyenne 6 à 12 mois pour un parcours VAE, contre 3 ans pour la formation initiale, puisque vous ne suivez pas les enseignements déjà couverts par votre expérience — vous rédigez et présentez un dossier devant un jury."
            }
        ],
        ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEES ?"
    },
    deaes: {
        slug: "deaes",
        sigle: "DEAES",
        nomComplet: "Diplôme d'État d'Accompagnant Éducatif et Social",
        niveau: "Niveau 3 (CAP/BEP)",
        metaTitle: "VAE DEAES : Accompagnant Éducatif et Social | VAESocial",
        metaDescription: "Obtenez le DEAES par la VAE grâce à votre expérience d'accompagnement à domicile ou en structure. Diagnostic d'éligibilité gratuit en 3 minutes.",
        heroSuffixe: "au DEAES",
        heroIntro: "✨ Votre expérience auprès de personnes âgées, en situation de handicap ou en perte d'autonomie vaut le DEAES. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
        heroParagraphe: "Le DEAES est un diplôme d'État de niveau 3 qui atteste de la capacité à accompagner au quotidien des personnes en perte d'autonomie, en situation de handicap ou âgées, à domicile ou en structure. Par la VAE, votre expérience d'aide à domicile, en EHPAD ou auprès d'enfants en situation de handicap peut suffire à le valider, sans reprendre une formation complète.",
        publicIntro: "Vous accompagnez déjà des personnes fragiles au quotidien ? Votre expérience peut être recevable pour une VAE DEAES.",
        publicConcerne: [
            {
                titre: "Vous intervenez à domicile",
                texte: "Auxiliaire de vie, aide à domicile via un SAAD... votre pratique de l'accompagnement quotidien correspond directement au référentiel du DEAES."
            },
            {
                titre: "Vous travaillez en EHPAD ou en structure",
                texte: "Agent, aide médico-psychologique, aide-soignant·e sans diplôme spécifique : votre expérience de terrain peut être valorisée dans le dossier."
            },
            {
                titre: "Vous êtes AESH ou accompagnez des enfants handicapés",
                texte: "L'accompagnement d'enfants en situation de handicap à l'école ou en structure spécialisée entre dans le champ du DEAES."
            }
        ],
        debouchesIntro: "Le DEAES ouvre des postes très variés, à domicile comme en établissement — de quoi trouver le cadre qui vous correspond :",
        debouches: [
            {
                icon: "🏠",
                texte: "Aide à domicile : SAAD — accompagner au quotidien, chez elles, des personnes qui ont besoin de vous pour rester autonomes."
            },
            {
                icon: "🌇",
                texte: "EHPAD et établissements pour personnes âgées — un métier de lien humain, où chaque petit geste compte vraiment."
            },
            {
                icon: "🧩",
                texte: "Structures pour le handicap : IME, foyers, CHRS — un accompagnement de proximité, valorisant au quotidien."
            },
            {
                icon: "🎈",
                texte: "Petite enfance et accompagnement scolaire (AESH, via l'Éducation nationale) — changer le quotidien d'un enfant en situation de handicap."
            }
        ],
        debouchesConclusion: "🌟 À domicile, en EHPAD, en crèche ou à l'école : le DEAES vous ouvre des terrains d'action très différents, à choisir selon ce qui vous fait vibrer.",
        faq: [
            {
                question: "Quel est le niveau du DEAES ?",
                reponse: "Le DEAES est un diplôme d'État de niveau 3 (équivalent CAP/BEP). Il remplace depuis 2016 les anciens diplômes d'auxiliaire de vie sociale (DEAVS) et d'aide médico-psychologique (DEAMP), regroupés dans un référentiel commun."
            },
            {
                question: "Quelle est la différence entre les deux spécialités du DEAES ?",
                reponse: "Le DEAES se décline en deux spécialités : 'accompagnement de la vie à domicile' et 'accompagnement de la vie en structure'. Votre parcours détermine généralement la spécialité la plus pertinente pour votre dossier de VAE."
            },
            {
                question: "Quelle expérience faut-il pour viser le DEAES en VAE ?",
                reponse: "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience d'accompagnement à domicile, en EHPAD, en structure pour le handicap ou en tant qu'AESH peut suffire à être recevable."
            },
            {
                question: "Le DEAES obtenu par VAE permet-il d'évoluer ensuite vers le DEES ?",
                reponse: "Oui, le DEAES est souvent une première étape reconnue dans un parcours d'évolution vers des diplômes de niveau supérieur comme le DEES, notamment via des passerelles de formation ou une nouvelle VAE."
            }
        ],
        ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEAES ?"
    },
    deeje: {
        slug: "deeje",
        sigle: "DEEJE",
        nomComplet: "Diplôme d'État d'Éducateur de Jeunes Enfants",
        niveau: "Niveau 6 (Bac+3)",
        metaTitle: "VAE DEEJE : devenir Éducateur de Jeunes Enfants | VAESocial",
        metaDescription: "Obtenez le DEEJE par la VAE grâce à votre expérience auprès de jeunes enfants. Diagnostic d'éligibilité gratuit en 3 minutes, sans engagement.",
        heroSuffixe: "au DEEJE",
        heroIntro: "✨ Votre expérience auprès de jeunes enfants vaut le DEEJE. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
        heroParagraphe: "Le DEEJE est un diplôme d'État de niveau 6 (Bac+3) qui atteste de la capacité à accompagner le développement d'enfants de la naissance à 7 ans, en crèche, en PMI ou en établissement spécialisé. Par la VAE, votre expérience en structure petite enfance peut suffire à le valider, sans reprendre une formation complète.",
        publicIntro: "Vous travaillez déjà auprès de jeunes enfants ? Votre expérience peut être recevable pour une VAE DEEJE.",
        publicConcerne: [
            {
                titre: "Vous êtes auxiliaire de puériculture",
                texte: "Votre pratique quotidienne en crèche ou en structure petite enfance couvre une large part du référentiel du DEEJE, un diplôme de niveau supérieur."
            },
            {
                titre: "Vous êtes assistant·e maternel·le agréé·e",
                texte: "Une expérience significative d'accompagnement du jeune enfant à domicile peut être valorisée dans le dossier de VAE."
            },
            {
                titre: "Vous travaillez en crèche sans le diplôme d'État",
                texte: "Animateur·rice petite enfance, professionnel·le en crèche collective, familiale ou en halte-garderie : votre expérience reste votre meilleur argument."
            }
        ],
        debouchesIntro: "Le DEEJE ouvre principalement des postes dans les collectivités territoriales et le secteur de la petite enfance — au plus près des tout-petits :",
        debouches: [
            {
                icon: "🧸",
                texte: "Crèches collectives et familiales, haltes-garderies — accompagner l'éveil des tout-petits, jour après jour, dans leurs premières découvertes."
            },
            {
                icon: "👶",
                texte: "Services de Protection Maternelle et Infantile (PMI) — un rôle de prévention et de soutien précieux auprès des familles."
            },
            {
                icon: "🏥",
                texte: "CMPP et établissements médico-sociaux pour jeunes enfants — accompagner les enfants qui en ont le plus besoin."
            },
            {
                icon: "🏛️",
                texte: "Mairies et collectivités territoriales — le principal recruteur du secteur, avec des postes stables et évolutifs."
            }
        ],
        debouchesConclusion: "🌟 Chaque jour, contribuer à poser les toutes premières bases du développement d'un enfant : peu de métiers offrent un impact aussi concret.",
        noteReferentiel: "Le référentiel du DEEJE évolue à partir de septembre 2026 (décret du 6 octobre 2025) : les personnes déjà engagées dans un parcours avant cette date continuent sous l'ancien référentiel jusqu'à la session 2028. Nous vérifions avec vous quel référentiel s'applique à votre situation.",
        faq: [
            {
                question: "Quel est le niveau du DEEJE ?",
                reponse: "Le DEEJE est un diplôme d'État de niveau 6 (Bac+3), au même niveau que le DEES, spécialisé sur l'accompagnement des enfants de la naissance à 7 ans."
            },
            {
                question: "Le référentiel du DEEJE change-t-il en 2026 ?",
                reponse: "Oui, un nouveau référentiel entre en vigueur en septembre 2026. Les candidats déjà engagés dans un parcours avant cette date restent toutefois sous l'ancien référentiel jusqu'à la session 2028. Nous faisons le point avec vous sur la version applicable à votre dossier."
            },
            {
                question: "Quelle expérience faut-il pour viser le DEEJE en VAE ?",
                reponse: "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience en crèche, en tant qu'assistant·e maternel·le ou auxiliaire de puériculture peut suffire à être recevable, quelle que soit sa durée."
            },
            {
                question: "Où travaille-t-on après un DEEJE ?",
                reponse: "Principalement en crèche (collective ou familiale), en service de PMI, en établissement médico-social pour jeunes enfants, ou dans une collectivité territoriale — les mairies étant l'un des principaux recruteurs du secteur."
            }
        ],
        ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEEJE ?"
    },
    deme: {
        slug: "deme",
        sigle: "DEME",
        nomComplet: "Diplôme d'État de Moniteur-Éducateur",
        niveau: "Niveau 4 (Bac)",
        metaTitle: "VAE DEME : Moniteur-Éducateur par expérience | VAESocial",
        metaDescription: "Obtenez le DEME par la VAE grâce à votre expérience professionnelle. Aucune durée minimale exigée depuis 2024. Diagnostic gratuit en 3 minutes.",
        heroSuffixe: "au DEME",
        heroIntro: "✨ Votre expérience auprès de personnes en difficulté sociale ou en situation de handicap vaut le DEME. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
        heroParagraphe: "Le DEME est un diplôme d'État de niveau 4 (équivalent Bac) qui atteste de la capacité à accompagner au quotidien des personnes en difficulté sociale ou en situation de handicap, en appui de l'éducateur spécialisé. Par la VAE, votre expérience de terrain en IME, ESAT, MAS ou MECS peut suffire à le valider, sans reprendre une formation complète.",
        publicIntro: "Vous accompagnez déjà des personnes en difficulté au quotidien ? Votre expérience peut être recevable pour une VAE DEME.",
        publicConcerne: [
            {
                titre: "Vous êtes AES ou AMP",
                texte: "Votre pratique quotidienne d'accompagnement couvre une bonne partie du référentiel du DEME, un diplôme de niveau supérieur."
            },
            {
                titre: "Vous travaillez dans le champ du handicap",
                texte: "ESAT, MAS, IME : votre expérience de l'accompagnement éducatif et social peut être directement valorisée dans le dossier."
            },
            {
                titre: "Vous exercez en protection de l'enfance ou en prévention",
                texte: "MECS, prévention spécialisée, insertion sociale : votre pratique de terrain reste votre meilleur argument pour obtenir le DEME."
            }
        ],
        debouchesIntro: "Le DEME ouvre principalement des postes dans le secteur privé associatif (80 % des recrutements), avec un taux d'insertion professionnelle élevé — et des terrains d'action très concrets :",
        debouches: [
            {
                icon: "🧩",
                texte: "Handicap : ESAT, MAS, IME — un accompagnement au plus près du quotidien, en appui direct de l'éducateur spécialisé."
            },
            {
                icon: "🛡️",
                texte: "Protection de l'enfance : MECS, prévention spécialisée — être un repère stable pour des jeunes qui en ont besoin."
            },
            {
                icon: "🏥",
                texte: "Secteur de la santé : établissements hospitaliers — accompagner des patients au-delà du seul soin médical."
            },
            {
                icon: "🌱",
                texte: "Insertion sociale et professionnelle — aider concrètement des personnes à reprendre pied dans leur parcours de vie."
            }
        ],
        debouchesConclusion: "🌟 Avec un taux d'insertion professionnelle d'environ 94 %, le DEME est l'un des diplômes du secteur qui débouche le plus vite sur un vrai métier.",
        faq: [
            {
                question: "Quel est le niveau du DEME ?",
                reponse: "Le DEME est un diplôme d'État de niveau 4, équivalent au baccalauréat, qui forme à l'accompagnement éducatif au quotidien en appui de l'éducateur spécialisé."
            },
            {
                question: "Quelle expérience faut-il pour viser le DEME en VAE ?",
                reponse: "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Une expérience en ESAT, IME, MAS, MECS ou en prévention spécialisée peut suffire à être recevable, quelle que soit sa durée."
            },
            {
                question: "Quel est le taux d'insertion professionnelle après un DEME ?",
                reponse: "Le secteur affiche un taux d'insertion professionnelle élevé, autour de 94 %, le secteur privé associatif concentrant environ 80 % des recrutements."
            },
            {
                question: "Le DEME permet-il ensuite d'évoluer vers le DEES ?",
                reponse: "Oui, de nombreux moniteurs-éducateurs poursuivent leur parcours vers le DEES, diplôme de niveau supérieur, soit par la formation, soit par une nouvelle VAE une fois leur expérience enrichie."
            }
        ],
        ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEME ?"
    },
    // ---------------------------------------------------------------------
    // DEAP — ajouté le 03/09/2026.
    //
    // Faits vérifiés le 03/09/2026 sur France Compétences (fiche RNCP40743,
    // "DE - Auxiliaire de puériculture") : fiche ACTIVE, enregistrée du
    // 01/09/2025 au 01/09/2029, NIVEAU 4, voie "Par expérience" (VAE) ouverte,
    // certificateur Ministère de la Santé et de la Prévention.
    //
    // Rien d'autre n'est affirmé ici : aucun taux d'insertion, aucun salaire,
    // aucun pourcentage d'employeurs — ces chiffres n'ont pas été vérifiés pour
    // ce diplôme et n'ont donc rien à faire sur la page (règle "real data only").
    // ---------------------------------------------------------------------
    "auxiliaire-puericulture": {
        slug: "auxiliaire-puericulture",
        sigle: "DEAP",
        nomComplet: "Diplôme d'État d'Auxiliaire de Puériculture",
        niveau: "Niveau 4 (Bac)",
        theme: "rose",
        metaTitle: "VAE Auxiliaire de Puériculture (DEAP) par expérience | VAESocial",
        metaDescription: "Obtenez le diplôme d'État d'auxiliaire de puériculture par la VAE grâce à votre expérience auprès des jeunes enfants. Diagnostic gratuit en 3 minutes.",
        heroSuffixe: "au DEAP",
        heroIntro: "✨ Votre expérience auprès des tout-petits vaut le diplôme d'État d'auxiliaire de puériculture. Vérifiez gratuitement si vous êtes éligible en moins de 3 minutes.",
        heroParagraphe: "Le DEAP est un diplôme d'État de niveau 4 (équivalent Bac) qui atteste de la capacité à prendre soin de l'enfant de la naissance à l'adolescence et à accompagner sa famille, en maternité, en service de pédiatrie, en PMI ou en structure d'accueil du jeune enfant. La validation des acquis de l'expérience est une voie d'accès officielle à ce diplôme : votre pratique quotidienne des soins et de l'éveil du jeune enfant peut suffire à le valider, sans reprendre une formation complète.",
        publicIntro: "Vous vous occupez déjà d'enfants au quotidien, sans avoir le diplôme d'État ? Votre expérience peut être recevable pour une VAE DEAP.",
        publicConcerne: [
            {
                titre: "Vous travaillez en crèche ou en multi-accueil",
                texte: "Agente de crèche, animatrice petite enfance, professionnelle en micro-crèche ou en halte-garderie : les soins, les repas, le change, l'éveil et la surveillance que vous assurez chaque jour sont au cœur du référentiel du DEAP."
            },
            {
                titre: "Vous êtes assistante maternelle ou garde d'enfants",
                texte: "Une expérience suivie auprès de jeunes enfants à domicile, agréée ou en emploi direct, peut être valorisée dans le dossier — c'est la nature des missions qui compte, pas le lieu d'exercice."
            },
            {
                titre: "Vous exercez en milieu hospitalier auprès d'enfants",
                texte: "Agente des services hospitaliers, aide-soignante ou faisant fonction en maternité, en néonatalogie ou en pédiatrie : votre pratique des soins au jeune enfant est directement transposable."
            }
        ],
        debouchesIntro: "Le DEAP est un diplôme d'État délivré par le ministère chargé de la Santé, et il ouvre des portes dans deux univers très différents — le soin et l'accueil du jeune enfant :",
        debouches: [
            {
                icon: "🍼",
                texte: "Maternité et néonatalogie — accompagner les tout premiers jours d'un enfant et rassurer des parents qui découvrent tout en même temps."
            },
            {
                icon: "🏥",
                texte: "Services de pédiatrie — prendre soin d'enfants hospitalisés et être, pour eux, le visage rassurant du quotidien."
            },
            {
                icon: "🧸",
                texte: "Crèches, micro-crèches, multi-accueils et haltes-garderies — l'éveil, les soins et la sécurité affective des tout-petits, jour après jour."
            },
            {
                icon: "👶",
                texte: "Services de Protection Maternelle et Infantile (PMI) — la prévention et le soutien aux familles, au plus près de leur réalité."
            }
        ],
        debouchesConclusion: "🌟 Un diplôme d'État reconnu à l'hôpital comme en crèche : peu de métiers de la petite enfance offrent autant de terrains possibles avec un seul diplôme.",
        noteReferentiel: "Le DEAP est délivré par le ministère chargé de la Santé. Les modalités du parcours VAE (recevabilité, épreuves complémentaires éventuelles) sont fixées par le certificateur et peuvent évoluer : nous vérifions avec vous les conditions exactes qui s'appliquent à votre dossier avant tout engagement.",
        faq: [
            {
                question: "Peut-on vraiment obtenir le DEAP par la VAE ?",
                reponse: "Oui. La voie « par expérience » est officiellement ouverte sur la fiche du diplôme d'État d'auxiliaire de puériculture au Répertoire national des certifications professionnelles. C'est une voie d'accès à part entière, au même titre que la formation initiale ou l'apprentissage."
            },
            {
                question: "Quel est le niveau du DEAP ?",
                reponse: "Le DEAP est un diplôme d'État de niveau 4, équivalent au baccalauréat. Il est délivré par le ministère chargé de la Santé et de la Prévention."
            },
            {
                question: "Le diplôme obtenu par VAE est-il le même qu'en formation ?",
                reponse: "Oui. C'est le même diplôme d'État, avec les mêmes droits et les mêmes possibilités d'exercice. La voie d'obtention n'est pas mentionnée sur le diplôme."
            },
            {
                question: "Quelle expérience faut-il pour viser le DEAP en VAE ?",
                reponse: "Depuis la réforme de janvier 2024, aucune durée minimale n'est exigée. Ce qui compte, c'est que votre expérience — en crèche, à domicile, en maternité, en pédiatrie ou en PMI — corresponde aux activités de soin et d'accompagnement du jeune enfant évaluées dans le référentiel du diplôme. C'est précisément ce que le diagnostic gratuit vérifie."
            },
            {
                question: "Faut-il arrêter de travailler pendant la VAE ?",
                reponse: "Non. L'accompagnement se fait à distance, en visio, avec des séances organisées autour de votre emploi du temps. C'est d'ailleurs votre activité en cours qui alimente votre dossier."
            }
        ],
        ctaTitre: "Prêt·e à savoir si vous êtes éligible au DEAP ?"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0307fqa._.js.map