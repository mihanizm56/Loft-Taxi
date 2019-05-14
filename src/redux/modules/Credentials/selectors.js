import { createSelector } from "reselect";

const cardNameState = state => state.сredentialsReducer.card.cardName;
const expDateState = state => state.сredentialsReducer.card.expDate;
const cardNumberState = state => state.сredentialsReducer.card.cardNumber;
const cvvState = state => state.сredentialsReducer.card.cvv;
const openedFormState = state => state.сredentialsReducer.formOpen;

export const getCardNameState = createSelector(
	[cardNameState],
	name => name
);

export const getExpDateState = createSelector(
	[expDateState],
	date => date
);

export const getCardNumberState = createSelector(
	[cardNumberState],
	number => number
);

export const getCvvState = createSelector(
	[cvvState],
	cvv => cvv
);

export const getOpenedFormState = createSelector(
	[openedFormState],
	state => state
);
