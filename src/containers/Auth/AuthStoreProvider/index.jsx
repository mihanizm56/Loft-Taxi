import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState, getLoginError } from "../../../redux/modules/Auth";
import { clearCardDataAction } from "../../../redux/modules/Credentials";
import { makeNewOfferAction } from "../../../redux/modules/Adresses";
import { nullFunc } from "../../../utils";

class WrappedContainer extends Component {
	static defaultProps = {
		signInFunc: nullFunc,
	};

	signInUser = ({ email, password }) => {
		if (email && password) {
			this.props.signIn(email, password);
		}
	};

	signOutUser = () => {
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
			dispatch(clearCardDataAction()); /// из соображений безопасности данный банковской карты
			dispatch(makeNewOfferAction());
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
