import React from 'react';
import { IoMdClose } from 'react-icons/io';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 z-40 flex flex-col items-center justify-center transition-all duration-200 gap-10 ease-in-out ${
        isMenuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: 'rgba(0, 60, 60, 0.9)' }}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <IoMdClose />
      </button>

      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#home" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Home
      </a>
      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#about" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
         ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        About
      </a>
      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#edu" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
         ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Education
      </a>
      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#work" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
         ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Work
      </a>
      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#future" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
         ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Future
      </a>
      <a 
      onClick={() => setIsMenuOpen(false)}
      href="#contact" className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300
         ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>
        Contact
      </a>
    </div>
  );
}
