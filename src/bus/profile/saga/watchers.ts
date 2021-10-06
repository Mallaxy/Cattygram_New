import { all, call, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AsyncTypes } from '../types';
import { changeStatus } from './workers/change.workers';
import { fetchPosts, fetchProfile, fetchStatus } from './workers/fetch.workers';

function* watchFetchPosts(): SagaIterator {
  yield takeLatest(AsyncTypes.FETCH_POSTS, fetchPosts);
}
function* watchFetchProfile(): SagaIterator {
  yield takeLatest(AsyncTypes.FETCH_PROFILE, fetchProfile);
}
function* watchFetchStatus(): SagaIterator {
  yield takeLatest(AsyncTypes.FETCH_STATUS, fetchStatus);
}
function* watchChangeStatus(): SagaIterator {
  yield takeLatest(AsyncTypes.CHANGE_STATUS, changeStatus);
}

export function* watchProfile(): SagaIterator {
  yield all([
    call(watchFetchPosts),
    call(watchFetchProfile),
    call(watchFetchStatus),
    call(watchChangeStatus),
  ]);
}
