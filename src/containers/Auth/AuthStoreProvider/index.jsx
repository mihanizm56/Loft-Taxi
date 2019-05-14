import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState } from "../../../redux/modules/Auth";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		console.log("check AuthStoreProvider props");
		console.log(this.props);
	}

	render = () => {
		const loginSucceed = this.props.loginState || localStorage.login === "true";
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { loginState: loginSucceed, ...restProps }));
	};
}

const mapStateToProps = store => {
	return {
		loggedIn: getLoginState(store),
		loginError: getLoginError(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn(email, password) {
			dispatch(loginRequestAction(email, password));
		},
		signOut() {
			dispatch(logoutAction());
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
