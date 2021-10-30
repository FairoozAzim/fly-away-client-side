import React from 'react';

const SingleBooking = (props) => {
    const {name, email} = props.booking
    return (
        <div>
            
            <div className="p-2 bg-dark mb-2 rounded w-75 text-center mx-auto">
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default SingleBooking;