import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import Review from './Review';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])

    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { Image, details, price, rating, title, _id } = service;
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])
    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const rating = form.rating.value;
        console.log(feedback, rating);
        const reviewDetails = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
            rating: rating,
            review: feedback,
            serviceId: _id,

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => setReviews(data))


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
                            {user?.uid ? <div className='flex items-center space-x-2'>
                                <img src={user?.photoURL} alt="" className='h-12 w-12 rounded-full' />
                                <p>{user?.displayName}</p>
                            </div> : ''}
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>

                                </div>
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" name='feedback' placeholder="Message..." className="p-4 rounded-md resize border bg-gray-100 dark:text-gray-100 dark:bg-gray-900"></textarea>
                                    <label htmlFor='rating'>Rating</label>
                                    <select name="rating" id="rating" className='w-16'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900  hover:bg-violet-600 bg-violet-500">Submit feedback</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-span-8'>
                    {reviews.length !== 0 ? reviews.map(feedback => <Review key={feedback._id} feedback={feedback}></Review>) : <h1 className='text-5xl text-center'>No Review !!</h1>}
                </div>
                <div>
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServiceDetails;