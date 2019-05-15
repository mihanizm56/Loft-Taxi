import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState, getLoginError } from "../../../redux/modules/Auth";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInFunc"),
	};

	componentDidMount() {
		console.log("check AuthStoreProvider props");
		console.log(this.props);
	}

	signInUser = ({ email, password }) => {
		console.log("signInUser", email, password);
		this.props.signIn(email, password);
	};

	signOutUser = () => {
		console.log("signOutUser");
		this.props.signOut();
	};

	render() {
		const { children, signIn, signOut, loggedIn: loggedInStore, loginError, ...restProps } = this.props;
		const loggedIn = loggedInStore && !loginError;

		return React.Children.map(children, child =>
			React.cloneElement(child, { signInUser: this.signInUser, loggedIn, signOutUser: this.signOutUser, ...restProps })
		);
	}
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
