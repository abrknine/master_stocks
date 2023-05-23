import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Equity from '../Components/Equity'
import UserAgreement from '../Components/Useragreement'



const Package2 = () => {
  return (
    <div>
      <Navbar/>
      <UserAgreement/>

      <Equity actualPrice={''} discountedPrice={'35,400'} actualPrice1={'8000'} discountedPrice1={'69,999'}actualPrice2={'12000'} discountedPrice2={'1,04,999'}actualPrice3={'16000'} discountedPrice3={'1,34,999'} 
      />

      <Footer/>
    </div>
  )
}

export default Package2