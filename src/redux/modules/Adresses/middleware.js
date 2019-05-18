import { saveAllCoordsAction, saveChoosenCoordsAction } from "./actions";
import { EMPTY_ARRAY } from "../../../constants";
import { fetchAddressesRequest, fetchRouteRequest } from "../../../services";

export const fetchAllAddressesAction = (email, password) => {
	return dispatch => {
		fetchAddressesRequest(email, password).then(({ addresses }) => {
			if (addresses && addresses.length) {
				dispatch(saveAllCoordsAction(addresses));
			} else {
				dispatch(saveAllCoordsAction(EMPTY_ARRAY));
			}
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
