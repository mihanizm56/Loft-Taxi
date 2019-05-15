import React from "react";
import { CredentialsForm, CredentialsRedirectBox } from "../../../..";
import "./CredentialLayout.css";

const renderCredentialForm = props => <CredentialsForm {...props} />;

const renderRedirectBox = props => <CredentialsRedirectBox />;

export const CredentialLayout = ({ openedCredentialForm, ...restProps }) => {
	return (
		<div className="credentials-layout-wrapper">
			{openedCredentialForm ? renderCredentialForm(restProps) : renderRedirectBox()}
		</div>
	);
};
