import React from 'react'
import './Footer.css'
import { FaAddressBook, FaMailBulk, FaPhone } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='Footer-class'>
        <div  className='Policies'>
        <ul>
        <li>Refund Policies</li>
        <li>Customer Portal</li>
        <li>Privacy Policies</li>
        <li>Terms & Conditions</li>
        <li>DO & Don't</li>
        <li>User Agreement</li>
      </ul>
        </div>
      
      <div className='Packages-clone'>
      <ul>
        <li>Equity Cash</li>
        <li>Equity Cash Premium</li>
        <li>Index Option (Silver Package) </li>
        <li>Index Option (Gold Package)  </li>
        <li>Index Option (Combo Package)</li>
       
      </ul>

      </div>

      <div className='Contact-info'>
      <ul>
        <li className='flex gap-2'>  <FaPhone color='yellow'/>
        +9294567865</li>
        <li className='flex gap-2'>  <FaMailBulk color='yellow'/>
        masterstocks@gmail.com</li>
        <li className='flex gap-2'>  <FaAddressBook color='yellow'/>
         37-70 Andheri Mumbai</li>
       
      </ul>

      </div>
      
    </div>
  )
}

export default Footer
