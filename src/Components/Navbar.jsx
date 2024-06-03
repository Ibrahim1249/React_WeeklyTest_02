

import React from 'react'

function Navbar() {
  return (
   <>
    <nav className="px-8 py-8 bg-[#0E182C] flex items-center justify-center gap-12 2xl:w-4/6 xl:w-[75%] w-[100%]  mx-auto">
        <ul className="list-none flex">
            <li><a href="/" className="mx-2 px-2 text-xl text-slate-300 hover:underline transition-all">Home</a></li>
            <li><a href="#project" className="mx-2 px-2 text-xl text-slate-300 hover:underline transition-all">Project</a></li>
            <li><a href="#skills" className="mx-2 px-2 text-xl text-slate-300 hover:underline transition-all">Skills</a></li>
            <li><a href="#certificate" className="mx-2 px-2 text-xl text-slate-300 hover:underline transition-all">Certificate</a></li>
            <li><a href="#contact" className="mx-2 px-2 text-xl text-slate-300 hover:underline transition-all">Contact</a></li>
        </ul>
    </nav>
   </>
  )
}

export default Navbar