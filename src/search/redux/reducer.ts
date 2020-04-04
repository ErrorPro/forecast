import createReducer from 'src/utils/createReducer';

import {
  ACCWEATHER_AUTOCOMPLETE,
  RESET_SEARCH_RESULT,
  SET_DEPARTURE_AIRPORT,
} from './actions';

export const INITIAL_STATE = {
  data: null,
  error: null,
  departureAirport: null,
  isLoading: false,
};

export default createReducer(INITIAL_STATE, {
  [ACCWEATHER_AUTOCOMPLETE.REQUEST]: state => ({
    ...state,
    data: null,
    error: null,
    isLoading: true,
  }),
  [ACCWEATHER_AUTOCOMPLETE.SUCCESS]: (state, { data }) => ({
    ...state,
    data,
    isLoading: false,
  }),
  [ACCWEATHER_AUTOCOMPLETE.FAILURE]: (
    state,
    { error = 'Something went wrong' }
  ) => ({
    ...state,
    error,
    isLoading: false,
  }),
  [SET_DEPARTURE_AIRPORT]: (state, { d: { id } }) => ({
    ...state,
    departureAirport: id,
  }),
  [RESET_SEARCH_RESULT]: () => INITIAL_STATE,
});
