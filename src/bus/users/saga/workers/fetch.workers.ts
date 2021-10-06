import { call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AxiosResponse } from 'axios';
import { usersAPI } from '../../api';
import { usersActions } from '../../slice';
import { FetchUsersAsync, IUsersResponse } from '../../types';

export function* fetchUsers(action: FetchUsersAsync): SagaIterator {
  try {
    yield put(usersActions.toggleFetching(true));

    const response: AxiosResponse<IUsersResponse> = yield call(
      usersAPI.getUsers,
      action.payload.currentPage,
      action.payload.pageSize
    );

    if (response?.data) {
      yield put(usersActions.setUsers(response.data));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(usersActions.toggleFetching(false));
  }
}
