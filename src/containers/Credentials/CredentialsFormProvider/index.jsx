import React, { Component } from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	componentDidMount() {
		// console.log("check AuthReduxFormProvider store props");
		// console.log(this.props);
	}

	render() {
		const { children } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...this.props }));
	}
}

export const CredentialsFormProvider = reduxForm({
	// validate: ({ email, password, name }) => {
	// 	const errors = {};
	// 	if (!email) errors.email = "Failed email";
	// 	if (!password) errors.password = "Failed password";
	// 	if (!name) errors.password = "Failed name";
	// 	return errors;
	// },
	form: "credentials",
})(WrappedContainer);
