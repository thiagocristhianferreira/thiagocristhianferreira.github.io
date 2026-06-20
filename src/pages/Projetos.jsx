import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projetos = [
    {
        nome: "App de Mensagens — Front-end",
        descricao: "Interface de chat desenvolvida em Vue.js, consumindo API REST com comunicação em tempo real.",
        linguagem: "Vue.js",
        url: "https://github.com/thiagocristhianferreira/app-message-front",
    },
    {
        nome: "App de Mensagens — Back-end",
        descricao: "API de mensagens em Java com arquitetura MVC, responsável pela lógica de negócio e persistência.",
        linguagem: "Java",
        url: "https://github.com/thiagocristhianferreira/app-message-back",
    },
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
        nome: "Ping Domain Status",
        descricao: "Ferramenta JavaScript para verificar o status de domínios, útil para monitoramento de disponibilidade.",
        linguagem: "JavaScript",
        url: "https://github.com/thiagocristhianferreira/pingDomainStatus",
    },
    {
        nome: "API Java Demo",
        descricao: "Primeira API REST construída em Java, demonstrando endpoints, mapeamento de rotas e boas práticas.",
        linguagem: "Java",
        url: "https://github.com/thiagocristhianferreira/api-java-demo",
    },
    {
        nome: "Project Vue",
        descricao: "Projeto de estudo e prática com Vue.js explorando componentes, reatividade e ciclo de vida.",
        linguagem: "Vue.js",
        url: "https://github.com/thiagocristhianferreira/project-vue",
    },
    {
        nome: "JAVA CodeNation",
        descricao: "Coleção de exercícios e desafios de programação em Java desenvolvidos durante a CodeNation.",
        linguagem: "Java",
        url: "https://github.com/thiagocristhianferreira/JAVA-codenation",
    },
];

const corLinguagem = {
    "Vue.js": "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/20",
    "Java": "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/20",
    "JavaScript": "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-500/15 dark:text-yellow-300 dark:border-yellow-400/20",
};

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

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

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                    {projetos.map((projeto) => (
                        <motion.a
                            key={projeto.nome}
                            variants={item}
                            href={projeto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:border-white/10 dark:bg-slate-800/60"
                        >
                            <div>
                                <div className="mb-2 flex items-start justify-between gap-2">
                                    <h3 className="font-display text-lg font-semibold leading-tight text-slate-900 dark:text-white">{projeto.nome}</h3>
                                    <span className={`flex-shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${corLinguagem[projeto.linguagem] || "border-slate-100 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"}`}>
                                        {projeto.linguagem}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{projeto.descricao}</p>
                            </div>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                                Ver no GitHub
                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Projetos;
