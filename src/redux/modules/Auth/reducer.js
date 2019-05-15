import { LOGIN_STATE_PENDING, LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "./constants";

const initState = {
	login: true,
	error: null,
};

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_STATE_SUCCESS:
			return { ...state, login: true };
		case LOGIN_STATE_FAILED:
			return { ...state, login: false, error: true };
		case LOGOUT:
			return { ...state, login: false, error: false };

		default:
			return state;
	}
};

export default loginReducer;
