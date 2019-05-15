import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { OfferCreateBox, AddressForm } from "../../../../../components";

const renderAddressForm = props => <AddressForm {...props} />;

const renderOfferCreateBox = createNewOffer => <OfferCreateBox createNewOffer={createNewOffer} />;

const renderRedirectToCredentials = () => (
	<Button component={Link} to="/profile">
		Ввести карту пользака
	</Button>
);

export const AddressLayout = ({ offerDoneStatus, createNewOffer, credentialsValid, ...restProps }) => {
	if (!credentialsValid) {
		return renderRedirectToCredentials(createNewOffer);
	}

	if (credentialsValid && !offerDoneStatus) {
		return renderAddressForm(restProps);
	}

	if (credentialsValid && offerDoneStatus) {
		return renderOfferCreateBox(createNewOffer);
	}
	return !offerDoneStatus ? renderAddressForm(restProps) : renderOfferCreateBox(createNewOffer);
};

AddressLayout.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
