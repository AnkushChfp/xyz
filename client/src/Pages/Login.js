import { Formik, Field, Form } from "formik";
// import { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import React from 'react';
import "./login.css";
function Login() {
  let history = useHistory();
  async function PostData(event) {
    console.log(event)
      // debugger;
        let result = await fetch(
          "https://jobs-api.squareboat.info/api/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "email": event["email"],
              "password": event["password"]
            }),
          }
        );
        result = await result.json();
        localStorage.setItem("token",result.data["token"]);
        // setToken(result.data["token"]);
        history.push("/job-dashboard");
        
      }
    return ( 
    <div>
      <div className="loginContainer">
          </div>
          <div style={{height:"424px",backgroundColor:"#EDF6FF"}}>
          </div>
          <div className="card">
            <h1>Login</h1>
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={ (values) => {
                  PostData(values)
                }}
              >
                <Form>
                  <Field name="email" type="email" />
                  <Field name="password" type="password" />
                  <button type="submit">Submit</button>
                </Form>
            </Formik>

      </div>
    </div>
    );
  }
  
  export default Login;
  