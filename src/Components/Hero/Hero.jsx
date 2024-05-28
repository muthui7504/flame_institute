import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>mentorship,counseling,leadership, training & spiritual services</h1>
        <p>Flame Institute and Therapy is a Multifaceted agency offering tailored mentorship,counseling,leadership, training & spiritual services</p>
        <h3>Mission</h3>
        <p>To Impact Society through Counselling, Training, Mentorship, Consultancy and Research</p>
        <h3>Vision</h3>
        <p>A Global-standards, Generational- relevant,     Community-centred Training and Therapy Institute.</p>
       </div>
    </div>
  )
}

export default Hero
