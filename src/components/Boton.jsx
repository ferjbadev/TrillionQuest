
const Boton = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <button
                className="text-3xl bg-gradient-to-r from-gray-950 to-white/50 border border-white hover:scale-110 text-yellow-500 font-bold px-10 py-2 rounded-full flex items-center"
            >
                LEARN MORE
            </button>
            <span className="ml-5 text-6xl text-yellow-500 ">➔</span>
            <p className="text-white ml-32 text-2xl">
                Are you ready to embark on your Trillion Quest?
            </p>
        </div>
    )
}

export default Boton
