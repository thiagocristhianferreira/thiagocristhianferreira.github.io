import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import {FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function App() {
    return (
        <Router>
            <div className="relative w-screen h-screen w-full overflow-hidden font-sans">
                <div className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fundo.jpg')" }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <nav className="bg-black bg-opacity-60 shadow p-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">Meu Portfólio</h1>
                        <div className="space-x-4">
                            <Link to="/" className="text-white hover:underline">Home</Link>
                            <Link to="/projetos" className="text-white hover:underline">Projetos</Link>
                            <Link to="/cases" className="text-white hover:underline">Cases</Link>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="/cases" element={<Cases />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="flex items-center justify-center text-center p-6 min-h-screen">
            <div className="bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col items-center">
                <img
                    src="/foto.jpg"
                    alt="Minha Foto"
                    className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-6 shadow-lg"
                />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Seu Nome</h2>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Uma breve descrição sobre você, sua trajetória, paixões e o que busca como dev.
                </p>
                <div className="flex flex-wrap gap-8 justify-center text-3xl">
                    <a
                        href="https://wa.me/seu-numero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-110"
                        title="Falar no WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://linkedin.com/in/seu-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
                        title="Meu LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/seu-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-transform transform hover:scale-110"
                        title="Meu GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:seu-email@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
                        title="Enviar um e-mail"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
    );
}

function Projetos() {
    const [projetos] = useState([
        { nome: "Projeto 1", descricao: "Descrição breve do projeto 1." },
        { nome: "Projeto 2", descricao: "Descrição breve do projeto 2." },
        { nome: "Projeto 3", descricao: "Descrição breve do projeto 3." },
    ]);

    return (
        <div className="p-6 bg-white bg-opacity-80 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projetos.map((projeto, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">{projeto.nome}</h3>
                        <p className="text-gray-600">{projeto.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Cases() {
    const [cases] = useState([
        { titulo: "Case 1", descricao: "Desafio superado e solução encontrada." },
        { titulo: "Case 2", descricao: "Problema enfrentado e como foi resolvido." },
    ]);

    return (
        <div className="p-6 bg-white bg-opacity-80 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Cases</h2>
            <div className="space-y-4">
                {cases.map((c, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">{c.titulo}</h3>
                        <p className="text-gray-600">{c.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;