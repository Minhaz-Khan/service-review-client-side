import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider/AuthProvider';
import { Triangle } from 'react-loader-spinner';
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    if (user && user.uid) {
        return children;
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
};

export default PrivetRoute;