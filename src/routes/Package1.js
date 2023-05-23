import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Equity from '../Components/Equity'
import UserAgreement from '../Components/Useragreement'


const Package1 = () => {
  return (
    <div>
      <Navbar/>
      
        <UserAgreement/>
      
      <Equity actualPrice={'10,000'} discountedPrice={'4999'} actualPrice1={'40000'} discountedPrice1={'9999'}actualPrice2={'80,000'} discountedPrice2={'14,999'}actualPrice3={'1,20,000'} discountedPrice3={'19,999'}        
      
      />
      <Footer/>
    </div>
  )
}

export default Package1
