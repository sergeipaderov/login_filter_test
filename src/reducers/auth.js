import { LOGIN_REQUEST, LOGOUT } from '../actions/auth';

const initialState = {
    isAuthorized: false,
    clientInfo: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                clientInfo: action.payload,
                isAuthorized: true
            };

        case LOGOUT:
            return {
                ...state,
                clientInfo: {},
                isAuthorized: false
            };

        default:
            return state;
    }
}
// check