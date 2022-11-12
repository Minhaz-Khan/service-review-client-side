import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../UseTitle/UseTitle';
import Service from './Service'

const Services = () => {
    UseTitle('Services')
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='mx-40 grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-10 my-10'>
            {services.map(service => <Service key={service._id} service={service}></Service>)}
        </div>
    )
};

export default Services;