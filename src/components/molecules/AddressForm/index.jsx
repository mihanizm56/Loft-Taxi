import React, { Component } from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderTextField, renderSelect } from "../../atoms";
import "./AddressForm.css";

export class AddressForm extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.allRoutes && nextProps.allRoutes.length
			? { ...prevState, fullRoutes: nextProps.allRoutes }
			: { ...prevState, fullRoutes: [] };
	}

	state = {
		fullRoutes: this.props.allRoutes || [],
	};

	getFullOptionsContent = (props, fullRoutes) =>
		fullRoutes &&
		fullRoutes.map((item, index) => (
			<option value={item} key={index}>
				{item}
			</option>
		));

	getPartOptionsContent = (props, fullRoutes, sliceItem) => {
		console.log("test ///////////////", fullRoutes, sliceItem);

		if (fullRoutes && sliceItem) {
			return this.state.fullRoutes
				.filter(item => item !== sliceItem)
				.map((item, index) => (
					<option value={item} key={index}>
						{item}
					</option>
				));
		} else {
			return this.getFullOptionsContent(props, fullRoutes);
		}
	};

	render() {
		console.log("props AddressForm //////////////", this.props);
		const { fullRoutes } = this.state;
		const { chooseTripRoute, handleSubmit, fromValue, toValue, ...restProps } = this.props;

		return (
			<form onSubmit={handleSubmit(chooseTripRoute)} className="address-form">
				<h1 className="layout__title address__title">Вызов такси</h1>
				<div className="form__field">
					<Field name="from" type="text" native component={renderSelect}>
						<option value="" disabled>
							Выберите адрес отправления
						</option>
						{this.getPartOptionsContent(restProps, fullRoutes, toValue)}
					</Field>
				</div>
				<div className="form__field">
					<Field name="to" type="text" native component={renderSelect}>
						<option value="" disabled>
							Выберите адрес прибытия
						</option>
						{this.getPartOptionsContent(restProps, fullRoutes, fromValue)}
					</Field>
				</div>
				<div className="address-form__button">
					<Button type="submit" variant="outlined">
						Вызвать такси
					</Button>
				</div>
			</form>
		);
	}
}

AddressForm.defaultProps = {
	chooseTripRoute: value => console.log("default signInUser", value),
};
