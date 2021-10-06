import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from './namespace';
import {
  AsyncTypes,
  IPost,
  IProfile,
  IProfileState,
  ProfileActionTypes,
} from './types';

const initialState: IProfileState = {
  posts: [],
  profile: null,
  status: '',
};

const slice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    addPost: (state: IProfileState, action: PayloadAction<string>) => {
      const newPost: IPost = {
        userId: 2,
        id: state.posts.length
          ? state.posts[state.posts.length - 1].id + 1
          : 15,
        title: 'Added Post',
        body: '',
      };
      state.posts = [{ ...newPost, body: action.payload }, ...state.posts];
    },
    setProfile: (state: IProfileState, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
    },
    setStatus: (state: IProfileState, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setPosts: (state: IProfileState, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export default slice.reducer;

export const profileActions = {
  ...slice.actions,

  fetchPostsAsync: (payload: Profile.FetchPayloads): ProfileActionTypes => ({
    type: AsyncTypes.FETCH_POSTS,
    payload,
  }),
  fetchStatusAsync: (payload: Profile.FetchPayloads): ProfileActionTypes => ({
    type: AsyncTypes.FETCH_STATUS,
    payload,
  }),
  fetchProfileAsync: (payload: Profile.FetchPayloads): ProfileActionTypes => ({
    type: AsyncTypes.FETCH_PROFILE,
    payload,
  }),
  changeStatusAsync: (payload: Profile.FetchPayloads): ProfileActionTypes => ({
    type: AsyncTypes.CHANGE_STATUS,
    payload,
  }),
};
