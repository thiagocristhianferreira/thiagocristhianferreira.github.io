function Curriculo() {
    return (
        <div className="bg-gray-100 min-h-screen text-gray-800 p-8 font-sans">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-blue-800">Thiago Cristhian Ferreira</h1>
                    <p className="mt-2 text-sm">thiagocristhian@gmail.com • (16) 99292-3943</p>
                    <p className="text-sm">Franca - SP</p>
                    <div className="mt-2 flex justify-center space-x-4 text-xl">
                        <a href="https://github.com/thiagocristhianferreira" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">GitHub</a>
                        <a href="https://www.linkedin.com/in/thiago-c-ferreira/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
                    </div>
                </header>

                <div className="flex justify-center mt-6">
                    <a
                        href="/Thiago_CristhianFerreira_Currículo.pdf"
                        download
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Baixar Currículo em PDF
                    </a>
                </div>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Objetivo</h2>
                    <p>Busco oportunidade como desenvolvedor Full Stack para aplicar conhecimentos adquiridos e também evoluir como pessoa e profissional.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Experiência Profissional</h2>
                    <div>
                        <h3 className="font-bold">Analista de Desenvolvimento de Sistemas - SUMICITY TELECOMUNICAÇÕES</h3>
                        <p className="italic text-sm">Nov/2021 - Atual</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Desenvolvimento e manutenção de sistemas internos</li>
                            <li>Correção de bugs e melhorias de performance</li>
                            <li>Documentação técnica e testes funcionais</li>
                            <li>Investigação e tratamento de erros</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Formação Acadêmica</h2>
                    <ul className="list-disc ml-6">
                        <li>Engenharia Civil – UFSCar</li>
                        <li>Engenharia da Computação – UNIVESP</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Habilidades e Competências</h2>
                    <ul className="grid grid-cols-2 gap-x-4 list-disc ml-6">
                        <li>Lógica de programação</li>
                        <li>Git e GitHub</li>
                        <li>React, VueJS, NodeJS</li>
                        <li>Java, PHP, TypeScript</li>
                        <li>MongoDB, MySQL</li>
                        <li>JUnit, testes unitários</li>
                        <li>AutoCAD, Figma, Draw.io</li>
                        <li>Grafana, Unix/Linux</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Cases de Destaque</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold">Criação de chamados e OS massivamente</h3>
                            <p>Desenvolvi uma API para gerar chamados a partir de arquivos CSV, incorporando regras de negócio. Essa solução foi essencial para processos internos e migrações.</p>
                        </div>
                        <div>
                            <h3 className="font-bold">Participação em migração de dados</h3>
                            <p>Participei ativamente da criação e melhoria de uma aplicação de integração de dados de empresas adquiridas. Contribuí para reduzir o tempo de migração de 1 mês para 3 dias.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Curriculo;
