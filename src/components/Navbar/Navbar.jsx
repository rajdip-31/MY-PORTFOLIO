import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import menu_open from '../../images/HamBurger.png'
import menu_close from '../../assets/menu_close.svg'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-452px";
  }



  // -----Change Mode-----
    const [myStyle, setMyStyle] = useState({
      color: "aliceblue",
      backgroundColor: "#0F0715" // Corrected property name
    });
  
    const [btnText, setBtnText] = useState("DARK MODE");
  
    // Function for changing Background color
    const changeBackground = () => {
      if (myStyle.backgroundColor === "#0F0715") {
        setMyStyle({
          color: "aliceblue",
          backgroundColor: "lightblue"
        });
        setBtnText("LIGHT MODE");
      } else {
        setMyStyle({
          color: "aliceblue",
          backgroundColor: "#0F0715"
        });
        setBtnText("DARK MODE");
      }
    };
  
    // Apply the styles to the document body
    document.body.style.color = myStyle.color;
    document.body.style.backgroundColor = myStyle.backgroundColor;


//scroll up--------
let calcScrollValue = () => {

let scrollProgress = document.getElementById("progress");
let progressValue = document.getElementById ("progress-value");
let pos = document.documentElement.scrollTop; 
let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrollValue = Math.round((pos * 100) / calcHeight);

if (pos > 100) {
scrollProgress.style.display ="grid";
} else {
  scrollProgress.style.display = "none";
}

scrollProgress.addEventListener("click", () => { 
  document.documentElement.scrollTop = 0;
});
scrollProgress.style.background = `conic-gradient(#6019f2 ${scrollValue}% , #ae87ff ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue; 



  

  return (
  <>
    <div id="progress">
    <span id="progress-value"><i className='bx bx-up-arrow-alt'></i></span>
    </div>
   
    <div className='navbar navbar-inverse'  data-spy="affix" data-offset-top="197">
      <NavLink to="/"><img className= "logo" src={logo} alt="logo" /></NavLink>
      <img src={menu_open} alt="menu burger" className='nav-mob-open' onClick={openMenu}/>
      <ul className='nav-menu' ref = {menuRef}>
        <img src={menu_close} className='nav-mob-close' alt="" onClick={closeMenu} />
        <NavLink style={{ textDecoration: 'none' }} to={"/"}><li onClick={closeMenu}>HOME</li></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={"/Hero"}><li onClick={closeMenu}>ABOUT</li></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to = {"/Skills"}><li onClick={closeMenu}>SKILLS</li></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to = {"/Work"}><li onClick={closeMenu}>WORKS</li></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to = {"/Work"}><li onClick={closeMenu}>EDUCATION</li></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to = {"/Contact"}><li onClick={closeMenu}>CONTACT</li></NavLink>
        <li><a onClick={changeBackground}>{btnText}</a></li>
      </ul>
      <div id='mode'>CONTACT</div>
    </div>
  </>
  )
}

export default Navbar
