import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import JAVA from "../assets/java.png";
import FIREBASE from "../assets/firebase.png";
import TAILWIND from "../assets/tailwind.png";

function Skills() {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300 px-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="grid sm:grid-cols-2 gap-8 max-w-[1000px]  w-full md:pb-4">
          <div>
            <p className="text-3xl inline border-b-4 border-pink-600 text">
              Skills
            </p>
            <p className="pt-4">
              // These are the technologies I am familiar with
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-[1000px] w-full text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JAVA} alt="java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JAVASCRIPT} alt="javascript icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FIREBASE} alt="firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWIND} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
