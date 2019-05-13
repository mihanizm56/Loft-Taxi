
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import routeMapReducer from '../modules/Adresses';

export const rootReducer = combineReducers({
    // loginForm: loginFormReducer,
    // credetialsForm: credetialsFormReducer,
    routeMapReducer
});
