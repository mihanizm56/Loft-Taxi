import { getChoosenCoords, getAllRoutesState, getOfferDoneState } from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Address Selectors", () => {
	const mockParameters = {
		routeMapReducer: {
			allRoutes: EMPTY_ARRAY,
			offerDone: false,
			choosenRouteCoords: EMPTY_ARRAY,
		},
	};

	it("should return choosen coords", () => {
		const selected = getChoosenCoords.resultFunc(mockParameters.routeMapReducer.choosenRouteCoords);
		expect(selected).toEqual(mockParameters.routeMapReducer.choosenRouteCoords);
	});
	it("should return all coords", () => {
		const selected = getAllRoutesState.resultFunc(mockParameters.routeMapReducer.allRoutes);
		expect(selected).toEqual(mockParameters.routeMapReducer.allRoutes);
	});
	it("should return state of offer", () => {
		const selected = getOfferDoneState.resultFunc(mockParameters.routeMapReducer.offerDone);
		expect(selected).toEqual(mockParameters.routeMapReducer.offerDone);
	});
});
