import React, { useState } from 'react'

import "./Foam1.css"
import { BsMoon,BsSun} from "react-icons/bs";

const Foam1 = () => {
  const[status,setstatus]=useState(0);
  return (
    <>
    <div className="maindiv">
     <div className="headingclass">
     <h1> Dark Mode Challenge</h1>
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
   </svg> */}
    {status===1&&
   <BsMoon class="bi bi-sun"onClick={()=>{
  
    setstatus(0)
  console.log(status)
}} />
}
{status===0&&
     <BsSun class="bi bi-sun" onClick={()=>{
  
      setstatus(1)
      console.log(status)
    }} />
     }




   </div>
   <div className="prclass">
    <div className="p1class">
      <p>Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Easily Improve Any Text.</p>
    </div>
    <div  className={status===1?"darkclassp":"p2class"}>
      <p>Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Easily Improve Any Text.</p>
    </div>
   </div>

    <div>
     <input type="text" id="fname" name="firstname" placeholder="Name.."/>
     <input type="text" id="email" name="firstname" placeholder="Email.."/>
    </div>

    
    <div className="btnclass">
    <button class="button button1">Save</button>
    <button class="button button1">Submit</button>
    </div>
    </div>
  </>
  )
}

export default Foam1
