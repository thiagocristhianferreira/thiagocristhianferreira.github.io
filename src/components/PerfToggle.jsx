import { FaBolt } from "react-icons/fa";
import { usePerf } from "../context/PerfContext.jsx";

function PerfToggle() {
    const { lite, toggleLite } = usePerf();

    return (
        <button
            type="button"
            role="switch"
            aria-checked={lite}
            aria-label="Alternar modo de otimização"
            title={lite ? "Modo otimizado ativo — voltar ao visual completo" : "Ativar modo otimizado (mais rápido)"}
            onClick={toggleLite}
            className="relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 transition-colors duration-300 dark:border-white/10 dark:bg-slate-700"
        >
            <span
                className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white text-xs shadow-soft transition-transform duration-300 dark:bg-slate-900 ${
                    lite ? "translate-x-7" : "translate-x-1"
                }`}
            >
                <FaBolt className={lite ? "text-amber-500" : "text-slate-400 dark:text-slate-500"} />
            </span>
        </button>
    );
}

export default PerfToggle;
