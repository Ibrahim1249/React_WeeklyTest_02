

import React from 'react'
import Hero from './Hero'
import "../App.css"
import Project from './Project'
import Skills from "./Skills"
import Contact from './Contact'
import Navbar from "./Navbar"
import Certificate from "./Certificate"
function HomePage() {
  return (
    <>
    <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Certificate />
      <Contact />
    </>
  )
}

export default HomePage