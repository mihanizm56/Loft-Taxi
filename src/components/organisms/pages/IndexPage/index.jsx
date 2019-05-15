import React from "react";
import { AddressesFormProvider, AddressesStoreProvider } from "../../../../containers";
import { AddressLayout } from "../../../../components";

export const IndexPage = props => {
	return (
		<AddressesStoreProvider>
			<AddressesFormProvider>
				<AddressLayout {...props} />
			</AddressesFormProvider>
		</AddressesStoreProvider>
	);
};
