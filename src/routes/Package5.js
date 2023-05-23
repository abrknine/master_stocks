import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Equity from '../Components/Equity'
// import UserAg from './UserAg'
import UserAgreement from '../Components/Useragreement'

const Package5 = () => {
  return (
    <div>
      <Navbar/>
      <UserAgreement/>
      <Equity actualPrice={'2000'} discountedPrice={'999'} actualPrice1={'8000'} discountedPrice1={'3499'}actualPrice2={'12000'} discountedPrice2={'5999'}actualPrice3={'16000'} discountedPrice3={'7999'} 
      />
      <Footer/>
    </div>
  )
}

export default Package5