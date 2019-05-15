import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { Header } from "../../../../components";
import { AuthStoreProvider, AuthFormProvider } from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	// console.log("MainWrapper props", props);
	return (
		<div className="main-wrapper">
			<Header />
			<AuthStoreProvider>
				<AuthFormProvider>
					<MainLayout {...props} />
				</AuthFormProvider>
			</AuthStoreProvider>
		</div>
	);
});
