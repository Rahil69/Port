import React from 'react'
import {FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='min-h-full bg-[#1B1B1B] rounded-b-lg mt-2 mx-2 px-0 py-5 max-w-4xl mx-auto'>
            <div className='flex justify-between items-center'>
              <ul className='flex gap-16 list-none m-0 p-0 pl-20'>
                  <link><a href="/" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500'>Home </a></link>
              <link><a href="/about" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>About </a> </link>
              <link><a href="/contact" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>Contact </a> </link>
              <link><a href="/contact" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>Projects </a> </link>
                      </ul>
                      <div className='flex gap-4 pr-10 text-xl'>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer className="text-gray-400 hover:text-white text-4xl'><FaInstagram/> </a>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer className="text-gray-400 hover:text-white text-xl'><FaTwitter/> </a>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer className="text-gray-400 hover:text-white text-xl'><FaGithub/> </a>
              
                      </div>
            </div>
    </nav>
  )
}

export default Navbar