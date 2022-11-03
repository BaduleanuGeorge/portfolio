import React from "react";
import profile from "../assets/profile.jpeg";

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] grid sm:grid-cols-2 px-4 w-full gap-8 md:pb-4">
          <div>
            <p className="text-3xl inline border-b-4 border-pink-600 text">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid sm:grid-cols-2 px-4 w-full gap-8">
          <div>
            <p className="text-xl sm:text-2xl text-[#8892b0] ">
              Hi! My name is George Baduleanu, nice to meet you! This
              is my portfolio.
            </p>
            <div className="flex justify-center pt-4">
            <img
              className="rounded-full w-[125px] sm:w-[200px] md:w-[250px]"
              src={profile}
              alt="profile-pic"
            />
            </div>
          </div>
          <div>
            <p className="text-justify sm:text-md xl:text-lg">
              I am a Software Engineer graduate and my goal is to become a Front
              End Developer due to the fact that I am passionate about creating
              and designing web applications, and not only. <br></br>I have a
              good grasp of UX/UI principles and I know how to put them in
              practice by using technologies as{" "}
              <span className="text-pink-600">Figma</span> or{" "}
              <span className="text-pink-600">Miro</span> to create wireframes
              which will be later implemented. <br></br>I also have a solid
              foundation of the languages I learned, and at the moment I am
              eager to learn new technologies such as React and Tailwind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
