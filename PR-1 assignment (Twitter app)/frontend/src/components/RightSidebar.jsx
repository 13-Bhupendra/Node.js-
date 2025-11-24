import React from "react";
import '../style/rightsidebar.css'
import { FiSearch } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import profile3 from "../assets/profile 3.jpg"
import profile4 from "../assets/profile 4.webp"
import profile5 from "../assets/profile 5.webp"

const RightSidebar = () => {
  return (
    <div className="RightSidebarContainer">

      <div className="searchBox">
        <FiSearch className="searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <h5 className="mt-4 fw-bold">What’s happening</h5>
      <div className="trendsBox">

        <div className="trendItem">
          <div>
            <p className="category">NBA · LIVE</p>
            <h6>Cavaliers at Trail Blazers</h6>
          </div>
          <BsThreeDots className="dots" />
        </div>

        <div className="trendItem">
          <div>
            <p className="category">Music · Trending</p>
            <h6>Lisa Marie Presley</h6>
          </div>
          <BsThreeDots className="dots" />
        </div>

        <div className="trendItem">
          <div>
            <p className="category">Music · Trending</p>
            <h6>Miley Cyrus</h6>
          </div>
          <BsThreeDots className="dots" />
        </div>

        <div className="trendItem">
          <div>
            <p className="category">Trending in New York</p>
            <h6>Hochul</h6>
          </div>
          <BsThreeDots className="dots" />
        </div>

        <div className="trendItem">
          <div>
            <p className="category">Trending in New York</p>
            <h6>Long Island</h6>
          </div>
          <BsThreeDots className="dots" />
        </div>

        <p className="showMore">Show more</p>
      </div>

      <h5 className="mt-4 fw-bold">Who to follow</h5>
      <div className="followBox">

        <div className="followItem">
          <div className="userInfo">
            <img src={profile3} alt="" />
            <div>
              <h6>Cristiano Ronaldo</h6>
              <p>@Cristiano</p>
            </div>
          </div>
          <button className="btn btn-dark rounded-pill">Follow</button>
        </div>

        <div className="followItem">
          <div className="userInfo">
            <img src={profile4} alt="" />
            <div>
              <h6>YouTube</h6>
              <p>@YouTube</p>
            </div>
          </div>
          <button className="btn btn-dark rounded-pill">Follow</button>
        </div>

        <div className="followItem">
          <div className="userInfo">
            <img src={profile5} alt="" />
            <div>
              <h6>Elon Musk</h6>
              <p>@elonmusk</p>
            </div>
          </div>
          <button className="btn btn-dark rounded-pill">Follow</button>
        </div>

        <p className="showMore">Show more</p>
      </div>

    </div>
  );
};

export default RightSidebar;
