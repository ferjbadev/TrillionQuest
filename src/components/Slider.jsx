import { FaMeta, FaGoogle, FaMicrosoft } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSlider = () => {
    const partners = [
        { name: "Meta", icon: FaMeta },
        { name: "OpenAI", icon: SiOpenai },
        { name: "Google", icon: FaGoogle },
        { name: "Microsoft", icon: FaMicrosoft },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [],
    };

    return (
        <motion.div
            className="w-full py-4 relative overflow-hidden animate-glow border border-yellow-400 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Anima solo la primera vez que entra en vista
            transition={{ duration: 1.8, ease: "easeInOut" }}
        >
            {/* Slider */}
            <div className="relative z-10">
                <Slider {...settings}>
                    {partners.map((partner) => (
                        <div key={partner.name}>
                            <div className="flex items-center justify-center space-x-4">
                                {/* Ícono */}
                                <partner.icon
                                    className="w-16 h-20 text-white cursor-pointer hover:scale-110 hover:text-yellow-500 transition-transform duration-500 transform"
                                    aria-label={partner.name}
                                />
                                {/* Nombre */}
                                <span className="text-5xl font-semibold text-white cursor-pointer hover:text-yellow-500 transition-colors duration-300">
                                    {partner.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default PartnerSlider;
