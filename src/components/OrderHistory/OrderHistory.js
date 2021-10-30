import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useBookings from '../../hooks/userBookings';

const OrderHistory = () => {
    const [bookings] = useBookings();
    const {user} = useAuth();
    return (
        <div>
            <h1>Booking History</h1>
        </div>
    );
};

export default OrderHistory;