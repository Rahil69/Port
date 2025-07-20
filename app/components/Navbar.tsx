import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#more', label: 'More' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1B] rounded-b-lg py-5 max-w-4xl mx-auto">
      <div className="flex justify-between items-center px-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 text-sm font-mono tracking-wide hover:text-white transition-colors duration-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-500"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-500"><FaTwitter /></a>
          <a href="https://github.com/Rahil69" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-500"><FaGithub /></a>
        </div>
        <button
          className="md:hidden text-gray-400 text-2xl ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 mt-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-400 text-base font-mono tracking-wide hover:text-white transition-colors duration-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;