import React from 'react';
import useBookings from '../../hooks/useBookings';

const SingleBooking = (props) => {
    const {_id, name, email} = props.booking;
    const [bookings, setBookings] = useBookings();

    const handleDelete = id => {
        const url = `http://localhost:5000/bookings/${_id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted Successfully');
                const remainingBooking = bookings.filter(booking => booking._id !== id);
                setBookings(remainingBooking)
            }
        })
     }
    return (
        <div>
            
            <div className="p-2 bg-dark mb-2 rounded w-75 text-center mx-auto">
                <p>{name}</p>
                <p>{email}</p>
                <button className="button p-2" onClick={() => handleDelete(_id)}>Delete Booking</button>
            </div>
            
        </div>
    );
};

export default SingleBooking;