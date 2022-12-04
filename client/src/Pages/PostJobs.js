import {useState,useEffect} from "react";
import "./login.css"
import ReactPaginate from "react-paginate";
function PostJobs (){
        const [currentsetJobData, setCurrentJobData] = useState(null);
        const [page, setPage] = useState(1);
        const [pageCount, setPageCount] = useState(0);
        const [jobDataOffset, setJobDataOffset] = useState(0);
        const [jobData, setJobData] = useState(false)

              const handlePageClick = (event) => {
                const newOffset = (event.selected * 8) % jobData.length;
                setJobDataOffset(newOffset);
              };

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
useEffect(() => {
        if(jobData){
                const endOffset = jobDataOffset + 8;
                setCurrentJobData(jobData.slice(jobDataOffset, endOffset));
                setPageCount(Math.ceil(jobData.length / 8));
        }
      }, [jobData, jobDataOffset]);


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
                <div className="pagination">
                        <button
                                disabled={page === 1}
                                onClick={() => setPage((prevState) => prevState - 1)}
                        >
                                <span> prev </span>
                        </button>
                        <p>{page}</p>
                        <button onClick={() => setPage((prevState) => prevState + 1)}>
                                Next
                        </button>
                </div>
                <div className="pagination">
                <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
                />
                </div>
                </div>
                </div>
                </div> 
        </section>
    
</>

);

}

export default PostJobs;