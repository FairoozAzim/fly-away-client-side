import React from 'react';
import { Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
import './Service.css'

const Services = () => {
    const [services] = useServices();
    //console.log(services.length);
    if(services.length === 0) {
        return <div className="d-flex align-items-center justify-content-center fs-2">
            <Spinner animation="border" role="status" >
        <span className="visually-hidden text-center">Loading...</span>
      </Spinner>
        </div> 
    }
    else {
      return (
        <div id="services" className="services p-4">
           <h3 className="text-center header  mb-5">Our <span> Upcoming Tours </span></h3> 
           <div className="container mx-auto">
           <div className="row display-services gx">
           {
               services.map(service => <SingleService
               key = {service.id}
               service = {service}
               >

               </SingleService>)
           }
           </div>
           </div>
        </div>
    );
 }
};

export default Services;