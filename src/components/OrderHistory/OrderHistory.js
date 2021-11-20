import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBookings from '../../hooks/useBookings';
import SingleBooking from '../SingleBooking/SingleBooking';

const OrderHistory = () => {
    const {email} = useParams();
    const [userBooking, setUserBooking] = useState([]); 

    useEffect(()=>{
        fetch(`https://ghastly-barrow-08872.herokuapp.com/bookings/${email}`)
        .then(res => res.json())
        .then(data => setUserBooking(data));
    },[])

    const handleDelete = id => {
        const url = `https://ghastly-barrow-08872.herokuapp.com/bookings/${id}`;
        console.log(url);
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted Successfully');
                const remaining = userBooking.filter(booking => booking._id !== id);
                setUserBooking(remaining);
                
            }
           
        })
     }
    
    return (
        <div>
            <h1 className="text-center header mb-5"><span>Booking </span>History</h1>
            {
                userBooking.map(booking => <SingleBooking
                key={booking._id}
                booking = {booking}
                >
                 <button className="button p-2" onClick={() => handleDelete(booking._id)}>Delete Booking</button>
            
                </SingleBooking>)
            }
        </div>
    );
};

export default OrderHistory;