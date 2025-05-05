import React, { useEffect } from 'react'
import Logo from './Logo'
import { CiMenuKebab } from "react-icons/ci";

export default function Navbar({isMenuOpen, setIsMenuOpen}) {
    useEffect(()=>{
        document.body.style.overflow = isMenuOpen ? 'hidden' : "";
    }, [isMenuOpen]);
  return (
    <nav   className="fixed top-0 w-full z-40 backdrop-blur-lg px-1 border-b border-[#001F1F] shadow-lg"
    style={{ backgroundColor: 'rgba(0, 60, 60, 0.9)' }}>
        <div className="mx-auto px-4">
            <div className="flex justify-between items-center font-mono h-16">
                <Logo/>
                {!isMenuOpen && ( <div onClick={()=> setIsMenuOpen((prev) => !prev)} className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono">
                    <CiMenuKebab/>
                    </div>
                )}
                <div className='flex md:flex items-center space-x-8'>
                    <div className='hidden md:flex items-center space-x-8'>
                        <a href="#home" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            Home
                        </a>
                        <a href="#about" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            About
                        </a>
                        <a href="#edu" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            Education
                        </a>
                        <a href="#work" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            Work
                        </a>
                        <a href="#future" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            Future
                        </a>                    
                        <a href="#contact" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
