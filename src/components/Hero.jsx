import React from "react";
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";

const Hero = ({ scrollToSection }) => {
  return (
    <div
      id="heroSection"
      className="relative w-full h-[85vh] bg-[url('../src/assets/HeroBG.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full bg-[#0a192f]/80">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center items-start px-4">
          <h3 className="text-lg md:text-2xl text-white">Hi, I am</h3>
          <h1 className="text-white text-3xl md:text-6xl font-bold pt-2">
            George Baduleanu
          </h1>
          <h3 className="text-lg md:text-2xl pt-2 text-gray-300 md:max-w-[750px]">
            A software engineer graduate with experience in UX/UI design
            principles. I craft elegant, user-centric digital solutions that
            seamlessly merge form and function.
          </h3>
          <div className="pt-10 flex gap-4">
            <button
              className="py-3 px-6 border-2 rounded-lg bg-white border-white hover:bg-pink-700 hover:border-pink-700 hover:text-white duration-300 flex justify-center items-center gap-1"
              onClick={() => scrollToSection("projectsSection")}
            >
              Projects <BsArrowRightShort size={25} />
            </button>
            <button className="py-3 px-6 border-2 border-white rounded-lg text-white hover:bg-white hover:text-black duration-300 flex justify-center items-center gap-1">
              Resume <BsArrowDownShort size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
