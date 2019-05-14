import React, { Component } from "react";
import { reduxForm } from "redux-form";

class WrappedContainer extends Component {
	componentDidMount() {
		// console.log("check AuthReduxFormProvider store props");
		// console.log(this.props);
	}

	render() {
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child => React.cloneElement(child, { ...restProps }));
	}
}

export const AuthFormProvider = reduxForm({
	// validate: ({ email, password }) => {
	// 	const errors = {};
	// 	if (!email) errors.email = "Failed email";
	// 	if (!password) errors.password = "Failed password";
	// 	return errors;
	// },
	form: "auth",
})(WrappedContainer);
