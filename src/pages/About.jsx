import { FaMeta, FaGoogle, FaMicrosoft } from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const partners = [
        { name: 'Meta', icon: FaMeta },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Google', icon: FaGoogle },
        { name: 'Microsoft', icon: FaMicrosoft },
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center overflow-hidden pt-20">
            {/* Encabezados */}
            <h1 className="text-3xl text-white mb-10">
                Achieve Your Goals - TRILLION QUEST
            </h1>
            <h2 className="text-2xl text-white mb-10">
                The new digital era is here
            </h2>

            {/* Cuadrícula responsiva */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Cuadro izquierdo */}
                    <div
                        className="flex flex-col justify-between items-center border border-white rounded-lg p-4"
                        style={{
                            width: '340px',
                            height: '521px',
                            borderRadius: '70px'
                        }}
                    >
                        <div className="flex flex-col items-center mt-16 text-justify">
                            <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">Marketing Campaign</h3>
                            <p className="text-white font-bold">
                                We craft strategic and creative campaigns that connect with your audience, maximize results, and stand out in the market. Blend data, innovation, and design with us.
                            </p>
                        </div>
                        <img src="/luz.png" alt="Imagen Izquierda" className="w-24 h-24" />
                    </div>

                    {/* Cuadro central más grande */}
                    <div
                        className="flex flex-col justify-between items-center border border-white rounded-lg p-4 md:col-span-1"
                        style={{
                            width: '405px',
                            height: '569px',
                            borderRadius: '70px',
                            marginTop: '-15px'
                        }}
                    >
                        <div className="flex flex-col items-center mt-16 text-justify">
                            <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">Social Media Management</h3>
                            <p className="text-white font-bold">
                                We specialize in building and expanding your social media presence with strategies that drive engagement, attract followers, and strengthen your brand. From creating compelling content to analyzing performance, we ensure your platforms not only grow but thrive.
                            </p>
                        </div>
                        <img src="/luz.png" alt="Imagen Central" className="w-32 h-32" />
                    </div>

                    {/* Cuadro derecho */}
                    <div
                        className="flex flex-col justify-between items-center border border-white rounded-lg p-4 ml-16"
                        style={{
                            width: '340px',
                            height: '521px',
                            borderRadius: '70px'
                        }}
                    >
                        <div className="flex flex-col items-center mt-16 text-justify">
                            <h3 className="text-xl text-yellow-500 font-bold mb-20 text-center">AI Business Process Automation</h3>
                            <p className="text-white font-bold">
                                Streamline your operations with AI. Optimize tasks, reduce costs, and improve accuracy with intelligent solutions that simplify processes and drive growth. Focus on innovation while we automate success.
                            </p>
                        </div>
                        <img src="/luz.png" alt="Imagen Derecha" className="w-24 h-24" />
                    </div>
                </div>
            </div>

            {/* Botón y texto */}
            <div className="flex justify-center items-center mt-20">
                <button
                    className="text-3xl bg-gradient-to-r from-gray-950 to-white/50 border border-white hover:scale-110 text-yellow-500 font-bold px-10 py-2 rounded-full flex items-center"
                >
                    LEARN MORE
                    <span className="ml-2 text-yellow-500">➔</span>
                </button>
                <p className="text-white ml-32 text-2xl">
                    Are you ready to embark on your Trillion Quest?
                </p>
            </div>

            {/* Linea de separacion */}
            <div className="w-full h-1 bg-white mb-5"></div>

            {/* Slider con logos */}
            <div className="w-full bg-gradient-to-r from-gray-950 to-transparent">
                <Slider {...settings} >
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
            {/* Linea de separacion */}
            <div className="w-full h-1 bg-green-500"></div>

            {/* Segunda parte del About */}
            <div className="flex text-white justify-center items-center py-10">
                <div>
                    <img src="./logo2.png" alt="Trillion Quest Logo" className="mx-auto w-[70%]" />
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-5xl">
                        <span className="text-white">PARTNER WITH</span> <br />
                        <span className="text-yellow-400">TRILLION QUEST</span><br />
                        <span className="text-white">AND HELP MILLIONS</span>
                    </h1>
                    <p className="text-2xl mt-2">
                        Together, we create success and change lives.
                    </p>
                    <div className='flex justify-center items-center'>
                        <p className="text-3xl font-bold mt-4">100+</p>
                    </div>
                    <a
                        href="#"
                        className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-sm text-center text-white">
                <p className="mb-4">
                    We redefine marketing strategies with innovation and creativity.<br />
                    We transform vision into impactful realities.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-yellow-400 font-medium hover:underline">Instagram</a>
                    <a href="#" className="text-yellow-400 font-medium hover:underline">Facebook</a>
                    <a href="#" className="text-yellow-400 font-medium hover:underline">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default About;
