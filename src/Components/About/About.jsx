import React from 'react'
import './About.css'
import therapy from '../../assets/therapy.jpg'

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src= {therapy} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT FLAME INSTITUTE AND THERAPY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea laborum amet perferendis at, culpa aut alias accusantium, natus blanditiis fuga fugiat odit aliquid cupiditate nisi ex minima ducimus voluptatem velit.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolores amet quae nesciunt cum nihil reprehenderit, corporis impedit nostrum dignissimos, blanditiis beatae! Delectus unde at vel, culpa ab cum iste!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores, animi in adipisci quaerat velit cum temporibus molestiae dolorem voluptas cupiditate repellendus laborum! Deserunt molestias, natus fuga eius optio non!</p>
        </div>
      </div>
    </div>
  )
}

export default About
