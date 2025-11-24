import React from "react";
import { FaRegImage, FaRegSmile, FaRegChartBar } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import TweetCards from "./TweetCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeHeroSection = () => {
  const API = "http://localhost:7000";

  const [data, setData] = useState([]);
  const [userName , setUserName] = useState("");
  const [content , setContent] = useState("")
  const [profileImg , setProfileImg] = useState("")

const [editId, setEditId] = useState(null);

  //fetch data
  const fetchData = async () => {
    const res = await axios.get(`${API}/api/get`);
    setData(res.data);
  };

  //Post and update tweet
  const postTweet = async () => {
   if(editId === null){
        const newTweet = {
            id : data.length > 0 ? data[data.length - 1].id + 1 : 1 ,
            username: userName,
            content: content,
            profileImg: profileImg,
            isEdit: false,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          };

          await axios.post(`${API}/api/posts`, newTweet);
         toast.success("Tweet Added !")
        
    }else
   {
          const updatedTweet = {
              content: content,
              isEdit: true,
            };

           await axios.put(`${API}/api/update/${editId}` , updatedTweet)
          toast.success("Tweet Updated !")
   }
   
  setEditId(null);
  setContent("");
  setProfileImg("");
  setUserName("");  
  fetchData();
};

//delete req
  const deleteData = async (id) => {
    await axios.delete(`${API}/api/delete/${id}`);
    fetchData();
    toast.error("Tweet Deleted !")
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homeHeroContainer">

      <div className="whatsHappeningBox">

        <div className="inputGroup">
          <input type="text" value={userName} disabled={editId !== null}  className="smallInput" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)} />
          <input type="text" value={profileImg} disabled={editId !== null} className="smallInput" placeholder="Profile image URL"  onChange={(e)=>setProfileImg(e.target.value)} />
        </div>

        <div className="topRow">
          <input type="text" value={content} className="tweetInput" placeholder="What’s happening?"  onChange={(e)=>setContent(e.target.value)}/>
        
        </div>

        <div className="bottomRow">
          <div className="icons">
            <FaRegImage className="icon" />
            <FaRegChartBar className="icon" />
            <FaRegSmile className="icon" />
            <FiCalendar className="icon" />
          </div>
          <button className="tweetBtn" onClick={postTweet}>{editId ? " Update Tweet" : "Tweet"}</button>
        </div>

      </div>


      <div className="tweetList">
        {data.map((el) => (
          <div className="tweetCard" key={el.id}>
            <img src={el.profileImg} alt="profile" className="profileImg" />

            <div className="tweetContent">
              <h4 className="name">
                {el.username}  &nbsp; &nbsp;  {el.time}  &nbsp; •  &nbsp; {el.date}
              </h4>

              <p>{el.content}</p>

              <div className="tweetActions">
                <span>💬 23</span>
                <span>🔁 9</span>
                <span>❤️ 201</span>
                <span>↗️</span>
              </div>

              <div className="editDeleteBox d-flex justify-content-between">
                  <section >
                    <p className="m-0 pt-3 text-success">{el.isEdit ? "Edited" : ""}</p>
                  </section>
                  <section>
                      <button onClick={() => {
                          setEditId(el.id);
                          setContent(el.content); 
                          setUserName(el.username);
                          setProfileImg(el.profileImg);
                        }}><FaEdit /></button>
                      <button onClick={()=>deleteData(el.id)}><FaTrash /></button>
                  </section>
              </div>
            </div>
          </div>
        ))}
      </div>

        <TweetCards />
        <ToastContainer />
    </div>
  );
};

export default HomeHeroSection;
