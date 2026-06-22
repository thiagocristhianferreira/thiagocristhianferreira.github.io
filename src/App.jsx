import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import FooterPage from "./components/FooterPage.jsx";
import Cases from "./pages/Cases.jsx";
import Curriculo from "./pages/Curriculo.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

// Carregado sob demanda (não bloqueia o render inicial): o chunk com three.js
// (~242KB gzip) baixa em paralelo enquanto a página já aparece.
const Silk = lazy(() => import("./components/Silk.jsx"));

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/projetos", label: "Projetos" },
    { to: "/curriculo", label: "Currículo" },
    { to: "/cases", label: "Cases" },
];

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-30 w-full border-b border-white/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-3 sm:px-6">
                <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-bold text-slate-800 dark:text-white">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white shadow-soft">
                        TF
                    </span>
                    <span className="hidden font-semibold sm:inline">Thiago Ferreira</span>
                </NavLink>
                <div className="flex items-center gap-0.5 sm:gap-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `rounded-full px-2 py-1.5 text-sm font-medium transition-colors duration-200 sm:px-3 ${
                                    isActive
                                        ? "bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <span className="mx-1 hidden h-5 w-px bg-slate-200 dark:bg-white/10 sm:block" />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

function Background() {
    const { isDark } = useTheme();

    // Silk em ambos os temas, sempre animando.
    // Light: cor bem clara + véu branco para manter o texto legível.
    // Dark: índigo on-brand + véu escuro.
    const silkColor = isDark ? "#6366f1" : "#c7d2fe";
    const noiseIntensity = isDark ? 1.2 : 0.7;
    const veil = isDark ? "bg-slate-950/65" : "bg-white/75";

    return (
        <>
            {/* Base em gradiente atrás do Silk (fallback enquanto o chunk carrega) */}
            <div className="fixed inset-0 -z-20 bg-gradient-to-b from-slate-50 via-brand-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900" />

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                {/* Silk em baixa resolução (dpr baixo): a ampliação pelo navegador já
                    entrega o padrão suave/borrado de graça. Sem filtro CSS blur aqui —
                    blur sobre um canvas que anima por frame força re-rasterização da
                    tela inteira a cada frame e era o que pesava na GPU. */}
                <div className="absolute inset-0 scale-105">
                    <Suspense fallback={null}>
                        <Silk speed={4} scale={1} color={silkColor} noiseIntensity={noiseIntensity} rotation={0} dpr={0.45} />
                    </Suspense>
                </div>
                {/* Véu para legibilidade / suavizar o padrão */}
                <div className={`absolute inset-0 ${veil}`} />
            </div>
        </>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/curriculo" element={<Curriculo />} />
                <Route path="/cases" element={<Cases />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden font-sans">
                <Background />

                <Navbar />

                <main className="relative z-10 flex-1">
                    <AnimatedRoutes />
                </main>

                <FooterPage />
            </div>
        </Router>
    );
}

export default App;
