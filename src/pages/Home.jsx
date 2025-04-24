function Home() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-6 px-4 w-screen">
            <div className="max-w-3xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <img
                    src="/foto.jpg"
                    alt="Minha Foto"
                    className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-6 shadow-lg"
                />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Thiago Cristhian Ferreira</h2>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Sou desenvolvedor Full Stack apaixonado por tecnologia e por criar soluções que fazem a diferença.
                </p>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Atuo com foco na resolução de problemas reais e na construção de sistemas robustos e eficientes.
                </p>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Atualmente trabalho na Sumicity Telecomunicações, onde desenvolvo APIs, realizo integrações e ajudo em
                    migrações de dados de empresas adquiridas, reduzindo o tempo de integração de um mês para apenas três dias.
                </p>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Tenho experiência com React, Node.js, Java, TypeScript, bancos de dados SQL/NoSQL e ferramentas como Figma e Grafana.
                </p>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Amo aprender, compartilhar e transformar ideias em soluções funcionais e impactantes.
                </p>
            </div>
        </div>

    );
}

export default Home;
