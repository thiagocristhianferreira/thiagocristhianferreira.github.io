import {useState} from "react";

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

export default Cases;
