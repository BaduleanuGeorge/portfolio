import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full flex justify-between items-center h-[80px] bg-[#0a192f] px-4 md:px-12 text-gray-300">
      <div className="text-4xl">
        <a href="#home"><h1>GB</h1></a>
      </div>

      <div className="hidden md:flex">
        <ul className="flex">
        <a href="#about">
            <li className="px-5">About</li>
          </a>
          <a href="#work">
            <li className="px-5">Work</li>
          </a>
          <a href="#skills">
            <li className="px-5">Skills</li>
          </a>
          <a href="#contact">
            <li className="px-5">Contact</li>
          </a>
        </ul>
      </div>

      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul  className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 bg-[#0a192f] w-full h-screen flex flex-col items-center justify-center"
        }>
        <a onClick={handleNav} href="#about">
          <li className="px-5 py-6 text-2xl">About</li>
        </a>
        <a onClick={handleNav} href="#work">
          <li className="px-5 py-6 text-2xl">Work</li>
        </a><a onClick={handleNav} href="#skills">
          <li className="px-5 py-6 text-2xl">Skills</li>
        </a><a onClick={handleNav} href="#contact">
          <li className="px-5 py-6 text-2xl">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
