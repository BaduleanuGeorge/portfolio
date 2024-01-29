import React from "react";

export default function SkillContainer(props) {
  return (
    <div
      className="cursor-pointer hover:scale-110 duration-300  border-[2px] border-pink-700 shadow-sm shadow-black hover:shadow-md hover:shadow-black 
    rounded-lg w-[100px] h-auto p-4 flex flex-col items-center justify-center"
    >
      <img src={props.img} alt="skill icon" className="w-20" />
      <h2 className="text-white">{props.title}</h2>
    </div>
  );
}
