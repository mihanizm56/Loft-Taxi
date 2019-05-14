import React from "react";
import { Field } from "redux-form";
import { InputComponent, Button } from "../../atoms";

export const AuthForm = props => {
	console.log("props AuthForm", props);

	const { signInUser, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit(signInUser)}>
			<Field component={InputComponent} placeholder="Введите e-mail" type="text" name="email" />
			<Field component={InputComponent} placeholder="Введите password" type="password" name="password" />
			<Button buttonType="submit" />
		</form>
	);
};

AuthForm.defaultProps = {
	signInUser: value => console.log("default signInUser", value),
};
