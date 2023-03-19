import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

import Imgcard from './Imgcard/Imgcard';
import Datafilter from './DataFilter/Datafilter';



function App() {
  const[datesss,setdates]=useState("");
const[roverss,setroverss]=useState("");
const[cam,setcam]=useState("");
const[btnsearch1,setbtnsearch1]=useState(0);

  
  const btnsearch=(rovers,camera,datess)=>{
    
   
    setdates(datess);
    setroverss(rovers);
    setcam(rovers);
    setbtnsearch1(1)
 }

 
  
  return (
    <div className="App">
      {/* <div>
        <Datafilter btnsearch={btnsearch}/>
      </div> */}
      <div>
        <Imgcard />
        
      </div>
    </div>
  );
}

export default App;
