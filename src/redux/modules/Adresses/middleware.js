import { saveAllCoordsAction } from "./actions";
import { sleep, fetchLoginRequest, fetchAddressesRequest } from "../../../utils";

export const fetchAllAddressesAction = (email, password) => {
	return dispatch => {
		// return sleep().then(data => dispatch(loginSuccessAction()));

		return fetchAddressesRequest(email, password).then(({ addresses }) => {
			if (addresses && addresses.length) {
				dispatch(saveAllCoordsAction(addresses));
			} else {
				dispatch(saveAllCoordsAction([]));
			}
		});
		// .catch(error => alert(error));
	};
};
