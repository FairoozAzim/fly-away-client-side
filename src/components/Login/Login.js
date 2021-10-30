import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const {signInUsingGoogle, setIsLoading, signInUsingEmail} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
      signInUsingGoogle()
      .then(result => {
          history.push(redirect_url);
      }).finally (()=> setIsLoading(false));
    }

    const onSubmit = data => 
    {
        //console.log(data);
        const { email,password } = data;
        signInUsingEmail(email, password)
        .then((userCredential) => {
          // Signed in 
          history.push(redirect_url);
          const user = userCredential.user;
          console.log(user);
        }).finally (()=> setIsLoading(false));
    }
    return (
        <div className="text-center">
            <h1 className="header mb-5 mt-5">Login</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
            <input className='reg' placeholder="Email" {...register("email", { required: true})} /> <br/>
            {errors.email?.type === 'required' && <small className='text-danger'>"Email is required !"</small> }<br/>
            <input className='reg' placeholder="Password" {...register("password", { required: true })} /> <br/>
            {errors.password?.type === 'required' && <small className="text-danger">"Password is required !"</small> }<br/>
            <button className='button p-3' type="submit">Login</button>
           </form>
           <br/>
            <p>or</p>
            <hr></hr>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
            <button onClick={handleGoogleLogin} className="register"><FaGoogle className="text-danger"/> Sign in using GOOGLE</button>
        </div>
    );
};

export default Login;