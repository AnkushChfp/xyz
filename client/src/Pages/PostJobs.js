import {useState,useEffect} from "react";
import "./login.css"
function PostJobs (){
        const [jobData, setJobData] = useState(false)
        const fetchData = async() => {
        const token = localStorage.getItem("token")
        let result = await fetch(
                "https://jobs-api.squareboat.info/api/v1/recruiters/jobs",
                {
                        method: "GET",
                        headers: {
                        "Content-Type": "application/json",
                        "Authorization":token
                        },
                }
                );
                result = await result.json();
                console.log("console", result.data.data)    
                setJobData(result.data.data)      
        }
        useEffect(() =>{
        fetchData();
},[])

return(
<>
<div className="loginContainer">
        </div>
        <div style={{height:"424px",backgroundColor:"#EDF6FF"}}>
        </div>
        <section >    
                <div className="cardcontainer">
                <div className="card1">
                <div className="card2">  
                {jobData &&
                        jobData.map((v,k)=>{
                                return(
                                        <div style={{display: 'flex', flexDirection: 'row',flexWrap: "wrap" }}>
                                                <div style={{  width: "100px",margin: "10px",textAlign: "center",lineHight: "75px",  backgroundColor: "#f1f1f1"}} >
                                                {jobData && jobData[0].title}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…
                                                {jobData && jobData[0].location}
                                                </div>
                                        </div>
                
                                    )
                        })
                }
                {/* {jobData &&
                        jobData.map((v,k)=>{
                                return(
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                                <OutlinedCard data = {v}/>
                                        </div>
                
                                    )
                        })
                } */}
                        {/* <OutlinedCard data = {jobData[0]}/>
                        <OutlinedCard data = {jobData[0]}/>
                        <OutlinedCard data = {jobData[0]}/>
                        <OutlinedCard data = {jobData[0]}/> */}
                </div>
                </div>
                </div> 
        </section>
    
</>

);

}

export default PostJobs;