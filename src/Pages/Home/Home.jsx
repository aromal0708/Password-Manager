import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <>
        <Navbar/>
        <div  className="landing-section">
          <img className="landing-img" src="/Assets/landing.png" alt="" />
          <span style={{"margin-top":"20px"}} className="header-text">You could just forget your</span>
          <span className="header-text">password anytime now</span>
          <button style={{"margin-top":"10px"}} className='dark-button'>Try it now <i style={{"background":"none"}} className="fa-solid fa-arrow-trend-up"></i></button>
        </div>
    </>
  )
}

export default Home