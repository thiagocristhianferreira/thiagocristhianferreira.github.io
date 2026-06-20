import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const techs = [
    "Java", "Spring", "Node.js", ".NET", "NestJS",
    "TypeScript", "JavaScript", "Vue.js", "React", "Redux", "Context API", "Next.js",
    "PHP", "MySQL", "MongoDB", "Git", "Grafana", "Figma", "Linux/Unix",
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Home() {
    return (
        <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 pb-16 pt-28">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -12 }}
                className="flex w-full max-w-2xl flex-col items-center rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-soft-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70 md:p-12"
            >
                <motion.img
                    variants={item}
                    src="/foto.jpg"
                    alt="Thiago Cristhian Ferreira"
                    className="mb-6 h-36 w-36 rounded-full object-cover shadow-soft ring-4 ring-brand-100 dark:ring-brand-500/30 md:h-44 md:w-44"
                />

                <motion.h2 variants={item} className="font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                    Thiago Cristhian Ferreira
                </motion.h2>
                <motion.p variants={item} className="mt-1 bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-lg font-semibold text-transparent">
                    Desenvolvedor Full Stack Sênior
                </motion.p>

                <motion.p variants={item} className="mt-5 max-w-xl px-2 leading-relaxed text-slate-600 dark:text-slate-300">
                    Desenvolvedor Full Stack desde 2020 e com experiência desde 2021 na <strong className="font-semibold text-slate-800 dark:text-slate-100">Sumicity Telecomunicações</strong>,
                    atuando no desenvolvimento e manutenção de sistemas, integrações via API,
                    testes funcionais e migrações de dados — reduzindo o tempo de migração de empresas
                    adquiridas de <strong className="font-semibold text-slate-800 dark:text-slate-100">1 mês para 3 dias</strong>.
                </motion.p>

                <motion.p variants={item} className="mt-3 max-w-xl px-2 leading-relaxed text-slate-600 dark:text-slate-300">
                    Formado em Engenharia Civil (UFSCar), cursando Engenharia da Computação (UNIVESP)
                    e com certificação Full Stack pela <strong className="font-semibold text-slate-800 dark:text-slate-100">Trybe</strong>. Inglês avançado.
                </motion.p>

                <motion.div variants={item} className="mt-6 flex flex-wrap justify-center gap-2">
                    {techs.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/15 dark:text-brand-300"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/thiago-c-ferreira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/thiagocristhianferreira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-slate-700/60 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                    >
                        <FaGithub /> GitHub
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;
