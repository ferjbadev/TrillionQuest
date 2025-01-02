import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import SocialMediaExpertise from './pages/SocialMediaExpertise'
import AIPoweredBusiness from './pages/AIPoweredB'
import FromAds from './pages/FromAds'
// import ContactUs from './pages/ContactUs'
import MeetOurTeam from './pages/MeetOurTeam'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Home />
      <About />
      <AIPoweredBusiness />
      <SocialMediaExpertise />
      <FromAds />
      {/* <ContactUs /> */}
      <MeetOurTeam />
      <Footer />
    </div>
  )
}

export default App

