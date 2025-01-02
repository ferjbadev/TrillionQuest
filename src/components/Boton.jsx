import { FaArrowRight } from "react-icons/fa";

const Boton = () => {
    return (
        <div className="flex justify-center items-center mt-20 space-x-36">
            <a
                href="#"
                className="uppercase tracking-widest px-12 py-3 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-300 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900 relative flex items-center justify-center space-x-3"
            >
                <span>Learn More</span>
                <FaArrowRight className="h-8 w-6" />
            </a>
            <span className="text-white font-medium text-3xl">
                Are you ready to embark on your Trillion Quest?
            </span>
        </div>
    );
};

export default Boton;
