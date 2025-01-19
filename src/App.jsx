import './App.css'
import Navbar from './components/Navbar'
import FindProperty from './layout/FindProperty'
import Hero from './layout/Hero'
import PropListing from './layout/PropListing'
import PropType from './layout/PropType'
import Searach from './layout/Serach'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Searach />
     <PropType />
     <FindProperty />
     <PropListing />
    </>
  )
}

export default App
