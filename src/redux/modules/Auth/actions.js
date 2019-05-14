import {
    LOGIN_STATE_PENDING,
    LOGIN_STATE_SUCCESS,
    LOGIN_STATE_FAILED,
    LOGOUT
} from './constants';

export const loginPendingAction = () => ({type: LOGIN_STATE_PENDING});

export const loginSuccessAction = () => ({type: LOGIN_STATE_SUCCESS});

export const loginFailedAction = () => ({type: LOGIN_STATE_FAILED});

export const logoutAction = () => ({type: LOGOUT});