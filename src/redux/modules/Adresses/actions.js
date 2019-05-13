import {
    UPDATE_COORDS,
    REMOVE_COORDS
} from './constants';

export const updateCoordsAction = arrayOfCoords => ({type: UPDATE_COORDS, payload: arrayOfCoords});

export const removeCoordsAction = () => ({type: REMOVE_COORDS});
