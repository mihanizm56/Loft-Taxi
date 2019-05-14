import { loginPendingAction, loginSuccessAction, loginFailedAction } from "./actions";
import { sleep, fetchLoginRequest } from "../../../utils";

export const loginRequestAction = (email, password) => {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);

	if (email && password) {
		return dispatch => {
			dispatch(loginPendingAction());

			// return sleep().then(data => dispatch(loginSuccessAction()));

			return fetchLoginRequest(email, password)
				.then(({ success }) => {
					if (success) {
						dispatch(loginSuccessAction());
					} else {
						dispatch(loginFailedAction());
					}
				})
				.catch(error => dispatch(loginFailedAction()) || alert(error));
		};
	}
};
