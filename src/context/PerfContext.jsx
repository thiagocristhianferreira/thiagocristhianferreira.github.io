import { createContext, useContext, useEffect, useState } from "react";

const PerfContext = createContext(null);

function getInitialLite() {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("lite");
    // Padrão: modo otimizado ligado. Respeita a escolha do usuário quando já houver.
    if (stored === "true") return true;
    if (stored === "false") return false;
    return true;
}

export function PerfProvider({ children }) {
    const [lite, setLite] = useState(getInitialLite);

    useEffect(() => {
        document.documentElement.classList.toggle("lite", lite);
        localStorage.setItem("lite", String(lite));
    }, [lite]);

    const toggleLite = () => setLite((v) => !v);

    return (
        <PerfContext.Provider value={{ lite, toggleLite }}>
            {children}
        </PerfContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePerf() {
    const ctx = useContext(PerfContext);
    if (!ctx) throw new Error("usePerf deve ser usado dentro de PerfProvider");
    return ctx;
}
