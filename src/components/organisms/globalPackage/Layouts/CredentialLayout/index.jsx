import React from "react";
import { CredentialsForm, CredentialsRedirectBox } from "../../../..";
import "./CredentialLayout.css";

const renderCredentialForm = props => <CredentialsForm {...props} />;

const renderRedirectBox = props => <CredentialsRedirectBox />;

export const CredentialLayout = ({ openedCredentialForm, ...restProps }) => {
	return (
		<div className="credentials-layout-wrapper">
			<h1 className="layout__title credentials-title">Профиль</h1>
			{openedCredentialForm ? renderCredentialForm(restProps) : renderRedirectBox()}
		</div>
	);
};
