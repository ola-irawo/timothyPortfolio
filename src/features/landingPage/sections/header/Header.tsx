"use client"
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="text-white h-auto min-h-24">
      <div className="bg-black fixed top-0 right-0 left-0 z-10 mx-auto px-4 py-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-3xl">Timothy Aremu</h1>
        </div>
        
        {/* Navigation for Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-white hover:text-softblue transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-softblue transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-softblue transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-8 w-8 text-softblue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.8)] text-center py-4">
          <ul className="space-y-4 h-4/6   mt-[120px] max-h-[400px] text-4xl flex flex-col items-center justify-between">
            <li>
              <a
                href="#about"
                className="block text-white hover:text-softblue transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-white hover:text-softblue transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white hover:text-softblue transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
