import React from "react";
import Button from "@material-ui/core/Button";
import { Field } from "redux-form";
import { renderTextField } from "../../atoms";

export const CredentialsForm = props => {
	console.log("props AuthForm", props);

	const { saveUserCard, handleSubmit } = props;

	return (
		<div>
			<form onSubmit={handleSubmit(saveUserCard)}>
				<h1 className="credentials-form__title">Профиль</h1>
				<h6 className="credentials-form__title">Способ оплаты</h6>
				<div className="credentials-form__container">
					<div className="credentials-form__item">
						<Field
							name="cardName"
							type="password"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Имя владельца *"
						/>
					</div>
					<div className="credentials-form__item">
						<Field
							name="cardNumber"
							type="password"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Номер карты *"
						/>
					</div>
				</div>
				<div className="credentials-form__container">
					<div className="credentials-form__item">
						<Field
							name="expDate"
							type="password"
							// normalize={normalizePassword}
							component={renderTextField}
							label="Дата окончания действия *"
						/>
					</div>
					<div className="credentials-form__item">
						<Field
							name="cvv"
							type="password"
							// normalize={normalizePassword}
							component={renderTextField}
							label="CVV *"
						/>
					</div>
				</div>
				<div className="credentials-form__button">
					<Button type="submit">Сохранить</Button>
				</div>
			</form>
		</div>
	);
};

CredentialsForm.defaultProps = {
	saveUserCard: value => console.log("default saveUserCard", value),
	normalizeCardUser: value => console.log("default normalizeCardUser") || value,
	normalizeCardNumber: value => console.log("default normalizeCardNumber") || value,
	normalizeCardCVV: value => console.log("default normalizeCardCVV") || value,
};
