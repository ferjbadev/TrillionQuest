import { motion } from 'framer-motion'
import robotN from "../assets/robot.png"

const AIPoweredBusiness = () => {
    return (
        <div className="container mx-auto flex items-center justify-center">
            <div className="h-[60vh] text-white flex">
                {/* Texto */}
                <div className="mt-8">
                    <p className="text-5xl font-bold">
                        AI-Powered Business
                        <br />
                        Solutions
                    </p>

                    <p className="text-white text-3xl mt-7">
                        Leverage the power of artificial <br />
                        intelligence to optimize your <br />
                        business process.
                    </p>

                    <button className="mt-14 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                        Learn more
                    </button>
                </div>

                {/* Imagen con animación */}
                <motion.img
                    src={robotN}
                    alt="robot"
                    className="h-full w-[50vw]"
                    // Aparece desde abajo y se hace visible
                    initial={{ y: "20vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    )
}

export default AIPoweredBusiness
