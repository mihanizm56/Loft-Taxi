import { INPUT_DATA_OF_CARD, CLEAR_CARD_DATA, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "./constants";

const initState = {
	card: {
		cardName: 1,
		expDate: "11.12.2020",
		cardNumber: 1,
		cvv: 1,
	},
	formOpen: false,
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
				formOpen: false,
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
				formOpen: false,
			};

		case OPEN_CARD_FORM:
			return {
				...state,
				formOpen: true,
			};

		default:
			return state;
	}
};

export default сredentialsReducer;
