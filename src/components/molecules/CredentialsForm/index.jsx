import React from "react";
import { Field } from "redux-form";
import { InputComponent, Button } from "../../atoms";

export const CredentialsForm = props => {
	console.log("props AuthForm", props);

	const { saveUserCard, handleSubmit, normalizeCardUser, normalizeCardNumber, normalizeCardCVV } = props;

	return (
		<form onSubmit={handleSubmit(saveUserCard)}>
			<Field
				component={InputComponent}
				normalize={normalizeCardUser}
				placeholder="Введите cardName"
				type="text"
				name="cardName"
			/>
			<Field component={InputComponent} placeholder="Введите expDate" type="date" name="expDate" />
			<Field
				component={InputComponent}
				normalize={normalizeCardNumber}
				placeholder="Введите cardNumber"
				type="text"
				name="cardNumber"
			/>
			<Field component={InputComponent} normalize={normalizeCardCVV} placeholder="Введите cvv" type="text" name="cvv" />
			<Button buttonType="submit" />
		</form>
	);
};

CredentialsForm.defaultProps = {
	saveUserCard: value => console.log("default saveUserCard", value),
	normalizeCardUser: value => console.log("default normalizeCardUser") || value,
	normalizeCardNumber: value => console.log("default normalizeCardNumber") || value,
	normalizeCardCVV: value => console.log("default normalizeCardCVV") || value,
};
