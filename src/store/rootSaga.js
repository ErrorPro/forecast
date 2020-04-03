import { all } from 'redux-saga/effects';

import search from 'src/search/redux/sagas';

export default store =>
  function*() {
    yield all([search()]);
  };
