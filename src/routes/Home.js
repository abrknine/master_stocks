import React from 'react'
import Navbar from '../Components/Navbar'
import Note from '../Components/Note'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import OurOffer from '../Components/OurOffer'
import Practicei from '../Components/Practicei'
import Rules from '../Components/Rules'
import Useragreement from '../Components/Useragreement'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Note/>
      <Hero/>
      <Useragreement/>
      <OurOffer/>
      <Practicei/>
      <Rules/>
      <Footer/>
      
    </div>
  )
}

export default Home
