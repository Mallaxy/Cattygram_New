import { call, all } from '@redux-saga/core/effects';
import { watchAuth } from '@app/bus/auth/saga/watchers';
import { watchProfile } from '@app/bus/profile/saga/watchers';
import { watchUsers } from '@app/bus/users/saga/watchers';

function* rootSaga() {
  try {
    yield all([call(watchProfile), call(watchAuth), call(watchUsers)]);
  } catch (error) {
    console.error(error);
  }
}

export default rootSaga;
