import React from 'react'
import './Call.css'
import Heroimg7 from '../assets/Heroimg7.png'
import { useState } from 'react'
import {db} from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'



const Call = () => {
  const navigate=useNavigate()

  const [number,setNumber]=useState('')
  const [name,setName]=useState('')

  const setdata=async(e)=>{
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "userData2"), {
         number:number,
         name:name
      });
      setNumber('')
      setName('')
      navigate('/success')
    }
    catch (e) {
      alert('Try again!')
  }
  
    }
    
  

  return (
    <div className='small_form'>
      <div className='smform-image'>
        <img src={Heroimg7} alt="" />
      </div>
      <div className='smform'>
      <h1 className='text-white my-12'>Request A Call Back</h1>
         <form action="" className='flex gap-20 justify-center' onSubmit={setdata}>
            <input className='px-12' type="text" placeholder='Fullname' onChange={(e)=>{setName(e.target.value)}} />
            <input className='px-12'  type="number" placeholder='Phone no'onChange={(e)=>{setNumber(e.target.value)}}/> 
          <button className='sub' type="submit">Submit</button>
            
         </form>
      </div>
      
      
    </div>
  )
}

export default Call
