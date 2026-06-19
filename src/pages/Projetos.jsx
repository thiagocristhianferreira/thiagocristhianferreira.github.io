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
    "Vue.js": "bg-green-100 text-green-800",
    "Java": "bg-orange-100 text-orange-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
};

function Projetos() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 pb-8 px-4 w-screen font-sans text-gray-800">
            <div className="max-w-4xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 text-center text-blue-800">Projetos</h2>
                <p className="text-center text-gray-600 mb-8">
                    Projetos pessoais e de estudo disponíveis no{" "}
                    <a
                        href="https://github.com/thiagocristhianferreira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900"
                    >
                        GitHub
                    </a>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projetos.map((projeto) => (
                        <div key={projeto.nome} className="bg-white bg-opacity-90 p-5 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                            <div>
                                <div className="flex items-start justify-between mb-2 gap-2">
                                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{projeto.nome}</h3>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${corLinguagem[projeto.linguagem] || "bg-gray-100 text-gray-700"}`}>
                                        {projeto.linguagem}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{projeto.descricao}</p>
                            </div>
                            <a
                                href={projeto.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-sm text-blue-700 font-medium hover:underline"
                            >
                                Ver no GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projetos;
