//
import React, { memo } from "react";
import "./Button.css";

export const Button = memo(({ handleClick, buttonType, text }: ButtonPropsType) => {
	console.log("handleClick in Button", handleClick);
	return (
		// <>test</>
		<button onClick={handleClick} type={buttonType}>
			{text || "Button"}
		</button>
	);
});

Button.defaultProps = {
	handleClick: () => {},
	text: "default string",
};
