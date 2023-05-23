// import { useState } from 'react'
import React, {useState} from 'react'
// import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const Equity = (props) => {
   const navigate=useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

    const data=[
        {
            id:1,
            actualPrice:`${props.actualPrice}`,
             discountedPrice:`${props.discountedPrice}`,
            scheme:'Monthly',
        },
        {
            id:2,
             actualPrice:`${props.actualPrice1}`,
             discountedPrice:`${props.discountedPrice1}`,
            scheme:'Quarterly',
            
        },
        {
            id:3,
             actualPrice:`${props.actualPrice2}`,
            discountedPrice:`${props.discountedPrice2}`,
            scheme:'Half Yearly',
        },
        {
            id:4,
            actualPrice:`${props.actualPrice3}`,
             discountedPrice:`${props.discountedPrice3}`,
            scheme:'Yearly',
        },
    ]

    const Navigate=()=>{
        //  navigate('/')
        //   alert("fill form below");

        setIsNavigating(true);
        navigate('/'); // Navigate to the desired path
    
        // Delay the execution of the alert message by 500 milliseconds
        setTimeout(() => {
          setIsNavigating(false);
          alert('Fill below form.');
        }, 500);
         
    }
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-32 pl-[70px] pr-[70px] mb-[50px] py-28  '>
        {
            data && data.map((item)=>{
                return(
                    <div className='flex flex-col border-none rounded-xl gap-x-8 w-[500px]   ' key={item.id} >
                    <div className='h-20 flex items-center justify-center text-4xl font-semibold text-white  bg-blue-800 text-center'>
                        Equity Cash
                    </div> 
                     <div className=' pt-4 bg-blue-100 text-center flex flex-col items-center'>
                        <span className=' p-2 pt-6 text-xl text-black  text-center line-through'>₹{item.actualPrice}</span>
                        <span className='  text-3xl text-blue-800 font-bold text-center'>₹{item.discountedPrice}/-</span>
                        </div>
                        <span className='bg-blue-100  text-center text-xl '>{item.scheme}</span>
<div className='bg-blue-100'>
    <br/>
                        <p className=' text-xl text-left border-b border-black  px-4'>:Get upto 1-2reaserch alert per day through Whatsapp/SMS</p>
                        <br/>
                        <p className='  text-xl text-left border-b  border-black px-4 '>: Get best research alerts in best stocks..</p>
                        <br/>
                        <p className=' text-xl text-left border-b  border-black px-4 '>:Get well-researched targets and stop-loss on every research alert.</p>
                        <br/>
                        <p className='text-xl text-left border-b  border-black  px-4'>:Live Market customer support is available.</p>
                        <br/>
                        <p className=' text-xl text-left px-4 '>: Risk Level - High to Very High.</p>
                        <button onClick={Navigate} className='flex m-auto hover:cursor-pointer hover:scale-90 duration-200 justify-center my-6 bg-yellow-500 w-[200px] p-2 text-white text-xl'>
                        Get started
                        </button>
                        <span className='flex justify-center mb-10 '>*All Prices are inclusive of GST</span>
                        </div>
                              
                </div>
                )
            })
       
}
    </div>
  )
}

export default Equity