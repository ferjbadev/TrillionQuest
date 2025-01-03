import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        // Detecta si el usuario ha hecho scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Cierra el menú al hacer clic fuera
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`absolute w-full text-white z-50 transition-all duration-300 ${hasScrolled ? "bg-gray-800 shadow-lg" : ""
                }`}
        >
            {/* Navbar Principal */}
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo y enlaces principales */}
                <div className="flex items-center space-x-4">
                    {/* Enlace visible solo en pantallas md y gl */}
                    <a
                        href="#"
                        className="hidden sm:hidden md:inline-block gl:inline-block md:text-4xl gl:text-4xl font-bold cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        Trillion Fundation
                    </a>

                    {/* Imagen visible solo en pantallas sm */}
                    <a href="#" className="mr-auto">
                        <img
                            src="/miniLogo.png"
                            alt="Mini Logo"
                            className="block sm:block md:hidden gl:hidden w-12 h-12 self-start"
                        />
                    </a>
                    {/* Enlace visible solo en pantallas grandes */}
                    <a
                        href="#"
                        className="ml-4 hidden md:inline-block text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        Why Choose Us
                    </a>
                </div>
                <button
                    className="block sm:block md:hidden gl:hidden border border-white
                                bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
                                text-yellow-500 font-bold rounded-full 
                                transition-transform px-5 py-1 text-1xl"
                >
                    Contact Us
                </button>

                {/* Enlaces visibles solo en pantallas grandes */}
                <div className="hidden md:flex items-center space-x-20">
                    <a
                        href="#"
                        className="text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        About Us
                    </a>
                    <div className="relative group">
                        <button className="text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition">
                            Services
                        </button>
                    </div>
                    <a
                        href="#"
                        className="text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
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
            </div>

            {/* Menú móvil desplegable */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden bg-gray-700 py-4 px-6 space-y-2"
                >
                    <a
                        href="#"
                        className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        Why Choose Us
                    </a>
                    <a
                        href="#"
                        className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        About Us
                    </a>
                    <div className="space-y-2">
                        <button className="w-full text-left text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300">
                            Services
                        </button>
                    </div>
                    <a
                        href="#"
                        className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            )}
            {/* Linea blanca */}
            <hr className="text-whie border border-white w-full" />
        </div>
    );
};

export default Navbar;
