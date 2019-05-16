import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { OfferCreateBox, AddressForm, RedirectToCredentialsBox } from "../../../../molecules";
import "./AddressLayout.css";

export const AddressLayout = ({ offerDoneStatus, createNewOffer, credentialsValid, ...restProps }) => {
	return (
		<div className="address-layout-wrapper">
			{!credentialsValid && <RedirectToCredentialsBox />}
			{credentialsValid && !offerDoneStatus && <AddressForm {...restProps} />}
			{credentialsValid && offerDoneStatus && <OfferCreateBox createNewOffer={createNewOffer} />}
		</div>
	);
};

AddressLayout.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
