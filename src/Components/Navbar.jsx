

import React from 'react'

function Navbar() {
  return (
   <>
    <nav className="md:px-8 px-2 md:py-8 py-2 bg-[#0E182C] flex md:items-center items-start md:justify-center justify-start lg:gap-12 gap-4 2xl:w-4/6 xl:w-[75%] w-[100%]  mx-auto">
        <ul className="list-none flex">
            <li><a href="/" className="mx-2 px-2 md:text-xl text-xs text-slate-300 hover:underline transition-all">Home</a></li>
            <li><a href="#project" className="mx-2 px-2 md:text-xl text-xs text-slate-300 hover:underline transition-all">Project</a></li>
            <li><a href="#skills" className="mx-2 px-2 md:text-xl text-xs text-slate-300 hover:underline transition-all">Skills</a></li>
            <li><a href="#certificate" className="mx-2 px-2 md:text-xl text-xs text-slate-300 hover:underline transition-all">Certificate</a></li>
            <li><a href="#contact" className="mx-2 px-2 md:text-xl text-xs text-slate-300 hover:underline transition-all">Contact</a></li>
        </ul>
    </nav>
   </>
  )
}

export default Navbar