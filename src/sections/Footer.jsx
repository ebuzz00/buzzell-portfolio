import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return <footer>
    <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10'>
        <div className='flex gap-10 p-4 justify-center text-white'>
            <a href="https://www.linkedin.com/in/elisebuzzell/" className=' p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white' target='_blank'>
            <FaLinkedin /></a>
        </div>
        <p>@ 2025 Buzzell. All rights reserved. </p>
    </div>
  </footer> ;
  
}
