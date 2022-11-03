import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-screen px-4 text-gray-300 bg-[#0a192f]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <p className="text-3xl inline border-b-4 border-pink-600">Contact</p>
          <p className="pt-4">
            // Fill the form to get in touch or send an email to{" "}
            <span className="text-pink-600">baduleanug@gmail.com</span>
          </p>
        </div>

        <form className="flex flex-col max-w-[600px] w-full pt-4">
          <input
            className="bg-[#ccd6f6] p-2 text-black"
            type="text"
            placeholder="Name"
            name="name"
          ></input>
          <input
            className="my-4 p-2 bg-[#ccd6f6] text-black"
            type="email"
            placeholder="Email"
            name="email"
          ></input>
          <textarea
            className="bg-[#ccd6f6] p-2 text-black"
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>

          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 my-8 py-3 mx-auto flex items-center">
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
