import { motion } from "framer-motion";

const BotonContact = () => {
    return (
        <div className="flex justify-center items-center w-full py-4 relative">
            {/* Botón principal */}
            <button className="uppercase tracking-widest px-12 py-3 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900">
                Contact Us
            </button>

            {/* Efecto de brillo */}
            <motion.div
                className="absolute w-24 h-20 rounded-full pointer-events-none"
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
    );
};

export default BotonContact;
