import { motion } from "framer-motion";

const BotonContact = () => {
    return (
        <div className="flex items-center relative">
            {/* Efecto de brillo */}
            <motion.div
                className="absolute w-[150px] h-[150px] rounded-full left-64 z-20"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0) 50%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }} />

            {/* Botón principal */}
            <button className="uppercase tracking-widest px-12 py-3 left-24 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900 relative z-10">
                Contact Us
            </button>
        </div>
    );
};

export default BotonContact;
