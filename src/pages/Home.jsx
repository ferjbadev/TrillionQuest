import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center z-20">
            {/* Aro de luz animado */}
            <motion.div
                className="absolute inset-0 bg-[url('/assets/aroDeLuz.png')] bg-no-repeat bg-center"
                style={{ backgroundSize: "80%" }}
                animate={{
                    scale: [1, 1.1, 1], // Escala del aro
                    opacity: [0.8, 1, 0.8], // Variación de opacidad
                }}
                transition={{
                    duration: 8, // Duración de la animación
                    repeat: Infinity, // Animación infinita
                    ease: "easeInOut",
                }}
            />
            {/* Contenido principal */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* Imagen del logo */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[40%] ml-5 h-auto -mt-10"
                />

                {/* Formulario */}
                <div className="absolute left-40 top-96 transform -translate-y-1/2 bg-gray-700/50 rounded-3xl shadow-md max-w-sm w-[20%]">
                    <div className="w-full max-w-sm p-6 rounded-lg text-center">
                        <h1 className="text-2xl font-bold text-yellow-400">
                            Grow Your Brand
                        </h1>
                        <p className="text-gray-300 text-lg mb-6">
                            By partnering with Trillion Quest
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="w-[246px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-[246px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-[246px] h-[42px] px-3 py-2 rounded-xl bg-white text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />

                            <button
                                type="submit"
                                className="w-[246px] h-[42px] py-2 px-3 bg-gray-700 border border-x-white text-white rounded-xl font-bold hover:bg-gray-600 transition-colors duration-200 uppercase tracking-wide text-sm"
                            >
                                Get Your Free Proposal
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Texto digital marketing */}
            <div className="relative flex justify-center items-center z-10 mt-[70vh] w-full bg-gradient-to-r from-gray-950 to-white py-2">
                <span className="w-full px-4 text-5xl font-bold tracking-wider text-white text-left ml-40">
                    Digital Marketing
                </span>

                {/* Iconos de redes sociales */}
                <div className="absolute right-[5%] flex space-x-6 text-black">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 hover:scale-150 transition-colors duration-300"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 hover:scale-150 transition-colors duration-300"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 hover:scale-150 transition-colors duration-300"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 hover:scale-150 transition-colors duration-300"
                    >
                        <FaTwitter size={30} />
                    </a>
                </div>
            </div>
            {/* Botón contact us */}
            <div className="absolute bottom-8 left-40 py-4 flex justify-start items-center">
                <button className="px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                    Contact Us
                </button>
                {/* Efecto de brillo intermitente */}
                <motion.div
                    className="absolute -top left-[88%] w-16 h-16 rounded-full opacity-50 z-50 bg-gradient-to-r from-white via-white to-gray-400"
                    style={{ transform: "translate(-50%, -50%)" }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
