import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Digital = () => {
    return (
        <div className="relative flex justify-between items-center py-2 px-24 bg-gradient-to-r from-black via-gray-950 to-white sm:bg-gradient-to-r sm:from-black sm:via-gray-950 sm:to-white md:bg-gradient-to-r md:from-black md:via-gray-950 md:to-white">
            {/* Título de Digital Marketing */}
            <span className="absolute text-xl md:text-5xl gl:text-5xl font-bold tracking-wider right-80 text-white text-center">
                Digital <br /> Marketing
            </span>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-4 md:space-x-6 gl:space-x-6 gl:mt-10 ml-56">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white md:text-black gl:text-black transition-transform duration-200"
                >
                    <FaTiktok size={30} md:size={60} gl:size={60} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white md:text-black gl:text-black transition-transform duration-200"
                >
                    <FaInstagram size={30} md:size={60} gl:size={60} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white md:text-black gl:text-black transition-transform duration-200"
                >
                    <FaFacebook size={30} md:size={40} gl:size={40} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white md:text-black gl:text-black transition-transform duration-200"
                >
                    <FaLinkedin size={30} md:size={40} gl:size={40} />
                </a>
            </div>
        </div>

    );
};

export default Digital;
