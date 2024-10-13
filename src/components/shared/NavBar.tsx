"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">Company Logo</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-accent">
            Home
          </a>
          <a href="#" className="hover:text-accent">
            About
          </a>
          <a href="#" className="hover:text-accent">
            Services
          </a>
          <a href="#" className="hover:text-accent">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-primary`}>
        <div className="flex flex-col items-center">
          <a href="#" className="py-2 hover:text-accent">
            Home
          </a>
          <a href="#" className="py-2 hover:text-accent">
            About
          </a>
          <a href="#" className="py-2 hover:text-accent">
            Services
          </a>
          <a href="#" className="py-2 hover:text-accent">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
