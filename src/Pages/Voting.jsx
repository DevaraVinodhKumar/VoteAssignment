import React, { useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { FETCH_PARTICIPANTS_REQUEST, FETCH_PARTICIPANTS_SUCCESS, VOTE_SUCCESS } from '../Context/actionTypes';

const Voting = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        const fetchParticipants = async () => {
            dispatch({ type: FETCH_PARTICIPANTS_REQUEST });
            const response = await fetch('/participants');
            const data = await response.json();
            dispatch({ type: FETCH_PARTICIPANTS_SUCCESS, payload: data });
        };
        fetchParticipants();
    }, [dispatch]);

    const handleVote = (participantId) => {
        dispatch({ type: VOTE_SUCCESS, payload: participantId });
    };

    return (
        <ul>
            {state.participants.map((participant) => (
                <li key={participant.id}>
                    {participant.name}
                    <button onClick={() => handleVote(participant.id)} disabled={state.user.voted}>
                        Vote
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Voting;