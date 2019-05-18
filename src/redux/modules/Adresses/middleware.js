import { saveAllCoordsAction, saveChoosenCoordsAction } from "./actions";

import { fetchAddressesRequest, fetchRouteRequest } from "../../../utils";

export const fetchAllAddressesAction = (email, password) => {
	return dispatch => {
		fetchAddressesRequest(email, password).then(({ addresses }) => {
			addresses && addresses.length && dispatch(saveAllCoordsAction(addresses));
		});
	};
};

export const fetchCoordsAction = (placeFrom, placeTo) => {
	return dispatch => {
		fetchRouteRequest(placeFrom, placeTo).then(coords => {
			coords && coords.length && dispatch(saveChoosenCoordsAction(coords));
		});
	};
};
