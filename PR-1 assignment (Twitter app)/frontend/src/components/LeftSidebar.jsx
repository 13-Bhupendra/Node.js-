import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { MdMoreHoriz } from "react-icons/md";
import Logo from "../assets/logo.png"
import '../style/leftSidebar.css'
import Button from './Button';


const LeftSidebar = () => {

    const data = [
         {
            id : 1,
            text : "Explore",
            icon : <FaHashtag />
        },
         {
            id : 2,
            text : "Notification",
            icon : <IoNotificationsOutline />
        },
         {
            id : 3,
            text : "Messages",
            icon : <IoMailOutline />
        },
             {
            id : 4,
            text : "BookMarks",
            icon : <FaRegBookmark />
        },

             {
            id : 5,
            text : "Twitter Blue",
            icon : <LiaTwitterSquare />
        },

             {
            id : 6,
            text : "Profile",
            icon : <FiUser />
        },
             {
            id : 7,
            text : "More",
            icon : <MdMoreHoriz />
        },



    ]

  return (
    <div className='leftSidebarContainer'>
        <div className='logo w-50 ms-4'>
            <img src={Logo} height={"40px"}/>
        </div>

        <div className='menulist mt-4'>
            <ul>
                <li className='mt-4' style={{color:"#1DA1F2"}}><FaHome />&nbsp;&nbsp;Home</li>
                {data.map((el)=>(
                    <li className='mt-4'>{el.icon}&nbsp;&nbsp;{el.text}</li>
                ))}
            </ul>
            <Button />
        </div>
    </div>
  )
}

export default LeftSidebar
