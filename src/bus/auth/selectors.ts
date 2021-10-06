import { IRootState } from '@app/store/rootReducer';

export const getIsAuth = (state: IRootState) => state.auth.isAuth;
export const getEmail = (state: IRootState) => state.auth.email;
export const getLogin = (state: IRootState) => state.auth.login;
export const getUserId = (state: IRootState) => state.auth.userId;
