import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginStorage from "../modules/Auth";
import сredentialsStorage from "../modules/Credentials";
import routeMapStorage from "../modules/Adresses";

export const rootReducer = combineReducers({
	form: formReducer,
	loginStorage,
	сredentialsStorage,
	routeMapStorage,
});
