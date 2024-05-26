import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Works from './components/Work/Work.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {

  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
