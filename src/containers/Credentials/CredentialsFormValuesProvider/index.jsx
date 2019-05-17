import React, { Component } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const getFormValue = formValueSelector("credentials"); //////TODO Вынести в отдельный селектор

class WrappedContainer extends Component {
	render() {
		const { children, ...restProps } = this.props;

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				...restProps,
			})
		);
	}
}

const mapStateToProps = store => {
	return {
		// cardNameFormValue: getFormValue(store, "cardName"),
		// expDateFormValue: getFormValue(store, "expDate"),
		// cardNumberFormValue: getFormValue(store, "cardNumber"),
		// cvvFormValue: getFormValue(store, "cvv"),
	};
};

export const CredentialsFormValuesProvider = connect(
	mapStateToProps,
	null
)(WrappedContainer);
