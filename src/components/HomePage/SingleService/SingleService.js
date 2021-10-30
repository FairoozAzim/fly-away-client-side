import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const {_id,name,description} = props.service;
   console.log(props.service);
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card course-info h-100 p-3">
            <div className="img-div">
            </div>
            <div className="container card-body">
            <h5 className="course-name mt-5 fw-bold card-title">{name}</h5>
            <p className="card-text text-muted">{description}</p>
            </div>
           <div className="cardfooter ms-3"> 
               
               <Link to={`/service/${_id}`}>
               <button className="button text-white p-2">
                 Book Now
               </button>
                </Link>
               </div>
            
            
            </div>
        </div>
    );
};

export default SingleService;