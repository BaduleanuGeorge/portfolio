import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ scrollToSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed w-full h-[60px] bg-[#0a192f] z-50">
      <div className="max-w-6xl mx-auto h-full px-4 flex justify-between items-center">
        {/* LOGO */}
        <div>
          <h1 className="text-white custom-logo text-xl">Baduleanu G.</h1>
        </div>

        {/* MENU ICONS */}
        <div onClick={toggleMenu} className="lg:hidden z-10 cursor-pointer">
          {!showMenu ? (
            <RxHamburgerMenu size={30} className="text-white" />
          ) : (
            <AiOutlineClose size={30} className="text-white" />
          )}
        </div>

        {/* MOBILE MENU */}
        <ul
          className={`fixed top-0 right-0 w-[280px] md:w-[400px] h-screen bg-[#0a192f] text-white flex flex-col items-center justify-evenly text-xl transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <li
            onClick={() => {
              scrollToSection("heroSection");
              closeMenu();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection("aboutSection");
              closeMenu();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection("projectsSection");
              closeMenu();
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              scrollToSection("contactSection");
              closeMenu();
            }}
          >
            Contact
          </li>
        </ul>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-lg text-white">
          <li
            className="cursor-pointer hover:text-gray-300 duration-300"
            onClick={() => scrollToSection("heroSection")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-gray-300 duration-300"
            onClick={() => scrollToSection("aboutSection")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-gray-300 duration-300"
            onClick={() => scrollToSection("projectsSection")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-gray-300 duration-300"
            onClick={() => scrollToSection("contactSection")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
