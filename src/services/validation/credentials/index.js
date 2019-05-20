import { sleep } from "../..";

export const asyncValidateForCredentials = values => {
	return sleep(100).then(data => {
		const resultError = {};

		if (!values.cardName) {
			resultError.cardName = "Это обязательное поле";
		}

		if (!values.expDate) {
			resultError.expDate = "Это обязательное поле";
		}

		if (!values.cardNumber) {
			resultError.cardNumber = "Это обязательное поле";
		}

		if (!values.cvv) {
			resultError.cvv = "Это обязательное поле";
		}

		// if (!+values.cardNumber) {
		// 	resultError.cardNumber = "Может содержать только цифры";
		// }

		// if (values.cardNumber.length < 16) {
		// 	resultError.cardNumber = "В номере карты 16 цифр";
		// }

		if (!+values.cvv) {
			resultError.cvv = "Может содержать только цифры";
		}

		if (resultError.cardName || resultError.expDate || resultError.cardNumber || resultError.cvv) {
			throw resultError;
		}
	});
};

export const syncValidateForCredentials = values => {
	const errors = {};

	if (!values.cardName) {
		errors.cardName = "Это обязательное поле";
	}

	if (!values.expDate) {
		errors.expDate = "Это обязательное поле";
	}

	// if (!values.cardNumber) {
	// 	errors.cardNumber = "Это обязательное поле";
	// }

	// if (!+values.cardNumber) {
	// 	errors.cardNumber = "Может содержать только цифры";
	// }

	if (!values.cvv) {
		errors.cvv = "Это обязательное поле";
	}

	if (!+values.cvv) {
		errors.cvv = "Может содержать только цифры";
	}

	if (errors.cardName || errors.expDate || errors.cardNumber || errors.cvv) {
		return errors;
	}
};
