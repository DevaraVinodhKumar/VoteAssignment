
import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Context/actionTypes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: LOGIN_REQUEST });

        try {
            const response = await fetch(`/voters?email=${email}&password=${password}`);
            const data = await response.json();

            if (data.length > 0) {
                dispatch({ type: LOGIN_SUCCESS, payload: data[0] });
                navigate('/voting');
            } else {
                dispatch({ type: LOGIN_FAILURE, payload: 'Invalid credentials' });
            }
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;