import { useEffect, useState } from "react";
import React from 'react';
import "./login.css";
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email);
    async function PostData(event) {
        event.preventDefault();
         console.log(email, password);
        
        let item = { email, password };
        let result = await fetch(
          "https://jobs-api.squareboat.info/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(item),
          }
        );
        result = await result.json();
        console.log(result);
     
      }
     
    return (
      <>
 
     
   <div className="loginContainer">
       </div>
       <div style={{height:"424px",backgroundColor:"#EDF6FF"}}>
      </div>
      <div className="card">
        <h1>Login</h1>
       <form action="/login" method="POST">
       <label for="email" >Email address</label>
        <input id="email" placeholder="Enter your email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <label for="password" >Password</label>
        <input id="password" placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onSubmit={PostData}>Login</button>
       </form>

      </div>
   
  
      
     
     
      </>
    );
  }
  
  export default Login;
  