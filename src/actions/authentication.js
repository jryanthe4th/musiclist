import { decrementProgress, incrementProgress } from './progress';

// Action Creators
export const loginAttempt = () => ({ type: 'AUTHENTICATION_LOGIN_ATTEMPT' });
export const loginFailure = error => ({ type: 'AUTHENTICATION_LOGIN_FAILURE', error });
export const loginSuccess = json => ({ type: 'AUTHENTICATION_LOGIN_SUCCESS', json });
export const logoutFailure = error => ({ type: 'AUTHENTICATION_LOGOUT_FAILURE', error });
export const logoutSuccess = () => ({ type: 'AUTHENTICATION_LOGOUT_SUCCESS' });
export const sessionCheckFailure = () => ({ type: 'AUTHENTICATION_SESSION_CHECK_FAILURE' });
export const sessionCheckSuccess = json => ({ type: 'AUTHENTICATION_SESSION_CHECK_SUCCESS', json });

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
