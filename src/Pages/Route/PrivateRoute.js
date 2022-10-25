import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-info mt-5 fw-bold text-center'><Spinner animation="grow" />Loading....</div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    } else {
        return children
    }
};

export default PrivateRoute;