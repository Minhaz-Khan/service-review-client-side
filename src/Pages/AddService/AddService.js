import React from 'react';
import UseTitle from '../../UseTitle/UseTitle';

const AddService = () => {
    UseTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;
        const service = {
            Image: image,
            details: details,
            price: price,
            rating: 5,
            title: serviceName
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',

            headers: {
                'content-type': 'application/json',
                authoraization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='w-6/12 mx-auto my-20 border p-20'>
            <h1 className='text-center text-3xl'>Add Your Service</h1>
            <form onSubmit={handleAddService} className="grid grid-cols-6 gap-4 col-span-full  p-5 lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">Service Name:</label>
                    <input type="text" name='serviceName' placeholder="Service Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">Image url</label>
                    <input type="text" name='image' placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">price</label>
                    <input type="number" name='price' placeholder="Enter Service Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">Service Details</label>
                    <textarea placeholder="" name='details' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                </div>
                <button type='submit' className='px-3 py-2 bg-indigo-500 duration-150 hover:bg-indigo-700 text-gray-100'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;