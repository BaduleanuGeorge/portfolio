import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between items-center h-[80px] bg-[#0a192f] px-4 md:px-12 text-gray-300">
      <div className="text-4xl">
        <h1>GB</h1>
      </div>

      <div className="hidden md:flex">
        <ul className="flex">
          <li className="hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-sm">About</li>
          <li className="hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-sm">Work</li>
          <li className="hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-sm">Skills</li>
          <li className="hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-sm">Contact</li>
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
        <li className="px-5 py-6 text-2xl">About</li>
        <li className="px-5 py-6 text-2xl">Work</li>
        <li className="px-5 py-6 text-2xl">Skills</li>
        <li className="px-5 py-6 text-2xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
