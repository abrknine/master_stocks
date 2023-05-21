import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'


const Contactus = () => {
  return (
    <div>
      <div>

       <Navbar/>
      </div>
       <div>

       <Contact  style={{margin:'230px'}} />
       </div>
       <div>

       <Footer/>
       </div>
    </div>
  )
}

export default Contactus
