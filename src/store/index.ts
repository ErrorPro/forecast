import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import api from 'src/api/redux/middleware';

import rootReducer from './rootReducer';
import initialState from './initialState';
import { sagaMiddleware, runSaga } from './sagasMiddleware';
import rootSaga from './rootSaga';

const middleWare = [sagaMiddleware, api].concat(
  // @ts-ignore
  process.env.NODE_ENV !== 'production' ? logger : []
);

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);

runSaga(rootSaga(store));

export default store;
