import React from 'react'
import About from './components/About'
import BottomDivider from './components/BottomDivider'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import Hero from './components/Hero'
import HustleDivider from './components/HustleDivider'
import UllaDivider from './components/UllaDivider'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <UllaDivider />
      <About />
      <HustleDivider />
      <ContactForm />
      <BottomDivider />
    </div>
  )
}

export default App
