import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AuthStoreProvider, mapDispatchToProps } from "..";
import * as middleware from "../../../../redux/modules/Auth/middleware";
import * as actions from "../../../../redux/modules/Auth/actions";
import { nullFunc } from "../../../../utils";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
	Map: () => ({}),
}));

describe("AuthStoreProvider", () => {
	const MockComponent = props => <div>test</div>;

	const mockStore = configureMockStore([thunk]);
	const initialState = { loginReducer: { login: false } };
	let store;
	let wrapper;

	beforeEach(() => {
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
			expect(wrapper.find(MockComponent).prop("loggedIn")).toEqual(initialState.loginReducer.login);
		});
		it("should set signInUser", () => {
			expect(wrapper.find(MockComponent).prop("signInUser")).toBeInstanceOf(Function);
		});
		it("should set signOutUser", () => {
			expect(wrapper.find(MockComponent).prop("signOutUser")).toBeInstanceOf(Function);
		});
	});

	describe("functionality of mapDispatchToProps", () => {
		it("signInUser test", () => {
			const loginRequestMock = jest.spyOn(middleware, "loginRequestAction");
			wrapper
				.find("WrappedContainer")
				.instance()
				.signInUser({ email: "testEmail", password: "testPassword" });

			expect(loginRequestMock).toHaveBeenCalledWith("testEmail", "testPassword");
		});
	});
});
