import { call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AxiosResponse } from 'axios';
import { usersAPI } from '../../api';
import { usersActions } from '../../slice';
import { ChangeFollowAsync, IUsersResponse } from '../../types';

export function* changeFollow(action: ChangeFollowAsync): SagaIterator {
  try {
    yield put(usersActions.toggleFetching(true));
    const response: AxiosResponse<IUsersResponse> = yield call(
      usersAPI.followUser,
      action.payload.userId
    );
    if (response?.data) {
      yield put(usersActions.follow(action.payload.userId));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(usersActions.toggleFetching(false));
  }
}
