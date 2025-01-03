import { motion } from 'framer-motion'
import robotN from "../assets/robot.png"

const AIPoweredBusiness = () => {
    return (
        <div className=" mx-auto flex items-center justify-center">
            <div className="h-[60vh] text-white flex items-center">
                {/* Texto */}
                <div className="mt-8">
                    <p className="text-3xl md:text-5xl font-bold ml-10">
                        AI-Powered Business
                        <br />
                        Solutions
                    </p>

                    <p className="text-white text-xl md:text-3xl mt-7 ml-10">
                        Leverage the power of artificial <br />
                        intelligence to optimize your <br />
                        business process.
                    </p>

                    <button className="mt-14 ml-10 px-6 md:px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer md:hover:scale-110 md:transition-transform md:duration-300 text-md md:text-3xl">
                        Learn more
                    </button>
                </div>

                {/* Imagen con animación */}
                {/* */}
                <motion.img
                    src={robotN}
                    alt="robot"
                    className="h-[25vh] md:h-full w-[45vw] md:w-[50vw]"
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
