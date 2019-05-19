import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AuthStoreProvider, mapDispatchToProps } from "../AuthStoreProvider";
import * as middleware from "../../../redux/modules/Auth/middleware";
import * as actionsAuth from "../../../redux/modules/Auth/actions";
import * as actionsCredentials from "../../../redux/modules/Credentials/actions";
import * as actionsAdresses from "../../../redux/modules/Adresses/actions";
import { nullFunc } from "../../../utils";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
	Map: () => ({}),
}));

describe("AuthStoreProvider", () => {
	const MockComponent = props => <div>test</div>;

	const mockStore = configureMockStore([thunk]);
	const initialState = { loginStorage: { login: false } };
	let store;
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<AuthStoreProvider>
					<MockComponent />
				</AuthStoreProvider>
			</Provider>
		);
	});

	describe("check setting props", () => {
		it("should set component", () => {
			expect(wrapper.find(MockComponent).length).toBe(1);
		});
		it("should set loggedIn", () => {
			expect(wrapper.find(MockComponent).prop("loggedIn")).toEqual(initialState.loginStorage.login);
		});
		it("should set signInUser", () => {
			expect(wrapper.find(MockComponent).prop("signInUser")).toBeInstanceOf(Function);
		});
		it("should set signOutUser", () => {
			expect(wrapper.find(MockComponent).prop("signOutUser")).toBeInstanceOf(Function);
		});
	});

	describe("functionality of mapDispatchToProps", () => {
		it("signInUser with correct users data", () => {
			const loginRequestMock = jest.spyOn(middleware, "loginRequestAction");
			wrapper
				.find("WrappedContainer")
				.instance()
				.signInUser({ email: "testEmail", password: "testPassword" });

			expect(loginRequestMock).toHaveBeenCalledWith("testEmail", "testPassword");
		});
		it("dont signInUser with incorrect users data", () => {
			const loginRequestMock = jest.spyOn(middleware, "loginRequestAction");
			wrapper
				.find("WrappedContainer")
				.instance()
				.signInUser({ password: "testPassword" });

			expect(loginRequestMock).not.toHaveBeenCalled();
		});
		it("signOutUser", () => {
			const signOutMock = jest.spyOn(actionsAuth, "logoutAction");
			const clearCardDataMock = jest.spyOn(actionsCredentials, "clearCardDataAction");
			const clearAdressRouteMock = jest.spyOn(actionsAdresses, "clearAdressRoute");

			wrapper
				.find("WrappedContainer")
				.instance()
				.signOutUser();

			expect(signOutMock).toHaveBeenCalled();
			expect(clearCardDataMock).toHaveBeenCalled();
			expect(clearAdressRouteMock).toHaveBeenCalled();
		});
	});
});
