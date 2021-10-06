import { all, call, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AsyncTypes } from '../types';
import { fetchAuth } from './workers';

function* watchFetchAuth(): SagaIterator {
  yield takeLatest(AsyncTypes.FETCH_AUTH, fetchAuth);
}

export function* watchAuth(): SagaIterator {
  yield all([call(watchFetchAuth)]);
}
