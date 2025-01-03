import { motion } from "framer-motion";

const BotonContact = () => {
    return (
        <div className="relative flex items-center">
            {/* Efecto de brillo */}
            <motion.div
                // En pantallas pequeñas (sm), puedes cambiar la posición
                className="absolute w-[150px] h-[150px] rounded-full left-64 sm:left-32 z-20"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0) 50%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Botón principal */}
            <button
                className="relative z-10 tracking-widest 
                  border border-white
                  bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
                  text-yellow-500 font-bold rounded-full 
                  transition-transform duration-300 
                  hover:scale-110 hover:bg-gradient-to-r 
                  hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 
                  hover:text-gray-900

                  /* Ajustes base */
                  px-12 py-3 text-2xl left-24 

                  /* Ajustes específicos para pantallas pequeñas */
                  sm:px-8 sm:py-2 sm:text-xl sm:left-16
                "
            >
                Contact Us
            </button>
        </div>
    );
};

export default BotonContact;
