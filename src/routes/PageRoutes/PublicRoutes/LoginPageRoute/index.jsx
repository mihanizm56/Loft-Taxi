import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginPage } from "../../../components";

export const LoginPageRoute = props => {
	const { loggedIn, loginError } = props;
	console.log("пропсы в LoginPageRoute", props);
	console.log("logined в LoginPageRoute", loggedIn && !loginError);

	const logined = loggedIn && !loginError;

	return logined ? <Redirect to="/app" /> : <Route render={() => <LoginPage {...props} />} />;
};