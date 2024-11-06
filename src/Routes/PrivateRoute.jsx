import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const PrivateRoute = ({ children, adminOnly = false }) => {
    const { state } = useContext(AppContext);

    if (!state.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (adminOnly && state.user.role !== 'admin') {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;