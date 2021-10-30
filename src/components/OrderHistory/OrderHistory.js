import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleBooking from '../SingleBooking/SingleBooking';

const OrderHistory = () => {
    const {email} = useParams();
    const [userBooking, setUserBooking] = useState([]); 

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings/${email}`)
        .then(res => res.json())
        .then(data => setUserBooking(data));
    },[])
    
    return (
        <div>
            <h1>Booking History</h1>
            {
                userBooking.map(booking => <SingleBooking
                key={booking._id}
                booking = {booking}
                ></SingleBooking>)
            }
        </div>
    );
};

export default OrderHistory;