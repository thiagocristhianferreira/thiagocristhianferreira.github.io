import {useState} from "react";

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

export default Projetos;
