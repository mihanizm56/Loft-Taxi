import React from "react";
import { AuthForm } from "../../../molecules";
import "./LoginPage.css";

export const LoginPage = props => {
	return (
		<div className="login-page-wrapper">
			<AuthForm {...props} />
		</div>
	);
};
