import {FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function FooterPage() {
    return (
        <div className="fixed bottom-8 w-full z-50">
            <div className="flex flex-wrap gap-8 justify-center text-3xl">
                <a
                    href="https://wa.me/seu-numero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition-transform transform hover:scale-150
                     duration-300 ease-in-out"
                    title="Falar no WhatsApp"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://linkedin.com/in/seu-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-150
                     duration-300 ease-in-out"
                    title="Meu LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/seu-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black transition-transform transform hover:scale-150
                     duration-300 ease-in-out"
                    title="Meu GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:seu-email@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-150
                     duration-300 ease-in-out"
                    title="Enviar um e-mail"
                >
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
}

export default FooterPage;
