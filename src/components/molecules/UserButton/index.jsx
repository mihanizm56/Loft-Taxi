import React from "react";
import { Button } from "../../../components";

export const UserButton = ({ loggedIn, signInUser, signOutUser }) => {
	return loggedIn ? (
		<Button text="Выйти" handleClick={signOutUser} />
	) : (
		<Button text="Войти" handleClick={signInUser} />
	);
};
