import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ourservices from './components/OurSevices/Ourservices'
import Change from './components/Change/Change'
import Carousel from './components/Carousel/Carousel'
import Instagram from './components/Instagram/Instagram'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourservices />
      <Change />
      <Carousel />
      <Instagram />
      <Footer />
    </div>
  )
}

export default App