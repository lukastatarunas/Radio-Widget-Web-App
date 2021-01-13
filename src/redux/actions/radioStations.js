import { GET_RADIO_STATIONS_REQUESTED } from '../types';

export const getRadioStations = () => {
    return {
        type: GET_RADIO_STATIONS_REQUESTED
    };
};
