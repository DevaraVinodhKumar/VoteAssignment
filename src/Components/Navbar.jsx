import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { LOGOUT } from '../Context/actionTypes';

const Navbar = () => {
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: LOGOUT });
        navigate('/');
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {state.isAuthenticated && (
                <>
                    <Link to="/voting">Voting</Link>
                    {state.user.role === 'admin' && <Link to="/add-participant">Add Participant</Link>}
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
            <Link to="/results">Results</Link>
        </nav>
    );
};

export default Navbar;