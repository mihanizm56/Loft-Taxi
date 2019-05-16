import { REMOVE_COORDS, CHOOSE_COORDS, SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "./constants";

const initialState = {
	route: {
		from: null,
		to: null,
	},
	allRoutes: [],
	offerDone: false,
	choosenRouteCoords: [],
};

const routeMapReducer = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_COORDS:
			return {
				...state,
				route: {
					...state.route,
					from: null,
					to: null,
				},
			};

		case CHOOSE_COORDS:
			return {
				...state,
				route: {
					...state.route,
					from: action.payload.from,
					to: action.payload.to,
				},
				offerDone: true,
			};

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
			};

		default:
			return state;
	}
};

export default routeMapReducer;
