import { useState } from 'react'
import NavMain from './components/navbar/navMain'
import './App.css'
import HeroMain from './components/navbar/HeroSection/HeroMain'
import AboutMeMain from './components/navbar/AboutMe/AboutMeMain'
import SkillMain from './components/SkillsSection/SkillMain'

import ProjectMain from './components/ProjectsSection/ProjectMain'
import CertificateMain from './components/CertificateSection.jsx/CertificateMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import 'animate.css/animate.min.css';
import FooterMain from './components/Footer/FooterMain'

function App() {
  

  return (
    <>
      <main>
         <NavMain/>
         <HeroMain/>
         <AboutMeMain/>
         <SkillMain/>
         <ProjectMain/>
         <CertificateMain/>
         <ContactMeMain/>
         <FooterMain/>
      </main>
    </>
  )
}

export default App
