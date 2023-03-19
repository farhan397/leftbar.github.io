import React, { useState,useEffect } from 'react'
import { APIdata } from '../Data/Data';
import Card from '../Card/Card';

import { useRef } from "react";
// import clsx from "clsx";
// import useLazyLoad from '../useLazyLoad';
// import { LoadingPosts } from '../LoadingPosts';

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;


const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=ywwK2E7QIUaWuUpKNFrSg8j14WLj7THEKKPIURWg";

const Imgcard = () => {
  const [datess, setdate] = useState("");
  const [rovers, setrovers] = useState("");
  const [camera, setcamera] = useState("");
  const [filterarray, setfilterarray] = useState(APIdata);
  const [first, setFirst] = useState(6);
  const [rows, setRows] = useState(5);

  //  const images = filterarray(APIdata);
    const triggerRef = useRef(null);
  //   const onGrabData = (currentPage) => {
  //       // This would be where you'll call your API
  //       return new Promise((resolve) => {
  //       setTimeout(() => {
  //           const data = APIdata.slice(
  //           ((6 - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
  //           NUM_PER_PAGE * (6%TOTAL_PAGES)
  //           );
  //           console.log(data);
  //           resolve(data);
  //       }, 3000);
  //       });
  //   };
  // const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  

 
 


  

  
// debugger
console.log(first);
 

  const btnsearch = () => {
    console.log(datess);
    console.log(rovers);
    console.log(camera);

    const filteredUser = APIdata.filter((item) => {
      return item.camera.full_name === camera && item.earth_date === datess && item.rover.name
    })
    setfilterarray(filteredUser);
    //  settotal(filterarray.length);

  }

 
 
   
 


  return (

    <>
      <div class="dropdownitems" style={{
       backgroundColor: "rgb(215, 230, 221)",
        margin: '10px'
      }}>

        <div class="select1">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "4.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "rgb(215, 230, 221)",
            }}
          >
            Rover
          </label>

          <select name="format" id="format" onChange={(e) => {
            setrovers(e.target.value);
          }}>
            <option selected>Enter value...</option>
            <option>Curiosity</option>

          </select>
        </div>
        <label
          style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
        ></label>

        {/* select2 item */}


        <div class="select1">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "4.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "rgb(215, 230, 221)",
            }}
          >
            Camera
          </label>

          <select name="format" id="format" onChange={(e) => {
            setcamera(e.target.value);
          }}>
            <option selected>Enter value...</option>
            <option>Mast Camera</option>

          </select>
        </div>
        <label
          style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
        ></label>

        <div className="sdate">
          <input type="date" style={{
            width: '200px',
            height: '30px'

          }} onChange={(e) => {
            setdate(e.target.value);

          }} />

        </div>

        <button type="button" onClick={btnsearch} style={{
          width: '100px',
          height: '35px',
          backgroundColor: "rgb(73, 214, 160)"

        }}>Search</button>
      </div>

      <div className="parentContainer" style={{ display: 'flex', flexWrap: 'wrap', padding: '1px', justifyContent: 'center', alignItems: 'center' }}
      >{
          filterarray.slice(1,first).map((card, index) => (
            <Card item={card} key={index}

            />
          ))}
   
      </div>
      {/* <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div> */}
      

    
<div style={{
    marginBottom:"10px",
    // width:100,
    // marginLeft:'80%',
    
    
  }}> 
  <div class="select1" style={{
    marginBottom:"10px",
    // width:100,
    marginLeft:'80%',
    backgroundColor:'blue'
  }}>
  
          <select name="format" id="format" style={{
             appearance:'none',
             paddingLeft:"20px",
             paddingRight:"20px"
          }} onChange={(e) => {
            setFirst(e.target.value);
          }}>
            <option selected value={6}>5</option>
            
            <option value={11}>10</option>
            <option value={16}>15</option>
            <option value={21}>20</option>
            <option value={26}>25</option>
            <option value={31}>30</option>

          </select>
        </div>
        </div>





        
        
   <div>
   
      </div>
    </>
  )

}




export default Imgcard
