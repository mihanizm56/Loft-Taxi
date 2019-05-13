import {
    UPDATE_COORDS,
    REMOVE_COORDS
} from './constants';

const initialState = {
    routeCoords: []
};

const routeMapReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COORDS:
            return { ...state, routeCoords: action.payload };
        case REMOVE_COORDS:
            return { ...state, routeCoords: [] };

        default:
            return state;
    }
};

export default routeMapReducer;
