import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import FooterPage from "./components/FooterPage.jsx";
import Cases from "./pages/Cases.jsx";
import Curriculo from "./pages/Curriculo.jsx";

function App() {
    return (
        <Router>
            {/* Container principal com scroll habilitado */}
            <div className="relative min-h-screen w-full overflow-x-hidden font-sans">

                {/* Fundo fixo */}
                <div className="fixed inset-0 h-screen w-screen bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/fundo.jpg')" }}></div>

                {/* Overlay escuro sobre o fundo */}
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

                {/* Conteúdo principal (fica acima do fundo e overlay) */}
                <div className="relative z-20 pb-32"> {/* padding-bottom para evitar que o footer fique sobreposto */}
                    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 shadow p-4 flex justify-between items-center z-30">
                    <h1 className="text-2xl font-bold text-white">Meu Portfólio</h1>
                        <div className="space-x-4">
                            <Link to="/" className="text-white hover:underline">Home</Link>
                            <Link to="/projetos" className="text-white hover:underline">Projetos</Link>
                            <Link to="/curriculo" className="text-white hover:underline">Currículo</Link>
                            <Link to="/cases" className="text-white hover:underline">Cases</Link>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="/curriculo" element={<Curriculo />} />
                        <Route path="/cases" element={<Cases />} />
                    </Routes>
                </div>

                {/* Rodapé fixo, visível e acima de tudo */}
                <FooterPage />
            </div>
        </Router>
    );
}

export default App;
