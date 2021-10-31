import React from 'react';
import Features from '../../Features/Features';
import Gallery from '../../Gallery/Gallery';
import About from '../About/About';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';

import './Home.css'
const Home = () => {
    return (
        <div id="home">
            
              <Banner></Banner>
              <Features></Features>
              <About></About>
              <Services></Services>          
             <Gallery></Gallery>
            
    
        </div>
    );
};

export default Home;