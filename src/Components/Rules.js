import React from 'react'
import './Rules.css'

import { FaStar } from 'react-icons/fa'

const Rules = () => {
  return (
    <div className='Rule-container ' >
      <h1 className='curvy-title text-2xl font-bold'>Rules Of Trading</h1>
   
      <div className='Rules' >
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>What other people think of your Trading is
None of your Business.</p>
        </div>
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
        <div>
            <FaStar size={50} color='#69727D'/>
            <p>Be patient with your losses.
So they won't disturb your Future.</p>
        </div>
      </div>
    </div>
  )
}

export default Rules
