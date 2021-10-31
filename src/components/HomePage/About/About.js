import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">
        <div >
          <h1 className="text-center header mb-2 mt-5">  Where do you <span> want to go? </span> </h1>
          <p className="text-center mb-5">Search for your favorite destination</p>
          <div className="container d-flex flex-column flex-lg-row justify-content-around mb-5 mt-5">
              <div>
                  <h4>Destination</h4>
                  <input className="search mb-4" type="text" placeholder="Search Place"></input>
              </div>
              <div>
                  <h4>Price Limit</h4>
                  <select className="search mb-4">
                      <option>5000 tk</option>
                      <option>10000 tk</option>
                      <option>15000 tk</option>
                      <option>20000 tk</option>
                      <option>25000 tk</option>
                      <option>30000 tk</option>
                      <option>50000 tk</option>
                      <option>100000 tk</option>
                  </select>
              </div>
              <div>
                  <h4>Persons</h4>
                  <input className="search mb-4" type="number" placeholder="Tour Members"></input>
              </div>
             <button className="button submit">Submit</button>
          </div>

        </div>
        </div>
    );
};

export default About;