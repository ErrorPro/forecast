import { takeEvery, put } from 'redux-saga/effects';

function* anyFailureSaga({ error }) {
  if (!error) return;

  if (error.status === 401) {
    // ERROR HALDING
  }
}

export default function*() {
  yield takeEvery(
    ({ type = '' }) => type.search('_FAILURE') > 0,
    anyFailureSaga
  );
}
