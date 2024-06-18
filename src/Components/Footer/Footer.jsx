import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
       <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Flame institute and therapy</h4>
            
          </div>
          <div className="sb__footer-links_div">
            <h4>Learn more about us on</h4>
            <div className="socialmedia">
            <a href='https://www.facebook.com/flameinstituteandtherapy' ><FaFacebookSquare /></a>
            <a href='https://x.com/InstituteFlame?t=IKAyRLUQvlUjBrGiR6dyvg&s=08 '><FaSquareXTwitter /></a>
            <a><BsLinkedin /></a>
            <a><AiFillInstagram /></a>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} Flame Istitute and Therapy.All rights reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">

          </div>

        </div>
       </div>
    </div>
  )
}

export default Footer
