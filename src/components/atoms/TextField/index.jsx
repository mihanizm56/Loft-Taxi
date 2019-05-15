import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({ input, label, value, meta: { touched, error } }) => (
	<TextField fullWidth={true} label={label} value={value} />
);
