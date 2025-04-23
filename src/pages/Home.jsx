function Home() {
    return (
        <div className="flex items-center justify-center text-center p-6 min-h-screen z-20">
            <div className="fixed top-20 bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col items-center">
                <img
                    src="/foto.jpg"
                    alt="Minha Foto"
                    className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-6 shadow-lg"
                />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Seu Nome</h2>
                <p className="max-w-xl text-gray-700 mb-6 px-4">
                    Uma breve descrição sobre você, sua trajetória, paixões e o que busca como dev.
                </p>
            </div>
        </div>
    );
}

export default Home;
