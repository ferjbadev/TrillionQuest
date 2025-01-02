import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";


const Parther = () => {
    return (
        <div className="flex lg:flex-row lg:px-10 py-10 lg:py-14 items-center justify-center space-y-10 lg:space-y-0 lg:space-x-20 font-semibold">
            {/* Logo */}
            <div className="lg:w-[60%] flex justify-center lg:justify-end">
                <img
                    src="./logo2.png"
                    alt="Trillion Quest Logo"
                    className="max-w-[80%] h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Texto superior */}
            <div className="lg:w-[50%] text-center lg:text-left text-white space-y-10">
                <h1
                    className="font-bold text-4xl lg:text-5xl"
                    style={{ lineHeight: '1.6' }}
                >
                    <span>PARTNER WITH</span> <br />
                    <span className="text-yellow-400">TRILLION QUEST</span> <br />
                    <span>AND HELP MILLIONS</span>
                </h1>

                {/* Texto del medio */}
                <div className="">
                    <p className="text-1xl lg:text-2xl">
                        Together, we create success and <br /> change lives.
                    </p>
                </div>

                {/* 100 y las imagenes */}
                <div className='flex items-center text-2xl lg:text-5xl space-x-4'>
                    <h1 className='font-bold'>100+</h1>
                    <div className="flex items-center">
                        {/* Imagen 1 */}
                        <div className="w-20 h-20 rounded-full overflow-hidden cursor-pointer -mr-4 z-30 hover:z-50 hover:scale-150 transition-transform duration-700">
                            <img
                                src="./image1.jpg"
                                className="object-cover w-full h-full"
                                alt="Primera imagen"
                            />
                        </div>

                        {/* Imagen 2 */}
                        <div className="w-20 h-20 rounded-full overflow-hidden cursor-pointer -mr-4 z-20 hover:z-50 hover:scale-150 transition-transform duration-700">
                            <img
                                src="./image2.jpg"
                                className="object-cover w-full h-full"
                                alt="Segunda imagen"
                            />
                        </div>

                        {/* Imagen 3 */}
                        <div className="w-20 h-20 rounded-full overflow-hidden cursor-pointer -mr-4 z-10 hover:z-50 hover:scale-150 transition-transform duration-700">
                            <img
                                src="./image3.jpg"
                                className="object-cover w-full h-full"
                                alt="Tercera imagen"
                            />
                        </div>

                        {/* Imagen 4 */}
                        <div className="w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:z-50 hover:scale-150 transition-transform duration-700">
                            <img
                                src="./image4.jpg"
                                className="object-cover w-full h-full"
                                alt="Cuarta imagen"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                    {/* Botón con flecha*/}
                    <a
                        href="#"
                        className="uppercase right-16 tracking-widest px-12 py-3 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900 relative flex items-center justify-center space-x-3"
                    >
                        <span>Learn More</span>
                        <FaArrowRight className="h-8 w-6" />
                    </a>

                    {/* Iconos de redes sociales */}
                    <div className="flex space-x-8 mt-4 md:mt-0 text-white">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200">
                            <FaInstagram size={40} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200">
                            <FaFacebook size={40} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200">
                            <FaLinkedin size={40} />
                        </a>
                    </div>
                </div>
                <div className="text-xl text-white">
                    We redefine marketing strategies with innovation and creativity,
                    We transform vision into impactful realities.
                </div>
            </div>
        </div>
    );
};

export default Parther;
