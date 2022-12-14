import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCart from './HomeServiceCart';


const HomeServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://service-review-assignment-server-minhaz-khan.vercel.app/homeservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className='lg:mx-40 mx-5 grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-y-10'>
                {services.map(service => <HomeServiceCart key={service._id} service={service}></HomeServiceCart>)}
            </div>
            <div className='text-center mt-5'>
                <Link to={'/services'}><button className='px-8 py-2 hover:bg-slate-400 bg-slate-200 rounded-md duration-150'>See all</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;