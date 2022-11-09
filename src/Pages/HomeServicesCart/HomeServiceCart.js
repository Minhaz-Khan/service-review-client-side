import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeServiceCart = ({ service }) => {
    const { Image, title, details } = service;
    return (
        <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={Image}>
                    <img src={Image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{details.slice(0, 100) + "..."}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-700 text-gray-100 dark:bg-violet-700 dark:text-gray-900">Details</button>
            </div>
        </div>
    );
};

export default HomeServiceCart;