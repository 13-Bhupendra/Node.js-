import React from 'react'
import Profile1 from "../assets/profile 1.jpg";
import Profile2 from "../assets/profile 2.webp";

const TweetCards = () => {
  return (
    <div>
          <div className="tweetCard">
                <img src={Profile2} alt="profile" className="profileImg" />
                <div className="tweetContent">
                  <h4 className="name">Brie • 3m</h4>
                  <p>Giving standup comedy a go. Open mic starts at 7!</p>
        
                  <div className="tweetActions">
                    <span>💬 1</span>
                    <span>🔁 7</span>
                    <span>❤️ 18</span>
                    <span>↗️</span>
                  </div>
                </div>
              </div>
          
             
      <div className="tweetCard">
        <img src={Profile1} alt="profile" className="profileImg" />
        <div className="tweetContent">
          <h4 className="name">Harold • 10m</h4>
          <p>Vacation is going great!</p>

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="tweet"
            className="tweetImage"
          />

          <div className="tweetActions">
            <span>💬 3</span>
            <span>🔁 5</span>
            <span>❤️ 14</span>
            <span>↗️</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TweetCards
