import React from 'react'
import HomeHeroSection from '../components/HomeHeroSection'
import '../style/home.css'
import { BsStars } from "react-icons/bs";

const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='header d-flex justify-content-between p-4 pb-2'>
          <h4 className='fw-bold'>Home</h4>
          <BsStars className='fs-3' style={{color:"#1DA1F2"}}/>
        </div>
        <hr className='m-0 mb-4'/>
      <HomeHeroSection />
    </div>
  )
}

export default Home
