
import mumbai from "../assets/mumbai.png"
import geekster from "../assets/geekster.jpeg"
import skill1 from "../assets/skill1.svg";
import skill2 from "../assets/skill2.svg";
import skill3 from "../assets/skill3.svg";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import React from 'react'

function Skills() {
  return (
    <>
        <h1 className="text-center text-4xl text-white bg-[#0E182C] 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto underline" id="skills">Skills & Education</h1>
     <div className="skills-container px-8 py-16 bg-[#0E182C] flex items-start justify-around md:flex-nowrap flex-wrap gap-8 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto text-[#F3F4F6]">
        <div className="skills lg:w-[50%] w-[100%]">
          <div className="skill  py-4  px-4 mb-4 rounded-lg cursor-pointer hover:bg-[#101E38] transition-all">
            <h3 className="mb-4 text-2xl">Programming Languages</h3>
            <p className="mb-4 text-base">I possess proficient expertise in a diverse range of programming languages, including C, C++, C#, Python, TypeScript, and JavaScript.</p>
               <img src={skill1} alt="" className="w-[30%]" />
        </div>
        <div className="skill  py-4  px-4 mb-4 rounded-lg cursor-pointer hover:bg-[#101E38] transition-all">
            <h3 className="mb-4 text-2xl">Frameworks & Libraries</h3>
            <p className="mb-4 text-base">Experienced in a versatile tech stack, including React, Express.js, Node.js, Flask, Tailwind CSS, and Tensorflow.</p>
             <img src={skill2} alt=""  className="w-[30%]"  />
        </div>

        <div className="skill  py-4  px-4 mb-4 rounded-lg cursor-pointer hover:bg-[#101E38] transition-all">
            <h3 className="mb-4 text-2xl">Tools & Platforms</h3>
            <p className="mb-4 text-base">I am well-versed in utilizing various tools and platforms to enhance the development process, including Git, Github, Netlify, Vercel, Firebase, and Postman.</p>
            <img src={skill3} alt=""  className="w-[30%]" />
        </div>

        </div>
        <div className="education lg:w-[47%] w-[100%] border p-6 rounded-xl">
            <div className="heading mb-4 flex gap-2">
                <AccountBalanceIcon/>
                <h3 className="text-lg">Education</h3>
            </div>
       
            <div className="education-detail flex items-start gap-4 mb-4">
                <img src={geekster} alt="" className="w-10 rounded-lg"/>
                <div>
                    <p className="text-xl mb-1">National Skill Development Corporation</p>
                     <div className="flex  gap-6 text-base">
                     <p>Web development BootCamp</p>
                     <p>2023 - present</p>
                     </div>
                </div>
            </div>

            <div className="education-detail flex items-start gap-4 mb-4">
                <img src={mumbai} alt="" className="w-10 rounded-lg"/>
                <div>
                    <p className="text-xl mb-1">University of Mumbai</p>
                     <div className="flex  gap-6 text-base">
                     <p>B.Tech in Computer Science</p>
                     <p>2019 - 2023</p>
                     </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Skills