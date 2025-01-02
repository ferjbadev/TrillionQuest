import telefono2 from '../assets/telefono2.png'
import engranaje from '../assets/engranaje.png'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";

const FromAds = () => {
    return (
        <div className='container py-10 mx-auto flex justify-center'>
            {/*Section 1*/}
            <section className='flex flex-col justify-evenly  items-start'>
                <div className='text-white '>
                    <h1 className='text-5xl font-extrabold mb-8 '>From Ads to <br />
                        Software development
                    </h1>
                    <p className='text-2xl'>
                        We have expert for each field in the digital world <br /> we  offer a wide spectrum of services, mejoraa <br /> esta informacion para un sitio web, potencialos a <br /> generar  clientes y que sea profesional
                    </p>
                </div>

                <div className='text-white  justify-end flex items-end p-4 '>
                    <ul className='text-xl'>
                        <li className='mb-4 flex items-center'>
                            • Personalized Marketing Campaigns
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Web Development
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Content Creation
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • SEO Optimization
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Email Marketing
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Software and App Development
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Process Automation for business
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                    </ul>
                </div>
            </section>
            {/*section 2 */}
            <section className="flex flex-col justify-center items-start">
                <div>
                    <img src={telefono2} alt="telefono_ads" className='h-[70vh] ml-14' />
                    {/* Botón con flecha*/}
                    <div className="flex flex-col ml-28 items-center py-10 lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
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
                </div>
            </section>
        </div>
    )
}

export default FromAds