import { motion } from "framer-motion";

const Cuadro = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Cuadro izquierdo */}
                <motion.div
                    className="flex flex-col justify-between items-center border border-white rounded-lg p-4 animate-glow mr-16"
                    style={{
                        width: '340px',
                        height: '521px',
                        borderRadius: '70px',
                    }}
                    initial={{ opacity: 0, x: -100 }} // Empieza a la izquierda fuera de la pantalla
                    whileInView={{ opacity: 1, x: 0 }} // Aparece en el centro al entrar en la vista
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center mt-16 text-justify">
                        <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">Marketing Campaign</h3>
                        <p className="text-white font-bold">
                            We craft strategic and creative campaigns that connect with your audience, maximize results, and stand out in the market. Blend data, innovation, and design with us.
                        </p>
                    </div>
                    <img src="/luz.png" alt="Imagen Izquierda" className="w-24 h-24" />
                </motion.div>

                {/* Cuadro central más grande */}
                <div
                    className="flex flex-col justify-between items-center border border-white rounded-lg p-4 animate-glow"
                    style={{
                        width: '405px',
                        height: '569px',
                        borderRadius: '70px',
                        marginTop: '-15px',
                    }}
                >
                    <div className="flex flex-col items-center mt-16 text-justify">
                        <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">Social Media Management</h3>
                        <p className="text-white font-bold">
                            We specialize in building and expanding your social media presence with strategies that drive engagement, attract followers, and strengthen your brand.
                        </p>
                    </div>
                    <img src="/luz.png" alt="Imagen Central" className="w-32 h-32" />
                </div>

                {/* Cuadro derecho */}
                <motion.div
                    className="flex flex-col justify-between items-center border border-white rounded-lg p-4 animate-glow ml-16"
                    style={{
                        width: '340px',
                        height: '521px',
                        borderRadius: '70px',
                    }}
                    initial={{ opacity: 0, x: 100 }} // Empieza a la derecha fuera de la pantalla
                    whileInView={{ opacity: 1, x: 0 }} // Aparece en el centro al entrar en la vista
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center mt-16 text-justify">
                        <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">AI Business Process Automation</h3>
                        <p className="text-white font-bold">
                            Streamline your operations with AI. Optimize tasks, reduce costs, and improve accuracy with intelligent solutions that simplify processes and drive growth.
                        </p>
                    </div>
                    <img src="/luz.png" alt="Imagen Derecha" className="w-24 h-24" />
                </motion.div>
            </div>
        </div>
    );
};

export default Cuadro;
