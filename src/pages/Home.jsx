import { motion } from "framer-motion";
import Formulario from "../components/Formulario";
import Digital from "../components/Digital";
import ContactButton from "../components/ContactButton";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Contenedor del círculo y el logo */}
            <div className="relative flex items-center justify-center w-[700px] h-[700px]">
                {/* Aro de luz animado */}
                <motion.div
                    className="absolute w-full h-full bg-black border-2 border-white z-0 rounded-full animate-glow"
                    style={{
                        boxShadow:
                            "0 0 20px 10px rgba(255, 255, 255, 0.6), inset 0 0 20px 10px rgba(255, 255, 255, 0.4)", // Brillo externo e interno}}
                    }}
                    animate={{
                        scale: [1, 1.1, 1], // Escala del aro
                        opacity: [0.8, 1, 0.8], // Variación de opacidad
                    }}
                    transition={{
                        duration: 8, // Duración de la animación
                        repeat: Infinity, // Animación infinita
                        ease: "easeInOut",
                    }} />
                {/* Imagen del logo */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="relative z-10 w-[100%] h-auto"
                />
            </div>

            {/* Formulario */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Formulario />
            </div>

            {/* Texto digital marketing */}
            <div className="-mt-20 w-full">
                <Digital />
            </div>

            {/* Botón contact us */}
            <div className="absolute bottom-4 left-40 py-4 z-20">
                <ContactButton />
            </div>
        </div>
    );
};
export default Home;
