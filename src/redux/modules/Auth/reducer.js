import { LOGIN_STATE_PENDING, LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "./constants";

const initState = {
	login: true,
	error: null,
	loading: null,
};

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_STATE_PENDING:
			return { ...state, login: false, loading: true };
		case LOGIN_STATE_SUCCESS:
			return { ...state, login: true, loading: false };
		case LOGIN_STATE_FAILED:
			return { ...state, login: false, error: true, loading: false };
		case LOGOUT:
			return { ...state, login: false };

		default:
			return state;
	}
};

export default loginReducer;
