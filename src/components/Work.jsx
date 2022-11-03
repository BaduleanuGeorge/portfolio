import React from "react";
import ANDROIDAPP from "../assets/androidapp.png"

function Work() {
  return (
    <div id="work" className="w-full h-screen px-4 text-gray-300 bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <p className="text-3xl inline border-b-4 border-pink-600">Work</p>
          <p className="pt-4">
            /* The projects I've accomplished so far are not so relevant to Front End development. <br></br>Thus I will include my FYP which emphasises the Front End development, as well as Back End to some extend. <br></br> More projects will be added, as I am working on them at the moment. */
          </p>
        </div>
        <div className="shadow-lg shadow-[#040c16] ">
            <img src={ANDROIDAPP} alt="android app" className="pt-5 w-[350px] sm:w-[450px] md:w-[500px]"></img>
        </div>

        <div className="flex justify-center items-center gap-8">
          <a href="https://www.youtube.com/watch?v=mpnNtkoynas" target="_blank"><button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 my-4 py-3 mx-auto flex items-center">Demo</button></a>
          <a href="https://github.com/BaduleanuGeorge/Travel4You/tree/main/Travel4You" target="_blank"><button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 my-4 py-3 mx-auto flex items-center">Code</button></a>
        </div>
      </div>
    </div>
  );
}

export default Work;
