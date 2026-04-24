import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav className=" container flex bg-gray-800 p-4">
           <div className="container flex mx-auto">
             <h1 className="text-white text-xl font-bold"> <NavLink to="/">Weather App </NavLink></h1>
           <ul className="flex space-x-4 ml-auto">
                <li className="text-gray-300 hover:text-white"><NavLink to="/">Home</NavLink></li>
                <li className="text-gray-300 hover:text-white"><NavLink to="/about">About</NavLink></li>
                <li className="text-gray-300 hover:text-white"><NavLink to="/contact">Contact</NavLink></li>
           </ul>
           </div>
         </nav>

    </div>
  )
}

export default Navbar
