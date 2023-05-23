import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About from '../Components/About'
import UserAgreement from '../Components/Useragreement'

const Aboutus = () => {
  return (
    <div>
      <div>

        <Navbar/>
      </div>
      <div>
        <UserAgreement/>
      </div>
        <div>

        <About />
        </div>
        <div>

        <Footer/>
        </div>
    </div>
  )
}

export default Aboutus
