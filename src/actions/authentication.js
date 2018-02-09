import 'whatwg-fetch';
import { decrementProgress, incrementProgress } from './progress';

// Action Creators
export const loginAttempt = () => ({ type: 'AUTHENTICATION_LOGIN_ATTEMPT' });
export const loginFailure = error => ({ type: 'AUTHENTICATION_LOGIN_FAILURE', error });
export const loginSuccess = json => ({ type: 'AUTHENTICATION_LOGIN_SUCCESS', json });
export const logoutFailure = error => ({ type: 'AUTHENTICATION_LOGOUT_FAILURE', error });
export const logoutSuccess = () => ({ type: 'AUTHENTICATION_LOGOUT_SUCCESS' });
export const sessionCheckFailure = () => ({ type: 'AUTHENTICATION_SESSION_CHECK_FAILURE' });
export const sessionCheckSuccess = json => ({ type: 'AUTHENTICATION_SESSION_CHECK_SUCCESS', json });

// Log User In
export function logUserIn(userData) {
    return async (dispatch) => {
        // Turn on spinner
        dispatch(incrementProgress());

        // Register that a login attept is being made
        dispatch(loginAttempt());

        // Contact login API
        await fetch(
            // Where to contact
            '/api/authentication/login',
            // What to send
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
            },
        )
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            })
            .then((json) => {
                if (json) {
                    dispatch(loginSuccess(json));
                } else {
                    dispatch(loginFailure(new Error('Authentication Failed')));
                }
            })
            .catch((error) => {
                dispatch(loginFailure(new Error(error)));
            });

        // Turn off spinner
        return dispatch(decrementProgress());
    };
}

// Log User Out
export function logUserOut() {
    return async (dispatch) => {
        // Turn on spinner
        dispatch(incrementProgress());

        // Contact the API
        await fetch(
            // Where to contact
            '/api/authentication/logout',
            // What to send
            {
                method: 'GET',
                credentials: 'same-origin',
            },
        )
            .then((response) => {
                if (response.status === 200) {
                    dispatch(logoutSuccess());
                } else {
                    dispatch(logoutFailure(`Error: ${response.status}`));
                }
            })
            .catch((error) => {
                dispatch(logoutFailure(new Error(error)));
            });

        // Turn off spinner
        return dispatch(decrementProgress());
    };
}
