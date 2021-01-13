import { combineReducers } from 'redux';
import { radioStations } from './radioStations';

const rootReducer = combineReducers({
    radioStations: radioStations
});

export default rootReducer;
