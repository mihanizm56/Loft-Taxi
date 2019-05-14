import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "../modules/Auth";
import сredentialsReducer from "../modules/Credentials";

export const rootReducer = combineReducers({
	form: formReducer,
	loginReducer,
	сredentialsReducer,
});
