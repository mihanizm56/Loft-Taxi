import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { fetchLoginAndPassword } from "../../../utils";

const asyncValidate = values => {
	return fetchLoginAndPassword().then(data => {
		const resultError = {};

		if (values.email !== data.email) {
			resultError.email = "Неве	рный логин";
		}

		if (values.password !== data.password) {
			resultError.password = "Неправильный пароль";
		}

		if (resultError.email || resultError.password) throw resultError;
	});
};

class WrappedContainer extends Component {
	normalizeEmail = value => value.replace(/^\s+/, "");

	normalizePassword = value => value.replace(/^\s+/, "");

	render() {
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				normalizeEmail: this.normalizeEmail,
				normalizePassword: this.normalizePassword,
				...restProps,
			})
		);
	}
}

export const AuthFormProvider = reduxForm({
	form: "auth",
	asyncValidate,
})(WrappedContainer);
