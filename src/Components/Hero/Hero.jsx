import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>Flame Institute and Therapy</h1>
        <h3>Mission</h3>
        <p>To Impact Society through Counselling, Training, Mentorship, Consultancy and Research</p>
        <h3>Vision</h3>
        <p>A Global-standards, Generational- relevant,     Community-centred Training and Therapy Institute.</p>
        <h3>Core Values</h3>
        <p>
        <span className="hover-word" data-definition="A belief that the Family is the cornerstone of any society and has to be taken care of to have any progress and stability.">Family</span>, <span className="hover-word" data-definition="Society falls and rises with leadership, thus stressing on strategic, servant, and spiritual leadership. ">Leadership</span> <span className="hover-word" data-definition="Education is the pedestal on which greatness is attained and should be a route towards other attainments in the economy including entrepreneurship, innovation, sports and health. ">Academics</span> <span className="hover-word" data-definition=" Church and the subsequent service attached to it are key balancing and stabilizing factors of any society, without which morals and ethics find no place of exercise.">Ministry</span>        <span className="hover-word" >and</span>! <span className="hover-word" data-definition="The state or quality of being excellent">Empowerment</span>
    </p>
       </div>
    </div>
  )
}

export default Hero
