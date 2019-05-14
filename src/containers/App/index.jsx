import React, { memo } from "react";
import { MainWrapper } from "../../components";
import "./App.css";

export const App = memo(() => {
	// console.log("MainWrapper props", props);
	return (
		<div className="global-wrapper">
			<MainWrapper />
		</div>
	);
});
