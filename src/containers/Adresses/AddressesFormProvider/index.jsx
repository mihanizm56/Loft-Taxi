import React, { Component } from "react";
import { getFormValues } from "redux-form";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	componentDidMount() {
		console.log("check AddressesFormProvider form props 999999999999999999999");
		console.log(this.props);
	}

	render() {
		const { children } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...this.props }));
	}
}

export const AddressesFormProvider = reduxForm({
	// validate: ({ email, password, name }) => {
	// 	const errors = {};
	// 	if (!email) errors.email = "Failed email";
	// 	if (!password) errors.password = "Failed password";
	// 	if (!name) errors.password = "Failed name";
	// 	return errors;
	// },
	form: "addresses",
	// valuesSSSSSSSSSSS: getFormValues("addresses")(store),
})(WrappedContainer);
