import React from 'react'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

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
