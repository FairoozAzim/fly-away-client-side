import React from 'react';
import { Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Features from '../../Features/Features';
import Gallery from '../../Gallery/Gallery';
import About from '../About/About';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';

import './Home.css'
const Home = () => {
    const[loading] = useServices();
    return (
        <div id="home">
            
              <Banner></Banner>
              <Features></Features>
              <About></About>
             
             {
                (loading === 'true') ? <Spinner className="text-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner> : <Services></Services>
           
            }
             
             <Gallery></Gallery>
            
    
        </div>
    );
};

export default Home;