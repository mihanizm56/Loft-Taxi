import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { LoginPageRoute } from "../PageRoutes";
import { PrivateRoute } from "../PageRoutes/PrivateRoutes";

export const MainLayout = props => {
	const { loggedIn, loginError } = props;

	return (
		<Switch>
			<LoginPageRoute exact path="/login" {...props} />
			<PrivateRoute {...props} />
		</Switch>
	);
};
