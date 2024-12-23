import telefono from "../assets/telefono.png"
import chat from "../assets/chat1.png"


const SocialMediaExpertise = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center p-">

            <div className=" h-[60vh] w-full text-white flex justify-between relative">

                <div className="bg-white h-full w-[20vw] relative">
                    <img src={telefono} alt="telefono" className="h-full w-full" />



                </div>

                <div className="h-full w-full absolute right-40 bottom-1/4">

                    <img
                        src={chat}
                        alt="chat1"
                    />
                </div>


                <div className="mt-8 ">
                    <p className="text-5xl font-bold">Social Media Expertise
                    </p>

                    <p className="text-white text-3xl mt-12 text-right">
                        Personalized strategies, improved<br />
                        visibility, and fostering genuine<br />
                        connections with your target audience <br />
                        across all platforms.
                    </p>

                    <button className=" mt-14 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                        Learn more
                    </button>
                </div>
            </div>



        </div>
    )
}

export default SocialMediaExpertise