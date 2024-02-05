import React from "react";
import Me from "../assets/Me.jpeg";

const About = ({ scrollToSection }) => {
  return (
    <div id="aboutSection" className="w-full h-auto py-16 bg-[#0a192f]">
      {/* Screen limit */}
      <div className="max-w-6xl mx-auto h-full px-3">
        <h2 className="text-white text-2xl border-b-2 w-fit border-pink-700">
          About me
        </h2>

        <div className="pt-8 flex flex-col lg:flex-row items-center">
          {/* Image container */}
          <div className="relative w-[300px] sm:w-[600px] flex justify-center order-first lg:order-last">
            <div
              className="hidden sm:flex animate-pulse absolute top-1/2 left-1/2 transform -translate-x-[46%] -translate-y-[46%] w-[350px] h-[350px]
               border-[6px] border-pink-700 z-10 rounded-lg"
            ></div>
            <img src={Me} className="w-[350px] z-20 rounded-lg" />
          </div>

          {/* About me container */}
          <div className="max-w-[600px] h-full pt-12 lg:pt-0">
            <h2 className="font-bold text-white text-3xl pt-2 ">
              Software engineer with front-end design knowledge.
            </h2>
            <p className="pt-4 text-gray-300 text-lg">
              I'm George Baduleanu, a versatile software engineer with a deep
              understanding of UX/UI design principles. With a solid foundation
              in front-end development and a keen eye for design, I specialize
              in creating elegant and user-centric digital solutions. My
              experience allows me to bridge the gap between code and
              aesthetics, resulting in visually appealing, highly functional
              websites and applications.
            </p>
            <div className="pt-10">
              <button
                className="py-3 px-6 border-2 rounded-lg bg-white border-white hover:bg-pink-700 hover:border-pink-700 hover:text-white duration-300 flex justify-center items-center gap-1"
                onClick={() => scrollToSection("contactSection")}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
