import { Link } from "react-router-dom";
import React from 'react';
import "./header.css";
import Logo from "./myJobs.svg";
function Header() {
    return (
      <>
   <div className="headerContainer">
    <div className="logo">
    <img src={Logo} alt="React Logo" />
    </div>
    
    <div className="buttonlogin">
       <Link to="/login" style={{color:"white",fontSize:"19px",textDecoration:"none"}} >Login</Link>

    </div>

   </div>
       
      </>
    );
  }
  
  export default Header;