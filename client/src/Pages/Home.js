import { useState,useEffect} from "react";
import JobDashboard from "./JobDashboard";
function Home() {
  const [token, setToken] = useState("")
  
  const fetchToken =  () =>{
    const t = localStorage.getItem("token")
    if(t){
      setToken(t)
    }
    
  }
    return (
      <div>
      <h1>Hello Home</h1>
      </div>
    );
  }
  
  export default Home;
  