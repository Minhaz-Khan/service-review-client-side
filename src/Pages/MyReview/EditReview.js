import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const editReview = useLoaderData();
    const [reviews, setReviews] = useState(editReview)
    console.log(reviews);
    const { rating, review } = reviews;

    const handleEditFrom = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const newRating = form.rating.value;
        const updateReview = { ...reviews };
        updateReview['rating'] = newRating;
        updateReview['review'] = comment;
        delete updateReview._id
        setReviews(updateReview)

        fetch(`http://localhost:5000/myreviewDetails/${editReview._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateReview)
        })
    }



    return (
        <section className="p-6 dark:text-gray-100">
            <form onSubmit={handleEditFrom} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                <div>
                    <label className="block mb-1 ml-1">Comment</label>
                    <input defaultValue={review} id="name" name='comment' type="text" placeholder="change comment" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
                </div>
                <div>
                    <label className="block mb-1 ml-1">rating</label>
                    <input defaultValue={rating} id="email" name='rating' type="text" placeholder="change rating" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
                </div>
            </form>
        </section>
    );
};

export default EditReview;