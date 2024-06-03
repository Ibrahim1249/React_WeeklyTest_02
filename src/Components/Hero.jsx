import React from "react";
import user from "../assets/UserImage.png"

function Hero() {
  return (
    <>
      <div className="md:px-8 px-0 py-16 bg-[#0E182C] flex items-center justify-center md:flex-nowrap flex-wrap-reverse lg:gap-12 gap-4 2xl:w-4/6 xl:w-[75%] w-[100%]  mx-auto">
        <div className="md:w-2/4 w-[100%] text-[#F3F4F6] p-4">
          <h3 className="font-normal text-2xl mb-1 pl-1">Software Engineer</h3>
          <h1 className="font-semibold text-5xl mb-4 text-red-600">Ibrahim Momin</h1>
          <p className="text-justify">
            I am a software engineer with expertise in full-stack web
            development. I have experience in building scalable, secure and
            reliable web applications using various frameworks and technologies.
            I enjoy solving complex problems and learning new skills. I am
            passionate about creating high-quality code that follows best
            practices and industry standards.
          </p>
          <div className="my-6">
             <a className="mx-2 px-4 py-2 border" href="#project">Project</a>
             <a className="mx-2 px-4 py-2 border" href="#contact">Contact</a>
          </div>
        </div>
        <div className="md:w-1/3 w-[75%]">
          <img src={user} alt="" className="w-full"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
