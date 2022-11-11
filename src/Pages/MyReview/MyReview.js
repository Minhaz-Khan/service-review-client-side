import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReviews] = useEffect([])
    useEffect(() => {
        fetch('')
    }, [user?.email])
    return (
        <div>

        </div>
    );
};

export default MyReview;