import { authAPI } from '@app/bus/auth/api';
import { SagaIterator } from '@redux-saga/core';
import { call, put } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { authActions } from '../../slice';
import { IAuthResponse } from '../../types';

export function* fetchAuth(): SagaIterator {
  try {
    const response: AxiosResponse<IAuthResponse> = yield call(authAPI.authUser);
    console.log(response);

    if (response?.data && response.data.resultCode === 0) {
      yield put(authActions.setAuthUserData(response.data.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Post fetched');
  }
}
