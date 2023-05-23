import React from 'react'
import Navbar from '../Components/Navbar'
import Bank from '../Components/Bank'
import Footer from '../Components/Footer'
import UserAgreement from '../Components/Useragreement'

const Bankdetails = () => {
  const styles = {
    display:'flex',
    flexDirection: 'column'
  }
  return (
    <div style={styles}>
      <div>
       <Navbar/>

      </div>
      <div>
        <UserAgreement/>
      </div>
       <div className='mt-32 mb-20' >
       <Bank />

       </div>
       <div>
       <Footer/>

       </div>
    </div>
  )
}

export default Bankdetails
