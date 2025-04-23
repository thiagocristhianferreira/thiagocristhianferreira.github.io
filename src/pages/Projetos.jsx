import { useState } from "react";

function Projetos() {
    const [projetos] = useState([
        { nome: "Projeto 1", descricao: "Descrição breve do projeto 1." },
        { nome: "Projeto 2", descricao: "Descrição breve do projeto 2." },
        { nome: "Projeto 3", descricao: "Descrição breve do projeto 3." },
    ]);

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-6 px-4 w-screen font-sans text-gray-800">
            <div className="max-w-4xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projetos.map((projeto, index) => (
                        <div key={index} className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{projeto.nome}</h3>
                            <p className="text-gray-700">{projeto.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projetos;
