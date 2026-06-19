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

function Cases() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 pb-8 px-4 w-screen font-sans text-gray-800">
            <div className="max-w-3xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 text-center text-blue-800">Cases de Destaque</h2>
                <p className="text-center text-gray-600 mb-8">
                    Desafios reais enfrentados na Sumicity Telecomunicações e as soluções desenvolvidas.
                </p>
                <div className="space-y-8">
                    {cases.map((c) => (
                        <div key={c.titulo} className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{c.titulo}</h3>

                            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                <div>
                                    <span className="font-semibold text-blue-700 uppercase tracking-wide text-xs">Contexto</span>
                                    <p className="mt-1">{c.contexto}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-blue-700 uppercase tracking-wide text-xs">Solução</span>
                                    <p className="mt-1">{c.solucao}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-blue-700 uppercase tracking-wide text-xs">Impacto</span>
                                    <p className="mt-1 font-medium text-gray-900">{c.impacto}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {c.tags.map((tag) => (
                                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cases;
