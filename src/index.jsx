import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { App } from "./containers";
import "./styles/main.css";
import "./styles/shared.css";
import "./fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");

const store = createAppStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	ROOT_ELEMENT
);
