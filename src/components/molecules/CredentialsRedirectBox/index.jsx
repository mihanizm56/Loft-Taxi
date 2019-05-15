import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const CredentialsRedirectBox = () => {
	return (
		<div>
			<Button component={Link} to="/map">
				Карта
			</Button>
		</div>
	);
};
