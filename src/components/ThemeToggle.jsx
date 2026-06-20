import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";

function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label="Alternar tema claro e escuro"
            title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
            onClick={toggleTheme}
            className="relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 transition-colors duration-300 dark:border-white/10 dark:bg-slate-700"
        >
            <span
                className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white text-xs shadow-soft transition-transform duration-300 dark:bg-slate-900 ${
                    isDark ? "translate-x-7" : "translate-x-1"
                }`}
            >
                {isDark ? (
                    <FaMoon className="text-brand-300" />
                ) : (
                    <FaSun className="text-amber-500" />
                )}
            </span>
        </button>
    );
}

export default ThemeToggle;
