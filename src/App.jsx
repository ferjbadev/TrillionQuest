import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './pages/About'
import './App.css'

function App() {

  return (
    <div className='w-full h-auto mx-auto bg-black'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App

