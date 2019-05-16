import { REMOVE_COORDS, CHOOSE_COORDS, SAVE_ALL_ROUTES, MAKE_NEW_OFFER, SAVE_CHOOSEN_COORDS_ROUTES } from "./constants";

export const removeCoordsAction = () => ({ type: REMOVE_COORDS });

export const makeNewOfferAction = () => ({ type: MAKE_NEW_OFFER });

export const saveAllCoordsAction = routes => ({ type: SAVE_ALL_ROUTES, payload: { routes } });

export const saveChoosenCoordsAction = arrayOfCoords => ({ type: SAVE_CHOOSEN_COORDS_ROUTES, payload: arrayOfCoords });
