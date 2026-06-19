function Home() {
    const techs = [
        "React", "Vue.js", "Node.js", "TypeScript", "Java", "PHP",
        "MySQL", "MongoDB", "Git", "Grafana", "Figma", "Linux/Unix",
    ];

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 pb-8 px-4 w-screen">
            <div className="max-w-3xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <img
                    src="/foto.jpg"
                    alt="Thiago Cristhian Ferreira"
                    className="rounded-full w-36 h-36 md:w-44 md:h-44 object-cover mb-6 shadow-lg border-4 border-blue-700"
                />

                <h2 className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">Thiago Cristhian Ferreira</h2>
                <p className="text-blue-700 font-semibold text-lg mb-4">Desenvolvedor Fullstack Sênior</p>

                <p className="max-w-xl text-gray-700 mb-4 px-2 leading-relaxed">
                    Desenvolvedor Full Stack desde 2020 e com experiência desde 2021 na <strong>Sumicity Telecomunicações</strong>,
                    atuando no desenvolvimento e manutenção de sistemas, integrações via API,
                    testes funcionais e migrações de dados — reduzindo o tempo de migração de empresas
                    adquiridas de <strong>1 mês para 3 dias</strong>.
                </p>

                <p className="max-w-xl text-gray-700 mb-6 px-2 leading-relaxed">
                    Formado em Engenharia Civil (UFSCar), cursando Engenharia da Computação (UNIVESP)
                    e com certificação Full Stack pela <strong>Trybe</strong>. Inglês avançado.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {techs.map((tech) => (
                        <span
                            key={tech}
                            className="bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/thiago-c-ferreira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/thiagocristhianferreira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-black text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
