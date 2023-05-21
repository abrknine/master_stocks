/*import React from "react";
import './Useragreement.css'
import {  FaUser,FaExclamationCircle } from "react-icons/fa";
 import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

const UserAgreement = () => {
   const links = [
     {
       id: 1,
       child: (
         <>
           UserAgree <FaUser size={30} />
         </>
       ),
       href: "https://linkedin.com",
       style: "rounded-tr-md",
     },
     {
       id: 1,
       child: (
         <>
           Complain <FaExclamationCircle size={30} />
         </>
       ),
       href: "https://linkedin.com",
       style: "rounded-tr-md",
     }
     ]

  return (
     <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
       <ul>
         {links.map(({ id, child, href, style, download }) => (
           <li
             key={id}
             className={
               "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
               " " +
               style
             }
           >
             <a
               href={href}
               className="flex justify-between items-center w-full text-white"
               download={download}
               target="_blank"
               rel="noreferrer"
               
             >
               {child}
             </a>
           </li>
         ))}
       </ul>
     </div>
/
  );
};

export default UserAgreement;*/

import React from "react"
import { FaGithub , FaLinkedin,FaUser,FaExclamationCircle} from "react-icons/fa"
// import {HiOutlineMail} from "react-icons/hi";
// import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from "react-router-dom";


const  UserAgreement=() =>{

    const links=[
        {
            id:1,
            child:(
                <>
                 Agreement <FaUser size={30} /> 
                </>
            ),
            href:'/UserA',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>
                   Compliant <FaExclamationCircle size={30} /> 
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            // download:true,
        },
    ];

return (
  <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
      {links.map(({ id, child, href, style, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-135px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
            " " +
            style
          }
        >
          <Link to={href} className="flex justify-between items-center w-full text-white no-underline"
            // download={download}
            target="_blank"
            rel="noreferrer"
            
            >  
             {child}
            </Link>
          
        </li>
      ))}
    </ul>
  </div>
);
};

export default UserAgreement;
