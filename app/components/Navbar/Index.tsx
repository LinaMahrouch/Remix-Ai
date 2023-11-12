import { useCallback, useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorChange(true);
  //   } else {
  //     setColorChange(false);
  //   }
  // };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('scroll', changeNavbarColor);
  // }
  const changeNavbarColor = useCallback(() => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    // Remove the event listener in the cleanup function
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, [changeNavbarColor]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-500 ease-in-out ${colorChange ? 'bg-gradient-to-r from-zinc-900 to-indigo-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-4 text-white">
        <div className="font-bold text-xl cursor-pointer">
          Your AI App
        </div>
        <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white hover:text-gray-300 p-2">Home</Link>
          <Link to="/features" className="block text-white hover:text-gray-300 p-2">Features</Link>
          <Link to="/about" className="block text-white hover:text-gray-300 p-2">About</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300 p-2">Contact</Link>
        </div>
         )}
    </nav>
  );
}
