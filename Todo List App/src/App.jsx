
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import About from './components/About'
import Contact from './components/Contact'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Todo/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
