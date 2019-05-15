import React from "react";
import { CredentialsStoreProvider, CredentialsFormProvider } from "../../../../containers";
import { CredentialLayout } from "../../../../components";

export const ProfilePage = props => {
	return (
		<div className="layout-page">
			<CredentialsStoreProvider>
				<CredentialsFormProvider>
					<CredentialLayout {...props} />
				</CredentialsFormProvider>
			</CredentialsStoreProvider>
		</div>
	);
};
