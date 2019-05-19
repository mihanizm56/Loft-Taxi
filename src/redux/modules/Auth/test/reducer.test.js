import authReducer from "../reducer";
import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "../constants";
import { loginSuccessAction, loginFailedAction, logoutAction } from "../actions";

const initialState = {
	login: false,
};

describe("LOGIN_STATE_SUCCESS action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, loginSuccessAction());

	it("get true state in login in state1", () => {
		expect(state1.login).toBeTruthy();
	});
});

describe("LOGIN_STATE_FAILED action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, loginFailedAction());

	it("get failed state in login in state1", () => {
		expect(state1.login).toBeFalsy();
	});
});

describe("LOGOUT action", () => {
	const state0 = authReducer(undefined, "test");
	const state1 = authReducer(state0, logoutAction());

	it("get false state in login in state1", () => {
		expect(state1.login).toBeFalsy();
	});
});
