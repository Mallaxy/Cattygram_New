import { AxiosResponse } from 'axios';
import { call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { profileAPI } from '@app/bus/profile/api';
import { profileActions } from '../../slice';
import {
  FetchPostsAsync,
  FetchProfileAsync,
  FetchStatusAsync,
  IPost,
  IProfile,
} from '../../types';

export function* fetchPosts(action: FetchPostsAsync): SagaIterator {
  try {
    const response: AxiosResponse<IPost[]> = yield call(
      profileAPI.getPosts,
      action.payload.userId
    );

    if (response?.data) {
      yield put(profileActions.setPosts(response.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Post fetched');
  }
}

export function* fetchProfile(action: FetchProfileAsync): SagaIterator {
  try {
    const response: AxiosResponse<IProfile> = yield call(
      profileAPI.getProfile,
      action.payload.userId
    );
    if (response?.data) {
      yield put(profileActions.setProfile(response.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Profile fetched');
  }
}

export function* fetchStatus(action: FetchStatusAsync): SagaIterator {
  try {
    const response: AxiosResponse<string> = yield call(
      profileAPI.getStatus,
      action.payload.userId
    );
    if (response?.data) {
      yield put(profileActions.setStatus(response.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Status fetched');
  }
}
