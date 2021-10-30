import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Registration.css'

  
  const Registration = () =>  {
  const {registrationUsingEmail} = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const redirect_url = '/';
  const history = useHistory();
  const onSubmit = data => 
    {
        //console.log(data);
        const {firstName, email,password } = data;
        registrationUsingEmail(firstName, email,password,redirect_url,history);
    }
  
   
  return (
    <div className='container text-center'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className='reg' placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} /> <br/>
      {errors.firstName?.type === 'required' && <small className='text-danger'>" First name is required !"</small> }<br/>
      <input className='reg' placeholder="Last Name" {...register("lastName", { required: true, maxLength: 20 })} /> <br/>
      {errors.lastName?.type === 'required' && <small className="text-danger">" Last name is required !"</small> }<br/>
      <input className='reg' placeholder="Email" {...register("email", { required: true})} /> <br/>
      {errors.email?.type === 'required' && <small className='text-danger'>"Email is required !"</small> }<br/>
      <input className='reg' placeholder="Password" {...register("password", { required: true })} /> <br/>
      {errors.password?.type === 'required' && <small className="text-danger">"Password is required !"</small> }<br/>
      <button className='button p-2' type="submit">Register</button>
    </form>
    <p className="mt-3">Already have an account? <Link to="/login">Log In </Link></p>
    </div>
  );
}


export default Registration;