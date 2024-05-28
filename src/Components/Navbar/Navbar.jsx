import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu_icon.png'
import watsap from '../../assets/watsap.png'


const Navbar = () => {
const [sticky, setSticky] = useState(false);

useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 500? setSticky(true) : setSticky(false);
  })
},[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <div>
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth ={true} offset={0} >Home</Link></li>
            <li><Link to='about' smooth ={true} offset={-190} >About us</Link></li>
            <li><Link to='programs' smooth ={true} offset={-260} >Programs</Link></li>
            <li><Link to='team'  smooth = {true} offset={-10} >Team</Link></li>
            <li><Link to='contacts' smooth ={true} offset={-260} className= 'btn' >Contact Us</Link></li>
        </ul>
        <img src={menu_icon}alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  
    </div>
  )
  }  


export default Navbar
