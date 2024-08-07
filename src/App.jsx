import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Work from "./components/Work/Work.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./Home.jsx"
import ParticlesComponent from './components/Particles/Particles.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
    <ParticlesComponent id="particles"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter >

  );
};

export default App;
