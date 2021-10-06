export interface IAuthResponse {
  data: IAuthData;
  resultCode: number;
  messages: string[];
}

export interface IAuthData {
  userId: number | null;
  email: string | null;
  login: string;
}

export interface IAuthState extends IAuthData {
  isAuth: boolean;
}

export enum AsyncTypes {
  FETCH_AUTH = 'AUTH/FETCH_AUTH',
}

export type FetchAuthAsync = {
  type: typeof AsyncTypes.FETCH_AUTH;
};

export type AuthActionsTypes = FetchAuthAsync;
