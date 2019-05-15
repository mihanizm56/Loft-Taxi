import React from "react";
import { CredentialsForm, CredentialsRedirectBox } from "../../../../../components";

const renderCredentialForm = props => <CredentialsForm {...props} />;

const renderRedirectBox = props => <CredentialsRedirectBox />;

export const CredentialLayout = ({ openedCredentialForm, ...restProps }) => {
	return openedCredentialForm ? renderCredentialForm(restProps) : renderRedirectBox();
};
