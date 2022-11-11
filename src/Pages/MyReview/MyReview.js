import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyReviews(data);
            })
    }, [user?.email])

    const handleReviewDelete = _id => {
        const proceed = window.confirm('Are you sure delete thie review')
        if (proceed) {
            fetch(`http://localhost:5000/myreviewDetails/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('review delete successfully')
                        const remainingReviews = reviews.filter(rev => rev._id !== _id)
                        setMyReviews(remainingReviews)
                    }
                })
        }

    }

    console.log(user?.email);
    return (
        <div>
            {reviews.length !== 0 ? reviews.map(feedback => <MyReviewDetails key={feedback._id} feedback={feedback} handleReviewDelete={handleReviewDelete}></MyReviewDetails>) : <h1 className='text-5xl text-center'>No Review !!</h1>}
        </div>
    );
};

export default MyReview;