import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Voting from '../Pages/Voting';
import Result from '../Pages/Result';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/voting" element={<PrivateRoute><Voting /></PrivateRoute>} />
        <Route path="/results" element={<Result />} />
        <Route path="/add-participant" element={<PrivateRoute adminOnly={true}><AddParticipant /></PrivateRoute>} />
    </Routes>
);

export default AllRoutes;