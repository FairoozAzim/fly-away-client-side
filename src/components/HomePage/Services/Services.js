import React from 'react';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
import './Service.css'

const Services = () => {
    const [services] = useServices();
    //console.log(services);
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
};

export default Services;