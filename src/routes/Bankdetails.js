import React from 'react'
import Navbar from '../Components/Navbar'
import Bank from '../Components/Bank'
import Footer from '../Components/Footer'

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
       <div style={{margin:'230px'}} >
       <Bank />

       </div>
       <div>
       <Footer/>

       </div>
    </div>
  )
}

export default Bankdetails
