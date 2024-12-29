

const Parther = () => {
    return (
        <div className="">
            <div className="flex text-white py-10">
                {/* Logo */}
                <div className="w-1/2">
                    <img src="./logo2.png" alt="Trillion Quest Logo" />
                </div>

                {/* Sección de texto */}
                <div className=" text-left px-10">
                    <h1 className="font-bold text-5xl">
                        <span className="text-white">PARTNER WITH</span> <br />
                        <span className="text-yellow-400">TRILLION QUEST</span><br />
                        <span className="text-white">AND HELP MILLIONS</span>
                    </h1>
                    <p className="text-2xl mt-2">
                        Together, we create success and <br /> change lives.
                    </p>
                    <div className="flex font-bold items-center">
                        <img src="/assets/fotos.png" alt="Foto" className="w-6 h-6" />
                    </div>
                    <a
                        href="#"
                        className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Sección inferior */}
            <div className="mt-10 text-sm text-center text-white">
                <p className="mb-4">
                    We redefine marketing strategies with innovation and creativity.<br />
                    We transform vision into impactful realities.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-yellow-400 font-medium hover:underline">Instagram</a>
                    <a href="#" className="text-yellow-400 font-medium hover:underline">Facebook</a>
                    <a href="#" className="text-yellow-400 font-medium hover:underline">LinkedIn</a>
                </div>
            </div>
        </div >
    );
};

export default Parther;
