import {
	getCardNameState,
	getExpDateState,
	getCardNumberState,
	getCvvState,
	getValidFormData,
	getShouldFormBeOpened,
} from "../selectors";
import { EMPTY_ARRAY } from "../../../../constants";

describe("Credentials Selectors", () => {
	const mockParameters = {
		сredentialsReducer: {
			card: {
				cardName: null,
				expDate: null,
				cardNumber: null,
				cvv: null,
			},
			shouldFormBeOpened: true,
		},
	};

	it("should return cards user name", () => {
		const selected = getCardNameState.resultFunc(mockParameters.сredentialsReducer.card.cardName);
		expect(selected).toEqual(mockParameters.сredentialsReducer.card.cardName);
	});
	it("should return exp date of card", () => {
		const selected = getExpDateState.resultFunc(mockParameters.сredentialsReducer.card.expDate);
		expect(selected).toEqual(mockParameters.сredentialsReducer.card.expDate);
	});
	it("should return card number", () => {
		const selected = getCardNumberState.resultFunc(mockParameters.сredentialsReducer.card.cardNumber);
		expect(selected).toEqual(mockParameters.сredentialsReducer.card.cardNumber);
	});
	it("should return cards cvv", () => {
		const selected = getCvvState.resultFunc(mockParameters.сredentialsReducer.card.cvv);
		expect(selected).toEqual(mockParameters.сredentialsReducer.card.cvv);
	});
	it("should return id the data of card is valid or not", () => {
		const selected = getValidFormData.resultFunc(
			mockParameters.сredentialsReducer.card.cardName,
			mockParameters.сredentialsReducer.card.expDate,
			mockParameters.сredentialsReducer.card.cardNumber,
			mockParameters.сredentialsReducer.card.cvv
		);
		expect(selected).toEqual(false);
	});
	it("should return if the modal should be opened", () => {
		const selected = getShouldFormBeOpened.resultFunc(mockParameters.сredentialsReducer.shouldFormBeOpened);
		expect(selected).toEqual(mockParameters.сredentialsReducer.shouldFormBeOpened);
	});
});
