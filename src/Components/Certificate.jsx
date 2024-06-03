
import React from 'react'

import certificate1 from "../assets/certificate_1.avif";
import certificate2 from "../assets/certificate_2.jpg";

function Certificate() {
  return (
    <>
     <h1 className="text-center text-4xl text-white bg-[#0E182C] 2xl:w-4/6 xl:w-[75%] w-[100%]  mx-auto underline">Certificate</h1>
     <div className=" px-8 py-16 bg-[#0E182C] flex items-center justify-center gap-12 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto flex-wrap" id="certificate">
        <div className="w-1/3 overflow-hidden">
            <img src={certificate1} alt="" className="hover:scale-110 transition-all cursor-pointer"/>
        </div>
        <div  className="w-1/3 overflow-hidden">
            <img src={certificate2} alt="" className="hover:scale-110 transition-all cursor-pointer"/>
        </div>
     </div>
    </>
  )
}

export default Certificate