import { REMOVE_COORDS, CHOOSE_COORDS, SAVE_ALL_ROUTES, MAKE_NEW_OFFER } from "./constants";

export const chooseCoordsTripAction = (from, to) => ({ type: CHOOSE_COORDS, payload: { from, to } });

export const removeCoordsAction = () => ({ type: REMOVE_COORDS });

export const makeNewOfferAction = () => ({ type: MAKE_NEW_OFFER });

export const saveAllCoordsAction = routes => ({ type: SAVE_ALL_ROUTES, payload: { routes } });
