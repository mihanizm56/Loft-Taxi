//
import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { Footer, Header } from "..";
import { ModalAuthForm, ModalReviewForm } from "../..";
import {
	AuthStoreProvider,
	AuthReduxFormProvider,
	ReviewsStoreProvider,
	ReviewsReduxFormProvider,
	ModalPortal,
	FilterItemsProvider,
	ShopItemsProvider,
} from "../../../../containers";
import "./MainWrapper.css";

export const MainWrapper = memo(props => {
	// console.log("MainWrapper props", props);
	return (
		<div className="main-wrapper">
			<MainLayout {...props} />
		</div>
	);
});
