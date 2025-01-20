import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Agents from './layout/Agents'
import Contect from './layout/Contect'
import FindProperty from './layout/FindProperty'
import Hero from './layout/Hero'
import PropListing from './layout/PropListing'
import PropType from './layout/PropType'
import Searach from './layout/Serach'
import Testimonial from './layout/Testimonial'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Searach />
     <PropType />
     <FindProperty />
     <PropListing />
     <Contect />
     <Agents />
     <Testimonial />
     <Footer />
    </>
  )
}

export default App
