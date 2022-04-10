import React, { useEffect, useState } from 'react';
import "./Services.css"



const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    }, [])

    return (
        <div>
            <h2>Services</h2>
        </div>
    );
};

export default Services;