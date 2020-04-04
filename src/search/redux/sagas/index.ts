import { all, takeLatest, putResolve, put, spawn, select } from 'redux-saga/effects';

import { addLocation, SET_CENTER } from 'src/map/redux/actions';

import {
  REQUEST_AUTOCOMPLETE_QUERY,
  autocompleteQuery,
  getForecastForLocation,
  GET_LOCATION_DATA,
  getPriceToLocation,
  resetSearch,
  getAirportByLocation,
  setDepartureAiport,
} from '../actions';

function* processAutocompleteSaga({ q }) {
  return yield putResolve(autocompleteQuery(q));
}

function* centerGetAirportSaga({ l }) {
  const { locations: [departure] } = yield putResolve(getAirportByLocation(l.EnglishName))

  yield put(setDepartureAiport(departure))
}

function* getTicketPrice(location) {
  // CONTINUE HERE
  const { center } = yield select(state => state.map)
  // const { locations: [departure] } = yield putResolve(getAirportByLocation(location.EnglishName))
  const { locations: [destination] } = yield putResolve(getAirportByLocation(location.EnglishName))

  yield putResolve(getPriceToLocation(location.Key, 'AMS', destination.id))
}

function* getLocationDataSaga(location) {
  if (!location.GeoPosition || !location.Key) return;

  const l = {
    ...location,
    latLng: [location.GeoPosition?.Latitude, location.GeoPosition?.Longitude],
  }

  yield all([
    spawn(function* () { yield put(getForecastForLocation(location.Key)) }),
    spawn(getTicketPrice, location)
  ])

  return l
}

export default function*() {
  return yield all([
    yield takeLatest(REQUEST_AUTOCOMPLETE_QUERY, processAutocompleteSaga),
    yield takeLatest(GET_LOCATION_DATA, function* ({ location }: any) {
      const l = yield getLocationDataSaga(location)

      yield put(addLocation(l));
      yield put(resetSearch());
    }),
    yield takeLatest(SET_CENTER, centerGetAirportSaga)
  ]);
}
