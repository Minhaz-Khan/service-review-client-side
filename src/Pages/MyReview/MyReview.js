import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    UseTitle('My Review')
    const { user, LogOut } = useContext(AuthContext);
    const [reviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`https://service-review-assignment-server-minhaz-khan.vercel.app/myreview/${user?.email}`, {
            headers: {
                authoraization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    LogOut()
                }
                return res.json()
            })
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
                    fetch(`https://service-review-assignment-server-minhaz-khan.vercel.app/myreviewDetails/${_id}`, {
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
        <div className='h-screen mt-10'>
            {Array.isArray(reviews) && reviews.length !== 0 ? reviews.map(feedback => <MyReviewDetails key={feedback._id} feedback={feedback} handleReviewDelete={handleReviewDelete}></MyReviewDetails>) : <><h1 className='text-5xl text-center mt-20'>No Review !!</h1></>}
        </div>
    );
};

export default MyReview;