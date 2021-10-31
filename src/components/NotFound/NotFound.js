import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className="container mx-auto text-center">
            <div className="d-flex flex-column justify-content-center">
            <img className='w-50 text-center mx-auto' src={image} alt=''></img>
            </div>
            <Link to='/home'><button className="mt-5 button p-3">Go Back to Home</button></Link>
        </div>
    );
};

export default NotFound;