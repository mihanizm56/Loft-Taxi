import { INPUT_DATA_OF_CARD, RESET_DATA_OF_CARD, OPEN_CARD_FORM } from "./constants";

export const saveDataOfCardAction = (cardName, expDate, cardNumber, cvv) => ({
	type: INPUT_DATA_OF_CARD,
	payload: {
		cardName,
		expDate,
		cardNumber,
		cvv,
	},
});

export const openFormCardAction = () => ({
	type: OPEN_CARD_FORM,
});
