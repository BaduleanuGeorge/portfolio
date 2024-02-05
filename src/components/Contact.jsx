import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = ({ scrollToSection }) => {
  const redirectToExternalLink = (url) => {
    window.open(url, "_blank");
  };

  const emailAddress = "baduleanug@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div id="contactSection" className="w-full h-[90vh] bg-[#001b44]">
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-3">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-4xl border-b-2 w-fit border-pink-700">
            Contact me!
          </h2>
          <h3 className="text-white text-lg md:text-2xl pt-4 text-center">
            Eager to Kickstart My Career – Let's Connect!
          </h3>
        </div>
        <div className="w-full flex flex-col items-center text-white pt-14">
          <div
            className="flex items-center hover:cursor-pointer hover:scale-[1.02] duration-200"
            onClick={() =>
              redirectToExternalLink(
                "https://www.linkedin.com/in/george-baduleanu/"
              )
            }
          >
            <FaLinkedin size={30} />
            <p className="ml-2">linkedin.com/in/george-baduleanu</p>
          </div>

          <div className="flex items-center hover:cursor-pointer pt-4 hover:scale-[1.02] duration-200">
            <MdEmail size={30} />
            <p className="ml-2">
              <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
                {emailAddress}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
