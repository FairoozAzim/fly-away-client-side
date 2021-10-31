import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner.jpg';



const Banner = () => {
  return (
    <div className="banner container">
    <div className="d-flex justify-content-between align-items-center">
    <div className="me-3">
    <h1 className="banner-text">Keep Exploring <span className="fw-bold"> The World </span>. </h1>
    <p> “Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide</p>
    </div>
    <img src={banner1} alt=""></img>
    </div>
    
    
    </div>
  );
};

export default Banner;