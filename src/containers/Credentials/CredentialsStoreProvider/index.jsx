import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	saveDataOfCardAction,
	openFormCardAction,
	getOpenedFormState,
} from "../../../redux/modules/Credentials";

class WrappedContainer extends Component {
	static defaultProps = {
		saveCardData: () => console.log("default saveCardData"),
		openFormCard: () => console.log("default openFormCard"),
	};

	componentDidMount() {
		console.log("check CredentialsStoreProvider props");
		console.log(this.props);
		this.props.openFormCard();
	}

	saveUserCard = ({ cardName, expDate, cardNumber, cvv }) => {
		// const { cardName, expDate, cardNumber, cvv } = props;
		// console.log("saveUserCard", props);
		this.props.saveCardData(cardName, expDate, cardNumber, cvv);
	};

	render() {
		const { children, saveCardData, openFormCard, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, { saveUserCard: this.saveUserCard, ...restProps })
		);
	}
}

const mapStateToProps = store => {
	return {
		cardName: getCardNameState(store),
		expDate: getExpDateState(store),
		cardNumber: getCardNumberState(store),
		cvv: getCvvState(store),
		openedCredentialForm: getOpenedFormState(store),
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
