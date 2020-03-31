import createReducer from 'src/utils/createReducer';

import { State, SetCenterAction } from 'src/map/types';

import { SET_CENTER } from './actions';

export const INITIAL_STATE: State = {
  list: [],
  map: {
    center: [51.505, -0.09],
  },
};

export default createReducer(INITIAL_STATE, {
  [SET_CENTER]: (state: State, { coords }: SetCenterAction): State => ({
    ...state,
    map: {
      ...state.map,
      center: coords,
    },
  }),
});
