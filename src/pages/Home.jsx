import { motion } from "framer-motion";
import Formulario from "../components/Formulario";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Aro de luz animado */}
            <motion.div
                className="absolute inset-0 bg-[url('/aroDeLuz.png')] bg-no-repeat bg-center"
                style={{
                    backgroundSize: "80%",
                }}
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
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Imagen del logo */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[40%] ml-5 h-auto -mt-10"
                />
                {/* Formulario */}
                <div className="">
                    <Formulario />
                </div>
            </div>

            {/* Texto digital marketing */}
            <div className="relative flex justify-center items-center mt-[78vh] w-full py-2"
                style={{
                    background: 'linear-gradient(to right, black 40%, gray 70%, white 100%)',
                }}>
                <span className="w-full px-4 text-5xl font-bold tracking-wider text-white text-left ml-40">
                    Digital Marketing
                </span>

                {/* Iconos de redes sociales */}
                <div className="absolute right-[5%] flex space-x-6 text-black cursor-pointer">
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
            <div className="absolute bottom-8 left-40 py-4 ">
                {/* Botón principal */}
                <button className="relative px-12 py-2 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 text-4xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900">
                    Contact Us
                </button>

                {/* Efecto de brillo */}
                <motion.div
                    className="absolute w-24 h-20 rounded-full z-10 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 80%)",
                        top: "50%", // Centrado vertical
                        right: "-10%", // Centrado horizontal
                        transform: "translateY(-50%)",
                    }}
                    animate={{
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Home;
