import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "../../../../components";
import { AuthStoreProvider } from "../../../../containers";

export const Header = () => {
	return (
		<div>
			<Link to="/map">Map page</Link>
			<Link to="/profile">Profile page</Link>
			<AuthStoreProvider>
				<UserButton />
			</AuthStoreProvider>
		</div>
	);
};
