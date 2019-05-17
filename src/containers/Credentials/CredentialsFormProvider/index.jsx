import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { sleep } from "../../../utils/requests";

const asyncValidate = (values /*, dispatch */) => {
	return sleep(100).then(() => {
		if (!values.cardName) {
			throw { cardName: "That username is taken" };
		}
	});
};

class WrappedContainer extends Component {
	normalizeCardUser = value => {
		value = value.replace(/^\s+/, "");

		return typeof value === "string" ? value : "";
	};

	normalizeCardNumber = value => {
		value = value.replace(/^\s+/, "");

		return typeof value === "number" ? value : "";
	};

	normalizeCardCVV = value => {
		value = value.replace(/^\s+/, "");

		return typeof value === "number" ? value : "";
	};

	render() {
		const { children } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				normalizeCardUser: this.normalizeCardUser,
				normalizeCardNumber: this.normalizeCardNumber,
				normalizeCardCVV: this.normalizeCardCVV,
				...this.props,
			})
		);
	}
}

export const CredentialsFormProvider = reduxForm({
	// validate: ({ cardName, expDate, cardNumber, cvv }) => {
	// 	const errors = {};
	// 	if (!cardName) {
	// 		errors.cardName = "Wrong cardName";
	// 	}
	// if (!expDate) {
	// 	errors.expDate = "Wrong expDate";
	// }
	// if (!cardNumber) {
	// 	errors.cardNumber = "Wrong cardNumber";
	// }
	// if (!cvv) {
	// 	errors.cvv = "Wrong cvv";
	// }

	// 	return errors;
	// },
	asyncValidate,
	form: "credentials",
})(WrappedContainer);
