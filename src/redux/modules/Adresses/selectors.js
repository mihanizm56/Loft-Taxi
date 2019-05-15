import { createSelector } from "reselect";

const routeState = state => state.routeMapReducer.route;
const allRoutesState = state => state.routeMapReducer.allRoutes;
const offerDoneState = state => state.routeMapReducer.offerDone;

export const getRouteState = createSelector(
	[routeState],
	route => route
);

export const getAllRoutesState = createSelector(
	[allRoutesState],
	routes => routes
);

export const getOfferDoneState = createSelector(
	[offerDoneState],
	offerState => offerState
);
