import React, { useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { FETCH_PARTICIPANTS_REQUEST, FETCH_PARTICIPANTS_SUCCESS, FETCH_PARTICIPANTS_FAILURE } from '../context/actionTypes';
import Loading from '../Components/Loading';

const Result = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        const fetchParticipants = async () => {
            dispatch({ type: FETCH_PARTICIPANTS_REQUEST });
            try {
                const response = await fetch('/participants');
                const data = await response.json();
                dispatch({ type: FETCH_PARTICIPANTS_SUCCESS, payload: data });
            } catch (error) {
                dispatch({ type: FETCH_PARTICIPANTS_FAILURE, payload: error.message });
            }
        };
        fetchParticipants();
    }, [dispatch]);

    if (state.isLoading) return <Loading />;

    return (
        <div>
            <h2>Voting Results</h2>
            <ul>
                {state.participants.map((participant) => (
                    <li key={participant.id}>
                        {participant.name}: {participant.votes} votes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;