import React, { Component } from "react";
import { connect } from "react-redux";
import {
	loginRequestAction,
	signOutFirebaseAction,
	loginStateSelector,
	userNameSelector,
	errorAuthSelector,
	errorAuthClearAction,
} from "../../../redux/modules/loginReducer";
import { openAuthModalAction, closeAuthModalAction } from "../../../redux/modules/modalAuth";
import { loadingSelector } from "../../../redux/modules/appLoading";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		// console.log("check AuthStoreProvider props");
		// console.log(this.props);
	}

	render = () => {
		const loginSucceed = this.props.loginState || localStorage.login === "true";
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { loginState: loginSucceed, ...restProps }));
	};
}

const mapStateToProps = store => {
	return {
		isLoading: loadingSelector(store),
		loginState: loginStateSelector(store),
		userName: userNameSelector(store),
		errorAuth: errorAuthSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signInFunc(email, password) {
			dispatch(loginRequestAction(email, password));
		},
		signOutFunc() {
			dispatch(signOutFirebaseAction());
		}
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
