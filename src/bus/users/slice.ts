import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AsyncTypes,
  IUsersResponse,
  IUsersState,
  UserActionPayloads,
} from './types';

const initialState: IUsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 80,
  currentPage: 1,
  isFetching: true,
};

const slice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers: (state: IUsersState, action: PayloadAction<IUsersResponse>) => {
      state.users = action.payload.items;
      state.totalUsersCount = action.payload.totalCount;
    },
    follow: (state: IUsersState, action: PayloadAction<number>) => {
      state.users = state.users.map((u: any) => {
        if (u.id === action.payload) {
          return { ...u, followed: !u.followed };
        }
        return u;
      });
    },
    toggleFetching: (state: IUsersState, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setCurrentPage: (state: IUsersState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export default slice.reducer;

export const usersActions = {
  ...slice.actions,

  fetchUsersAsync: (payload: UserActionPayloads) => ({
    type: AsyncTypes.FETCH_USERS,
    payload,
  }),
  changeFollowAsync: (payload: UserActionPayloads) => ({
    type: AsyncTypes.CHANGE_FOLLOW,
    payload,
  }),
  deleteFollowAsync: (payload: UserActionPayloads) => ({
    type: AsyncTypes.DELETE_FOLLOW,
    payload,
  }),
};
