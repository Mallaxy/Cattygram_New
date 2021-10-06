import { call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AxiosResponse } from 'axios';
import { usersActions } from '../..';
import { usersAPI } from '../../api';
import { UsersActionsTypes } from '../../types';

export function* deleteFollow(action: UsersActionsTypes): SagaIterator {
  try {
    yield put(usersActions.toggleFetching(true));
    const response: AxiosResponse<any> = yield call(
      usersAPI.unfollowUser,
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
