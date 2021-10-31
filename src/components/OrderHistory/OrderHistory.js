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
                 <button className="button p-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete Booking</button>
                 <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="staticBackdropLabel">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p>  Are you sure you want to delete this booking?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => handleDelete(booking._id)}data-bs-dismiss="modal" >Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </SingleBooking>)
            }
        </div>
    );
};

export default OrderHistory;