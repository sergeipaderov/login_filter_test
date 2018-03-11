export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const LOGOUT = "LOGOUT";

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload
});

export const logout = payload => ({
    type: LOGOUT,
    payload
});