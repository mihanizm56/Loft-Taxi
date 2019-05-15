import React from "react";
import { AddressesFormProvider, AddressesStoreProvider, CredentialsStoreProvider } from "../../../../containers";
import { AddressLayout } from "../../../../components";

export const IndexPage = props => {
	return (
		<div className="layout-page layout-page--up-fixed layout-page--left-fixed">
			<CredentialsStoreProvider>
				<AddressesStoreProvider>
					<AddressesFormProvider>
						<AddressLayout {...props} />
					</AddressesFormProvider>
				</AddressesStoreProvider>
			</CredentialsStoreProvider>
		</div>
	);
};
