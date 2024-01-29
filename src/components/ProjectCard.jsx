import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  const redirectToExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[350px] lg:w-[450px] xl:w-[500px] rounded-md flex flex-col mt-10">
      <img
        src={props.img}
        className="rounded-md w-full h-[300px] lg:h-[350px] overflow-hidden"
      />
      <h3 className="text-white text-xl pt-2">{props.title}</h3>
      <p className="text-gray-300 pt-2 pb-4">{props.paragraph}</p>

      <div className="flex gap-4">
        <button
          className="h-[50px] w-[100px] border-2 rounded-lg bg-white border-white
         hover:bg-pink-700 hover:border-pink-700 hover:text-white duration-300 flex justify-center items-center gap-1"
          onClick={() => redirectToExternalLink(props.button1Link)}
        >
          <TfiNewWindow size={20} /> {props.button1}
        </button>
        <button
          className="h-[50px] w-[100px] border-2 rounded-lg bg-white border-white
         hover:bg-pink-700 hover:border-pink-700 hover:text-white duration-300 flex justify-center items-center gap-1"
          onClick={() => redirectToExternalLink(props.button2Link)}
        >
          <FaGithub size={20} /> {props.button2}
        </button>
      </div>
    </div>
  );
}
