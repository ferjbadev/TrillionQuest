import RayOfLight from '../assets/rayoLaser.png'
import emilyPhoto from '../assets/Emily.jpg'
import isabelPhoto from '../assets/Isabel.png'
import ninoPhoto from '../assets/Nino.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
// import { LuMapPin } from "react-icons/lu";
import logo2 from '../assets/logo2.png'

const MeetOurTeam = () => {
    return (
        <div
            className="w-full h-[120vh] md:h-[100vh] flex flex-col items-center justify-center md:justify-evenly  bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${RayOfLight})` }}
        >
            {/* Titulo */}
            <span className="capitalize mb-4  md:block text-2xl md:text-5xl font-extrabold text-white">
                meet our team
            </span>
            {/* Equipo */}
            <div className=" md:flex gap-y-4 md:gap-y-0 w-full h-screen md:h-[30vh] justify-center items-center md:justify-evenly ">
                {/* Emily */}
                <div className="gap-y-2 md:gap-y-0 md:space-y-9 flex flex-col items-center justify-center">
                    <div
                        className="flex items-end border-2 border-gray-800 w-[50vw] md:w-[18vw] h-[25vh] md:h-[35vh] rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${emilyPhoto})` }}
                    >
                        <div className="w-full py-1 bg-gray-600 bg-opacity-10 text-white text-center text-opacity-90">
                            <h2 className="font-bold tracking-wide">Agostino H. Ruggiero</h2>
                            <span>Head of Client Relationship</span>
                        </div>
                    </div>

                    <div className="w-full py-1 bg-black bg-opacity-80 text-white text-center text-opacity-90">
                        <span className="tracking-wide text-sm md:text-md">
                            &quot;Building trust is the foundation of <br />
                            every great partnership, and <br />
                            understanding is its strongest pillar.&quot;
                        </span>
                    </div>
                </div>

                {/* Agostino */}
                <div className="gap-y-2 md:gap-y-0 md:space-y-9 flex flex-col items-center justify-center">
                    <div
                        className="flex items-end border-2 border-gray-800 w-[50vw] md:w-[18vw] h-[25vh] md:h-[35vh] rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${ninoPhoto})` }}
                    >
                        <div className="w-full py-1 bg-gray-600 bg-opacity-10 text-white text-center text-opacity-90">
                            <h2 className="font-bold tracking-wide">Agostino H. Ruggiero</h2>
                            <span>Head of Client Relationship</span>
                        </div>
                    </div>

                    <div className="w-full py-1 bg-black bg-opacity-80 text-white text-center text-opacity-90">
                        <span className="tracking-wide text-sm md:text-md">
                            &quot;Building trust is the foundation of <br />
                            every great partnership, and <br />
                            understanding is its strongest pillar.&quot;
                        </span>
                    </div>
                </div>

                {/* Isabel */}
                <div className="gap-y-2 md:gap-y-0 md:space-y-9 flex flex-col items-center justify-center">
                    <div
                        className="flex items-end border-2 border-gray-800 w-[50vw] md:w-[18vw] h-[25vh] md:h-[35vh] rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${isabelPhoto})` }}
                    >
                        <div className="w-full py-1 bg-gray-600 bg-opacity-10 text-white text-center text-opacity-90">
                            <h2 className="font-bold tracking-wide">Agostino H. Ruggiero</h2>
                            <span>Head of Client Relationship</span>
                        </div>
                    </div>

                    <div className="w-full py-1 bg-black bg-opacity-80 text-white text-center text-opacity-90">
                        <span className="tracking-wide text-sm md:text-md">
                            &quot;Building trust is the foundation of <br />
                            every great partnership, and <br />
                            understanding is its strongest pillar.&quot;
                        </span>
                    </div>
                </div>

            </div>

            {/* CTA Button */}
            {/*
            
            <button
                className="mt-56 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl overflow-hidden"
            >
                Learn more
            </button>
            */}

            {/* Sub-Footer */}
            <div className="hidden flex justify-between px-8 w-full h-[10vh] text-lg">
                {/* Contact & Social */}
                <div className="h-full flex flex-col justify-evenly">
                    <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
                        >
                            <FaPhone size={35} />
                        </a>
                        <span className="hover:scale-110 hover:text-yellow-500">+1 (515) 553-7235</span>
                    </li>

                    <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
                        >
                            <MdOutlineEmail size={35} />
                        </a>
                        <span className="hover:scale-110 hover:text-yellow-500">info@trillionquest.com</span>
                    </li>

                    {/* <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
                        >
                            <LuMapPin size={35} />
                        </a>
                        <span>Add a subheading</span>
                    </li> */}
                </div>

                {/*TEMPORAL LOGO */}
                <div className=''>
                    <img src={logo2} className='w-[10vw] h-auto' />
                </div>
                {/* Useful Links */}
                {/* <div className="flex flex-col justify-evenly text-start text-white text-opacity-90 font-bold text-2xl">
                    <span className="uppercase ml-4">USEFUL LINKS</span>

                    <span className="w-[15vw]">
                        <a href="#" className="ml-4">
                            Why choose us
                        </a>
                        <hr className="text-gray-400/80" />
                    </span>

                    <span>
                        <a href="#" className="ml-4">
                            Services
                        </a>
                        <hr className="text-gray-400/80" />
                    </span>

                    <span>
                        <a href="#" className="ml-4">
                            About Us
                        </a>
                        <hr className="text-gray-400/80" />
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default MeetOurTeam;
