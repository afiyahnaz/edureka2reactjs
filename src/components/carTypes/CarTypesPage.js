import axios from "axios";
import {useState, useEffect } from "react";
import { useNavigate }  from "react-router-dom";



function CarTypePage() {
    let navigate= useNavigate();
      
    let [carDetail, setCarDetail]  = useState([]);

    let FlightDetails =() => {
        navigate("/flightTypePage");
    }


  

    let getCarDetails = async () => {
     let response = await axios.get("http://localhost:8080/api/AllCarDetails");
    //  console.log(response);
    let data = response.data;
    if (data.status === true) {
         setCarDetail([...data.result]);
    }   else { 
        setCarDetail([]);
    }
    };

   useEffect(() => {
       getCarDetails();
   }, []);

//    console.log(carDetail);

//   


    return (
        <> 
                       <main className="container-fluid all-data">
      
                 <section className="row">
                 <div className="col-12">
                 <div className="container-lg ">
              <p className="m-0 h2 py-4 fw-bold">Best and Cheap Cars to Travel</p>
               <div className="row">

              
{/* <!----------------------Side Image Area-----------------------> */}
       
          <div className="col-12 col-lg-7  col-md-7 mb-5 ">
              <div className="row">
  

                     {  carDetail.map((car, index) =>{

                          return(  
                                      <div  
                                      key ={index} 
                                      className="col-12 border border-2 px-lg-4 py-lg-4 px-md-4 py-md-4 py-3  mb-3" >
                                      <div className="d-flex  align-items-center">
                                      <img src ={"/" + car.image} alt ="" className="search-item-image hand" onClick ={FlightDetails}/>
                                     <div className="ms-3">
                                         <p className="m-0 h4 ms-5 fw-bold">{car.name}</p>
                                          <p className="m-0 fw-bold ms-5">{car.persons}</p>
                                          <p className="m-0 text-muted fw-bold ms-5"><i className="fa-solid fa-location-dot text-danger h3 p-2" ></i>{car.location}</p>  
                                     </div>
                                    </div>
                                  <hr/>
                                   <div className="row">
                                    <div className="col-lg-3 col-md-4 col-6">
        
                                           <p className="fw-bold"> COST FOR TWO</p>
                                  </div>
                                       <div className="col-lg-3 col-md-5 col-6">
   
                                          <p className="fw-bold"><i className="fa-solid fa-indian-rupee-sign "></i>{car.MinPrice}</p>
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





export default CarTypePage;



