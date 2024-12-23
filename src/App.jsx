import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import SocialMediaExpertise from './pages/SocialMediaExpertise'
import AIPoweredBusiness from './pages/AIPoweredB'
import FromAds from './pages/FromAds'
import './App.css'

function App() {

  return (
    <div className='w-full h-auto mx-auto bg-black'>
      <Navbar />
      <Home />
      <About />
      <AIPoweredBusiness />
      <SocialMediaExpertise />
      <FromAds />
    </div>
  )
}

export default App

