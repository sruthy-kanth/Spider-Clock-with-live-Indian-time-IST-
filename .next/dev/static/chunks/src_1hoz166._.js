(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ClockNumbers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClockNumbers",
    ()=>ClockNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const ClockNumbers = ({ showNumbers, currentHour, currentMinute, accentColor })=>{
    if (!showNumbers) return null;
    const numbers = [
        12,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ];
    const radius = 290;
    const centerX = 400;
    const centerY = 400;
    const activeHourIndex = currentHour % 12;
    const activeMinuteIndex = Math.floor(currentMinute / 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "select-none font-serif italic text-3xl",
        children: numbers.map((num, i)=>{
            const angleDeg = i * 30 - 90;
            const rad = angleDeg * Math.PI / 180;
            const x = centerX + radius * Math.cos(rad);
            const y = centerY + radius * Math.sin(rad);
            const isHourTarget = num === (activeHourIndex === 0 ? 12 : activeHourIndex);
            const isMinuteTarget = num === (activeMinuteIndex === 0 ? 12 : activeMinuteIndex);
            const isActive = isHourTarget || isMinuteTarget;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "transition-all duration-300",
                children: [
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: x,
                        cy: y,
                        r: 26,
                        fill: accentColor,
                        fillOpacity: isHourTarget ? 0.2 : 0.12,
                        filter: "blur(5px)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClockNumbers.tsx",
                        lineNumber: 43,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x,
                        y: y + 10,
                        textAnchor: "middle",
                        fill: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                        fontSize: isActive ? '36' : '30',
                        fontWeight: isActive ? 'bold' : 'normal',
                        style: {
                            textShadow: isActive ? `0 0 10px ${accentColor}` : 'none',
                            transition: 'all 0.3s ease'
                        },
                        children: num
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClockNumbers.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `reference-num-${num}`, true, {
                fileName: "[project]/src/components/ClockNumbers.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ClockNumbers.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ClockNumbers;
var _c;
__turbopack_context__.k.register(_c, "ClockNumbers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DigitalClock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitalClock",
    ()=>DigitalClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const DigitalClock = ({ timeState, showDigitalClock, showDate, accentColor })=>{
    if (!showDigitalClock && !showDate) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center space-y-1 z-10 pointer-events-none",
        children: [
            showDigitalClock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl font-mono tracking-widest font-bold px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300",
                style: {
                    color: '#ffffff',
                    textShadow: `0 0 10px ${accentColor}`
                },
                children: timeState.timeString
            }, void 0, false, {
                fileName: "[project]/src/components/DigitalClock.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 text-xs sm:text-sm text-gray-300/80 font-medium",
                children: [
                    showDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-3 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm",
                        children: timeState.dateString
                    }, void 0, false, {
                        fileName: "[project]/src/components/DigitalClock.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DigitalClock.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "IST (Asia/Kolkata)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DigitalClock.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DigitalClock.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DigitalClock.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DigitalClock.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DigitalClock;
var _c;
__turbopack_context__.k.register(_c, "DigitalClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SettingsPanel = ({ settings, updateSettings, resetSettings, onAudioUnlock })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const themePresets = [
        {
            id: 'gothic',
            label: 'Dark Gothic',
            bg: '#08080a',
            accent: '#e2e8f0'
        },
        {
            id: 'neon',
            label: 'Electric Neon',
            bg: '#090514',
            accent: '#a855f7'
        },
        {
            id: 'cyberpunk',
            label: 'Cyberpunk',
            bg: '#050b14',
            accent: '#06b6d4'
        },
        {
            id: 'silk',
            label: 'Silk White',
            bg: '#121316',
            accent: '#f43f5e'
        },
        {
            id: 'emerald',
            label: 'Emerald Forest',
            bg: '#04120c',
            accent: '#10b981'
        }
    ];
    const toggleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((e)=>console.log(e));
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setIsOpen(!isOpen);
                    onAudioUnlock();
                },
                className: "fixed top-6 right-6 z-50 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95",
                title: "Settings & Customization",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    className: `w-6 h-6 ${isOpen ? 'rotate-90' : ''} transition-transform duration-500`
                }, void 0, false, {
                    fileName: "[project]/src/components/SettingsPanel.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-neutral-950/95 text-white border-l border-white/10 shadow-2xl p-6 overflow-y-auto backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pb-4 mb-6 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-5 h-5 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold tracking-wide",
                                        children: "Spider Clock Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-300 mb-3",
                                        children: "Theme Palette"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2.5",
                                        children: themePresets.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updateSettings({
                                                        theme: t.id
                                                    }),
                                                className: `flex items-center space-x-2.5 p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${settings.theme === t.id ? 'border-indigo-500 bg-indigo-500/20 text-white shadow-lg' : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-4 h-4 rounded-full border border-white/20",
                                                        style: {
                                                            backgroundColor: t.accent
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 pt-2 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                        children: "Visual Customization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-gray-300 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Web Opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            settings.webOpacity,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: settings.webOpacity,
                                                onChange: (e)=>updateSettings({
                                                        webOpacity: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-gray-300 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Web Rotation Speed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            settings.webSpeed,
                                                            "x"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.1",
                                                max: "3",
                                                step: "0.1",
                                                value: settings.webSpeed,
                                                onChange: (e)=>updateSettings({
                                                        webSpeed: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-gray-300 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Spider Glow Intensity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            settings.spiderGlow,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: settings.spiderGlow,
                                                onChange: (e)=>updateSettings({
                                                        spiderGlow: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-2 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                        children: "Clock Elements"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    [
                                        {
                                            key: 'showNumbers',
                                            label: 'Clock Numerals (1-12)'
                                        },
                                        {
                                            key: 'showDigitalClock',
                                            label: 'Digital Time Overlay'
                                        },
                                        {
                                            key: 'showSeconds',
                                            label: 'Seconds Leg Pointer'
                                        },
                                        {
                                            key: 'showDate',
                                            label: 'Date Display'
                                        },
                                        {
                                            key: 'reducedMotion',
                                            label: 'Reduced Motion'
                                        }
                                    ].map((toggle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-gray-300",
                                                    children: toggle.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: Boolean(settings[toggle.key]),
                                                    onChange: (e)=>updateSettings({
                                                            [toggle.key]: e.target.checked
                                                        }),
                                                    className: "w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, toggle.key, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-2 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                        children: "Audio Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center space-x-2 text-xs font-medium text-gray-300",
                                                children: [
                                                    settings.soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        className: "w-4 h-4 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 42
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 93
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Clock Ticking Sound"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: settings.soundEnabled,
                                                onChange: (e)=>{
                                                    updateSettings({
                                                        soundEnabled: e.target.checked
                                                    });
                                                    if (e.target.checked) onAudioUnlock();
                                                },
                                                className: "w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    settings.soundEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-gray-300 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Tick Volume"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            settings.tickVolume,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: settings.tickVolume,
                                                onChange: (e)=>updateSettings({
                                                        tickVolume: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-white/10 flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleFullscreen,
                                        className: "flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Fullscreen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetSettings,
                                        className: "flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/20 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SettingsPanel, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = SettingsPanel;
var _c;
__turbopack_context__.k.register(_c, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpiderBody.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpiderBody",
    ()=>SpiderBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const SpiderBody = ({ cx, cy, spiderColor, accentColor, glowIntensity, reducedMotion })=>{
    const glowBlur = glowIntensity / 100 * 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "referenceSpiderGlow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: glowBlur,
                                result: "blur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpiderBody.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpiderBody.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "pearlBodyGradient",
                        x1: "20%",
                        y1: "0%",
                        x2: "80%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "45%",
                                stopColor: "#f8fafc"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "85%",
                                stopColor: spiderColor
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#0f172a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "pearlAbdomenHighlight",
                        cx: "35%",
                        cy: "30%",
                        r: "65%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ffffff",
                                stopOpacity: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "#f1f5f9",
                                stopOpacity: "0.9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "85%",
                                stopColor: spiderColor,
                                stopOpacity: "0.85"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#090d16",
                                stopOpacity: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderBody.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderBody.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: cx,
                y1: 0,
                x2: cx,
                y2: cy - 20,
                stroke: "#ffffff",
                strokeOpacity: "0.75",
                strokeWidth: "1.2",
                className: !reducedMotion ? 'animate-pulse' : ''
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderBody.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: cx,
                cy: cy,
                rx: 30,
                ry: 40,
                fill: accentColor,
                fillOpacity: glowIntensity / 100 * 0.35,
                filter: "blur(14px)"
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderBody.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#referenceSpiderGlow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${cx - 3} ${cy - 22} Q ${cx - 6} ${cy - 29} ${cx - 8} ${cy - 25}`,
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${cx + 3} ${cy - 22} Q ${cx + 6} ${cy - 29} ${cx + 8} ${cy - 25}`,
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: cx,
                        cy: cy - 12,
                        rx: 11,
                        ry: 10,
                        fill: "url(#pearlBodyGradient)",
                        stroke: "#ffffff",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${cx - 4} ${cy - 2} L ${cx + 4} ${cy - 2} L ${cx + 3} ${cy + 3} L ${cx - 3} ${cy + 3} Z`,
                        fill: "#1e293b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${cx} ${cy - 1} 
             C ${cx + 18} ${cy + 3}, ${cx + 22} ${cy + 26}, ${cx} ${cy + 38} 
             C ${cx - 22} ${cy + 26}, ${cx - 18} ${cy + 3}, ${cx} ${cy - 1} Z`,
                        fill: "url(#pearlAbdomenHighlight)",
                        stroke: "#ffffff",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: cx,
                        cy: cy + 16,
                        rx: 4,
                        ry: 12,
                        fill: "#ffffff",
                        fillOpacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderBody.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderBody.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpiderBody.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpiderBody;
var _c;
__turbopack_context__.k.register(_c, "SpiderBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpiderClock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpiderClock",
    ()=>SpiderClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useISTTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useISTTime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAudioTick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAudioTick.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WebBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WebBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClockNumbers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClockNumbers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpiderBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpiderBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpiderLegs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpiderLegs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DigitalClock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DigitalClock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const DEFAULT_SETTINGS = {
    theme: 'gothic',
    spiderColor: '#ffffff',
    accentColor: '#93c5fd',
    spiderGlow: 65,
    webOpacity: 45,
    webSpeed: 1,
    is12Hour: true,
    showNumbers: true,
    showDigitalClock: true,
    showSeconds: true,
    showDate: true,
    soundEnabled: false,
    tickVolume: 35,
    reducedMotion: false
};
const THEME_STYLES = {
    gothic: {
        bg: '#08080a',
        spider: '#ffffff',
        accent: '#60a5fa'
    },
    neon: {
        bg: '#090514',
        spider: '#f472b6',
        accent: '#c084fc'
    },
    cyberpunk: {
        bg: '#030a16',
        spider: '#22d3ee',
        accent: '#f43f5e'
    },
    silk: {
        bg: '#121316',
        spider: '#ffffff',
        accent: '#fb7185'
    },
    emerald: {
        bg: '#02140d',
        spider: '#34d399',
        accent: '#a7f3d0'
    }
};
const SpiderClock = ()=>{
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SETTINGS);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useISTTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useISTTime"])();
    const { initAudio } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAudioTick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioTick"])(timeState.seconds, settings.soundEnabled, settings.tickVolume);
    // Load saved settings from localStorage safely
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpiderClock.useEffect": ()=>{
            setIsMounted(true);
            try {
                const saved = localStorage.getItem('spider_clock_settings');
                if (saved) {
                    setSettings({
                        ...DEFAULT_SETTINGS,
                        ...JSON.parse(saved)
                    });
                }
            } catch (e) {
                console.warn('Failed to load settings from localStorage:', e);
            }
        }
    }["SpiderClock.useEffect"], []);
    // Save settings updates
    const updateSettings = (newSettings)=>{
        setSettings((prev)=>{
            const updated = {
                ...prev,
                ...newSettings
            };
            try {
                localStorage.setItem('spider_clock_settings', JSON.stringify(updated));
            } catch (e) {
                console.warn('Failed to save settings:', e);
            }
            return updated;
        });
    };
    const resetSettings = ()=>{
        setSettings(DEFAULT_SETTINGS);
        try {
            localStorage.removeItem('spider_clock_settings');
        } catch (e) {
            console.warn('Failed to clear settings:', e);
        }
    };
    // Center coordinate of canvas
    const cx = 400;
    const cy = 400;
    const currentTheme = THEME_STYLES[settings.theme] || THEME_STYLES.gothic;
    const spiderColor = settings.spiderColor || currentTheme.spider;
    const accentColor = settings.accentColor || currentTheme.accent;
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden flex flex-col items-center justify-between p-2 sm:p-4 transition-colors duration-700 select-none",
        style: {
            backgroundColor: currentTheme.bg
        },
        onClick: initAudio,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "z-10 text-center shrink-0 mt-1 sm:mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-2xl font-serif tracking-widest text-white/90 font-bold uppercase drop-shadow-lg",
                        children: "Spider Clock"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderClock.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] sm:text-xs text-gray-400/80 font-light mt-0.5 tracking-wider",
                        children: "Indian Standard Time • Precision Artistry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderClock.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderClock.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 flex items-center justify-center w-full min-h-0 py-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square flex items-center justify-center max-w-full max-h-full",
                    style: {
                        width: 'min(92vw, calc(100vh - 150px), 760px)',
                        height: 'min(92vw, calc(100vh - 150px), 760px)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 800 800",
                        className: "w-full h-full overflow-visible drop-shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WebBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebBackground"], {
                                opacity: settings.webOpacity,
                                speed: settings.webSpeed,
                                accentColor: accentColor,
                                reducedMotion: settings.reducedMotion
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderClock.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClockNumbers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClockNumbers"], {
                                showNumbers: settings.showNumbers,
                                currentHour: timeState.hours,
                                currentMinute: timeState.minutes,
                                accentColor: accentColor
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderClock.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpiderLegs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpiderLegs"], {
                                cx: cx,
                                cy: cy,
                                hours: timeState.hours,
                                minutes: timeState.minutes,
                                seconds: timeState.seconds,
                                milliseconds: timeState.milliseconds,
                                showSeconds: settings.showSeconds,
                                spiderColor: spiderColor,
                                accentColor: accentColor,
                                reducedMotion: settings.reducedMotion
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderClock.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpiderBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpiderBody"], {
                                cx: cx,
                                cy: cy,
                                spiderColor: spiderColor,
                                accentColor: accentColor,
                                glowIntensity: settings.spiderGlow,
                                reducedMotion: settings.reducedMotion
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpiderClock.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpiderClock.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/SpiderClock.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderClock.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "z-10 shrink-0 pb-2 sm:pb-4 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DigitalClock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitalClock"], {
                    timeState: timeState,
                    showDigitalClock: settings.showDigitalClock,
                    showDate: settings.showDate,
                    accentColor: accentColor
                }, void 0, false, {
                    fileName: "[project]/src/components/SpiderClock.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderClock.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                settings: settings,
                updateSettings: updateSettings,
                resetSettings: resetSettings,
                onAudioUnlock: initAudio
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderClock.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpiderClock.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SpiderClock, "OVJ2g7rtt1wCI9rIbeTElKHMGi8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useISTTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useISTTime"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAudioTick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioTick"]
    ];
});
_c = SpiderClock;
var _c;
__turbopack_context__.k.register(_c, "SpiderClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpiderLegs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpiderLegs",
    ()=>SpiderLegs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/spiderGeometry.ts [app-client] (ecmascript)");
'use client';
;
;
const SpiderLegs = ({ cx, cy, hours, minutes, seconds, milliseconds, showSeconds, spiderColor, accentColor, reducedMotion })=>{
    const idlePhase = reducedMotion ? 0 : Date.now() / 1200 % (Math.PI * 2);
    // Body attachment points for 8 legs (4 on left, 4 on right)
    const leftOrigins = [
        {
            x: cx - 8,
            y: cy - 16
        },
        {
            x: cx - 11,
            y: cy - 8
        },
        {
            x: cx - 10,
            y: cy + 2
        },
        {
            x: cx - 7,
            y: cy + 12
        }
    ];
    const rightOrigins = [
        {
            x: cx + 8,
            y: cy - 16
        },
        {
            x: cx + 11,
            y: cy - 8
        },
        {
            x: cx + 10,
            y: cy + 2
        },
        {
            x: cx + 7,
            y: cy + 12
        }
    ];
    // Calculated clock hand angles (0 deg = 12 o'clock / straight up)
    const hourAngle = (hours % 12 + minutes / 60 + seconds / 3600) * 30 - 90;
    const minuteAngle = (minutes + seconds / 60) * 6 - 90;
    const secondAngle = (seconds + milliseconds / 1000) * 6 - 90;
    // Hand pointer lengths
    const hourLength = 190;
    const minuteLength = 260;
    const secondLength = 290;
    // 1. TOP LEGS (L1, R1): Arch UPWARDS framing head & thread (Reference match)
    const legL1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(leftOrigins[0], -125, 45, -145, 90, -1, idlePhase);
    const legR1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(rightOrigins[0], -55, 45, -35, 90, 1, idlePhase);
    // 2. BOTTOM LEGS (L4, R4): Curve DOWNWARDS framing abdomen (Reference match)
    const legL4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(leftOrigins[3], 135, 35, 120, 75, -1, idlePhase + 1.2);
    const legR4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(rightOrigins[3], 45, 35, 60, 75, 1, idlePhase + 1.2);
    // 3. UPPER LEFT LEG (L2): Extends HORIZONTALLY left
    const legL2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(leftOrigins[1], -170, 70, -160, 130, -1, idlePhase + 0.4);
    // 4. UPPER RIGHT LEG (R2 - MINUTE HAND): Knee extends right, Tibia points to Minute angle
    const legR2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAnatomicalPointerLeg"])(rightOrigins[1], -10, 85, minuteAngle, minuteLength, 1);
    // 5. LOWER LEFT LEG (L3 - HOUR HAND): Knee extends down-left, Tibia points to Hour angle
    const legL3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAnatomicalPointerLeg"])(leftOrigins[2], 160, 75, hourAngle, hourLength, -1);
    // 6. LOWER RIGHT LEG (R3 - SECOND HAND / NATURAL):
    const legR3Pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateAnatomicalPointerLeg"])(rightOrigins[2], 30, 70, secondAngle, secondLength, 1);
    const legR3Natural = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNaturalSpiderLeg"])(rightOrigins[2], 25, 60, 35, 115, 1, idlePhase + 0.8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "referenceLegGlow",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "1.8",
                            result: "blur"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SpiderLegs.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "blur"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SpiderLegs.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                    in: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SpiderLegs.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SpiderLegs.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SpiderLegs.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SpiderLegs.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: spiderColor,
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                filter: "url(#referenceLegGlow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legL1.path,
                        strokeWidth: "3.2",
                        strokeOpacity: "0.95"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR1.path,
                        strokeWidth: "3.2",
                        strokeOpacity: "0.95"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legL2.path,
                        strokeWidth: "3.5",
                        strokeOpacity: "0.95"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legL4.path,
                        strokeWidth: "3.0",
                        strokeOpacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR4.path,
                        strokeWidth: "3.0",
                        strokeOpacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !showSeconds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR3Natural.path,
                        strokeWidth: "3.2",
                        strokeOpacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderLegs.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#referenceLegGlow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legL3.femurPath,
                        fill: "none",
                        stroke: spiderColor,
                        strokeWidth: "4.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legL3.tibiaPath,
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "3.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legL3.joint.x,
                        cy: legL3.joint.y,
                        r: "3.5",
                        fill: accentColor
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legL3.tip.x,
                        cy: legL3.tip.y,
                        r: "4.5",
                        fill: accentColor
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderLegs.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#referenceLegGlow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR2.femurPath,
                        fill: "none",
                        stroke: spiderColor,
                        strokeWidth: "4.0",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR2.tibiaPath,
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "3.0",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legR2.joint.x,
                        cy: legR2.joint.y,
                        r: "3.5",
                        fill: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legR2.tip.x,
                        cy: legR2.tip.y,
                        r: "4.0",
                        fill: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderLegs.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showSeconds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#referenceLegGlow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR3Pointer.femurPath,
                        fill: "none",
                        stroke: spiderColor,
                        strokeWidth: "3.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: legR3Pointer.tibiaPath,
                        fill: "none",
                        stroke: accentColor,
                        strokeWidth: "2.0",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legR3Pointer.joint.x,
                        cy: legR3Pointer.joint.y,
                        r: "2.8",
                        fill: accentColor
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: legR3Pointer.tip.x,
                        cy: legR3Pointer.tip.y,
                        r: "3.5",
                        fill: accentColor
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpiderLegs.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpiderLegs.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpiderLegs.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpiderLegs;
var _c;
__turbopack_context__.k.register(_c, "SpiderLegs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WebBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebBackground",
    ()=>WebBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/spiderGeometry.ts [app-client] (ecmascript)");
'use client';
;
;
const WebBackground = ({ opacity, speed, accentColor, reducedMotion })=>{
    // Delicate small web gear mandalas clustered behind spider body (matching reference image)
    const topCenterWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(400, 310, 65, 12, 4);
    const topLeftWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(330, 360, 70, 12, 4);
    const topRightWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(470, 360, 75, 12, 4);
    const bottomCenterWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(400, 490, 70, 12, 4);
    const bottomLeftWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(335, 450, 55, 10, 3);
    const centerBehindWeb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$spiderGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWebWheelPath"])(400, 400, 45, 10, 3);
    const durationSlow = reducedMotion ? 0 : 70 / Math.max(speed, 0.1);
    const durationFast = reducedMotion ? 0 : 45 / Math.max(speed, 0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "transition-opacity duration-700 pointer-events-none",
        style: {
            opacity: opacity / 100
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "delicateWebGlow",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "0.8",
                            result: "blur"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WebBackground.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                            in: "SourceGraphic",
                            in2: "blur",
                            operator: "over"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WebBackground.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WebBackground.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/WebBackground.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#delicateWebGlow)",
                stroke: accentColor,
                fill: "none",
                strokeWidth: "0.6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '400px 310px',
                            animationDuration: `${durationSlow}s`
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            topCenterWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.25"
                                }, `tc-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            topCenterWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.2 + i * 0.05
                                }, `tc-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '330px 360px',
                            animationDuration: `${durationFast}s`,
                            animationDirection: 'reverse'
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            topLeftWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.25"
                                }, `tl-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            topLeftWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.2 + i * 0.05
                                }, `tl-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '470px 360px',
                            animationDuration: `${durationSlow * 1.1}s`
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            topRightWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.25"
                                }, `tr-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            topRightWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.2 + i * 0.05
                                }, `tr-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '400px 490px',
                            animationDuration: `${durationFast * 1.2}s`,
                            animationDirection: 'reverse'
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            bottomCenterWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.25"
                                }, `bc-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            bottomCenterWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.2 + i * 0.05
                                }, `bc-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '335px 450px',
                            animationDuration: `${durationSlow * 0.9}s`
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            bottomLeftWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.2"
                                }, `bl-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            bottomLeftWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.15 + i * 0.05
                                }, `bl-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            transformOrigin: '400px 400px',
                            animationDuration: `${durationFast * 1.3}s`,
                            animationDirection: 'reverse'
                        },
                        className: !reducedMotion ? 'animate-spin-slow' : '',
                        children: [
                            centerBehindWeb.spokes.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: "0.3"
                                }, `cb-s-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            centerBehindWeb.rings.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: path,
                                    strokeOpacity: 0.2 + i * 0.06
                                }, `cb-r-${i}`, false, {
                                    fileName: "[project]/src/components/WebBackground.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WebBackground.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WebBackground.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WebBackground.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WebBackground;
var _c;
__turbopack_context__.k.register(_c, "WebBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAudioTick.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioTick",
    ()=>useAudioTick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useAudioTick(seconds, soundEnabled, volume) {
    _s();
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevSecondRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(seconds);
    const initAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAudioTick.useCallback[initAudio]": ()=>{
            if (!audioCtxRef.current) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    audioCtxRef.current = new AudioCtx();
                }
            }
            if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
                audioCtxRef.current.resume();
            }
        }
    }["useAudioTick.useCallback[initAudio]"], []);
    const playTick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAudioTick.useCallback[playTick]": (isMajorTick = false)=>{
            if (!soundEnabled || !audioCtxRef.current || volume <= 0) return;
            const ctx = audioCtxRef.current;
            if (ctx.state !== 'running') return;
            const now = ctx.currentTime;
            const gainNode = ctx.createGain();
            const vol = volume / 100 * 0.15;
            gainNode.gain.setValueAtTime(vol, now);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + (isMajorTick ? 0.08 : 0.04));
            // Synthesize wooden/mechanical tick sound using filtered short noise + impulse sine tone
            const osc = ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(isMajorTick ? 1200 : 800, now);
            osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        }
    }["useAudioTick.useCallback[playTick]"], [
        soundEnabled,
        volume
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudioTick.useEffect": ()=>{
            if (seconds !== prevSecondRef.current) {
                prevSecondRef.current = seconds;
                playTick(seconds === 0);
            }
        }
    }["useAudioTick.useEffect"], [
        seconds,
        playTick
    ]);
    return {
        initAudio
    };
}
_s(useAudioTick, "frWfBEMqmptrNp+tilOV6ciac80=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useISTTime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useISTTime",
    ()=>useISTTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000; // +5:30 in milliseconds
function useISTTime() {
    _s();
    const [timeState, setTimeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        timeString: '--:--:--',
        dateString: '',
        isSynced: false,
        syncSource: 'Local System',
        offsetMs: 0
    });
    const offsetMsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Synchronize IST offset from reliable API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useISTTime.useEffect": ()=>{
            let isMounted = true;
            async function syncISTTime() {
                try {
                    const startFetch = Date.now();
                    // Primary API: timeapi.io
                    const res = await fetch('https://timeapi.io/api/v1/time/current/zone?timeZone=Asia/Kolkata', {
                        cache: 'no-store'
                    });
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const data = await res.json();
                    const roundtrip = Date.now() - startFetch;
                    const latencyOffset = roundtrip / 2;
                    // Construct target API date object
                    const apiDate = new Date(data.dateTime);
                    const serverTimestamp = apiDate.getTime() + latencyOffset;
                    const computedOffset = serverTimestamp - Date.now();
                    if ("TURBOPACK compile-time truthy", 1) {
                        offsetMsRef.current = computedOffset;
                        setTimeState({
                            "useISTTime.useEffect.syncISTTime": (prev)=>({
                                    ...prev,
                                    isSynced: true,
                                    syncSource: 'API',
                                    offsetMs: computedOffset
                                })
                        }["useISTTime.useEffect.syncISTTime"]);
                    }
                } catch (err) {
                    console.warn('Primary IST time API fetch failed, trying fallback offset calculation:', err);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Fallback: Compute IST (+5:30) offset relative to UTC
                        const now = new Date();
                        const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
                        const istTimestamp = utcTimestamp + IST_OFFSET_MS;
                        const fallbackOffset = istTimestamp - now.getTime();
                        offsetMsRef.current = fallbackOffset;
                        setTimeState({
                            "useISTTime.useEffect.syncISTTime": (prev)=>({
                                    ...prev,
                                    isSynced: true,
                                    syncSource: 'Local (Calculated Offset)',
                                    offsetMs: fallbackOffset
                                })
                        }["useISTTime.useEffect.syncISTTime"]);
                    }
                }
            }
            syncISTTime();
        }
    }["useISTTime.useEffect"], []);
    // RAF Continuous smooth update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useISTTime.useEffect": ()=>{
            const updateTime = {
                "useISTTime.useEffect.updateTime": ()=>{
                    const now = new Date(Date.now() + offsetMsRef.current);
                    const hours = now.getHours();
                    const minutes = now.getMinutes();
                    const seconds = now.getSeconds();
                    const milliseconds = now.getMilliseconds();
                    const timeString = now.toLocaleTimeString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour12: true,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    });
                    const dateString = now.toLocaleDateString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    setTimeState({
                        "useISTTime.useEffect.updateTime": (prev)=>({
                                ...prev,
                                hours,
                                minutes,
                                seconds,
                                milliseconds,
                                timeString,
                                dateString
                            })
                    }["useISTTime.useEffect.updateTime"]);
                    animFrameRef.current = requestAnimationFrame(updateTime);
                }
            }["useISTTime.useEffect.updateTime"];
            animFrameRef.current = requestAnimationFrame(updateTime);
            return ({
                "useISTTime.useEffect": ()=>{
                    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
                }
            })["useISTTime.useEffect"];
        }
    }["useISTTime.useEffect"], []);
    return timeState;
}
_s(useISTTime, "41Sbvew0vmiSUPAcPtVudzwcxIQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/spiderGeometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAnatomicalPointerLeg",
    ()=>calculateAnatomicalPointerLeg,
    "calculateNaturalSpiderLeg",
    ()=>calculateNaturalSpiderLeg,
    "generateWebWheelPath",
    ()=>generateWebWheelPath
]);
function calculateAnatomicalPointerLeg(origin, baseKneeAngleDeg, kneeDistance, targetAngleDeg, pointerLength, kneeBendSide = 1) {
    const kneeRad = baseKneeAngleDeg * Math.PI / 180;
    // Fixed anatomical knee joint location
    const joint = {
        x: origin.x + kneeDistance * Math.cos(kneeRad),
        y: origin.y + kneeDistance * Math.sin(kneeRad)
    };
    // Target tip on clock face
    const targetRad = targetAngleDeg * Math.PI / 180;
    const tip = {
        x: origin.x + pointerLength * Math.cos(targetRad),
        y: origin.y + pointerLength * Math.sin(targetRad)
    };
    // Curved femur from origin to knee joint
    const midX = (origin.x + joint.x) / 2;
    const midY = (origin.y + joint.y) / 2;
    const ctrlX = midX - kneeBendSide * 15;
    const ctrlY = midY - 20;
    const femurPath = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y}`;
    const tibiaPath = `M ${joint.x} ${joint.y} L ${tip.x} ${tip.y}`;
    const path = `${femurPath} L ${tip.x} ${tip.y}`;
    return {
        path,
        femurPath,
        tibiaPath,
        joint,
        tip
    };
}
function calculateNaturalSpiderLeg(origin, kneeAngleDeg, kneeDist, tipAngleDeg, tipDist, kneeBendSide = 1, idlePhase = 0) {
    const breathing = Math.sin(idlePhase) * 3;
    const kneeRad = kneeAngleDeg * Math.PI / 180;
    const joint = {
        x: origin.x + kneeDist * Math.cos(kneeRad),
        y: origin.y + kneeDist * Math.sin(kneeRad) + breathing * 0.5
    };
    const tipRad = tipAngleDeg * Math.PI / 180;
    const tip = {
        x: origin.x + tipDist * Math.cos(tipRad),
        y: origin.y + tipDist * Math.sin(tipRad) + breathing
    };
    const ctrlX = origin.x + (joint.x - origin.x) * 0.5 - kneeBendSide * 10;
    const ctrlY = origin.y + (joint.y - origin.y) * 0.5 - 15;
    const femurPath = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y}`;
    // Curved tibia extending from knee to tip
    const tibiaCtrlX = joint.x + (tip.x - joint.x) * 0.5 + kneeBendSide * 12;
    const tibiaCtrlY = joint.y + (tip.y - joint.y) * 0.5 + 10;
    const tibiaPath = `M ${joint.x} ${joint.y} Q ${tibiaCtrlX} ${tibiaCtrlY} ${tip.x} ${tip.y}`;
    const path = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y} Q ${tibiaCtrlX} ${tibiaCtrlY} ${tip.x} ${tip.y}`;
    return {
        path,
        femurPath,
        tibiaPath,
        joint,
        tip
    };
}
function generateWebWheelPath(centerX, centerY, radius, spokesCount = 12, ringsCount = 4) {
    const spokes = [];
    const rings = [];
    for(let i = 0; i < spokesCount; i++){
        const angle = i * 2 * Math.PI / spokesCount;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        spokes.push(`M ${centerX} ${centerY} L ${x} ${y}`);
    }
    for(let r = 1; r <= ringsCount; r++){
        const ringRadius = radius / ringsCount * r;
        let ringPath = '';
        for(let i = 0; i <= spokesCount; i++){
            const angle = i % spokesCount * 2 * Math.PI / spokesCount;
            const nextAngle = (i + 1) % spokesCount * 2 * Math.PI / spokesCount;
            const x1 = centerX + ringRadius * Math.cos(angle);
            const y1 = centerY + ringRadius * Math.sin(angle);
            const x2 = centerX + ringRadius * Math.cos(nextAngle);
            const y2 = centerY + ringRadius * Math.sin(nextAngle);
            const midAngle = (angle + nextAngle) / 2;
            const sagRadius = ringRadius * 0.86;
            const ctrlX = centerX + sagRadius * Math.cos(midAngle);
            const ctrlY = centerY + sagRadius * Math.sin(midAngle);
            if (i === 0) {
                ringPath += `M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`;
            } else {
                ringPath += ` Q ${ctrlX} ${ctrlY} ${x2} ${y2}`;
            }
        }
        rings.push(ringPath);
    }
    return {
        spokes,
        rings
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1hoz166._.js.map