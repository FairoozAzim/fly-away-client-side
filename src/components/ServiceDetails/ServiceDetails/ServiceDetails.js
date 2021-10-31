import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ServiceDetails.css'
import {AiOutlineRight} from 'react-icons/ai';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleService, setSingleService] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();


    useEffect(()=>{
        fetch(`https://ghastly-barrow-08872.herokuapp.com/tourCollection/${serviceId}`)
        .then(res => res.json())
        .then(data => setSingleService(data));
    },[])
     //console.log(singleService);
     const {name,description,img,duration,destination,price,rating,size,dateStart,dateEnd} = singleService;

     const onSubmit = data => 
     {   data.tourName = name;
         data.status = "Pending";
         data.image = img;
         data.dateStart = dateStart;
         data.dateEnd = dateEnd;
         data.size = size;
         data.price = price;
         //console.log(data);
         axios.post('https://ghastly-barrow-08872.herokuapp.com/bookings', data)
         .then(function(res) {
           alert('Order Confirmed');
           reset();
         })
         //const {firstName, email,password } = data;
        
     }
    
    return (
        <div className='container'>
           <h1 className='header mb-5'><span>{name}</span></h1>
           <img className="mx-auto w-50 d-flex  justify-content-center mb-3" src={img} alt=""></img>
           <p className="description">{description} </p>
           <div className ="d-flex flex-column flex-lg-row justify-content-between">
           <div className="d-flex flex-column">
      
            <h2 className="mt-5">Tour Details</h2>
            <p className="fw-bold fs-5"><AiOutlineRight/>Destination: {destination}</p>
            <p className="fw-bold fs-5"><AiOutlineRight/>Price: {price}</p>
            <p className="fw-bold fs-5"><AiOutlineRight/>Duration: {duration}</p>
            <p className="fw-bold fs-5"><AiOutlineRight/>From {dateStart} To {dateEnd} </p>
            <p className="fw-bold fs-5"><AiOutlineRight/>Rating: {rating}</p>
            <p className="fw-bold fs-5"><AiOutlineRight/>Seat remaining: {size}</p>

           </div>
           <div>
             <h2 className="mt-5">Confirm Booking</h2>
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
              <input  type="hidden" {...register("status")} /> <br/><br/>
              <input  type="hidden" {...register("image")} /> <br/><br/>
              <input  type="hidden" {...register("dateStart")}/>
              <input  type="hidden" {...register("dateEnd")} /> <br/><br/>
              <input  type="hidden" {...register("size")} /> <br/><br/>
              <input  type="hidden" {...register("price")} /> <br/><br/>
             
              <button className='button p-3 confirm mb-5' type="submit">Confirm Booking</button>
              </form>
           </div>
           </div>
           
           <div className="d-flex back">
           <Link to='/home'>
             <button className="button p-3 ">Back to Home</button>
           </Link>
           </div>
            
        </div>
    );
};

export default ServiceDetails;