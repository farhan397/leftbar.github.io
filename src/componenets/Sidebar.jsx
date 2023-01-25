import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import{FaBars, FaHome,FaUser} from 'react-icons/fa'
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch} from "react-icons/bi";
import {AiTwotoneFileExclamation,AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
const routes=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path: "/users",
        name: "Users",
        icon: <FaUser />,
      },
      {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
      },
      {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
      },
      {
        path: "/file-manager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
        },
      {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
      },
      {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />,
      },
]
const Sidebar = ({children}) => {

    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
     const inputAnimation={
        hidden:{
            width:0,
            padding:0,
            opacity:0,
            transition:{
                duration:0.2,
            }
        },
        show:{
            width:"140px",
            opacity:1,
            padding:"5px 15px",
            
            transition:{
                duration:0.2,
            },
        },
    };

        const showAnimation ={
            hidden:{
                width:0,
                opacity:0,
                transition:{
                    duration:0.5,
                }
            },
            show:{
                width:"auto",
                opacity:1,
                transition:{
                    duration:0.5,
                },
            },
        };
    


  return (
        <div className="main-container">
            <motion.div animate={{width:isOpen ? "200px" :"40px" ,
          transition:{
            duration:0.5,
            type:"spring",
            damping:11,
          },
          }} className="sidebar">
                 <div className="top_section">
                    {isOpen && <h1 className="logo">Side bar</h1>}
                    
                    <div className="bars">
                        <FaBars onClick={toggle }/>
                    </div>
                 </div>
                 <div className="search">
                    <div className="search_icon">
                        <BiSearch/> 
                    </div>
                    <AnimatePresence>
                    {isOpen && <motion.input
                      initial="hidden"
                      animate="show"
                       exist="hidden" 
                       variants={inputAnimation} 
                       placeholder="search..."/>
                   }
                    </AnimatePresence>
                    
                    
                 </div>
                <section className="routes">
                    {
                        routes.map((route)=>(
                            
                        <NavLink to={route.path} key={route.name} className="link">
                            <div className="icon">{route.icon}</div>
                            <AnimatePresence>
                            {isOpen && <motion.div 
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exist="hidden"
                            className="link_text">{route.name}</motion.div>
                            }
                            </AnimatePresence>
                            
                        </NavLink>
                       
                        ))}
                </section>
                

            </motion.div>

            <main>{children}</main>

        </div>
  )
}

export default Sidebar
