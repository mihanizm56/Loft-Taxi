import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { OfferCreateBox, AddressForm, RedirectToCredentialsBox } from "../../../../molecules";
import "./AddressLayout.css";

const renderAddressForm = props => <AddressForm {...props} />;

const renderOfferCreateBox = createNewOffer => <OfferCreateBox createNewOffer={createNewOffer} />;

const renderRedirectToCredentials = () => <RedirectToCredentialsBox />;

export const AddressLayout = ({ offerDoneStatus, createNewOffer, credentialsValid, ...restProps }) => {
	return (
		<div className="address-layout-wrapper">
			{!credentialsValid && renderRedirectToCredentials(createNewOffer)}
			{credentialsValid && !offerDoneStatus && renderAddressForm(restProps)}
			{credentialsValid && offerDoneStatus && renderOfferCreateBox(createNewOffer)}
		</div>
	);
};

AddressLayout.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
