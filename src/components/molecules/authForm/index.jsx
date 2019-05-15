import React from "react";
import { Field } from "redux-form";
import { InputComponent } from "../../atoms";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./AuthForm.css";

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField fullWidth={true} label={label} errorText={touched && error} {...input} {...custom} />
);

export const AuthForm = props => {
	console.log("props AuthForm", props);

	const { signInUser, handleSubmit, normalizeEmail, normalizePassword } = props;

	return (
		<div className="auth-form-wrapper">
			<form onSubmit={handleSubmit(signInUser)} className="auth-form">
				<h1 className="auth-form__title">Войти</h1>
				<div className="auth-form__field">
					<Field name="email" component={renderTextField} normalize={normalizeEmail} label="Имя пользователя *" />
				</div>
				<div className="auth-form__field">
					<Field
						name="password"
						type="password"
						normalize={normalizePassword}
						component={renderTextField}
						label="Пароль *"
					/>
				</div>
				<div className="auth-form__button">
					<Button type="submit">Войти</Button>
				</div>
			</form>
		</div>
	);
};

AuthForm.defaultProps = {
	signInUser: value => console.log("default signInUser", value),
};
