import { IRootState } from '@app/store/rootReducer';

export const getUsers = (state: IRootState) => state.users.users;
export const getCurrentPage = (state: IRootState) => state.users.currentPage;
