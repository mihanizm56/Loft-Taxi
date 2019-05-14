import React from "react";
import { Field } from "redux-form";
import { InputComponent, Button } from "../../atoms";

export const authForm = props => {
	// console.log("props", props);

	const { signInUser } = props;

	return (
		<form onSubmit={handleSubmit(signInUser)}>
			<Field component={InputComponent} placeholder="Введите e-mail" type="text" name="email" />
			<Field component={InputComponent} placeholder="Введите password" type="password" name="password" />
			<Button />
		</form>
	);
};

authForm.defaultProps = {
	signInUser: value => console.log(value),
};
