import React from "react";
import { Field } from "redux-form";
import { InputComponent, Button } from "../../atoms";

export const AddressForm = props => {
	console.log("props AddressForm", props);

	const { chooseTripRoute, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit(chooseTripRoute)}>
			<Field component={InputComponent} placeholder="Введите адрес 1" type="text" name="from" />
			<Field component={InputComponent} placeholder="Введите адрес 2" type="text" name="to" />
			<Button buttonType="submit" />
		</form>
	);
};

AddressForm.defaultProps = {
	chooseTripRoute: value => console.log("default signInUser", value),
};
