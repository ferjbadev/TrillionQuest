import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Digital = () => {
    return (
        <div className="relative flex md:flex-row justify-between items-center py-2 px-36 bg-gradient-to-r from-black via-gray-950 to-white z-auto">
            {/* Título de Digital Marketing */}
            <span className="text-4xl md:text-5xl font-bold tracking-wider text-white text-center md:text-left">
                Digital Marketing
            </span>

            {/* Iconos de redes sociales */}
            <div className="flex space-x-6 mt-4 md:mt-0 text-black">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                    <FaTiktok size={30} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                    <FaInstagram size={30} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                    <FaFacebook size={30} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 transition-transform duration-200"
                >
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
};

export default Digital;
