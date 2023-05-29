/*import React from 'react'
import './Contact.css'
import { FaPhone,FaAddressBook,FaMailBulk } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='contact'>
    <div className='contact-us'>
    <ul className='flex'>
        <li className='flex gap-2'>  <FaPhone color='yellow'/>
        +9294567865</li>
        <li className='flex gap-2'>  <FaMailBulk color='yellow'/>
        masterstocks@gmail.com</li>
        <li className='flex gap-2'>  <FaAddressBook color='yellow'/>
         37-70 Andheri Mumbai</li>
       
      </ul>
    </div>
    <div className='contact-form'>
    <form   method='POST'>
     <label >Your Name</label>
     <input name="name" type="text" />
     <label > Email</label>
     <input name="Email" type="email" />
     <label >Subject</label>
     <input name="Subject" type="text" />
     <label >Message</label>
     <textarea name="name" placeholder="Type ypur message here"  rows="6"></textarea>
     <button className="btn">Submit</button>

      </form>
    </div>
    </div>
  )
}

export default Contact*/
import React  from 'react';
import { FaPhone,FaAddressBook,FaMailBulk } from 'react-icons/fa'
import './Contact.css'



const Contact = () => {
 
  // const handleSubmit = (e) => {
  //    e.preventDefault();
  //   // Perform form submission or data handling here
  //   console.log('Form submitted!');
  // };

  return (
    <div className="max-w-md mx-auto my-auto ">
      <h2 className=" curvy-title text-4xl pt-40  font-bold text-center ">Contact us</h2>

        <div className='contact-us relative right-36 pt-10  '>
    <ul className='flex gap-60 relative right-60 contact'>
        <li className='flex gap-2'>  <FaPhone size={40} color='#0D6EFD'/>
        +912226099700</li>
        <li className='flex gap-2'>  <FaMailBulk  size={40} color='#0D6EFD'/>
         masterstocks@gmail.com</li>
        <li className='flex gap-2 w-96'> <FaAddressBook size={70}  color='#0D6EFD'/>
         Master stocks advisor ,MBP,Ghansoli,Mahape,NavI Mumbai ,Maharastra-400710
           </li>
       
      </ul>
    </div>
    <div className='my-4' >

      {/* <h2 className="text-xl font-bold text-center ">Contact Form</h2> */}
      <form className="space-y-4" action="https://getform.io/f/09bcba9a-7c51-41fe-a70f-d0ec4ef4f011" method='POST'>
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
          name="name"
            type="text"
            id="name"
            
            className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
          name="Email"
            type="email"
            id="email"
        
            className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-semibold ">
            Subject
          </label>
          <input
          name="subject"
            type="text"
            id="subject"
         
            className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
          name="text"
            id="message"
            
            className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;

