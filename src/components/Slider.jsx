import { FaMeta, FaGoogle, FaMicrosoft } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
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
        speed: 8000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full bg-gradient-to-r from-gray-950 to-transparent py-10">
            <Slider {...settings}>
                {partners.map((partner) => (
                    <div key={partner.name} className="flex items-center justify-center gap-3">
                        <partner.icon
                            className="w-20 h-20 text-white cursor-pointer hover:scale-125 hover:text-yellow-500 transition-all duration-300"
                        />
                        <span className="text-2xl font-bold text-white cursor-pointer hover:text-yellow-500 transition-opacity duration-300">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnerSlider;
