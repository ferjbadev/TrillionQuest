import telefono2 from '../assets/telefono2.png'
import engranaje from '../assets/engranaje.png'

const FromAds = () => {
    return (
        <div className='w-full h-screen bg-black p-4 flex'>
            {/*Section 1*/}
            <section className='flex flex-col justify-center items-start h-screen'>

                <div className='text-white w-[50vw] h-[35vh]'>
                    <h1 className='text-4xl font-extrabold mb-8'>From Ads to <br />
                        Software development
                    </h1>
                    <p className='text-2xl'>
                        We have expert for each field in the digital world we offer a wide spectrum of services, mejoraa esta informacion para un sitio web, potencialos a generar clientes y que sea profesional
                    </p>
                </div>

                <div className='text-white h-[65vh] justify-end flex items-end p-4'>

                    <ul className='text-xl'>
                        <li className='mb-4 flex items-center'>
                            • Personalized Marketing Campaigns
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Web Development
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Content Creation
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • SEO Optimization
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Email Marketing
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Software and App Development
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                        <li className='mb-4 flex items-center'>
                            • Process Automation for business
                            <img src={engranaje} alt="engranaje" className='w-6 h-6 ml-2' />
                        </li>
                    </ul>

                </div>
            </section>
            {/*section 2 */}
            <section className="flex flex-col justify-center items-start h-screen">
                <div>
                    <img src={telefono2} alt="telefono_ads" className='h-[70vh]' />
                    <button className=" mt-14 px-12 py-2 border border-white bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ml-4 text-3xl relative z-10 overflow-hidden">
                        Learn more
                    </button>
                </div>
            </section>

        </div>
    )
}

export default FromAds