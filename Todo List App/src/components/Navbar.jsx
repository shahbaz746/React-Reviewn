import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointe text-indigo-400 transition">
          <NavLink to="/">Todo App</NavLink>
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 ml-auto text-sm font-medium">
          <li className="cursor-pointer hover:text-indigo-400 transition">
            <NavLink to="/"  className={({ isActive }) => isActive ? 'text-indigo-400' : 'hover:text-indigo-400 transition'}>Home</NavLink>
          </li>
          <li className="cursor-pointer hover:text-indigo-400 transition">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-indigo-400' : 'hover:text-indigo-400 transition'}>About</NavLink>
          </li>
          <li className="cursor-pointer hover:text-indigo-400 transition">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-indigo-400' : 'hover:text-indigo-400 transition'}>Contact</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar