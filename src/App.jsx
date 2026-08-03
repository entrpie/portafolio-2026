import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
