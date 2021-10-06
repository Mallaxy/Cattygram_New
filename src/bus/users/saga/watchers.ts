import { all, call, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AsyncTypes } from '../types';
import { changeFollow } from './workers/change.workers';
import { deleteFollow } from './workers/delete.workers';
import { fetchUsers } from './workers/fetch.workers';

function* watchFetchUsers(): SagaIterator {
  yield takeLatest(AsyncTypes.FETCH_USERS, fetchUsers);
}
function* watchChangeFollow(): SagaIterator {
  yield takeLatest(AsyncTypes.CHANGE_FOLLOW, changeFollow);
}
function* watchDeleteFollow(): SagaIterator {
  yield takeLatest(AsyncTypes.DELETE_FOLLOW, deleteFollow);
}

export function* watchUsers(): SagaIterator {
  yield all([
    call(watchFetchUsers),
    call(watchChangeFollow),
    call(watchDeleteFollow),
  ]);
}
