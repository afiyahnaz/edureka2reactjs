import Mainhomepage from "./components/home/Mainhomepage";


import {Routes, Route}  from 'react-router-dom';
import CarMainSearch from "./components/carTypes/CarMainSearch";
import FlightMainPage from "./components/FlightTypes/FlightMainPage";


function App() {
  return (
   <>
       <main className="container-fluid">
           <Routes>
              <Route path = "/"  element ={ <Mainhomepage />} />
              <Route path = "/carTypePage"  element ={  <CarMainSearch/>} />

              <Route path ="/flightTypePage"  element ={<FlightMainPage/>}  />
              
              
             
           </Routes>
      </main>
   </>
  );
}

export default App;

// https://loquacious-torrone-db24f8.netlify.app
