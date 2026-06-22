import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaJava, FaPython, FaJs, FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const projetosEducacionais = [
    {
        nome: "Cadastro de Especialidades",
        descricao: "Sistema Java para cadastro e gerenciamento de especialidades médicas com CRUD completo.",
        linguagem: "Java",
        url: "https://github.com/thiagocristhianferreira/cadastro-especialidades",
    },
    {
        nome: "App Chess",
        descricao: "Jogo de xadrez desenvolvido em Java com regras completas, movimentos especiais e controle de turno.",
        linguagem: "Java",
        url: "https://github.com/thiagocristhianferreira/app-chess",
    },
    {
        nome: "Project TING",
        descricao: "Motor de busca de notícias em Python (Trybe is not Google), aplicando estruturas de dados como fila e pilha, processamento de arquivos TXT e índice invertido.",
        linguagem: "Python",
        url: "https://github.com/thiagocristhianferreira/project-ting",
    },
    {
        nome: "Marvel App",
        descricao: "Aplicação React + Redux Toolkit (RTK Query) em TypeScript que consome a API da Marvel, com busca, paginação, página de detalhes e favoritos.",
        linguagem: "TypeScript",
        url: "https://github.com/thiagocristhianferreira/projeto_marvel_app",
        demo: "https://projetomarvelapp.netlify.app/",
    },
];

const desafios = [
    {
        nome: "Timer App",
        descricao: "App de timer Pomodoro em React para gestão de foco e produtividade, com deploy na Netlify.",
        linguagem: "JavaScript",
        url: "https://github.com/thiagocristhianferreira/timer-app",
        demo: "https://projeto-timer-app.netlify.app/",
    },
];

const corLinguagem = {
    "Vue.js": "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/20",
    "Java": "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/20",
    "JavaScript": "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-500/15 dark:text-yellow-300 dark:border-yellow-400/20",
    "Python": "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-400/20",
    "TypeScript": "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-400/20",
};

const iconeLinguagem = {
    "Java": FaJava,
    "Python": FaPython,
    "JavaScript": FaJs,
    "Vue.js": FaVuejs,
    "TypeScript": SiTypescript,
};

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function ProjetoCard({ projeto }) {
    const IconeLinguagem = iconeLinguagem[projeto.linguagem];
    return (
        <motion.div
            variants={item}
            className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:border-white/10 dark:bg-slate-800/60"
        >
            <div>
                <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-tight text-slate-900 dark:text-white">{projeto.nome}</h3>
                    <span className={`flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${corLinguagem[projeto.linguagem] || "border-slate-100 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"}`}>
                        {IconeLinguagem && <IconeLinguagem className="text-sm" aria-hidden="true" />}
                        {projeto.linguagem}
                    </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{projeto.descricao}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                {projeto.demo && (
                    <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline underline-offset-2"
                    >
                        Ver online
                        <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </a>
                )}
                <a
                    href={projeto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-brand-600 hover:underline underline-offset-2 dark:text-slate-400"
                >
                    Ver no GitHub
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
}

function Categoria({ titulo, projetos, className = "" }) {
    return (
        <section className={className}>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{titulo}</h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2"
            >
                {projetos.map((projeto) => (
                    <ProjetoCard key={projeto.nome} projeto={projeto} />
                ))}
            </motion.div>
        </section>
    );
}

function Projetos() {
    return (
        <div className="px-4 pb-16 pt-28">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto w-full max-w-4xl rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70 md:p-10"
            >
                <h2 className="text-center font-display text-3xl font-bold text-slate-900 dark:text-white">Projetos</h2>
                <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
                    Projetos pessoais e de estudo disponíveis no{" "}
                    <a
                        href="https://github.com/thiagocristhianferreira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-600 underline-offset-2 hover:underline"
                    >
                        GitHub
                    </a>
                </p>

                <Categoria titulo="Projetos Educacionais" projetos={projetosEducacionais} className="mt-8" />
                <Categoria titulo="Desafios" projetos={desafios} className="mt-12" />
            </motion.div>
        </div>
    );
}

export default Projetos;
