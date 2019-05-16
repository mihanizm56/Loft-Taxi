import { createSelector } from "reselect";

const allRoutesState = state => state.routeMapReducer.allRoutes;
const offerDoneState = state => state.routeMapReducer.offerDone;
const choosenCoords = state => state.routeMapReducer.choosenRouteCoords;

export const getChoosenCoords = createSelector(
	[choosenCoords],
	coords => coords
);

export const getAllRoutesState = createSelector(
	[allRoutesState],
	routes => routes
);

export const getOfferDoneState = createSelector(
	[offerDoneState],
	offerState => offerState
);
