import html from "../assets/html.png"
import LinkIcon from '@mui/icons-material/Link';

import React from 'react'

function ProjectCard({info,name,github,html,css,javascript}) {
  return (
     <>
      <div className="project-card p-4 2xl:w-[30%] xl:w-[45%] lg:w-[50%] w-[100%]  text-[#F3F4F6] rounded-lg cursor-pointer hover:bg-[#101E38] transition-all">
         <div className="icon-container  mb-4">
            <div className="icons flex items-center justify-start gap-2 mb-4">
                <img src={html} alt="" className="w-8"/>
                <img src={css} alt="" className="w-8"/>
                <img src={javascript} alt="" className="w-8"/>
            </div>
            <h3 className="text-lg">{name}</h3>
         </div>
         <div className="desc">
            <p>{info}</p>
         </div>
         <div className="text-xs mt-4">
           <a href={github} target="_blank"> <LinkIcon /><button className="ml-1">View Github</button></a>
         </div>
      </div>
     </>
  )
}

export default ProjectCard