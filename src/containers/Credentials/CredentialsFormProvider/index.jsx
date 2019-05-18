import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { sleep } from "../../../utils/requests";

const asyncValidate = values => {
	return sleep(100).then(data => {
		const resultError = {};

		if (!values.cardName) {
			resultError.cardName = "Это обязательное поле";
		}

		if (!values.expDate) {
			resultError.expDate = "Это обязательное поле";
		}

		if (!values.cardNumber) {
			resultError.cardNumber = "Это обязательное поле";
		}

		if (!values.cvv) {
			resultError.cvv = "Это обязательное поле";
		}

		if (resultError.cardName || resultError.expDate || resultError.cardNumber || resultError.cvv) {
			throw resultError;
		}
	});
};

const validate = values => {
	const errors = {};

	if (!values.cardName) {
		errors.cardName = "Это обязательное поле";
	}

	if (!values.expDate) {
		errors.expDate = "Это обязательное поле";
	}

	if (!values.cardNumber) {
		errors.cardNumber = "Это обязательное поле";
	}

	if (!values.cvv) {
		errors.cvv = "Это обязательное поле";
	}

	if (errors.cardName || errors.expDate || errors.cardNumber || errors.cvv) {
		return errors;
	}
};

class WrappedContainer extends Component {
	render() {
		const { children } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				...this.props,
			})
		);
	}
}

export const CredentialsFormProvider = reduxForm({
	validate,
	asyncValidate,
	form: "credentials",
})(WrappedContainer);
