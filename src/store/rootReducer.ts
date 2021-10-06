import { combineReducers } from '@reduxjs/toolkit';
// reducers
import { profileReducer } from '@app/bus/profile';
import { authReducer } from '@app/bus/auth';
import { usersReducer } from '@app/bus/users';
import { messagesReducer } from '@app/bus/messages';
// types
import { IProfileState } from '@app/bus/profile/types';
import { IAuthState } from '@app/bus/auth/types';
import { IUsersState } from '@app/bus/users/types';
import { IMessagesState } from '@app/bus/messages/types';

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
});

export interface IRootState {
  profile: IProfileState;
  auth: IAuthState;
  users: IUsersState;
  messages: IMessagesState;
}

export default rootReducer;
