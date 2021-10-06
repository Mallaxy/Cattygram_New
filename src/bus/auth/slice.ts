import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncTypes, AuthActionsTypes, IAuthData, IAuthState } from './types';

const initialState: IAuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthUserData: (state: IAuthState, action: PayloadAction<IAuthData>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.isAuth = true;
    },
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,
  fetchAuthAsync: (): AuthActionsTypes => ({
    type: AsyncTypes.FETCH_AUTH,
  }),
};
