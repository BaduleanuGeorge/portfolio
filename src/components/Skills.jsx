import React from "react";
import JavaScript from "../assets/JavaScript.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Tailwind from "../assets/Tailwind.png";
import Java from "../assets/Java.png";
import Figma from "../assets/Figma.png";
import SkillContainer from "./SkillContainer";

function Skills() {
  return (
    <div className="w-full h-auto bg-[#001b44] py-16">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-white text-2xl border-b-2 w-fit border-pink-700">
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[600px] grid grid-cols-3 pt-12 gap-8">
            <SkillContainer img={JavaScript} title="JavaScript" />
            <SkillContainer img={HTML} title="HTML" />
            <SkillContainer img={CSS} title="CSS" />
            <SkillContainer img={Tailwind} title="Tailwind" />
            <SkillContainer img={Java} title="Java" />
            <SkillContainer img={Figma} title="Figma" />
          </div>
          <div className="max-w-[600px] h-full pt-12 lg:pt-0">
            <h2 className="font-bold text-white text-3xl pt-2 ">
              Technologies I can work with
            </h2>
            <p className="pt-4 text-gray-300 text-lg ">
              As a Software Engineer, I bring a robust skill set honed through
              commercial experience. Proficient in JavaScript, CSS, HTML,
              Tailwind, Java, and Figma, I seamlessly blend front-end expertise
              with back-end proficiency. I specialize in creating dynamic and
              responsive web interfaces, streamlining styling with Tailwind, and
              building scalable solutions with Java. Additionally, I excel in
              UX/UI design using Figma, fostering collaboration and iterative
              design processes. My versatile skills reflect a commitment to
              delivering high-quality solutions in web development and user
              experience design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
