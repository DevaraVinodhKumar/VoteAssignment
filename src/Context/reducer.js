
import * as types from './actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case types.LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: true, user: action.payload };
        case types.LOGIN_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case types.LOGOUT:
            return { ...state, isAuthenticated: false, user: {} };
        case types.FETCH_PARTICIPANTS_REQUEST:
            return { ...state, isLoading: true };
        case types.FETCH_PARTICIPANTS_SUCCESS:
            return { ...state, isLoading: false, participants: action.payload };
        case types.FETCH_PARTICIPANTS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        case types.ADD_PARTICIPANT_SUCCESS:
            return { ...state, participants: [...state.participants, action.payload] };
        case types.VOTE_SUCCESS:
            return {
                ...state,
                participants: state.participants.map(participant =>
                    participant.id === action.payload ? { ...participant, votes: participant.votes + 1 } : participant
                )
            };
        default:
            return state;
    }
};

export default reducer;