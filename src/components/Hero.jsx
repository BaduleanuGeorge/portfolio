import React from "react";
import profile from "../assets/image.jpg";

function Hero() {
  return (
    <div
      name="home"
      className="flex flex-col justify-center items-center text-gray-300 bg-[#0a192f] w-full h-screen px-4 text-left"
    >
      <div className="pb-12">
        <p className="text-pink-600 sm:text-2xl pt-8">Hi, my name is</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6]">
          George Baduleanu
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0]">
          Junior Software Engineer
        </h2>
        <p className="text-[#8892b0] pt-5 max-w-[700px]">
          I am a fresh graduate who aspires to become a front end developer. I
          am interested in designing and creating unique layouts for my
          applications. Currently I am leaning technologies as{" "}
          <span className="text-pink-600">React</span> &{" "}
          <span className="text-pink-600">Tailwind.</span>
        </p>
      </div>
      <a href="#about">
        <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
          Find more
        </button>
      </a>
    </div>
  );
}

export default Hero;
