import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { UserButton } from "../../../../components";
import { AuthStoreProvider } from "../../../../containers";
import "./Header.css";

export const Header = () => {
	return (
		<div className="header-wrapper">
			<h2 className="header__title">Loft-Taxi</h2>
			<div className="header-button-box">
				<Button component={Link} to="/map">
					Карта
				</Button>
				<Button component={Link} to="/profile">
					Профиль
				</Button>
				<AuthStoreProvider>
					<UserButton />
				</AuthStoreProvider>
			</div>
		</div>
	);
};
