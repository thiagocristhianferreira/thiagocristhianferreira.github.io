function Curriculo() {
    return (
        <div className="flex items-center justify-center min-h-screen pt-24 px-4 w-screen text-gray-800 font-sans">
            <div className="max-w-3xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-10 space-y-8">

                <header className="text-center">
                    <h1 className="text-4xl font-bold text-blue-800">Thiago Cristhian Ferreira</h1>
                    <p className="mt-2 text-blue-700 font-medium">Desenvolvedor Fullstack Sênior</p>
                    <p className="mt-2 text-sm text-gray-600">thiagocristhian@gmail.com • (16) 99292-3943 • Franca – SP</p>
                    <div className="mt-3 flex justify-center space-x-4 text-sm font-medium">
                        <a href="https://github.com/thiagocristhianferreira" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/thiago-c-ferreira/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
                    </div>
                </header>

                <div className="flex justify-center">
                    <a
                        href="/Thiago_CristhianFerreira_Currículo.pdf"
                        download
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
                    >
                        Baixar Currículo em PDF
                    </a>
                </div>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-3">Objetivo</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Busco oportunidade como desenvolvedor Full Stack para aplicar conhecimentos adquiridos
                        e também evoluir como pessoa e como profissional.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-4">Experiência Profissional</h2>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                            <h3 className="font-bold text-gray-900">Analista de Desenvolvimento de Sistemas</h3>
                            <span className="text-sm text-gray-500 italic">Nov/2021 – Atual</span>
                        </div>
                        <p className="text-blue-700 font-medium mb-2">SUMICITY TELECOMUNICAÇÕES S.A.</p>
                        <ul className="list-disc ml-6 space-y-1 text-gray-700">
                            <li>Desenvolvimento e manutenção de sistemas internos, contribuindo para a solução de problemas e atendimento às necessidades dos clientes.</li>
                            <li>Correção de bugs e melhorias de performance em sistemas legados e novos.</li>
                            <li>Documentação técnica de projetos para equipes de tecnologia e usuários finais.</li>
                            <li>Testes funcionais de interface, comportamento e desempenho para garantir a qualidade das entregas.</li>
                            <li>Investigação, correção e tratamento de erros para estabilização de sistemas em produção.</li>
                            <li>Desenvolvimento de API para criação massiva de chamados e ordens de serviço a partir de arquivos CSV.</li>
                            <li>Participação ativa na aplicação de migração de dados de empresas adquiridas, reduzindo o tempo de integração de 1 mês para apenas 3 dias.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-4">Formação Acadêmica</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <span className="font-semibold">Engenharia da Computação</span> – UNIVESP
                        </li>
                        <li>
                            <span className="font-semibold">Engenharia Civil</span> – UFSCar
                        </li>
                        <li>
                            <span className="font-semibold">Desenvolvedor Full Stack Júnior</span> – Trybe
                            <p className="text-sm text-gray-500 mt-1">
                                Front-end: React, Redux, Context API, React Hooks, VueJS, RTL, metodologias ágeis.
                                Back-end: MySQL, MongoDB, Node.js, PHP, Java, TypeScript, Sockets, MSC, MVC.
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-4">Habilidades e Competências</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                        {[
                            "Lógica de programação avançada",
                            "React, Vue.js, Node.js",
                            "Java, PHP, TypeScript",
                            "MySQL, MongoDB",
                            "Git e GitHub",
                            "JUnit e testes unitários",
                            "Integração de sistemas",
                            "Grafana",
                            "Figma, Draw.io (prototipagem)",
                            "Unix/Linux (bash, zsh)",
                            "AutoCAD (avançado)",
                            "Autoaprendizagem e resolução de problemas",
                        ].map((skill) => (
                            <div key={skill} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-700 rounded-full flex-shrink-0"></span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-200 pb-1 mb-3">Idiomas</h2>
                    <ul className="space-y-1 text-gray-700">
                        <li><span className="font-semibold">Inglês</span> – Avançado</li>
                        <li><span className="font-semibold">Espanhol</span> – Básico</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

export default Curriculo;
