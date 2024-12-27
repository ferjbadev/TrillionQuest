import { motion } from "framer-motion";

const AroLuz = () => {
    return (
        <div className="flex items-center justify-center w-full h-full relative pointer-events-none">
            {/* Aro de luz animado */}
            <motion.img
                src="/aroDeLuz.png" // Ruta de la imagen
                alt="Aro de Luz"
                className="absolute w-3/4 max-w-[600px] h-auto"
                animate={{
                    scale: [1, 1.05, 1], // Escala del aro
                    opacity: [0.8, 1, 0.8], // Variación de opacidad
                }}
                transition={{
                    duration: 8, // Duración de la animación
                    repeat: Infinity, // Animación infinita
                    ease: "easeInOut",
                }}
            />
            {/* Logo principal */}
            <img
                src="/logo.png"
                alt="Logo"
                className="relative z-10 w-[30%] max-w-[200px] h-auto"
            />
        </div>
    );
};

export default AroLuz;
