import { REMOVE_COORDS, CHOOSE_COORDS, SAVE_ALL_ROUTES, MAKE_NEW_OFFER } from "./constants";

const initialState = {
	route: {
		from: null,
		to: null,
	},
	allRoutes: [],
	offerDone: true,
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
