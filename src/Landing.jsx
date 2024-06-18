import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Contacts from './Components/Contacts/Contacts'
import Team from './Components/Team/Team'
import Rev from './Components/Director/Rev'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Rev/>
      <About/>
      <Programs/>
      <Team/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Landing






