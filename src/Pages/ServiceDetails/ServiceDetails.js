import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import Review from './Review';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { Image, details, price, rating, title, _id } = service;
    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const rating = form.rating.value;
        console.log(feedback, rating);
        const reviewDetails = {
            name: user.displayName,
            image: user.photoURL,
            rating: rating,
            review: feedback,
            reviewID: _id,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <section >
            <div className='grid grid-cols-12 shadow-lg w-6/12 mx-auto '>
                <div className='col-span-4'>
                    <img src={Image} alt="" className='' />
                </div>
                <div className='col-span-8 m-5 space-y-2'>
                    <p className='text-2xl font-semibold '>{title}</p>
                    <p className='text-gray-400'>{details}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <hr className='my-16' />
            <div className='grid grid-cols-12'>
                <div className=' my-10 p-5 col-span-4 '>
                    <form onSubmit={handleFeedback}>

                        <div className="flex flex-col max-w-xl p-8 shadow-lg rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                            <div className='flex items-center space-x-2'>
                                <img src={user?.photoURL} alt="" className='h-12 w-12 rounded-full' />
                                <p>{user?.displayName}</p>
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>

                                </div>
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" name='feedback' placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                    <label htmlFor='rating'>Rating</label>
                                    <select name="rating" id="rating" className='w-16'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-violet-600 dark:bg-violet-400">Submit feedback</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-span-8'>
                    {reviews.map(feedback => <Review key={feedback._id} feedback={feedback}></Review>)}
                </div>
            </div>

        </section>
    );
};

export default ServiceDetails;