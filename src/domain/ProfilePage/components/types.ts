import { IPost } from '@app/bus/profile/types';

export interface IMyPostsProps {
  postsData: IPost[];
  newPostText: string;
}
