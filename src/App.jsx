import React from 'react'
import About from './components/About'
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
    </div>
  )
}

export default App
