export interface IUsersState {
  users: IUser[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
}

export interface IUser {
  usersId: number;
  name: string;
  status?: string;
  photos: {
    small?: string;
    large?: string;
  };
  followed: boolean;
}

export interface IUsersResponse {
  items: IUser[];
  totalCount: number;
  error: string;
}

export type UserActionPayloads = {
  pageSize?: number;
  currentPage?: number;
  userId?: number;
};

export enum AsyncTypes {
  FETCH_USERS = 'USERS/FETCH_USERS',
  FETCH_FOLLOW = 'USERS/FETCH_FOLLOW',
  CHANGE_FOLLOW = 'USERS/CHANGE_FOLLOW',
  DELETE_FOLLOW = 'USERS/DELETE_FOLLOW',
}

export type FetchUsersAsync = {
  type: AsyncTypes.FETCH_USERS;
  payload: UserActionPayloads;
};

export type FetchFollowAsync = {
  type: AsyncTypes.FETCH_FOLLOW;
  payload: UserActionPayloads;
};

export type ChangeFollowAsync = {
  type: AsyncTypes.CHANGE_FOLLOW;
  payload: UserActionPayloads;
};

export type DeleteFollowAsync = {
  type: AsyncTypes.DELETE_FOLLOW;
  payload: UserActionPayloads;
};

export type UsersActionsTypes =
  | FetchUsersAsync
  | FetchFollowAsync
  | ChangeFollowAsync
  | DeleteFollowAsync;
