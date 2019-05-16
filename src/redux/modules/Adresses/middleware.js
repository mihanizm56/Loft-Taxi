import { saveAllCoordsAction, saveChoosenCoordsAction } from "./actions";

import { sleep, fetchLoginRequest, fetchAddressesRequest, fetchRouteRequest } from "../../../utils";

const EMPTY_ARRAY = [];

export const fetchAllAddressesAction = (email, password) => {
	return dispatch => {
		// return sleep().then(data => dispatch(loginSuccessAction()));

		return fetchAddressesRequest(email, password).then(({ addresses }) => {
			console.log("fetched addresses", addresses);
			addresses && addresses.length && dispatch(saveAllCoordsAction(addresses));
		});
		// .catch(error => alert(error));
	};
};

export const fetchCoordsAction = (placeFrom, placeTo) => {
	return dispatch => {
		// return sleep().then(data => dispatch(loginSuccessAction()));

		return fetchRouteRequest(placeFrom, placeTo).then(coords => {
			console.log("fetched coords", coords);
			coords && coords.length && dispatch(saveChoosenCoordsAction(coords));
		});
		// .catch(error => alert(error));
	};
};
