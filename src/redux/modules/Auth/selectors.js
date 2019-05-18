import { createSelector } from "reselect";

const loginState = state => state.loginReducer.login;

export const getLoginState = createSelector(
	[loginState],
	state => state
);
