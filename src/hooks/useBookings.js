import { useEffect, useState } from "react";

const useBookings = () => {
    const [bookings,setBookings] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-barrow-08872.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])

    return [bookings, setBookings];

}

export default useBookings;