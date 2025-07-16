import React from 'react'
import {FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='min-h-full bg-[#1B1B1B] rounded-b-lg mt-2 mx-2 px-0 py-5 max-w-4xl mx-auto'>
            <div className='flex justify-between items-center'>
              <ul className='flex gap-16 list-none m-0 p-0 pl-20'>
                  <li><a href="/" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500'>Home </a></li>
              <li><a href="/about" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>About </a> </li>
              <li><a href="/contact" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>Contact </a> </li>
              <li><a href="/contact" className='text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500 '>Projects </a> </li>
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