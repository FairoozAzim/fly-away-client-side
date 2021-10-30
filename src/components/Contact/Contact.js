import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='d-flex container'>
           <div className="container text-center">
           <h1 className="header mt-5">Contact Us for Further Details</h1> 
           <input className='input' type='email' placeholder='Email'></input><br/>
           <input className='input' type='password' placeholder='Password'></input><br/>
           <textarea className='input' col="60" placeholder='Your Message'></textarea><br/>
           <button className='button p-2 mt-2'>SUBMIT</button>
           </div>
        </div>
    );
};

export default Contact;