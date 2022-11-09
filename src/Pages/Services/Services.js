import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service'

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='mx-40 grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-10 my-10'>
            {services.map(service => <Service key={service._id} service={service}></Service>)}
        </div>
    )
};

export default Services;