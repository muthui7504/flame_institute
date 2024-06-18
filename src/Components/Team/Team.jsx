import React, { useRef } from 'react'
import './Team.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import director from "../../assets/director.jpg"
import chairlady from '../../assets/chairlady.jpg'
import derick from '../../assets/derick.jpg'
import developer from '../../assets/developer.jpg'
import cristine from '../../assets/cristine.jpg'
import wilferd from '../../assets/wilferd.jpg'

function Team() {

  const slider = useRef()
  let tx = 0;

  const slideForward = () =>{
    if (tx > -50){
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () =>{
    if (tx < 0){
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='team'>
        <div className="title">
            <p>OUR Team</p>
            <h2>Meet Our Team</h2>
        </div>
    <div className="testimonials">
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={director} alt="" />
                <div>
                  <h3>Eliud Wanene Nguku</h3>
                  <span>Director/Lead Therapist</span>
                </div>
              </div>
              <p>Married to Linet, father to  Hope(8) and Barak(4), 
                from Nyandarua County. A holder of MA in Pastoral Ministry 
                and BA in Psychology (Hons). 
                Pursuing an MA in Couselling Psychology. 
                He is  passionate for Spiritual and Mental Health. 
                He founded the Institute in April 2024.</p>
                <div className="social">
                  <a href="https://www.facebook.com/ngukueliud?mibextid=ZbWKwL">< FaFacebook /></a>
                  <a >< FaInstagram /></a>
                  <a >< FaLinkedin /></a>
                  <a >< FaXTwitter /></a>
             </div>
             </div>
          </li>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={wilferd} alt="" />
                <div>
                  <h3>Wilfreda Mokeira Arika</h3>
                  <span>Therapist</span>
                </div>
              </div>
              <p>Married - a Mother of Three, from Kisii County. 
                Experienced Counsellor, Mentor, Facilitator and Trainer. 
                God fearing, passionate for families, welness, welfare, 
                awareness creation and community sensitization. .</p>
                <div className="social">
                  <a >< FaFacebook /></a>
                  <a >< FaInstagram /></a>
                  <a >< FaLinkedin /></a>
                  <a >< FaXTwitter /></a>
             </div>
             </div>
          </li>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={derick} alt="" />
                <div>
                  <h3>Derick Mawira Kinyua</h3>
                  <span>Admin</span>
                </div>
              </div>
              <p>A BCom Degree holder from Tharaka-Nithi County, 
                An Action-Oriented Leader who embodies Perseverance, 
                integrity, Empathy, Resilience, and Passion in his Personal 
                and Professional pursuits. Multifaceted interests 
                include Spirituality, Reading, and Promoting Human Well-being.</p>
                <div className="social">
                  <a href="https://www.facebook.com/derrick.mawira.9440">< FaFacebook /></a>
                  <a href="https://www.instagram.com/ddemah7?igsh=MTFjMXM5dnBzd2Ex">< FaInstagram /></a>
                  <a >< FaLinkedin /></a>
                  <a >< FaXTwitter /></a>
             </div>
             </div>
          </li>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={chairlady} alt="" />
                <div>
                  <h3>Monicah Wambui Karanja</h3>
                  <span>Intern Therapist</span>
                </div>
              </div>
              <p>A psychologist, a Leader and Creative Public Speaker 
                from Kiambu County. Socially equipped and passionate 
                about Counselling, Mentorship, Training and Parenting Skills.</p>
              <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=100078875402634">< FaFacebook /></a>
                  <a href="https://www.instagram.com/monicwakaranja?igsh=MWZlYmdlMTF4OTE4YQ==">< FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/monicah-wambui-karanja-a5a05327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< FaLinkedin /></a>
                  <a >< FaXTwitter /></a>
             </div>
             </div>
          </li>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={cristine} alt="" />
                <div>
                  <h3>Christine Atieno Owino </h3>
                  <span>Intern Therapist</span>
                </div>
              </div>
              <p>A goal-oriented Psychologist and Leader, 
                from Siaya County. A devout Christian who is 
                deeply passionate about counseling and creating 
                innovative public awareness campaigns about mental health.</p>
                <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=100070503374631">< FaFacebook /></a>
                  <a href="https://www.instagram.com/joy229707?igsh=NXVnd3J6ank0YnJ3">< FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/owino-christine-5a611629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< FaLinkedin /></a>
                  <a>< FaXTwitter /></a>
             </div>
             </div>
          </li>
          <li>
             <div className="slide">
              <div className="user-info">
                <img src={developer} alt="" />
                <div>
                  <h3>Simon Mutua Muthui </h3>
                  <span>Intern Developer</span>
                </div>
              </div>
              <p>A Computer Scientist from Kitui County. 
                He is passionate about technology and innovative solutions. 
                As a devout Christian, he strives to make a positive i
                mpact in the tech industry while upholding his personal values.</p>
                <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=61557351791488">< FaFacebook /></a>
                  <a href="https://www.instagram.com/snippervisual?igsh=MTVzMDI5dnJmcmVlbQ==">< FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/simon-muthui-2308bb260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< FaLinkedin /></a>
                  <a href="https://x.com/Sniper_driller">< FaXTwitter /></a>
             </div>
             </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Team
