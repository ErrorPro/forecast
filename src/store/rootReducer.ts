import { combineReducers, Reducer } from 'redux';

import { AppState } from 'src/store/types';
import map from 'src/map/redux/reducer';
import search from 'src/search/redux/reducer';

const rootReducer: Reducer<AppState> = combineReducers({
  map,
  search,
});

export default rootReducer;
