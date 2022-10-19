import axios from "axios";
import {useState, useEffect } from "react";
import { useNavigate }  from "react-router-dom";



function FlightTypePage() {
    let navigate= useNavigate();
      
    let [flightDetail, setFlightDetail]  = useState([]);

    let CarDetails =() => {
        navigate("/carTypePage");
    }


  

    let getFlightDetails = async () => {
     let response = await axios.get("http://localhost:8080/api/AllFlightDetails");
    //  console.log(response);
    let data = response.data;
    if (data.status === true) {
         setFlightDetail([...data.result]);
    }   else { 
        setFlightDetail([]);
    }
    };

   useEffect(() => {
       getFlightDetails();
   }, []);

//    console.log(flightDetail);

//   


    return (
        <> 
                       <main className="container-fluid all-data">
      
                 <section className="row">
                 <div className="col-12">
                 <div className="container-lg ">
              <p className="m-0 h2 py-4 fw-bold">Best and Cheap Flight to travel World</p>
               <div className="row">

              
{/* <!----------------------Side Image Area-----------------------> */}
       
          <div className="col-12 col-lg-7  col-md-7 mb-5 ">
              <div className="row">
  

                     {  flightDetail.map((flight, index) =>{

                          return(  
                                      <div  
                                      key ={index} 
                                      className="col-12 border border-2 px-lg-4 py-lg-4 px-md-4 py-md-4 py-3  mb-3" >
                                      <div className="d-flex  align-items-center">
                                      <img src ={"/" + flight.image} alt ="" className="search-item-image hand" onClick ={CarDetails}/>
                                     <div className="ms-3">
                                         <p className="m-0 h4 ms-5 fw-bold">{flight.airlines}</p>
                                          <p className="m-0 fw-bold ms-5">{flight.takeOff}</p>
                                          <p className="m-0 text-muted fw-bold ms-5"><i className="fa-solid fa-location-dot text-danger h3 p-2" ></i>{flight.location}</p>  
                                     </div>
                                    </div>
                                  <hr/>
                                   <div className="row">
                                    <div className="col-lg-3 col-md-4 col-6">
        
                                           <p className="fw-bold"> COST FOR ONE</p>
                                  </div>
                                       <div className="col-lg-3 col-md-5 col-6">
   
                                          <p className="fw-bold"><i className="fa-solid fa-indian-rupee-sign "></i>{flight.MinPrice}</p>
                                  </div>
                             </div>
                        </div>
                          );

                     })
                     
                     }
                        

                      
                 
               
  
                
              </div>
             
          </div>

                  
      </div>
  </div>
</div>
</section>
</main>

          </>
          )
};





export default FlightTypePage;

