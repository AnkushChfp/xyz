import React from 'react';
import "./header.css";
import Logo from "./myJobs.svg";
import { useHistory } from "react-router-dom";
function Header() {
   let history = useHistory();
    return (
      <>
   <div className="headerContainer">
    <div className="logo">
    <img src={Logo} alt="React Logo" />
    </div>
    
    <div className="buttonlogin">
      <button onClick={() =>{history.push( "/login")}} >LOGIN</button>
    </div>
   </div>
       
      </>
    );
  }
  
  export default Header;