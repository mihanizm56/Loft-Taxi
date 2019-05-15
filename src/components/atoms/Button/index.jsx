//
import React, { memo } from "react";
import "./Button.css";

export const Button = memo(({ handleClick, buttonType }: ButtonPropsType) => {
	console.log("handleClick in Button", handleClick);
	return (
		// <>test</>
		<button onClick={handleClick} type={buttonType}>
			Button
		</button>
	);
});

Button.defaultProps = {
	handleClick: () => {},
	text: "default string",
};
