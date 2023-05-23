import React from 'react'
import './Bank.css'
import qr from  '../assets/qr.jpg'

const Bank = () => {
  return (
    <div className='Name'>
    <span className='text-center'>
        Payee Name - <u>
        Subham Lodha
        </u>

    </span>
    <span className='text-center'>
      UPI ID -  <u>   shubhamlodha933-2@okhdfcbank </u>
 

    </span>
    <span>
      <h2 className='text-center'>Scan This QR to pay</h2>
      <div className='flex justify-center items-center pt-10'>

      <img src={qr} alt="img" className='w-60 h-60  ' />
      </div>

    </span>

   </div>
  )
}

export default Bank
