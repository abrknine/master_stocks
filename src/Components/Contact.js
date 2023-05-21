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
import React, { useState } from 'react';
import { FaPhone,FaAddressBook,FaMailBulk } from 'react-icons/fa'
import './Contact.css'



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
    // Perform form submission or data handling here
    console.log('Form submitted!');
  };

  return (
    <div className="max-w-md mx-auto">
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
      <h2 className="text-xl font-bold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
  );
};

export default Contact;

