import robotN from "../../public/assets/robot.png"

const AIPoweredBusiness = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            {/*INFORMATION */}

            <div className=" h-[60vh] text-white flex">
                <div className="mt-8">
                    <p className="text-5xl font-bold">AI-Powered Business
                        <br />
                        Solutions
                    </p>

                    <p className="text-white text-3xl mt-7">
                        Leverage the power of artificial <br />
                        intelligence to optimize your <br />
                        business process.<br />
                    </p>

                    <button className=" mt-14 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                        Learn more
                    </button>
                </div>
                <img src={robotN} alt="robot" className="h-full w-[50vw]" />
            </div>
            {/*
            <div className="absolute bottom-8 left-40 py-4 flex justify-start items-center">
                <button className="px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                    Contact Us
                </button>
            </div>
                    */}

            {/*IMAGE */}


        </div>
    )
}

export default AIPoweredBusiness