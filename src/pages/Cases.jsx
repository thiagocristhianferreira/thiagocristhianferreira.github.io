import { motion } from "framer-motion";

const cases = [
    {
        titulo: "Criação de Chamados e OS Massivamente",
        contexto: "Devido a várias mudanças na empresa, não existia uma forma de criar massivamente chamados e ordens de serviço de forma pontual ou particularizada.",
        solucao: "Desenvolvi uma API que reúne todas as regras de negócio para criação de chamados e OS. Os dados necessários são importados de um arquivo .CSV, extraído do sistema interno.",
        impacto: "A solução contribuiu para a resolução de problemas pontuais e, posteriormente, a API serviu como base e foi incorporada à aplicação de migração da empresa nos processos de aquisição de outras empresas.",
        tags: ["API REST", "Regras de Negócio", "CSV", "Automação"],
    },
    {
        titulo: "Migração de Dados de Empresas Adquiridas",
        contexto: "Ao adquirir outras empresas, a Sumicity precisava migrar e integrar dados dos sistemas legados dos adquiridos para o sistema interno — processo que inicialmente levava cerca de um mês.",
        solucao: "Participei ativamente do desenvolvimento e melhoria da aplicação de migração. Trabalhei na investigação, correção e tratamento de erros de integração durante as migrações. Toda a lógica de criação de chamados/OS foi incorporada nessa aplicação via rotinas automatizadas.",
        impacto: "Com o aprimoramento contínuo e a prevenção de erros entre cada ciclo de migração, reduzimos o tempo total de integração de 1 mês para apenas 3 dias (sexta-feira a domingo).",
        tags: ["Migração de Dados", "Integração", "Automação", "Performance"],
    },
];

const item = {
    hidden: { opacity: 0, y: 18 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 } }),
};

function Cases() {
    return (
        <div className="px-4 pb-16 pt-28">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mx-auto w-full max-w-3xl rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70 md:p-10"
            >
                <h2 className="text-center font-display text-3xl font-bold text-slate-900 dark:text-white">Cases de Destaque</h2>
                <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
                    Desafios reais enfrentados na Sumicity Telecomunicações e as soluções desenvolvidas.
                </p>

                <div className="mt-8 space-y-6">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.titulo}
                            custom={i}
                            variants={item}
                            initial="hidden"
                            animate="show"
                            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-800/60"
                        >
                            <h3 className="mb-4 font-display text-xl font-bold text-slate-900 dark:text-white">{c.titulo}</h3>

                            <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                <div className="border-l-2 border-brand-200 pl-4 dark:border-brand-400/30">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">Contexto</span>
                                    <p className="mt-1">{c.contexto}</p>
                                </div>
                                <div className="border-l-2 border-brand-200 pl-4 dark:border-brand-400/30">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">Solução</span>
                                    <p className="mt-1">{c.solucao}</p>
                                </div>
                                <div className="rounded-xl bg-brand-50 p-4 dark:bg-brand-500/10">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">Impacto</span>
                                    <p className="mt-1 font-medium text-slate-800 dark:text-slate-100">{c.impacto}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {c.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/15 dark:text-brand-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Cases;
