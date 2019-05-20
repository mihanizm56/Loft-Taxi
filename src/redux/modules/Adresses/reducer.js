import { SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "./constants";
import { EMPTY_ARRAY } from "../../../constants";
import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";

const initialState = {
	allRoutes: [],
	offerDone: false,
	choosenRouteCoords: [],
};

const allRoutesLens = lensPath(["allRoutes"]);
const offerDoneLens = lensPath(["offerDone"]);
const choosenRouteCoordsLens = lensPath(["choosenRouteCoords"]);

const routeMapStorage = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_ROUTES:
			return set(allRoutesLens, action.payload.routes, state);

		case SAVE_CHOOSEN_COORDS_ROUTES:
			return {
				...set(choosenRouteCoordsLens, action.payload, state),
				...set(offerDoneLens, true, state),
			};

		case MAKE_NEW_OFFER:
			return {
				...set(choosenRouteCoordsLens, EMPTY_ARRAY, state),
				...set(offerDoneLens, false, state),
			};

		default:
			return state;
	}
};

export default routeMapStorage;
