import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { renderTextField } from "../../atoms";
import "./CredentialsForm.css";

export const CredentialsForm = props => {
	console.log("props CredentialsForm", props);

	const { saveUserCard, handleSubmit, cardName, expDate, cardNumber, cvv } = props;

	return (
		<form onSubmit={handleSubmit(saveUserCard)}>
			<h1 className="credentials-form__title">Профиль</h1>
			<h6 className="credentials-form__subtitle">Способ оплаты</h6>
			<div className="credentials-form__col-container">
				<div className="credentials-form__row-container">
					<div className="credentials-form__item">
						<Field
							name="cardName"
							type="text"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Имя владельца *"
							value="dfgfdgdg"
						/>
					</div>
					<div className="credentials-form__item">
						<Field
							name="expDate"
							type="date"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Дата окончания действия *"
							InputLabelProps={{
								shrink: true,
							}}
							value={expDate}
						/>
					</div>
				</div>
				<div className="credentials-form__row-container">
					<div className="credentials-form__item">
						<Field
							name="cardNumber"
							type="text"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Номер карты *"
							value={cardNumber}
						/>
					</div>
					<div className="credentials-form__item">
						<Field
							name="cvv"
							type="text"
							// normalize={normalizePassword}
							component={renderTextField}
							label="CVV *"
							value={cvv}
						/>
					</div>
				</div>
			</div>
			<div className="credentials-form__button">
				<Button type="submit" color="primary" variant="contained">
					Сохранить
				</Button>
			</div>
		</form>
	);
};

CredentialsForm.defaultProps = {
	saveUserCard: value => console.log("default saveUserCard", value),
	normalizeCardUser: value => console.log("default normalizeCardUser") || value,
	normalizeCardNumber: value => console.log("default normalizeCardNumber") || value,
	normalizeCardCVV: value => console.log("default normalizeCardCVV") || value,
};
