module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Container({ children, className }) {
    // Si `className` définit déjà sa propre largeur max (ex. "max-w-3xl"), on
    // n'ajoute pas "max-w-6xl" : les deux classes ciblent la même propriété CSS
    // et, avec Tailwind, celle définie en dernier dans la feuille de style
    // l'emporte quel que soit l'ordre dans l'attribut className — pas l'ordre
    // "logique" qu'on pourrait attendre. Les inclure toutes les deux créerait
    // un conflit silencieux où la largeur voulue ne s'applique jamais. Même
    // logique pour le padding horizontal : le Hero a besoin d'un peu plus de
    // largeur utile sur mobile (texte moins étroit), donc il passe son propre
    // "px-3 sm:px-6 lg:px-8" — sm/lg restent identiques au défaut, donc tablette
    // et desktop ne changent jamais, seul le mobile est concerné.
    const hasCustomMaxWidth = className?.includes("max-w-");
    const hasCustomPadding = className?.includes("px-");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("mx-auto w-full", !hasCustomPadding && "px-4 sm:px-6 lg:px-8", !hasCustomMaxWidth && "max-w-6xl", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Container.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$form$2d$progress$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/form-progress-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header() {
    // Une fois que l'utilisateur a commencé à répondre au questionnaire, le CTA
    // "Savoir si je suis éligible" fait doublon (il est déjà en train de le
    // faire) et distrait plus qu'il n'aide — on le masque en fondu. `invisible`
    // (et pas `hidden`) pour garder l'espace réservé : sur desktop, la nav est
    // positionnée par rapport au CTA via justify-between, donc le retirer du
    // flux ferait sauter la nav vers la droite au moment précis où on ne veut
    // surtout pas de mouvement de layout.
    const { isFormActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$form$2d$progress$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormProgress"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: "flex h-16 items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex shrink-0 items-center py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "header"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-11 text-sm font-medium text-slate-600 md:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#diplomes",
                                    className: "flex items-center gap-1 hover:text-brand-700",
                                    children: [
                                        "Diplômes",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl shadow-slate-900/10",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIPLOMES"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${d.slug}`,
                                                className: "block px-4 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: d.sigle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            "— ",
                                                            d.nom
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, d.slug, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#methode",
                            className: "hover:text-brand-700",
                            children: "Notre méthode"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#financement",
                            className: "hover:text-brand-700",
                            children: "Financement"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "#faq",
                            className: "hover:text-brand-700",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog",
                            className: "hover:text-brand-700",
                            children: "Blog"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "#prediagnostic-form",
                    "aria-hidden": isFormActive,
                    tabIndex: isFormActive ? -1 : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("shrink-0 whitespace-nowrap rounded-full bg-accent-600 px-3.5 py-3 text-sm font-bold text-white shadow-md shadow-accent-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-lg hover:shadow-accent-600/30 sm:px-5 sm:py-2.5", isFormActive ? "invisible opacity-0" : "visible opacity-100"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: "Éligibilité"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Savoir si je suis éligible"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function Logo({ variant = "color", id = "logo", className }) {
    const gradientId = `${id}-gradient`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("inline-flex items-center gap-2.5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "34",
                height: "34",
                viewBox: "0 0 34 34",
                fill: "none",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "34",
                        height: "34",
                        rx: "9",
                        fill: `url(#${gradientId})`
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "13",
                        cy: "13.5",
                        r: "3",
                        fill: "white",
                        fillOpacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.5 26C7.5 19.8 9.8 17.5 13 17.5C16.2 17.5 18.5 19.8 18.5 26Z",
                        fill: "white",
                        fillOpacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20.5",
                        cy: "12.5",
                        r: "3.4",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.5 27C14.5 20.3 17 17.7 20.5 17.7C24 17.7 26.5 20.3 26.5 27Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: gradientId,
                            x1: "0",
                            y1: "0",
                            x2: "34",
                            y2: "34",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    style: {
                                        stopColor: "rgb(var(--brand-400))"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Logo.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    style: {
                                        stopColor: "rgb(var(--brand-700))"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Logo.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("font-logo text-xl font-extrabold leading-none tracking-tight", variant === "light" ? "text-white" : "text-slate-900"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: variant === "light" ? "text-brand-200" : "text-brand-700",
                        children: "VAE"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    "Social"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/form-progress-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormProgressProvider",
    ()=>FormProgressProvider,
    "useFormProgress",
    ()=>useFormProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const FormProgressContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function FormProgressProvider({ children }) {
    const [isFormActive, setFormActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormProgressContext.Provider, {
        value: {
            isFormActive,
            setFormActive
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/form-progress-context.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function useFormProgress() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FormProgressContext);
    // Filet de sécurité : si jamais un composant consomme ce hook hors du
    // Provider, on retombe sur "formulaire inactif" plutôt que de planter.
    if (!ctx) return {
        isFormActive: false,
        setFormActive: ()=>{}
    };
    return ctx;
}
}),
"[project]/lib/site-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Données partagées entre la page d'accueil et les pages dédiées par diplôme
// (/dees, /deaes, /deeje, /deme). Centralisées ici pour ne jamais dupliquer
// une donnée réelle (prix, avis, financement...) à plusieurs endroits.
//
// Prix, témoignages, durées et avis sont des données réelles fournies par
// Yoni (jamais de chiffre inventé) — voir mémoire projet pour la traçabilité.
__turbopack_context__.s([
    "COMPETENCES",
    ()=>COMPETENCES,
    "DIPLOMES",
    ()=>DIPLOMES,
    "ENGAGEMENTS",
    ()=>ENGAGEMENTS,
    "ETAPES",
    ()=>ETAPES,
    "FINANCEMENTS",
    ()=>FINANCEMENTS,
    "REASSURANCES",
    ()=>REASSURANCES,
    "RESULTATS",
    ()=>RESULTATS,
    "STATS",
    ()=>STATS,
    "TEMOIGNAGES",
    ()=>TEMOIGNAGES
]);
const DIPLOMES = [
    {
        slug: "dees",
        sigle: "DEES",
        nom: "Éducateur spécialisé",
        description: "Accompagnement des enfants, adolescents et adultes en difficulté sociale, familiale ou en situation de handicap."
    },
    {
        slug: "deaes",
        sigle: "DEAES",
        nom: "Accompagnant éducatif et social",
        description: "Accompagnement des personnes âgées, en situation de handicap ou en perte d'autonomie, en structure ou à domicile."
    },
    {
        slug: "deeje",
        sigle: "DEEJE",
        nom: "Éducateur de jeunes enfants",
        description: "Accompagnement des enfants de la naissance à 7 ans, en crèche, halte-garderie ou service de protection maternelle et infantile."
    },
    {
        slug: "deme",
        sigle: "DEME",
        nom: "Moniteur-éducateur",
        description: "Accompagnement au quotidien de personnes en difficulté sociale ou en situation de handicap, en appui de l'éducateur spécialisé."
    },
    // Ajouté le 03/09/2026. Le slug est le NOM DU MÉTIER et non le sigle :
    // relevé Keyword Planner du 03/09/2026 (France, 12 mois glissants) —
    // "vae auxiliaire de puericulture" = 4 400 recherches/mois, "vae deap" = 170.
    // Les candidates cherchent leur métier, pas l'acronyme. L'URL, le titre et
    // les annonces doivent suivre le même vocabulaire qu'elles.
    {
        slug: "auxiliaire-puericulture",
        sigle: "DEAP",
        nom: "Auxiliaire de puériculture",
        description: "Soins et accompagnement du jeune enfant, en maternité, en service de pédiatrie, en PMI ou en structure d'accueil de la petite enfance."
    }
];
const STATS = [
    {
        chiffre: "97 %",
        label: "De dossiers validés"
    },
    {
        chiffre: "400+",
        label: "VAE accompagnées"
    },
    {
        chiffre: "< 24h",
        label: "Délai de réponse"
    },
    {
        chiffre: "100%",
        label: "À distance"
    },
    {
        chiffre: "100%",
        label: "Financement possible"
    },
    {
        chiffre: "15-20h",
        label: "D'accompagnement"
    },
    {
        chiffre: "Gratuit",
        label: "Diagnostic initial"
    }
];
const COMPETENCES = [
    "Accompagnement éducatif et social au quotidien",
    "Conception et conduite de projets personnalisés",
    "Communication professionnelle et travail en équipe pluridisciplinaire",
    "Implication dans la vie institutionnelle et le partenariat",
    "Gestion de situations sensibles ou de crise"
];
const REASSURANCES = [
    "Aucune durée minimale d'expérience n'est exigée depuis la réforme 2024.",
    "Vous accompagnez un public concerné.",
    "Nous vérifions gratuitement votre éligibilité avant tout engagement.",
    "Si la VAE n'est pas adaptée, nous vous le dirons honnêtement."
];
const ETAPES = [
    {
        icon: "🧭",
        titre: "Diagnostic & orientation",
        texte: "On fait le point sur votre parcours pour confirmer que la VAE est la voie la plus pertinente pour vous, et vers quel diplôme."
    },
    {
        icon: "📋",
        titre: "Livret de recevabilité",
        texte: "Constitution du dossier administratif qui ouvre officiellement le droit à candidater à la VAE auprès du certificateur."
    },
    {
        icon: "✍️",
        titre: "Livret de compétences",
        texte: "L'étape centrale : formuler par écrit, avec votre accompagnateur, comment votre expérience couvre le référentiel du diplôme visé."
    },
    {
        icon: "🎤",
        titre: "Entraînement à l'oral",
        texte: "Mise en situation face à un jury pour travailler votre posture et vos réponses avant le passage réel."
    },
    {
        icon: "🏅",
        titre: "Après la décision du jury",
        texte: "Accompagnement adapté selon l'issue : validation complète, partielle, ou plan d'action pour la suite."
    }
];
const FINANCEMENTS = [
    {
        icon: "💳",
        titre: "Votre CPF",
        texte: "La solution principale pour la majorité des candidats."
    },
    {
        icon: "🏢",
        titre: "OPCO Santé",
        texte: "Pour les salariés du secteur social et médico-social (MECS, IME, ITEP, MAS, FAM, foyers, EHPAD...), via votre employeur lorsque c'est possible."
    },
    {
        icon: "🏛️",
        titre: "France Travail",
        texte: "Pour les demandeurs d'emploi."
    },
    {
        icon: "🔄",
        titre: "Transitions Pro",
        texte: "Dans le cadre d'un projet de reconversion."
    }
];
const ENGAGEMENTS = [
    {
        icon: "🎯",
        titre: "Un accompagnement individuel",
        texte: "Un seul interlocuteur dédié, du positionnement jusqu'au jury — pas un parcours générique."
    },
    {
        icon: "🤝",
        titre: "Une transparence totale",
        texte: "Sur l'éligibilité, les tarifs et le financement : ce qu'on vous annonce, c'est ce que vous obtenez."
    },
    {
        icon: "📅",
        titre: "Un rythme adapté à votre vie",
        texte: "Accompagnement 100 % à distance, en visio, avec des séances qui s'organisent autour de votre emploi du temps — sans interrompre votre activité."
    },
    {
        icon: "🛡️",
        titre: "Un suivi jusqu'au bout",
        texte: "Quelle que soit la décision du jury — validation totale ou partielle — vous n'êtes jamais seul·e pour la suite de votre parcours."
    }
];
const RESULTATS = {
    taux: "97 %",
    tauxLabel: "de dossiers validés",
    volume: "400+",
    volumeLabel: "VAE accompagnées",
    periode: "depuis 2024"
};
const TEMOIGNAGES = [
    {
        nom: "Carine S.",
        role: "VAE DEES",
        texte: "L'accompagnement m'a permis de structurer mon dossier et d'arriver sereinement devant le jury. J'ai toujours eu des réponses à mes questions et je me suis sentie accompagnée du début à la fin. Je recommande !!",
        diplomes: [
            "dees"
        ]
    },
    {
        nom: "Melissa H.",
        role: "VAE DEAES",
        texte: "Je pensais que la VAE était beaucoup trop compliquée. Finalement, avec un accompagnement étape par étape, j'ai pu obtenir mon diplôme tout en continuant à travailler.",
        diplomes: [
            "deaes"
        ]
    },
    {
        nom: "Valérie B.",
        role: "VAE DEME / DEEJE",
        texte: "Le prédiagnostic m'a tout de suite rassurée. La préparation du dossier et de l'oral a fait toute la différence. Je recommande cet accompagnement.",
        diplomes: [
            "deme",
            "deeje"
        ]
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hgs028._.js.map