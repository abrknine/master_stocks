import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import UserAgreement from '../Components/Useragreement'


const Contactus = () => {
  return (
    <div>
      <div>

       <Navbar/>
      </div>
      <div>
        <UserAgreement/>
      </div>
       <div>

       <Contact />
       </div>
       <div>

       <Footer/>
       </div>
    </div>
  )
}

export default Contactus
