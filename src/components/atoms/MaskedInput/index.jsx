import React from "react";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export const renderMaskedInput = props => (
	<InputMask mask="9999 9999 9999 9999" maskChar=" ">
		{() => <TextField fullWidth={true} label={props.label} helperText={props.touched && props.error} />}
	</InputMask>
);
