import React from "react";
import { Button } from "../../atoms";

export const OfferCreateBox = ({ createNewOffer }) => <button onClick={createNewOffer}>Новый заказ</button>;

OfferCreateBox.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
