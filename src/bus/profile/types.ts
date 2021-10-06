import { Profile } from './namespace';

export interface IProfileState {
  posts: IPost[];
  profile: IProfile | null;
  status: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IProfile {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe?: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string;
    large: string;
  };
}

export enum AsyncTypes {
  FETCH_POSTS = 'PROFILE/FETCH_POSTS',
  FETCH_PROFILE = 'PROFILE/FETCH_PROFILE',
  FETCH_STATUS = 'PROFILE/FETCH_STATUS',
  CHANGE_STATUS = 'PROFILE/CHANGE_STATUS',
}

export type FetchPostsAsync = {
  type: typeof AsyncTypes.FETCH_POSTS;
  payload: Profile.FetchPayloads;
};
export type FetchStatusAsync = {
  type: typeof AsyncTypes.FETCH_STATUS;
  payload: Profile.FetchPayloads;
};
export type FetchProfileAsync = {
  type: typeof AsyncTypes.FETCH_PROFILE;
  payload: Profile.FetchPayloads;
};
export type ChangeStatusAsync = {
  type: typeof AsyncTypes.CHANGE_STATUS;
  payload: Profile.FetchPayloads;
};

export type ProfileActionTypes =
  | FetchPostsAsync
  | FetchStatusAsync
  | FetchProfileAsync
  | ChangeStatusAsync;
