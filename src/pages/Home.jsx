import { motion } from "framer-motion";
import Formulario from "../components/Formulario";
import Digital from "../components/Digital";
import ContactButton from "../components/ContactButton";

// eslint-disable-next-line react/prop-types
const AnimatedCircle = ({ glowColor, inset = false }) => (
    <div className="relative flex items-center justify-center w-[650px] h-[650px] rounded-full">
        <motion.div
            className="absolute w-full h-full rounded-full"
            style={{
                boxShadow: inset
                    ? `0 0 50px 30px ${glowColor}, inset 0 0 60px 40px ${glowColor}` // Brillo más intenso
                    : `0 0 30px ${glowColor}, 0 0 50px ${glowColor}, 0 0 70px ${glowColor}, 0 0 100px ${glowColor}`, // Brillo externo intenso
            }}
            animate={{
                scale: [1, 1.2, 1], // Variación para mantener el brillo visible
                opacity: [1, 1.2, 1], // Variación para mantener el brillo visible
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    </div>
);

const Home = () => {
    return (
        <div className="container mx-auto h-[100vh] flex flex-col items-center">
            {/* Sección del Logo */}
            <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                {/* Imagen de fondo */}
                <img
                    src="/fondo.png"
                    alt="Fondo"
                    className="absolute w-[100%] h-auto transform translate-x-12 -translate-y-1"
                />

                {/* Círculo animado */}
                <div className="absolute z-10">
                    <AnimatedCircle glowColor="rgba(255, 255, 255, 1)" inset />
                </div>

                {/* Imagen del robot con animación */}
                <div className="relative w-full h-[50vh] flex items-center justify-center">
                    {/* Primera imagen */}
                    <motion.img
                        src="/robot.png"
                        alt="Robot"
                        className="absolute z-20 w-[40%] h-auto"
                        initial={{ y: "13vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Segunda imagen */}
                    <motion.img
                        src="/sombra.png"
                        alt="Otro Robot"
                        className="absolute z-20 w-full h-auto"
                        // Aquí ajustas la posición según necesites:
                        //  - left-[40%] es un ejemplo. 
                        //  - Podrías usar top, bottom, right, etc.
                        initial={{ y: "13vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                        }}
                    />
                </div>
                {/* Imagen del logo */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="absolute z-30 w-[40%] -mb-32 h-auto"
                />
            </section>

            {/* Formulario */}
            <section className="absolute inset-0">
                <Formulario />
            </section>

            {/* Texto Digital Marketing */}
            <section className="w-full -mt-8 z-40 mb-2">
                <Digital />
            </section>

            {/* Botón Contacto */}
            <section className="bottom-0 py-4 z-20 w-full bg-black">
                <ContactButton />
            </section>
        </div>
    );
};

export default Home;
