// src/components/Header.js

import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-yellow-200 text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black">Carson Healy</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
