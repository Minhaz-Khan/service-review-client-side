import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    UseTitle('My Review')
    const { user } = useContext(AuthContext);
    const [reviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user?.email}`, {
            headers: {
                authoraization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyReviews(data);
            })
    }, [user?.email])

    const handleReviewDelete = _id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/myreviewDetails/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                // alert('review delete successfully')
                                swal("Poof! Your Review has been deleted!", {
                                    icon: "success",
                                });
                                const remainingReviews = reviews.filter(rev => rev._id !== _id)
                                setMyReviews(remainingReviews)
                            }
                        })
                        .then(res => res.json())
                        .then(data => console.log(data))

                } else {
                    swal("Your imaginary file is safe!");
                }
            });


    }

    return (
        <div className='h-screen'>
            {reviews.length !== 0 ? reviews.map(feedback => <MyReviewDetails key={feedback._id} feedback={feedback} handleReviewDelete={handleReviewDelete}></MyReviewDetails>) : <><h1 className='text-5xl text-center mt-20'>No Review !!</h1></>}
        </div>
    );
};

export default MyReview;