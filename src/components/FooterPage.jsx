import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
    { href: "https://wa.me/5516992923943", icon: FaWhatsapp, title: "Falar no WhatsApp", hover: "hover:text-emerald-500" },
    { href: "https://www.linkedin.com/in/thiago-c-ferreira/", icon: FaLinkedin, title: "Meu LinkedIn", hover: "hover:text-brand-600" },
    { href: "https://github.com/thiagocristhianferreira", icon: FaGithub, title: "Meu GitHub", hover: "hover:text-slate-900 dark:hover:text-white" },
    { href: "mailto:thiagocristhian@gmail.com", icon: FaEnvelope, title: "Enviar um e-mail", hover: "hover:text-rose-500" },
];

function FooterPage() {
    return (
        <footer className="relative z-10 mt-auto border-t border-white/60 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-6">
                <div className="flex items-center gap-6 text-xl text-slate-500 dark:text-slate-400">
                    {links.map(({ href, icon: Icon, title, hover }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={title}
                            aria-label={title}
                            className={`transition-all duration-300 hover:-translate-y-0.5 ${hover}`}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} Thiago Cristhian Ferreira — Desenvolvido com React & Tailwind
                </p>
            </div>
        </footer>
    );
}

export default FooterPage;
