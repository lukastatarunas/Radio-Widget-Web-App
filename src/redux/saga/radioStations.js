import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = `https://api.jsonbin.io/b/5ffe894af98f6e35d5fbe749`;

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}

function* fetchRadioStations() {
    try {
        const radioStations = yield call(getApi);
        yield put({ type: 'GET_RADIO_STATIONS_SUCCESS', radioStations: radioStations });
    } catch (error) {
        yield put({ type: 'GET_RADIO_STATIONS_FAILED', message: error.message });
    }
}

function* radioStationsSaga() {
    yield takeEvery('GET_RADIO_STATIONS_REQUESTED', fetchRadioStations);
}

export default radioStationsSaga;
