import {  useState } from 'react';
import { Link } from '@remix-run/react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full mr-4 pr-4 md:pr-0 z-50 transition duration-500 ease-in-out ">
  {/* Rest of your navbar */}
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="font-bold text-xl cursor-pointer">
        <Link to="/" className="hover:text-gray-300">Your AI App</Link>
        </div>
        <div className="hidden md:flex md:space-x-8">
        <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute bg-black w-full">
          <Link to="/" className="block text-white hover:text-gray-300 p-2">Home</Link>
          <Link to="/features" className="block text-white hover:text-gray-300 p-2">Features</Link>

          <Link to="/contact" className="block text-white hover:text-gray-300 p-2">Contact</Link>
        </div>
         )}
    </nav>
  );
}
