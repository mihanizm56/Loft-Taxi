import {
    INPUT_NAME_OF_CARD,
    INPUT_END_DATE_OF_CARD,
    INPUT_NUMBER_OF_CARD,
    INPUT_SECRET_CODE_OF_CARD
} from './constants';

export const saveNameOfCardAction = name => ({type: INPUT_NAME_OF_CARD, payload: name});

export const saveEndDateOfCardAction = date => ({type: INPUT_END_DATE_OF_CARD, payload: date});

export const saveNumberOfCardAction = number => ({type: INPUT_NUMBER_OF_CARD, payload: number});

export const saveSecretCodeOfCardAction = code => ({type: INPUT_SECRET_CODE_OF_CARD, payload: code});
