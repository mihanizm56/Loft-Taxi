import React from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderTextField, renderSelect } from "../../atoms";
import "./AddressForm.css";

export const AddressForm = props => {
	console.log("props AddressForm", props);

	const { chooseTripRoute, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit(chooseTripRoute)} className="address-form">
			<h1 className="layout__title address__title">Вызов такси</h1>
			<div className="form__field">
				<Field name="from" type="text" native component={renderSelect}>
					<option value="" disabled>
						Выберите адрес отправления
					</option>
					<option value={10}>Ten</option>
					<option value={20}>Twenty</option>
					<option value={30}>Thirty</option>
				</Field>
			</div>
			<div className="form__field">
				<Field name="to" type="text" native component={renderSelect}>
					<option value="" disabled>
						Выберите адрес прибытия
					</option>
					<option value={10}>Ten</option>
					<option value={20}>Twenty</option>
					<option value={30}>Thirty</option>
				</Field>
			</div>
			<div className="address-form__button">
				<Button type="submit" variant="outlined">
					Вызвать такси
				</Button>
			</div>
		</form>
	);
};

AddressForm.defaultProps = {
	chooseTripRoute: value => console.log("default signInUser", value),
};
