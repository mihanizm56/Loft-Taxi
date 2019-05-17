import React from "react";
import {
	CredentialsStoreProvider,
	CredentialsFormProvider,
	CredentialsFormValuesProvider,
} from "../../../../containers";
import { CredentialLayout } from "../../../../components";

export const ProfilePage = props => {
	return (
		<div className="layout-page layout-page--up-fixed">
			<CredentialsStoreProvider>
				<CredentialsFormProvider>
					<CredentialsFormValuesProvider>
						<CredentialLayout {...props} />
					</CredentialsFormValuesProvider>
				</CredentialsFormProvider>
			</CredentialsStoreProvider>
		</div>
	);
};
