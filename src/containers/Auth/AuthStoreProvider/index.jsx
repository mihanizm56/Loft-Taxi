import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction, logoutAction, getLoginState } from "../../../redux/modules/Auth";
import { clearCardDataAction } from "../../../redux/modules/Credentials";
import { clearAdressRoute } from "../../../redux/modules/Adresses";

class WrappedContainer extends Component {
	signInUser = ({ email, password }) => {
		if (email && password) {
			this.props.signIn(email, password);
		}
	};

	signOutUser = () => {
		this.props.signOut();
	};

	render() {
		const { children, signIn, signOut, loggedIn, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, { signInUser: this.signInUser, loggedIn, signOutUser: this.signOutUser, ...restProps })
		);
	}
}

const mapStateToProps = store => {
	return {
		loggedIn: getLoginState(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn(email, password) {
			dispatch(loginRequestAction(email, password));
		},
		signOut() {
			dispatch(logoutAction());
			dispatch(clearCardDataAction()); /// из соображений безопасности данных банковской карты
			dispatch(clearAdressRoute());
		},
	};
};

export const AuthStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
