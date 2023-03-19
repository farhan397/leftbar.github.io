import React, { useState } from "react";
import "./Datafilter.css";
import Calendar from "react-calendar";


const Datafilter = ({btnsearch}) => {

const[datess,setdate]=useState("");
const[rovers,setrovers]=useState("");
const[camera,setcamera]=useState("");
  return (
    <>
      
        <div
          class="dropdownitems"
          
        >
          
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
                  backgroundColor: "white",
                }}
              >
                Rover
              </label>

              <select name="format" id="format"onChange={(e)=>{
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
                  backgroundColor: "white",
                }}
              >
                Camera
              </label>

              <select name="format" id="format"onChange={(e)=>{
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
            width:'200px',
            height:'30px'

          }}onChange={(e)=>{
                setdate(e.target.value);

            }}/>

          </div>
        
          <button type="button" onClick={btnsearch(rovers,camera,datess)} style={{
            width:'100px',
            height:'35px',
            backgroundColor:"rgb(126, 141, 240)"

          }}>Search</button>
        </div>
        
     
    </>
  );
};

export default Datafilter;
