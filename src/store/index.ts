import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import initialState from './initialState';

const middleWare = [].concat(
  // @ts-ignore
  process.env.NODE_ENV !== 'production' ? logger : []
);

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
