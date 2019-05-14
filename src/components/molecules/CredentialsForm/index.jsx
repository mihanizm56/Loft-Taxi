import React from "react";
import { Field } from "redux-form";
import { InputComponent, Button } from "../../atoms";

export const CredentialsForm = props => {
	console.log("props AuthForm", props);

	const { saveUserCard, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit(saveUserCard)}>
			<Field component={InputComponent} placeholder="Введите cardName" type="text" name="cardName" />
			<Field component={InputComponent} placeholder="Введите expDate" type="text" name="expDate" />
			<Field component={InputComponent} placeholder="Введите cardNumber" type="text" name="cardNumber" />
			<Field component={InputComponent} placeholder="Введите cvv" type="text" name="cvv" />
			<Button buttonType="submit" />
		</form>
	);
};

CredentialsForm.defaultProps = {
	saveUserCard: value => console.log("default saveUserCard", value),
};
