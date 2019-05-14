//
import React, { memo } from "react";
import { OpenSansText } from "../../texts";
import "./Button.css";

type ButtonPropsType = {
	handleClick: () => void,
	text: string,
	classname: string,
};

export const Button = memo(({ handleClick, buttonType }: ButtonPropsType) => {
	return (
		<button className={classname} onClick={handleClick} type={buttonType}>
			Button
		</button>
	);
});

Button.defaultProps = {
	handleClick: () => {},
	text: "default string",
};
