import React from 'react'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}
