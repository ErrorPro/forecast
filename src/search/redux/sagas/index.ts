import { all, takeLatest } from 'redux-saga/effects';

import { REQUEST_AUTOCOMPLETE_QUERY, autocompleteQuery } from '../actions';

function* processAutocompleteSaga({ q }) {
  console.log('HERE');
  yield autocompleteQuery(q);
  console.log('THERE');
}

export default function*() {
  return yield all([
    takeLatest(REQUEST_AUTOCOMPLETE_QUERY, processAutocompleteSaga),
  ]);
}
