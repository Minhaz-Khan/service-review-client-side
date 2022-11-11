import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { Image, title, details, price, _id } = service;
    return (
        <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={Image}>
                    <img src={Image} alt="" className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100 text-gray-400">{details.slice(0, 100) + "..."}</p>
                    <p>Price: ${price}</p>
                </div>
                <Link to={`/service/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-500 text-gray-100 duration-150 hover:bg-violet-700 dark:text-gray-900">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;