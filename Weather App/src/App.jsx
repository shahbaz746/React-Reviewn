import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Weather />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
    </>
  )
}

export default App
