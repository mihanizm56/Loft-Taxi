import { LOGIN_STATE_SUCCESS, LOGIN_STATE_FAILED, LOGOUT } from "./constants";

const initState = {
	login: false,
};

const loginStorage = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_STATE_SUCCESS:
			return { ...state, login: true };
		case LOGIN_STATE_FAILED:
			return { ...state, login: false };
		case LOGOUT:
			return { ...state, login: false };

		default:
			return state;
	}
};

export default loginStorage;
