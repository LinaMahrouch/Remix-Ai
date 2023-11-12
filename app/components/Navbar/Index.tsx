"use client"
import { useState } from 'react';
export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarColor);
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-500 ease-in-out ${colorChange ? 'bg-gradient-to-r from-blue-600 to-teal-700 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-4 text-white">
        <div className="font-bold text-xl cursor-pointer">
          Your AI App
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Features</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block hover:text-gray-300 p-2">Home</a>
        <a href="#" className="block hover:text-gray-300 p-2">Features</a>
        <a href="#" className="block hover:text-gray-300 p-2">About</a>
        <a href="#" className="block hover:text-gray-300 p-2">Contact</a>
      </div>
    </nav>
  );
}
