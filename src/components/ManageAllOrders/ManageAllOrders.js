
import React, {  useEffect, useState } from 'react';
import useBookings from '../../hooks/useBookings';
import SingleBooking from '../SingleBooking/SingleBooking';
import './ManageOrders.css'

const ManageAllOrders = () => {
    const [bookings,setBookings] = useState([]);
    const [singleBooking, setSingleBooking ] = useState({});

    useEffect(() => {
        fetch('https://ghastly-barrow-08872.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
    },[singleBooking]);

  
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
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
          
        })
     }
     
     
     const handleStatusChange = id => {
      
     const updateBooking = {...singleBooking, 'status' : 'Confirmed'};
     setSingleBooking(updateBooking);
     console.log(singleBooking);

     const url = `https://ghastly-barrow-08872.herokuapp.com/bookings/${id}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type' : 'application/json'
         },
         body: JSON.stringify(singleBooking)
     })
     .then( res => res.json())
     .then(data => {
         if(data.modifiedCount > 0){
             alert('Updated Successfully');
             setSingleBooking(data);
             

         }
     });
      
    
     }
         
    return (
        <div className="text-center manage">
            <h1 className="header mb-5">Manage<span> All Bookings</span></h1>
            {
                bookings.map(booking => <SingleBooking
                key={booking._id}
                booking = {booking}
                >
                <div className="d-flex flex-column flex-lg-row">
                <p className="me-2">{booking.name}</p>
                {
                    (booking.status === 'Confirmed')?<button  type="button" className="btn btn-primary me-2 d-none" onClick={() => handleStatusChange(booking)}>Confirm Booking</button> :
                    <button  type="button" className="btn btn-primary me-2 " onClick={() => handleStatusChange(booking._id)}>Confirm Booking</button> 
                }
                              
                <button className="btn button p-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Delete Booking</button>
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
                </div>
                </SingleBooking>)
            }
           </div>
    );
};
export default ManageAllOrders;