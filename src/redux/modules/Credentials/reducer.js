import { INPUT_DATA_OF_CARD, RESET_DATA_OF_CARD, OPEN_CARD_FORM, CLOSE_CARD_FORM } from "./constants";

const initState = {
	card: {
		cardName: null,
		expDate: null,
		cardNumber: null,
		cvv: null,
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

		case RESET_DATA_OF_CARD:
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
