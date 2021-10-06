import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { profileAPI } from '@app/bus/profile/api';
import { call, put } from '@redux-saga/core/effects';
import { ChangeStatusAsync } from '../../types';
import { profileActions } from '../../slice';

export function* changeStatus(action: ChangeStatusAsync): SagaIterator {
  try {
    const response: AxiosResponse = yield call(
      profileAPI.updateStatus,
      action.payload.status
    );

    if (response.data) {
      yield put(profileActions.setStatus(action.payload.status));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Status fetched');
  }
}
