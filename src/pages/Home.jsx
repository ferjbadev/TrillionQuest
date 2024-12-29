import { motion } from "framer-motion";
import Formulario from "../components/Formulario";
import Digital from "../components/Digital";
import ContactButton from "../components/ContactButton";

// eslint-disable-next-line react/prop-types
const AnimatedCircle = ({ glowColor, inset = false }) => (
    <div className="relative flex items-center justify-center w-[700px] h-[700px] z-20">
        <motion.div
            className="absolute w-full h-full rounded-full"
            style={{
                boxShadow: inset
                    ? `0 0 50px 30px ${glowColor}, inset 0 0 60px 40px ${glowColor}` // Brillo más intenso
                    : `0 0 30px ${glowColor}, 0 0 50px ${glowColor}, 0 0 70px ${glowColor}, 0 0 100px ${glowColor}`, // Brillo externo intenso
            }}
            animate={{
                scale: [1, 1.2, 1],
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
        <div className="min-h-screen flex flex-col items-center">
            {/* Sección del Logo */}
            <section className="relative flex items-center justify-center">
                <AnimatedCircle glowColor="rgba(255, 255, 255, 1)" inset />
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="absolute z-10 w-[80%] h-auto" // Tamaño ajustado al círculo
                />
            </section>

            {/* Formulario */}
            <section className="absolute inset-0 flex items-center justify-center">
                <Formulario />
            </section>

            {/* el circilo pequeño mas pequeño y menos brillo */}

            {/* Texto Digital Marketing */}
            <section className="w-full -mt-20">
                <Digital />
            </section>

            {/* Botón Contacto */}
            <section className="absolute bottom-4 left-40 py-4 z-20">
                <ContactButton />
            </section>
        </div>
    );
};

export default Home;
