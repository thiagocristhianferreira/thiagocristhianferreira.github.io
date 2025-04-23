import { useState } from "react";

function Cases() {
    const [cases] = useState([
        { titulo: "Case 1", descricao: "Desafio superado e solução encontrada." },
        { titulo: "Case 2", descricao: "Problema enfrentado e como foi resolvido." },
    ]);

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-6 px-4 w-screen font-sans text-gray-800">
            <div className="max-w-3xl w-full mx-auto bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Cases</h2>
                <div className="space-y-6">
                    {cases.map((c, index) => (
                        <div key={index} className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{c.titulo}</h3>
                            <p className="text-gray-700">{c.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cases;
