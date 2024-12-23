import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute inset-0 bg-gradient-to-b from-gray-950/10 to-transparent text-white shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-10">
                {/* Logo y botones del lado izquierdo */}
                <div className="flex items-center space-x-24">
                    <a href="#" className="text-4xl font-bold cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                        Trillion Quest
                    </a>
                    <a
                        href="#"
                        className="hidden md:inline-block text-2xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        Why Choose Us
                    </a>
                </div>

                {/* Botones del lado derecho para pantallas grandes */}
                <div className="hidden md:flex items-center space-x-20">
                    <a href="#" className="text-2xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                        About Us
                    </a>

                    {/* Dropdown para Services */}
                    <div className="relative group">
                        <button className="text-2xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition">
                            Services
                        </button>
                        <ul className="absolute hidden group-hover:block bg-gray-700 text-white space-y-2 top-full left-0 w-40 py-2 px-4 rounded shadow-lg">
                            <li>
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    UI/UX Design
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a href="#" className="text-2xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                        Contact
                    </a>
                </div>

                {/* Botón de menú para móviles */}
                <button
                    className="md:hidden focus:outline-none cursor-pointer hover:scale-110 hover:text-yellow-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div >

            {/* Menú desplegable para móviles */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-700 py-4 px-6 space-y-2">
                        <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                            Why Choose Us
                        </a>
                        <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                            About Us
                        </a>

                        {/* Dropdown para Services en móvil */}
                        <div className="space-y-2">
                            <button className="w-full text-left text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                Services
                            </button>
                            <div className="pl-4 space-y-2">
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    Web Development
                                </a>
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    App Development
                                </a>
                                <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                                    UI/UX Design
                                </a>
                            </div>
                        </div>

                        <a href="#" className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                            Contact
                        </a>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
