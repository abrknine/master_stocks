import React from 'react';
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
// import Complaintb from './Components/Complaintb';

function App() {
     return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/packages" element={<Packages />}/>
       <Route path="/UserA" element={<UserAg />}/>
       <Route path="/Complaintb" element={<Complaint />}/>
       <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/bankdetails" element={<Bankdetails/>}/>
      <Route path='/success' element={<Success/>}/>
     </Routes>
     </>
   );

}

export default App;
