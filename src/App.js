/*import React from 'react';
import './index.css';
import Home from "./routes/Home";
import Aboutus from './routes/Aboutus';
import Bankdetails from './routes/Bankdetails';
import Packages from './routes/Packages';
import Contactus from './routes/Contactus';
import {Route, Routes } from "react-router-dom";
import UserAg from './routes/UserAg';
import Complaint from './routes/Complaint';
import Success from './Components/Success';
import Package1 from './routes/Package1';
import Package2 from './routes/Package2';
import Package3 from './routes/Package3';
import Package4 from './routes/Package4';
import Package5 from './routes/Package5';
import DoandDont from './routes/DoandDont';
import Privacy from './routes/Privacy';
import Reasearchanalyst from './routes/Reasearchanalyst';
import Refund from './routes/Refund';
import Standard from './routes/Standard';
import Terms from './routes/Terms';
import Legal from './routes/Legal';
import Investor from './routes/Investor';
import Grievance from './routes/Grievance';
import React, { useState, useEffect } from 'react';

// import Complaintb from './Components/Complaintb';

function App() {

   const [showMobileMessage, setShowMobileMessage] = useState(false);

   const handleResize = () => {
     const isMobile = window.innerWidth <= 920;
     setShowMobileMessage(isMobile);
   };

   // Add an event listener to handle window resize
   // and update the mobile message state accordingly
   useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

     return (
    <> 
    {showMobileMessage ? (
      <div className="mobile-message flex justify-center items-center h-screen">
        <p  className='text-center'>
        Only available for web version now <br />
         ( other screens design coming soon...)
        </p>
        </div>
    ) : (
    
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/packages" element={<Packages />}/>
       <Route path="page1"  element={<Package1/>}/>
       <Route path="page2"  element={<Package2/>}/>
       <Route path="page3"  element={<Package3/>}/>
       <Route path="page4"  element={<Package4/>}/>
       <Route path="page5"  element={<Package5/>}/>
       <Route path="/UserA" element={<UserAg />}/>
       <Route path="/Complaintb" element={<Complaint />}/>
       <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/bankdetails" element={<Bankdetails/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/doanddont' element={<DoandDont/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/reasearchanalyst' element={<Reasearchanalyst/>}/>
      <Route path='/refund' element={<Refund/>}/>
      <Route path='/standard' element={<Standard/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/legal' element={<Legal/>}/>
      <Route path='/investor' element={<Investor/>}/>
      <Route path='/grievance' element={<Grievance/>}/>

     </Routes> 


//         <h1 className='text-center'>☠☠☠Fraud alert</h1>
//            <div className='text-center '>
//            <p className='border-solid border-2 border-blue-500 px-30 mx-10'>This guy is a total fraud. I am the maker of this website,<br />
//       and I worked on his project for almost a month. He betrayed me  <br />
//        and didn't pay me a single penny. The truth about him is that he <br />
//         did fraud when dealing with clients as well. He himself <br /> 
//          told me that all his screenshots are fake, and he has some friends in his <br />
//           old firm (where he used to work) who provide him with their screenshots, <br />
//           which he then uses as his own. </p> 
           
//            <p  className='border-solid border-2 border-blue-500 px-30 mx-10'>
//            If you are reading this, it's a genuine <br />
//            concern. Don't trust his stock skills. He himself told me (while I was working <br />
//             on his website, which I am taking down now) that his job is to fool clients. <br />
//              If you want to know more, you can  email me at bahukhandiabhishek57@gmail.com. <br />
//               I live in Delhi, and he hired me as a freelancer."
//               His old firm name is supremetraders where he was <br /> expelled because he did some scam there too. <br />
//               while working with him he told me not to fill supremetraders <br /> form using his name cuz he did scam them 
//            </p>

//            <p >
//             I myself a surviour of his scam  hope this msg saves you.
//            </p>  

//            </div>
// <div className='text-center '>


// <p><u>Hindi Translation</u> </p>
//            <p className='border-solid border-2 border-blue-500 px-30 mx-10'>
            
// "Yah aadmi pooree tarah se dhokebaaz hai. <br />
//  Main is website ka nirmaata hoon, aur mainne uske <br /> project par lagbhag ek mahine kaam kiya. <br />
//   Vah mujhe dhoka diya aur mere paas ek rupaya bhi nahin diya. <br />
//    Uske saathi clienton ke saath vyapaar karate samay bhi vah sabse <br />
//     bada dhokebaaz hai. Vah khud mujhse kaha ki uske sabhi screenshots <br />
//      jaali hain aur uske purane kaaryasthal mein kuchh dost hain (jahaan vah pahle kaam karata tha), <br />
//       jo apne screenshots use dete hain, jinhen vah phir apane status mein daalta hai. <br />
//        Agar aap ise padh rahe hain, to yah ek satyapit chinta hai. Uske stock kaushal par <br />
//         bharosa na karen. Vah khud mujhse kaha (jab main uski website par kaam kar raha tha <br />
//         , jise ab main band kar raha hoon) ki uska kaam hi graahakon ko thagna hai. Adhik jankaari <br />
//          ke liye aap mujhe call ya email kar sakte hain: bahukhandiabhishek57@gmail.com. Main Dilli <br />
//           mein rahata hoon aur usne mujhe freelancer ke roop mein rakha tha."
//            </p> 
          
// </div> 

              

    
     </>
   );

}

export default App;*/

import React, { useState, useEffect } from 'react';
import './index.css';
import Home from "./routes/Home";
import Aboutus from './routes/Aboutus';
import Bankdetails from './routes/Bankdetails';
import Packages from './routes/Packages';
import Contactus from './routes/Contactus';
import { Route, Routes } from "react-router-dom";
import UserAg from './routes/UserAg';
import Complaint from './routes/Complaint';
import Success from './Components/Success';
import Package1 from './routes/Package1';
import Package2 from './routes/Package2';
import Package3 from './routes/Package3';
import Package4 from './routes/Package4';
import Package5 from './routes/Package5';
import DoandDont from './routes/DoandDont';
import Privacy from './routes/Privacy';
import Reasearchanalyst from './routes/Reasearchanalyst';
import Refund from './routes/Refund';
import Standard from './routes/Standard';
import Terms from './routes/Terms';
import Legal from './routes/Legal';
import Investor from './routes/Investor';
import Grievance from './routes/Grievance';

function App() {
   const [showMobileMessage, setShowMobileMessage] = useState(false);

   const handleResize = () => {
     const isMobile = window.innerWidth <= 920;
     setShowMobileMessage(isMobile);
   };

   useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

   return (
    <> 
    {showMobileMessage ? (
      <div className="mobile-message flex justify-center items-center h-screen">
        <p className='text-center'>
          Only available for web version now <br />
          (other screens design coming soon...)
        </p>
      </div>
    ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="page1" element={<Package1 />} />
        <Route path="page2" element={<Package2 />} />
        <Route path="page3" element={<Package3 />} />
        <Route path="page4" element={<Package4 />} />
        <Route path="page5" element={<Package5 />} />
        <Route path="/UserA" element={<UserAg />} />
        <Route path="/Complaintb" element={<Complaint />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/bankdetails" element={<Bankdetails />} />
        <Route path='/success' element={<Success />} />
        <Route path='/doanddont' element={<DoandDont />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/reasearchanalyst' element={<Reasearchanalyst />} />
        <Route path='/refund' element={<Refund />} />
        <Route path='/standard' element={<Standard />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/grievance' element={<Grievance />} />
      </Routes>
    )}
    </>
   );
}

export default App;

