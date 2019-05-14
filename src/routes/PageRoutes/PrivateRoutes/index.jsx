import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { IndexPageRoute } from "./IndexPageRoute";
import { ProfilePageRoute } from "./ProfilePageRoute";
import { LoginPageRoute } from "../";

export const PrivateRoute = props => {
	const { loggedIn, loginError } = props;
	// console.log("пропсы в PrivateRoute", props);
	// console.log("logined в PrivateRoute", loggedIn && !loginError);

	const logined = loggedIn && !loginError;

	return !logined ? (
		<Redirect to="/login" />
	) : (
		<Switch>
			<IndexPageRoute exact path="/" {...props} />
			<IndexPageRoute exact path="/map" {...props} />
			<ProfilePageRoute exact path="/profile" {...props} />
			<Redirect to="/map" />
		</Switch>
	);
};
