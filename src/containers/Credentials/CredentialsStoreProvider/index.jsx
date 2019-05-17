import React, { Component } from "react";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
import { saveDataOfCardAction, openFormCardAction, getOpenedFormState } from "../../../redux/modules/Credentials";

class WrappedContainer extends Component {
	static defaultProps = {
		saveCardData: () => console.log("default saveCardData"),
		openFormCard: () => console.log("default openFormCard"),
	};

	// componentDidMount() {
	// 	console.log("check CredentialsStoreProvider props");
	// 	console.log(this.props);
	// }

	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		this.props.saveCardData(cardName, expDate, cardNumber, cvv);
	};

	render() {
		const { children, saveCardData, cardName, expDate, cardNumber, cvv, ...restProps } = this.props;
		const credentialsValues = {
			cardName,
			expDate,
			cardNumber,
			cvv,
		};

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				saveUserCard: this.saveUserCard,
				...credentialsValues,
				...restProps,
			})
		);
	}
}

const mapStateToProps = store => {
	return {
		requireCredentials: getOpenedFormState(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveCardData(cardName, expDate, cardNumber, cvv) {
			dispatch(saveDataOfCardAction(cardName, expDate, cardNumber, cvv));
		},
		openFormCard() {
			dispatch(openFormCardAction());
		},
	};
};

export const CredentialsStoreProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
