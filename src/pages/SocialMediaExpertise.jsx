import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../assets/telefono.png";

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
        <div className=" mx-auto h-[100vh] w-full flex items-center justify-center">

            <div className="h-[60vh] w-full text-white flex justify-around md:justify-center items-center space-x-16 md:space-x-0 ">

                {/* Imagen de teléfono */}

                <div className="h-[40vh] md:h-auto w-[40vw] md:w-[50vw] relative  md:flex md:place-content-center">

                    <img src={phone} alt="phone" className=" md:h-[60vh]" />
                    <div className="absolute -top-6 -right-3/4 md:right-0 md:left-80 md:-top-10 flex z-10 w-[60vw] h-full">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[currentImageIndex]}
                                src={images[currentImageIndex]}
                                alt={`chat-${currentImageIndex + 1}`}
                                className=""
                                // Animaciones
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }} />
                        </AnimatePresence>
                    </div>
                </div>


                {/* Imagenes de chat */}

                <div className="mt-8 w-[40vw] md:space-y-14">
                    <p className="text-xl md:text-5xl font-bold">Social Media Expertise</p>
                    <p className="text-white text-lg md:text-3xl mt-6 md:mt-12 text-left">
                        Personalized strategies, improved<br />
                        visibility, and fostering genuine<br />
                        connections with your target audience <br />
                        across all platforms.
                    </p>
                    <button className="mt-7 md:mt-14 px-4 md:px-12 py-1 md:py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer md:hover:scale-110 md:transition-transform md:duration-300 ml-4 text-md md:text-3xl">
                        Learn more
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SocialMediaExpertise;
