import React from 'react';
import { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='mx-40 grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-10'>
            {services.map(service => <Service service={service}></Service>)}
        </div>
    );
};

export default Services;