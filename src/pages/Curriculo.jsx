import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const skills = [
    "Lógica de programação avançada",
    "React, Redux, Context API, Next.js",
    "Vue.js, Node.js, NestJS",
    "Java, Spring, C#, .NET",
    "TypeScript, JavaScript, PHP",
    "MySQL, MongoDB",
    "Git e GitHub",
    "JUnit e testes unitários",
    "Integração de sistemas",
    "Grafana",
    "Figma, Draw.io (prototipagem)",
    "Unix/Linux (bash, zsh)",
    "AutoCAD (avançado)",
    "Autoaprendizagem e resolução de problemas",
];

function SectionTitle({ children }) {
    return (
        <h2 className="mb-3 border-b border-slate-200 pb-1.5 font-display text-2xl font-semibold text-slate-900 dark:border-white/10 dark:text-white">
            {children}
        </h2>
    );
}

function Curriculo() {
    return (
        <div className="px-4 pb-16 pt-28">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto w-full max-w-3xl space-y-8 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70 md:p-10"
            >
                <header className="text-center">
                    <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Thiago Cristhian Ferreira</h1>
                    <p className="mt-2 bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text font-medium text-transparent">
                        Desenvolvedor Full Stack Sênior
                    </p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">thiagocristhian@gmail.com • (16) 99292-3943 • Franca – SP</p>
                    <div className="mt-3 flex justify-center gap-4 text-sm font-medium">
                        <a href="https://github.com/thiagocristhianferreira" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/thiago-c-ferreira/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </header>

                <div className="flex justify-center">
                    <a
                        href="/Thiago_CristhianFerreira_Currículo.pdf"
                        download
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg"
                    >
                        <FaDownload /> Baixar Currículo em PDF
                    </a>
                </div>

                <section>
                    <SectionTitle>Sobre mim</SectionTitle>
                    <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                        Sou Desenvolvedor Full Stack com foco em resolver problemas reais de negócio — não apenas
                        escrever código, mas entregar <strong className="text-slate-800 dark:text-slate-100">impacto mensurável</strong>.
                    </p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            <span><strong className="text-slate-800 dark:text-slate-100">Integração e migração de dados</strong> — reduzi o
                                tempo de uma migração crítica de <strong className="text-slate-800 dark:text-slate-100">1 mês para 3 dias</strong>,
                                garantindo continuidade operacional em processos de M&amp;A.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            <span><strong className="text-slate-800 dark:text-slate-100">Automação de processos de negócio</strong> —
                                desenvolvi APIs que centralizam regras de negócio e eliminam trabalho manual, transformando
                                relatórios .CSV em chamados e ordens de serviço em escala.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            <span><strong className="text-slate-800 dark:text-slate-100">Estabilização e confiabilidade de sistemas</strong> —
                                atuo na linha de frente em produção: investigação, diagnóstico e correção de falhas com foco em
                                reduzir o tempo de indisponibilidade.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            <span><strong className="text-slate-800 dark:text-slate-100">Observabilidade</strong> — monitoramento de
                                aplicações com Grafana, antecipando falhas antes que virem incidentes.</span>
                        </li>
                    </ul>
                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                        Engenheiro de formação, com mentalidade orientada a qualidade: código limpo, cobertura de testes e
                        decisões técnicas embasadas no <em>porquê</em> — não apenas no <em>como</em>. Gosto de entender o
                        problema a fundo antes de escrever a primeira linha. É isso que diferencia software que funciona de
                        software que resolve.
                    </p>
                </section>

                <section>
                    <SectionTitle>Experiência Profissional</SectionTitle>
                    <div className="mb-1 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Analista de Desenvolvimento de Sistemas</h3>
                        <span className="text-sm italic text-slate-500 dark:text-slate-400">Nov/2021 – Atual</span>
                    </div>
                    <p className="mb-2 font-medium text-brand-600 dark:text-brand-300">SUMICITY TELECOMUNICAÇÕES S.A.</p>
                    <ul className="ml-5 list-disc space-y-1 text-slate-600 marker:text-brand-400 dark:text-slate-300">
                        <li>Desenvolvimento e manutenção de sistemas internos, contribuindo para a solução de problemas e atendimento às necessidades dos clientes.</li>
                        <li>Correção de bugs e melhorias de performance em sistemas legados e novos.</li>
                        <li>Documentação técnica de projetos para equipes de tecnologia e usuários finais.</li>
                        <li>Testes funcionais de interface, comportamento e desempenho para garantir a qualidade das entregas.</li>
                        <li>Investigação, correção e tratamento de erros para estabilização de sistemas em produção.</li>
                        <li>Desenvolvimento de API para criação massiva de chamados e ordens de serviço a partir de arquivos CSV.</li>
                        <li>Participação ativa na aplicação de migração de dados de empresas adquiridas, reduzindo o tempo de integração de 1 mês para apenas 3 dias.</li>
                    </ul>
                </section>

                <section>
                    <SectionTitle>Formação Acadêmica</SectionTitle>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        <li><span className="font-semibold text-slate-800 dark:text-slate-100">Engenharia da Computação</span> – UNIVESP</li>
                        <li><span className="font-semibold text-slate-800 dark:text-slate-100">Engenharia Civil</span> – UFSCar</li>
                        <li>
                            <span className="font-semibold text-slate-800 dark:text-slate-100">Desenvolvedor Full Stack Júnior</span> – Trybe
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Front-end: React, Redux, Context API, React Hooks, VueJS, RTL, metodologias ágeis.
                                Back-end: MySQL, MongoDB, Node.js, PHP, Java, TypeScript, Sockets, MSC, MVC.
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <SectionTitle>Habilidades e Competências</SectionTitle>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                        {skills.map((skill) => (
                            <div key={skill} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionTitle>Idiomas</SectionTitle>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                        <li><span className="font-semibold text-slate-800 dark:text-slate-100">Inglês</span> – Avançado</li>
                        <li><span className="font-semibold text-slate-800 dark:text-slate-100">Espanhol</span> – Básico</li>
                    </ul>
                </section>
            </motion.div>
        </div>
    );
}

export default Curriculo;
