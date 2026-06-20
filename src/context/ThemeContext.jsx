import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
    return ctx;
}
