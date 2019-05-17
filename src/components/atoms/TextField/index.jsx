import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({ value, input, label, meta: { touched, error }, ...custom }) => (
	<TextField
		value={value}
		fullWidth={true}
		label={label}
		// errorText={touched && error}
		{...input}
		{...custom}
	/>
);
