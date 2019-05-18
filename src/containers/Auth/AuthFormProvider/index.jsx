import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { asyncValidateForAuth, syncValidateForAuth } from "../../../utils";

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
	asyncValidate: asyncValidateForAuth,
	validate: syncValidateForAuth,
})(WrappedContainer);
