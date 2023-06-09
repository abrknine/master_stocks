import React, {useState} from 'react';
import { Link,  } from 'react-router-dom';
import "./Navbar.css";
import master from "../assets/master.png"
import {FaBars, FaTimes } from "react-icons/fa"
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';

// useNavigate always 


const Navbar = () => {
    const[click, setClick]= useState(false);
    const handleClick=()=>setClick(!click); 
    const [color, setColor] =useState(false);

    const  changeColor =()=>{
            if(window.scrollY >= 100){
                setColor(true);
            }
            else{
                setColor(false);
            }
    };
    window.addEventListener("scroll",changeColor ) // you learn this window thing now never forget this

  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
       <img src={master} alt="" className='logo-img' />
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
        <Dropdown>
        <Dropdown.Toggle className="dropdown-link" id="dropdown-basic">
        Packages
      </Dropdown.Toggle>
        <Dropdown.Menu className='Dropmenu bg-blue-500'>
          <Dropdown.Item >
            <Link className=' text-black ' to="/page1">Index Option(Basic)</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className='text-black'   to="/page2">Index Option (Silver Package) </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className='text-black '   to="/page3">Index Option (Gold Package)</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className='text-black'  to="/page4">Index Option (Platinum Package)</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className='text-black'   to="/page5">Index Option (Combo Package)</Link>
          </Dropdown.Item>
          
        </Dropdown.Menu>

        </Dropdown>
        </li>
              
        <li>
           <Link to="/bankdetails">Payment-details</Link>
        </li>
        <li>
           <Link to="/contactus">Contact-us</Link>
        </li>
        <li>
           <Link to="/aboutus">About-us </Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
       {click?( 
                
           <FaTimes size={20} style={{ color:"#fff"}}/>):(
                <FaBars size={20}  style={{ color:"#fff"}}/>     
         )}
      </div>
    </div>
  )
}

export default Navbar