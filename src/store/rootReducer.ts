import { combineReducers, Reducer } from 'redux';

import { AppState } from 'src/store/types';
import map from 'src/map/redux/reducer';

const rootReducer: Reducer<AppState> = combineReducers({
  map,
});

export default rootReducer;
