import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { UserButton, ProfileButton } from "../../../../components";
import { AuthStoreProvider, CredentialsStoreProvider } from "../../../../containers";
import "./Header.css";

export const Header = () => {
	return (
		<div className="header-wrapper">
			<h2 className="header__title">Loft-Taxi</h2>
			<div className="header-button-box">
				<Button component={Link} to="/map">
					Карта
				</Button>
				<CredentialsStoreProvider>
					<ProfileButton />
				</CredentialsStoreProvider>
				<AuthStoreProvider>
					<UserButton />
				</AuthStoreProvider>
			</div>
		</div>
	);
};
