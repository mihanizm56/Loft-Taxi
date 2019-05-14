import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { IndexPageRoute } from "../IndexPageRoute";
import { ProfilePageRoute } from "../ProfilePageRoute";
import { LoginPageRoute } from "../LoginPageRoute";

const renderNormalLayout = props => (
	<Switch>
		<IndexPageRoute exact path="/" {...props} />
		<IndexPageRoute exact path="/map" {...props} />
		<ProfilePageRoute exact path="/profile" {...props} />
		<Redirect to="/map" />
	</Switch>
);

const renderLoginLayout = props => <LoginPageRoute exact path="/login" {...props} />;

export const MainLayout = props => {
	console.log("пропсы в MainLayout", props);

	const { loggedIn, loginError } = props;
	const logined = loggedIn && !loggedIn;

	return logined ? renderNormalLayout(props) : renderLoginLayout(props);
};
