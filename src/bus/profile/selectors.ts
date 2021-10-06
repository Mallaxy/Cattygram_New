import { IRootState } from '@app/store/rootReducer';

export const getPosts = (state: IRootState) => state.profile.posts;
export const getProfile = (state: IRootState) => state.profile.profile;
export const getStatus = (state: IRootState) => state.profile.status;
