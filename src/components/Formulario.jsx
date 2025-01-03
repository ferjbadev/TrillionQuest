const Formulario = () => {
    return (
        <div
            className="absolute left-4 sm:left-10 md:left-40 top-80 sm:top-72 md:top-96 transform z-20 -translate-y-1/2 md:bg-gray-600/50 lg:bg-gray-600/50 rounded-3xl pointer-events-auto w-[180px] h-[350px] md:w-[300px] md:h-[350px] lg:w-[360px] lg:h-[400px] mx-auto">
            <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-lg text-center">
                <h1 className="text-1xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                    Grow Your Brand
                </h1>
                <p className="text-white text-sm md:text-xl mb-6">
                    By partnering with Trillion Quest
                </p>

                <form className="space-y-4 md:space-y-6 gl:space-y-8 relative z-40">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-[30vw] md:w-full gl:w-full h-10 sm:h-[42px] px-3 py-2 rounded-xl bg-white text-center text-black placeholder-black md:text-gray-800 md:placeholder-gray-500 gl:text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-[30vw] md:w-full gl:w-full h-10 sm:h-[42px] px-3 py-2 rounded-xl bg-white text-center text-black placeholder-black md:text-gray-800 md:placeholder-gray-500 gl:text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-[30vw] md:w-full gl:w-full h-10 sm:h-[42px] px-3 py-2 rounded-xl bg-white text-center text-black placeholder-black md:text-gray-800 md:placeholder-gray-500 gl:text-gray-800 gl:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <button
                        type="submit"
                        className="w-[30vw] md:w-full gl:w-full h-10 md:h-[42px] gl:h-[84px] px-3 bg-gray-700 border text-white rounded-xl font-bold hover:bg-gray-600 transition-colors duration-200 tracking-wide text-sm md:text-xl">
                        Get Your Free Proposal
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
