import { SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "./constants";

const initialState = {
	allRoutes: [],
	offerDone: false,
	choosenRouteCoords: [],
};

const routeMapReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ALL_ROUTES:
			return {
				...state,
				allRoutes: action.payload.routes,
			};

		case SAVE_CHOOSEN_COORDS_ROUTES:
			return {
				...state,
				choosenRouteCoords: action.payload,
				offerDone: true,
			};

		case MAKE_NEW_OFFER:
			return {
				...state,
				offerDone: false,
				choosenRouteCoords: [],
			};

		default:
			return state;
	}
};

export default routeMapReducer;
