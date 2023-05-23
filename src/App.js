import React,{useEffect, useState} from 'react';
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
    <> {showMobileMessage ? (
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

     </Routes> )}
     </>
   );

}

export default App;
