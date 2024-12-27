import { motion } from "framer-motion";
import Formulario from "../components/Formulario";
import Digital from "../components/Digital";
import BotonContact from "../components/BotonContact";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {/* Aro de luz animado */}
            <motion.div
                className="absolute inset-0 bg-[url('/aroDeLuz.png')] bg-no-repeat bg-center bg-cover z-20 pointer-events-none"
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
            <div className=" mt-[70vh] w-full">
                <Digital />
            </div>

            {/* Botón contact us */}
            <div className="absolute bottom-4 left-40 py-4 z-20">
                <BotonContact />
            </div>
        </div>
    );
};
export default Home;
