import React, { useState } from 'react'
import './Hero.css'
import Heroimg0 from '../assets/Heroimg0.jpg'
import { FaPhone } from 'react-icons/fa'
import {db} from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
const Hero = () => 
{
  const setPrompt=async()=>{

  const input=prompt('Enter your number','')
  setNumber(input)
  try {
    const docRef = await addDoc(collection(db, "userData"), {
      number: number,
    });
    setNumber('')
   alert('Number uploaded successfully!')
  } catch (e) {
    alert('Try again!')
}
  }

  const navigate=useNavigate()

       const [name,setName]=useState('')
       const [number,setNumber]=useState('')
       const [mobile,setMobile]=useState('')
       const [email,setEmail]=useState('')
       const [states,setStates]=useState('')
       const [packages,setPackages]=useState('')
 
  const setData=async(e)=>{
  e.preventDefault()
  try {
    const docRef = await addDoc(collection(db, "userData"), {
      name:name,
      email:email,
      mobile: mobile,
      states:states,
      packages:packages,
    });
    setName('')
    setEmail('')
    setMobile('')
    
    navigate('/success')
  } catch (e) {
    alert('Try again!')
}
}
  return (
    <div className='Hero-Section'>
      <div className='Hero-img'>
        <img src={Heroimg0} alt="" className='into-img' />
      </div>
      <div className='Hero-content'>
      <div className='Hero-Left'>
       <h1>Intraday Technical Analysis Alerts
</h1>
       <p>
       We can help you create an investment plan that meets your individual needs and goals.

</p>
      <div className='Call-Back'>
        <div className='Phone-no'>
        <FaPhone color='red'/>
        +9294567865
        </div>
        <div className='Call'>
          

          <button value={number} onClick={setPrompt} >
  Request a call back
</button>
        </div>
      </div>


      </div>
      <div className='Hero-Right'>
        <h3>Get Demo</h3>
        <form action="" className='fourm' onSubmit={setData} >
          <input type="text" placeholder='Full Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="number" placeholder='Mobile' required value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
          <input type="mail" placeholder='Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          {/* <label htmlFor="state">State:</label> */}
  <select id="state" name="state" placeholder='state' required value={states} onChange={(e)=>{setStates(e.target.value)}} >
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    </select>
  <select name="income" id="income" required value={packages} onChange={(e)=>{setPackages(e.target.value)}}>
    <option value="">Select income range</option>
    <option value="above-50000">Above 50,000</option>
    <option value="above-1-lakh">Above 1 Lakh</option>
    <option value="above-2-lakh">Above 2 Lakh</option>
    <option value="above-3-lakh">Above 3 Lakh</option>
    
  </select>
  <div className="checkbox-container">
    <input type="checkbox" id="subscribe" name="subscribe" />
    <label htmlFor="subscribe">I accept terms and condition </label>
  </div>
  <button type="submit" className="submit-button">Submit</button>

        </form>

      </div>


      </div>
     
    </div>
  )
}

export default Hero
