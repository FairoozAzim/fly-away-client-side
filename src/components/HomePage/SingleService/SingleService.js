import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
import {AiFillStar} from 'react-icons/ai'
const SingleService = (props) => {
    const {_id,name,description,img,rating,price} = props.service;
   //console.log(props.service);
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card course-info h-100 p-3">
            <div className="img-div">
            <img src={img} alt=''></img>
            </div>
            <div className="container card-body">
            <h5 className="course-name mt-5 fw-bold card-title">{name}</h5>
            <p className="card-text text-muted">{description.substring(0,100)}...</p>
            <div className="d-flex justify-content-between">
            <p>{rating}<span> <AiFillStar></AiFillStar></span></p>
            <p className="fw-bold">${price}</p>
            </div>
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