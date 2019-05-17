import { createSelector } from "reselect";

const requireCredentials = state => state.сredentialsReducer.shouldFormBeOpened;

export const getOpenedFormState = createSelector(
	[requireCredentials],
	state => state
);
