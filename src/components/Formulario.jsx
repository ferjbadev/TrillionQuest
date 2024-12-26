const Formulario = () => {
    return (
        // Formulario
        <div
            className="absolute left-48 top-96 transform -translate-y-1/2 bg-black/50 rounded-3xl z-30 pointer-events-auto"
            style={{ width: "311px", height: "390px" }}
        >
            <div className="w-full h-full p-6 rounded-lg text-center">
                <h1 className="text-3xl font-bold text-yellow-400 mb-2">
                    Grow Your Brand
                </h1>
                <p className="text-white text-lg mb-6">
                    By partnering with Trillion Quest
                </p>

                <form className="space-y-6 relative z-40">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-[270px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-[270px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-[270px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <button
                        type="submit"
                        className="w-[270px] h-[42px] py-2 px-3 bg-gray-700 border border-x-white text-white rounded-xl font-bold hover:bg-gray-600 transition-colors duration-200 uppercase tracking-wide text-sm"
                    >
                        Get Your Free Proposal
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
