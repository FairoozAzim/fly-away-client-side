import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleService, setSingleService] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();


    useEffect(()=>{
        fetch(`http://localhost:5000/tourCollection/${serviceId}`)
        .then(res => res.json())
        .then(data => setSingleService(data));
    },[])
     //console.log(singleService);
     const {name,description,img,duration,destination,price,rating,size,dateStart,dateEnd} = singleService;

     const onSubmit = data => 
     {   data.tourName = name;
         console.log(data.tourName);
         axios.post('http://localhost:5000/bookings', data)
         .then(function(res) {
           alert('Order Confirmed');
           reset();
         })
         //const {firstName, email,password } = data;
        
     }
    
    return (
        <div className='container'>
           <h1 className='header mb-5'>{name}</h1>
           <img src={img} alt=""></img>
           <p>{description} </p>
           <div className ="d-flex justify-content-between">
           <div className="d-flex flex-column">
      
            <h2>Tour Details</h2>
            <p>Destination: {destination}</p>
            <p>Price: {price}</p>
            <p>Duration: {duration}</p>
            <p>From {dateStart} To {dateEnd} </p>
            <p>Rating: {rating}</p>
            <p>People: {size}</p>

           </div>
           <div>
             <h2>Confirm Booking</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
              <input className='reg' defaultValue={user.displayName} {...register("name")}/> <br/>
              <br/>
              <input className='reg'  defaultValue={user.email} {...register("email")} /> <br/><br/>
              <input className='reg' placeholder="Address" {...register("address", { required: true})} /> <br/>
              {errors.address?.type === 'required' && <small className='text-danger'>Please give your address</small> }<br/>
              <input className='reg' defaultValue={name} {...register("tourName")} /> <br/><br/>
              <input className='reg' placeholder="Number of Persons" {...register("persons")} /> <br/><br/>
              
              <select className='reg' {...register("payment")}>
                <option value="first">Payment Option</option>
                <option value="bank">Bank Payment</option>
                <option value="card">Card Payment</option>
                <option value="bkash">Bkash Payment</option>
                <option value="emi">EMI Payment</option>
              </select> <br/> <br/>
             
              <button className='button p-2' type="submit">Confirm Booking</button>
              </form>
           </div>


           </div>
           
           <div className="d-flex justify-content-around mt-4">
           <Link to='/home'>
             <button className="button text-center p-2">Back to Home</button>
           </Link>
           </div>
            
        </div>
    );
};

export default ServiceDetails;