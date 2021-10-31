import { useEffect, useState } from "react";

const useServices = () => {
    const [services,setServices] = useState([]);
    const [loading, setLoading ] = useState(true);
    useEffect(() => {
        fetch('https://ghastly-barrow-08872.herokuapp.com/tourCollection')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setLoading(false);
        });
    },[])

    return [services, setServices,loading];
}

export default useServices;