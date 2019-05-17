import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "./constants";

const initState = {
	card: {
		cardName: null,
		expDate: null,
		cardNumber: null,
		cvv: null,
	},
	shouldFormBeOpened: true,
};

const сredentialsReducer = (state = initState, action) => {
	switch (action.type) {
		case INPUT_DATA_OF_CARD:
			return {
				...state,
				card: {
					...state.card,
					cardName: action.payload.cardName,
					expDate: action.payload.expDate,
					cardNumber: action.payload.cardNumber,
					cvv: action.payload.cvv,
				},
				shouldFormBeOpened: false,
			};

		case CLEAR_CARD_DATA:
			return {
				...state,
				card: {
					...state.card,
					cardName: null,
					expDate: null,
					cardNumber: null,
					cvv: null,
				},
				shouldFormBeOpened: true,
			};

		case OPEN_CARD_FORM:
			return {
				...state,
				shouldFormBeOpened: true,
			};

		default:
			return state;
	}
};

export default сredentialsReducer;
