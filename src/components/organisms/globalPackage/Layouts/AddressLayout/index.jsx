import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { OfferCreateBox, AddressForm, RedirectToCredentialsBox, MapBox } from "../../../../molecules";
import "./AddressLayout.css";

export const AddressLayout = ({
	offerDoneStatus,
	createNewOffer,
	credentialsValid,
	arrayOfCoords,
	reset,
	...restProps
}) => {
	console.log("AddressLayout props", restProps);
	return (
		<>
			<MapBox arrayOfCoords={arrayOfCoords} />
			<div className="address-layout-wrapper">
				{!credentialsValid && <RedirectToCredentialsBox />}
				{credentialsValid && !offerDoneStatus && <AddressForm {...restProps} reset={reset} />}
				{credentialsValid && offerDoneStatus && <OfferCreateBox createNewOffer={createNewOffer} reset={reset} />}
			</div>
		</>
	);
};

AddressLayout.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
