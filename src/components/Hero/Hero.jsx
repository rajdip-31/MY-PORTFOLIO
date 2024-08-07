import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import profile_photo from '../../images/2.png';
import resume from '../../images/CV.pdf';
import './Hero.css';


const Hero = () => {

  const [counterState,setCounterState] =  useState(false);

  

  return (
    
    
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
      <div className="hero" id='home'>
        <img src={profile_photo} alt="profile photo" />
        <div className="content" id='about'>
        <span >I'm Rajdip</span>
        <h1>Web Developer And <br /> Competitive Programmer</h1>
        <p>Hello! I'm a web developer with a passion for coding and a keen interest in competitive programming. Explore my portfolio to see my projects and accomplishments in the world of web development and beyond.</p>
        <div className="hero-action">
            <a className="hero-connect" href='#contact'>CONTACT ME</a>
            <a className="hero-resume" href={resume} download>RESUME<i className='bx bxs-download bx-sm'></i></a>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100084533560758" target='blank'><i className='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/irajdip__pramanik/" target='blank'><i className='bx bxl-instagram-alt'></i></a> 
          <a href="https://x.com/frozzencode" target='blank'><i className='bx bxl-twitter'></i></a>
          <a href="https://www.linkedin.com/in/rajdip-pramanik/" target='blank'><i className='bx bxl-linkedin-square' ></i></a>
          <a href="https://github.com/rajdip-31" target='blank'><i className='bx bxl-github' ></i></a>
        </div>
        </div>
      </div>
        <div className="countUp">
        <div className="box">
          <p className="number"> {counterState && <CountUp start={0} end={3} duration={3}></CountUp>}+</p>
          <p className="text">YEARS OF EXPERIENCE</p>
        </div>
        <div className="box">
          <p className="number">{counterState && <CountUp start={0} end={10} duration={3}></CountUp>}+</p>
          <p className="text">PROJECTS</p>
        </div>
        <div className="box">
          <p className="number">{counterState && <CountUp start={0} end={50} duration={3}></CountUp>}+</p>
          <p className="text">HAPPY CLIENTS</p>
        </div>
      </div>
    </ScrollTrigger>
  
  
    
  )
}

export default Hero;
