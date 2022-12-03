import React from 'react';
import { useState,useEffect} from "react";
import "./header.css";
import Logo from "./myJobs.svg";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const [isLogin,setLogin] = useState(false)
  const [token,setToken] = useState("")
  
  useEffect(()=>{
    const t = localStorage.getItem("token");
    setToken(t)
    if (t){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  },[token])

  const logoutUser = () =>{
    localStorage.removeItem("token");
    setLogin(false)
    history.push("/")

  }
  // console.log("header", token)
    return (
      <>
        <div className="headerContainer">
          <div className="logo">
          <img src={Logo} alt="React Logo" />
          </div>
          
          <div className="buttonlogin">
            {
              isLogin ?
              <button onClick={() =>{logoutUser()}} >LOGOUT</button>
              :
              <button onClick={() =>{history.push( "/login")}} >LOGIN</button>
            }
          </div>
        </div>     
        </>    
    );
  }
  
  export default Header;