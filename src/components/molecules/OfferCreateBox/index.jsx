import React from "react";
import Button from "@material-ui/core/Button";
import "./OfferCreateBox.css";

export const OfferCreateBox = ({ createNewOffer }) => {
	return (
		<>
			<h1 className="layout__title offer-title">Заказ размещён</h1>
			<p className="offer-redirect-box__subtitle">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
			<div className="offer-form__button">
				<Button type="submit" color="primary" variant="outlined" onClick={createNewOffer}>
					Сделать новый заказ
				</Button>
			</div>
		</>
	);
};

OfferCreateBox.defaultProps = {
	createNewOffer: () => console.log("default createNewOffer"),
};
