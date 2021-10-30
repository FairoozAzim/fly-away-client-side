import React from 'react';
import useBookings from '../../hooks/userBookings';
import SingleBooking from '../SingleBooking/SingleBooking';

const ManageAllOrders = () => {
    const [bookings] = useBookings();
    console.log(bookings);
    return (
        <div className="text-center">
            <h1>Manage All Orders</h1>
            {
                bookings.map(booking => <SingleBooking
                key = {booking._id}
                booking = {booking}
                ></SingleBooking>)
            }
        </div>
    );
};

export default ManageAllOrders;