import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Field, change, reset } from "redux-form";
import { renderTextField } from "../../atoms";
import { nullFunc } from "../../../utils";
import "./CredentialsForm.css";

export class CredentialsForm extends Component {
	componentDidMount() {
		const { initialize, cardName, expDate, cardNumber, cvv } = this.props;
		initialize({ cardName, expDate, cardNumber, cvv });
	}

	render() {
		const { saveUserCard, handleSubmit, cardName, expDate, cardNumber, cvv } = this.props;

		return (
			<form onSubmit={handleSubmit(saveUserCard)}>
				<h6 className="form-subtitle">Способ оплаты</h6>
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
	}
}

CredentialsForm.defaultProps = {
	saveUserCard: nullFunc,
	normalizeCardUser: nullFunc,
	normalizeCardNumber: nullFunc,
	normalizeCardCVV: nullFunc,
};
