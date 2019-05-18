import React from "react";
import { shallow, mount } from "enzyme";
import { AddressesStoreProvider, mapDispatchToProps } from "../";
import { Provider } from "react-redux";
import {
	removeCoordsAction,
	clearAdressRoute,
	saveAllCoordsAction,
	saveChoosenCoordsAction,
	fetchAllAddressesAction,
	fetchCoordsAction,
} from "../../../../redux/modules/Adresses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const initialState = { routeMapReducer: { allRoutes: [], offerDone: false, choosenRouteCoords: [] } };
let store;
let wrapper;

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
	Map: () => ({}),
}));

describe("AddressesStoreProvider", () => {
	const MockComponent = props => <div>test</div>;

	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<AddressesStoreProvider>
					<MockComponent />
				</AddressesStoreProvider>
			</Provider>
		);
	});

	describe("check setting props", () => {
		it("should set component", () => {
			expect(wrapper.find(MockComponent).length).toBe(1);
		});
		it("should set allRoutes", () => {
			expect(wrapper.find(MockComponent).prop("allRoutes")).toEqual(initialState.routeMapReducer.allRoutes);
		});
		it("should set offerDone", () => {
			expect(wrapper.find(MockComponent).prop("offerDoneStatus")).toEqual(initialState.routeMapReducer.offerDone);
		});
		it("should set choosenRouteCoords", () => {
			expect(wrapper.find(MockComponent).prop("arrayOfCoords")).toEqual(
				initialState.routeMapReducer.choosenRouteCoords
			);
		});
		it("should set chooseTripRoute", () => {
			expect(wrapper.find(MockComponent).prop("chooseTripRoute")).toBeInstanceOf(Function);
		});

		it("should set createNewOffer", () => {
			expect(wrapper.find(MockComponent).prop("createNewOffer")).toBeInstanceOf(Function);
		});
	});

	describe("functionality of mapDispatchToProps", () => {
		it("createNewOffer pure test", () => {
			const dispatch = jest.fn();

			mapDispatchToProps(dispatch).createNewOffer();

			expect(dispatch.mock.calls[0][0]).toEqual({ type: "MAKE_NEW_OFFER" });
		});
		it.only("fetchAllAddresses test", async () => {
			const dispatch = jest.fn();

			mapDispatchToProps(dispatch).fetchAllAddresses();

			expect(dispatch.mock.calls[0][0]).toEqual({ type: "MAKE_NEW_OFFER" });
		});
	});
});
