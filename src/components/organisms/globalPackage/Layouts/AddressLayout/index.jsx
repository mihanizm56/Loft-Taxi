import React from "react";
import { OfferCreateBox, AddressForm } from "../../../../../components";

const renderAddressForm = props => <AddressForm {...props} />;

const renderOfferCreateBox = createNewOffer => <OfferCreateBox createNewOffer={createNewOffer} />;

export const AddressLayout = ({ offerDoneStatus, createNewOffer, ...restProps }) => {
	return !offerDoneStatus ? renderAddressForm(restProps) : renderOfferCreateBox(createNewOffer);
};

AddressLayout.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
