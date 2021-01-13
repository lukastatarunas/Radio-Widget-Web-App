import { all } from 'redux-saga/effects';
import radioStationsSaga from './radioStations';

export default function* rootSaga() {
    yield all([radioStationsSaga()]);
}
