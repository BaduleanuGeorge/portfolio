import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="w-full h-auto bg-[#0a192f] py-14">
      <div className="max-w-6xl mx-auto h-full px-3">
        <h2 className="text-white text-2xl border-b-2 w-fit border-pink-700">
          My work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-4">
          <ProjectCard
            img={Project3}
            title="WeBuild"
            paragraph="Plant A Tree is a project focused on designing a website for a non-profit 
            company which aims to combat deforestation."
            button1="Project"
            button1Link="https://webuildlondon.netlify.app" // Replace with the actual link
            button2="Source"
            button2Link="https://github.com/BaduleanuGeorge/WeBuild" // Replace with the actual link
          />

          <ProjectCard
            img={Project2}
            title="London Flavourscapes"
            paragraph="Plant A Tree is a project focused on designing a website for a non-profit 
            company which aims to combat deforestation."
            button1="Project"
            button1Link="https://londonflavourscapes.netlify.app/" // Replace with the actual link
            button2="Source"
            button2Link="https://github.com/BaduleanuGeorge/Restaurant"
          />

          <ProjectCard
            img={Project1}
            title="Plant A Tree"
            paragraph="Plant A Tree is a project focused on designing a website for a non-profit 
            company which aims to combat deforestation."
            button1="Demo"
            button2="Code"
          />
        </div>
      </div>
    </div>
  );
}
