import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import menu_icon from '../assets/menu_icon.png'


const Navbar = () => {
const [sticky, setSticky] = useState(true);


useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > -20? setSticky(true) : setSticky(false);
  })
},[]);


  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='/'  offset={0} >Home</Link></li>
            <li><Link to='/abou'  offset={-190} >Faculties</Link></li>
            <li><Link to='/programs'  offset={-260} >Programs</Link></li>
            <li><Link to='/team'  offset={-260} >Team</Link></li>
            <li><Link to='/contacts'  offset={260} className= 'btn' >Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
  }  


export default Navbar
