import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import telefono from "../assets/telefono.png";

// Rotación de imágenes
const images = [
    "/chat1.svg",
    "/chat2.svg",
    "/chat3.svg"
];

const SocialMediaExpertise = () => {
    // Estado para el índice actual de la imagen
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cambiar la imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto w-full flex items-center justify-center">
            <div className="h-[60vh] w-full text-white flex justify-around relative">

                {/* Imagen de teléfono */}
                <div className="h-full w-[20vw] relative left-14">
                    <img src={telefono} alt="telefono" className="h-full w-full" />
                </div>

                {/* Imagenes de chat */}
                <div className="absolute -top-32 left-64 flex">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={images[currentImageIndex]}
                            src={images[currentImageIndex]}
                            alt={`chat-${currentImageIndex + 1}`}
                            className="w-[40vw] h-full"
                            // Animaciones
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }} />
                    </AnimatePresence>
                </div>

                <div className="mt-8">
                    <p className="text-5xl font-bold">Social Media Expertise</p>
                    <p className="text-white text-3xl mt-12 text-right">
                        Personalized strategies, improved<br />
                        visibility, and fostering genuine<br />
                        connections with your target audience <br />
                        across all platforms.
                    </p>
                    <button className="mt-14 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaExpertise;
