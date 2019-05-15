import React from "react";
import Select from "@material-ui/core/Select";

export const renderSelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
	<Select
		fullWidth={true}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		onChange={(event, index, value) => input.onChange(value)}
		children={children}
		{...custom}
	/>
);
