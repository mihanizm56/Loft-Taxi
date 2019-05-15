import React from "react";
import { AddressesFormProvider, AddressesStoreProvider, CredentialsStoreProvider } from "../../../../containers";
import { AddressLayout } from "../../../../components";

export const IndexPage = props => {
	return (
		<CredentialsStoreProvider>
			<AddressesStoreProvider>
				<AddressesFormProvider>
					<AddressLayout {...props} />
				</AddressesFormProvider>
			</AddressesStoreProvider>
		</CredentialsStoreProvider>
	);
};
