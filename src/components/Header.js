import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate }  from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useState}  from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'









function Header () {
  const MySwal = withReactContent(Swal)

    let navigate= useNavigate();

    let CarTypePage =() => {
      navigate("/carTypePage");
    };

    let FlightTypePage = () => {
      navigate("/flightTypePage");
    }


    let getTokenDetails = () => {
      let token = localStorage.getItem('auth-token') //read data from localstorage
      if(token === null) {
        return false
      }  else {
          return jwt_decode(token);
      }
    };


       let  [userLogin, setUserLogin] =  useState(getTokenDetails());

       let onSuccess = (credentialResponse) => {
       let token =  credentialResponse.credential;
        //saveitem
        localStorage.setItem("auth-token", token);  
        //  alert("User Login Successfull");
        Swal.fire({
          icon: 'success',
          title: 'Login Successfull',
          text: 'welcome to Ride!',
        }).then (() =>{
          window.location.reload();
        })
      
     };
     let onError  =() => {
        //  alert("login failed");
        Swal.fire({
          icon: 'error',
          title: 'Ooops login Failed',
          text: 'try again!',
        })

     };
    //  console.log(userLogin);

     let logOut = () => {

      
         Swal.fire({
             title: 'Are you sure to logout?',
          
              icon: 'warning',
              showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, logout!'
         }).then((result) => {
                if (result.isConfirmed) {
                   //remove data from local storage
                    //removeItem
                  localStorage.removeItem("auth-token");
                  window.location.reload();
                  
  }
});
      
     
        // setUserLogin(false);
       

     }
   return  (
      <>
   <GoogleOAuthProvider clientId="538854202926-qn3713n470s7luve8sl5o4ld9c6s1qfp.apps.googleusercontent.com">
    <div className="modal fade" id="google-sign-in" data-bs-backdrop="static"  tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">
            
          Google-Sign-in
          </h5>
        <button type="button" 
        className="btn-close" 
        data-bs-dismiss="modal"
         aria-label="Close"
        >

        </button>
      </div>
      <div className="modal-body">
      <GoogleLogin
         onSuccess={onSuccess}
         onError={onError}
      />
      

        
      </div>
  
    </div>
  </div>
</div>
        <section className = "row  align-content-start "  >
        
           <div className = "col-sm-4 header d-flex justify-content-between py-2 m-0  ">
         
            <div className='travel-logo'>
            
            <p className= "logo hand text-dark ms-5 mt-1 mb-0   m-0" onClick={() => navigate("/")} >
                    Travel!
                </p>
               

            </div>
            
             
               

             
                   <div className="d-flex justify-content-space-between container d-lg-flex justify-content-end  d-md-flex justify-content-end d-none my-md-3 ">

                    <button className="btn  text-white border border-dark me-md-4  fw-bold  mt-4" onClick = {CarTypePage}>Car Types</button>
                    <button className="btn  text-white border border-dark me-md-4  fw-bold  mt-4 ms-5" onClick = {FlightTypePage}>Flight Types</button>
                   { userLogin ? ( <div>
                    {/* <button  
                        className="login-ipad btn text-white me-5 fw-bold border-dark  mt-4"  
                        data-bs-toggle="modal"
                        data-bs-target="#google-sign-in"
                        >
                          {}
                       </button> */}
                       <span className="fw-bold fs-5 text-white me-3 mt-5 mb-0">
                          Welcome, {userLogin.given_name}
                        </span>
                       <button onClick={ logOut}
                         className="btn  text-white border border-dark me-md-4  fw-bold  mt-4" 
                         data-bs-toggle="modal"
                         data-bs-target="#Account"
                        >
                          Logout
                        </button>
                      </div>
                      )  :  ( 
                     <div>

                       <button  
                        className="login-ipad btn text-white me-5 fw-bold border-dark  mt-4"  
                        data-bs-toggle="modal"
                        data-bs-target="#google-sign-in"
                        >
                          Login
                       </button>
                       <button 
                         className="btn  text-white border border-dark me-md-4  fw-bold  mt-4" 
                         data-bs-toggle="modal"
                         data-bs-target="#Account"
                        >
                          Creat an account
                        </button> 
                               </div> 
                      )}
               
               </div>
               
            
         </div>
         </section>  
         </GoogleOAuthProvider>
      </>
      );
};




export default Header;