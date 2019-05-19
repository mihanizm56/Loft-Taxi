import { getLoginState } from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Auth Selectors", () => {
	const mockParameters = {
		loginReducer: {
			login: false,
		},
	};

	it("should return if the user is logined", () => {
		const selected = getLoginState.resultFunc(mockParameters.loginReducer.choosloginenRouteCoords);
		expect(selected).toEqual(mockParameters.loginReducer.choosloginenRouteCoords);
	});
});
