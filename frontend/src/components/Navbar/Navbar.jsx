import React from 'react'
import { Link } from 'react-router-dom'
import { NAVBAR_OPTIONS } from './constants';
import logo from "/images/logo.png"

const Navbar = ({ scrolled }) => {
  return (
    <header
      className={`fixed top-0 w-full px-[8%] py-5 flex justify-between items-center z-[1000] transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="font-black  tracking-[3px] text-white">
        <img src={logo} alt="stay vault logo" className=' h-7 w-50' />
      </div>
      <nav className="flex gap-8">
        {NAVBAR_OPTIONS.map(({ label, id, url }) => (
          <Link
            key={id}
            to={url}
            className="text-white font-semibold text-sm tracking-wide hover:text-[#F0E130] transition-colors duration-300 no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar