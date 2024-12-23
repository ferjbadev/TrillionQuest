import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import About from './components/About'

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
