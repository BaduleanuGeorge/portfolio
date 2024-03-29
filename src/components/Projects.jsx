import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projectsSection" className="w-full h-auto bg-[#0a192f] py-14">
      <div className="max-w-6xl mx-auto h-full px-3">
        <h2 className="text-white text-2xl border-b-2 w-fit border-pink-700">
          My work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-4">
          <ProjectCard
            img={Project3}
            title="WeBuild"
            paragraph="Construction website made using: HTML, Tailwind CSS, JavaScript and React.js"
            button1="Project"
            button1Link="https://webuildlondon.netlify.app" // Replace with the actual link
            button2="Source"
            button2Link="https://github.com/BaduleanuGeorge/WeBuild" // Replace with the actual link
          />

          <ProjectCard
            img={Project2}
            title="London Flavourscapes"
            paragraph="Restauran website made using: HTML, Tailwind CSS, JavaScript and React.js"
            button1="Project"
            button1Link="https://londonflavourscapes.netlify.app/" // Replace with the actual link
            button2="Source"
            button2Link="https://github.com/BaduleanuGeorge/Restaurant"
          />

          <ProjectCard
            img={Project1}
            title="Plant A Tree"
            paragraph="Non-profit Website design made using: Figma"
            button1="Project"
            button1Link="https://www.figma.com/file/VoD7r2hLfXmpht0Yv1kq3i/Plant-A-Tree?type=design&node-id=0%3A1&mode=design&t=VMfZSaPHb1raABIF-1" // Replace with the actual link
            button2="Source"
            button2Link="https://github.com/BaduleanuGeorge/Plant-A-Tree"
          />
        </div>
      </div>
    </div>
  );
}
