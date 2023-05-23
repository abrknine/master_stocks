import React from 'react'
import './Footer.css'
import { FaAddressBook, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='Footer-class'>
        <div  className='Policies'>
        <ul>
          <Link to="/doanddont" className='no-underline text-white'>
        <li>Standard Do’s & Don’ts</li>
          </Link>
          <Link to="/refund" className='no-underline text-white'>
        <li>*Refund policy</li>
        
          </Link>
       
          <Link to="/privacy" className='no-underline text-white'>
          <li>Privacy Policies</li>
        
          </Link>
          <Link to="/terms" className='no-underline text-white'>
          <li>Terms & Conditions</li>
    
          </Link>
          <Link to="/UserA" className='no-underline text-white'>
        <li>User Consent</li>


          </Link>
          <Link to="/reasearchanalyst" className='no-underline text-white'>
          <li>Registered research analyst</li>

          </Link>
          <Link to="/legal" className='no-underline text-white'>
        <li>Legal disclaimer</li>


          </Link>
          <Link to="/standard" className='no-underline text-white'>
          <li>Standard Disclaimer</li>

          </Link>
          <Link to="/investor" className='no-underline text-white'>
          <li>Investor charter</li>

          </Link>
          <Link to="/grievance" className='no-underline text-white'>
          <li>Grievance Redressal Process</li>
  
          </Link>
      </ul>
        </div>
      
      <div className='Packages-clone'>
      <ul>
        <Link className='no-underline text-white' to='/page1'>  <li>Equity Cash</li>
          </Link>
          <Link className='no-underline text-white'  to='/page2'>
        <li>Equity Cash Premium</li>

          </Link>
          <Link className='no-underline text-white'  to='/page3'>
        <li>Index Option (Silver Package) </li>

          </Link>
          <Link className='no-underline text-white'  to='/page4' >
        <li>Index Option (Gold Package)  </li>

          </Link>
          <Link className='no-underline text-white'  to='/page5'>
        <li>Index Option (Combo Package)</li>

          </Link>
        
       
      </ul>

      </div>

      <div className='Contact-info'>
      <ul>
        <li className='flex gap-2'>  <FaPhone color='yellow'/>
        +9294567865</li>
        <li className='flex gap-2'>  <FaMailBulk color='yellow'/>
        masterstocks@gmail.com</li>
        <li className='flex gap-2'>  <FaAddressBook color='yellow'/>
        Master stocks advisor ,MBP,Ghansoli, <br />
        Mahape,Navi Mumbai ,Maharastra-400710</li>
       
      </ul>

      </div>
      
    </div>
  )
}

export default Footer
