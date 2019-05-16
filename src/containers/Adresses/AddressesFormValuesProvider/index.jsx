import React, { Component } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const selector = formValueSelector("addresses"); //////TODO Вынести в отдельный селектор

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
		fromValue: selector(store, "from"),
	};
};

export const AddressesFormValuesProvider = connect(
	mapStateToProps,
	null
)(WrappedContainer);
