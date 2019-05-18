import React from "react";
import { Switch } from "react-router-dom";
import { LoginPageRoute } from "../PageRoutes";
import { PrivateRoute } from "../PageRoutes/PrivateRoutes";

export const MainLayout = props => {
	return (
		<Switch>
			<LoginPageRoute exact path="/login" {...props} />
			<PrivateRoute {...props} />
		</Switch>
	);
};
