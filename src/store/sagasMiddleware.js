import createSagaMiddleware from 'redux-saga';

const saveSagaMiddleware = createSagaMiddleware();

export const sagaMiddleware = saveSagaMiddleware;

export const runSaga = sagaMiddleware.run;
