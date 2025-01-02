import Cuadro from "../components/Cuadro";
import Slider from "../components/Slider";
import Parther from "../components/Parther";
import Boton from "../components/Boton";


const About = () => {
    return (
        <div className="container mx-auto flex flex-col items-center w-full py-10">
            {/* Encabezados */}
            <h1 className="text-5xl font-bold text-white mb-5">
                Achieve Your Goals - TRILLION QUEST
            </h1>
            <h2 className="font-sans text-2xl text-white tracking-widest uppercase mb-1">
                The new digital era is here
            </h2>
            <h2 className="font-sans text-2xl text-white tracking-widest">
                Rated 4.8/5 <span className="text-yellow-500">★★★★★</span> Reviews
            </h2>
            {/* Cuadrícula responsiva */}
            <Cuadro />
            {/* Botón y texto */}
            <div className="mb-10">
                <Boton />
            </div>

            {/* Slider con logos */}
            <Slider />

            {/* Segunda parte del About, Patrocinio */}
            <Parther />
        </div>
    );
};

export default About;
