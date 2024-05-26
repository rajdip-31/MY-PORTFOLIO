import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={logo} alt="" className='logo'/>
        <div className="footer-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#works">WORKS</a>
            <a href="#education">EDUCATION</a>
            <a href="#contact">CONTACT</a>
        </div>
        <p className="footer-para">© 2024 All rights reserved by Rajdip</p>
      </div>
    </div>
  )
}

export default Footer
