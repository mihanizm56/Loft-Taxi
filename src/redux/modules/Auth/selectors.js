import { createSelector } from "reselect";

const loginState = state => state.loginReducer.login;
const loginError = state => state.loginReducer.error;

export const getLoginState = createSelector(
	[loginState],
	state => state
);

export const getLoginError = createSelector(
	[loginError],
	error => error
);
