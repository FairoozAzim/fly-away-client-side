import { useEffect, useState } from "react";

const useServices = () => {
    const [services,setServices] = useState([]);
    const [loading, setLoading ] = useState(false);
    //console.log(loading);
    useEffect(() => {
        fetch('https://ghastly-barrow-08872.herokuapp.com/tourCollection')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setLoading(true);
        });
    },[])
    console.log(loading);

    return [services, setServices,loading];
}

export default useServices;