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
        console.log(item);
        let result = await fetch(
          "https://jobs-api.squareboat.info/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "email": email,
              "password": password
            }),
          }
        );
        result = await result.json();
        console.log(result);
     
      }
    return ( 
    <div>
      <div className="loginContainer">
          </div>
          <div style={{height:"424px",backgroundColor:"#EDF6FF"}}>
          </div>
          <div className="card">
            <h1>Login</h1>
          <form action="/login" method="POST">
          <label  >Email address</label>
            <input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label >Password</label>
            <input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit" onSubmit={PostData}>Login</button>
          </form>

      </div>
    </div>
    );
  }
  
  export default Login;
  