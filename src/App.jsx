import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import FooterPage from "./components/FooterPage.jsx";
import Cases from "./pages/Cases.jsx";

function App() {
    return (
        <Router>
            <div className="relative w-screen h-screen overflow-hidden font-sans">
                <div className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/fundo.jpg')" }}></div>
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
                <FooterPage />
            </div>
        </Router>
    );
}

export default App;