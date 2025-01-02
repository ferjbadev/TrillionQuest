import { motion } from "framer-motion";

const Cuadro = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
                {/* Cuadro izquierdo */}
                <motion.div
                    className="flex flex-col justify-between items-center rounded-lg p-4 animate-glow group"
                    style={{
                        width: '340px',
                        height: '521px',
                        borderRadius: '70px',
                    }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    {/* Título */}
                    <div className="group relative">
                        {/* Bloque título */}
                        <div className="flex flex-col items-center mt-52 text-justify transform transition-transform duration-700 group-hover:-translate-y-44">
                            <h3 className="text-4xl text-yellow-500 font-bold text-center">
                                Marketing <br /> Campaign
                            </h3>
                        </div>

                        {/* Texto */}
                        <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-32 group-hover:opacity-100">
                            <p className="text-white mb-20 font-bold text-center leading-extra-loose">
                                We craft strategic and creative campaigns that connect with your audience, maximize results, and stand out in the market. Blend data, innovation, and design with us.
                            </p>
                        </div>
                        {/* Circulo pequeño */}
                        <div className="absolute bottom-4 w-20 h-20 rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mb-8 left-28">
                        </div>
                    </div>
                </motion.div>


                {/* Cuadro central más grande */}
                <div className="group relative">
                    <div className="group relative flex flex-col items-center p-4 animate-glow"
                        style={{
                            width: "405px",
                            height: "569px",
                            borderRadius: "70px",
                            marginTop: "-15px",
                        }}
                    >
                        {/* Título */}
                        <div className="flex flex-col items-center mt-52 text-justify transform transition-transform duration-700 group-hover:-translate-y-44">
                            <h3 className="text-4xl text-yellow-500 font-bold text-center">
                                Social <br /> Media <br /> Management
                            </h3>
                        </div>

                        {/* Texto hover */}
                        <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-36 group-hover:opacity-100">
                            <p className="text-white font-bold text-center leading-extra-loose">
                                We specialize in building and expanding your social media presence
                                with strategies that drive engagement, attract followers, and
                                strengthen your brand. From creating compelling content to analyzing
                                performance, we ensure your platforms not only grow but thrive.
                            </p>
                        </div>

                        {/* Círculo pequeño */}
                        <div
                            className="absolute bottom-4 w-20 h-20 rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mb-5 left-40"
                        ></div>
                    </div>
                </div>


                {/* Cuadro derecho */}
                <div className="group relative">
                    <motion.div
                        className="relative flex flex-col justify-between items-center rounded-lg p-4 animate-glow ml-16 group"
                        style={{
                            width: '340px',
                            height: '521px',
                            borderRadius: '70px',
                        }}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                    >
                        {/* Título */}
                        <div className="flex flex-col items-center mt-44 text-justify transition-all duration-700 group-hover:-translate-y-36">
                            <h3 className="text-4xl text-yellow-500 font-bold text-center">
                                AI Business <br /> Process <br /> Automation
                            </h3>
                        </div>
                        {/* Texto */}
                        <div className="flex flex-col items-center opacity-0 transform transition-transform duration-700 group-hover:-translate-y-36 group-hover:opacity-100">
                            <p className="text-white font-bold text-center leading-extra-loose">
                                Streamline your operations with AI. Optimize tasks, reduce costs, and improve accuracy with intelligent solutions that simplify processes and drive growth.
                            </p>
                        </div>

                        {/* Círculo pequeño */}
                        <div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        ></div>
                    </motion.div>

                </div>
            </div>
        </div >
    );
};

export default Cuadro;
