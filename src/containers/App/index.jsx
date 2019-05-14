import React, { memo } from "react";
import { MainWrapper } from "../../components/organisms";
import "./App.css";

export const App = memo(() => {
	// console.log("MainWrapper props", props);
	return (
		<div className="global-wrapper">
			<MainWrapper />
		</div>
	);
});
