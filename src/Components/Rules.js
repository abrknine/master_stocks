import React from 'react'
import './Rules.css'

// import { FaCircle, FaStar } from 'react-icons/fa'
import { BsSuitDiamondFill } from 'react-icons/bs'

const Rules = () => {
  return (
    <div className='Rule-container my-8 ' >
      <h1 className='curvy-title text-2xl font-bold'>Principles of Trading</h1>
   
      <div className='Rules' >
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>          {/* use diamond */}
            <p>Maintain patience in the face of losses to safeguard your future trading endeavors.</p>
        </div>
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>
            <p>Focus on your own trading journey and outcomes, as others' opinions hold no significance in your path to success.</p>
        </div>
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>
            <p>Embrace patience when encountering losses to protect the potential of your future trading endeavors.</p>
        </div>
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <BsSuitDiamondFill size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
      </div>
    </div>
  )
}

export default Rules
