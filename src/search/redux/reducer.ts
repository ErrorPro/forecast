import createReducer from 'src/utils/createReducer';

import { ACCWEATHER_AUTOCOMPLETE } from './actions';

export const INITIAL_STATE = {
  list: [],
  map: {
    center: [51.505, -0.09],
  },
};

export default createReducer(INITIAL_STATE, {
  [ACCWEATHER_AUTOCOMPLETE.SUCCESS]: (state, { coords }) => ({
    ...state,
    map: {
      ...state.map,
      center: coords,
    },
  }),
});
