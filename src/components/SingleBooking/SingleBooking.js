import React from 'react';
import "./SingleBooking.css"
const SingleBooking = (props) => {
    const {status,image,dateStart, dateEnd, size, price, tourName} = props.booking; 
  

    return (
        <div className="">
            
            <div className="container p-lg-3 p-5 mb-4 rounded d-flex flex-column flex-lg-row justify-content-around singleBooking align-items-center shadow-lg">
                
                <img className="img" src={image} alt=""></img>
                <h6 className="fw-bold text-lg-start w-lg-25 w-75 text-center">{tourName}</h6>
                <p className="d-none d-lg-block me-2 ">{dateStart}</p>
                <p className="d-none d-lg-block me-2 ">{dateEnd}</p>
                <p className="d-none d-lg-block me-2 ">{size} Adults</p>
                <p className="d-none d-lg-block me-2 ">${price}</p>
                <p>Status: {status}</p>
                
               <div>{props.children}</div>
            </div>
            
        </div>
    );
};

export default SingleBooking;