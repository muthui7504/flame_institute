import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Contacts from './Components/Contacts/Contacts'
import Team from './Components/Team/Team'


const Landing = () => {
  return (
    <div>
         <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
      <Team/>
      <div className="container">
        <Contacts/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Landing






