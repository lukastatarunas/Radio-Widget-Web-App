import * as types from '../types';

const initialState = {
    radioStations: [],
    loading: false,
    error: null
};

export const radioStations = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_RADIO_STATIONS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case types.GET_RADIO_STATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                radioStations: action.radioStations
            };
        case types.GET_RADIO_STATIONS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };
        default:
            return state;
    }
};
