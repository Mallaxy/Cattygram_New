import { authSelectors } from '@app/bus/auth';
import { profileActions, profileSelectors } from '@app/bus/profile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const status = useSelector(profileSelectors.getStatus);
  const profile = useSelector(profileSelectors.getProfile);
  const posts = useSelector(profileSelectors.getPosts);
  const userId = useSelector(authSelectors.getUserId);

  const usedId = userId || 2;

  const {
    addPost,
    changeStatusAsync,
    fetchPostsAsync,
    fetchProfileAsync,
    fetchStatusAsync,
  } = profileActions;

  useEffect(() => {
    dispatch(fetchPostsAsync({ userId: 2 }));
    dispatch(fetchProfileAsync({ userId: usedId }));
    dispatch(fetchStatusAsync({ userId: usedId }));
  }, [userId]);

  return {
    profile,
    posts,
    status,
    addPost,
    changeStatusAsync,
  };
};
