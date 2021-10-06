import { useEffect } from 'react';
import { usersActions, usersSelectors } from '@app/bus/users';
import { useDispatch, useSelector } from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(usersSelectors.getCurrentPage);
  const users = useSelector(usersSelectors.getUsers);

  const { fetchUsersAsync, changeFollowAsync, deleteFollowAsync } =
    usersActions;

  const toggleFollow = (userId: number, isFollowed: boolean) => {
    if (isFollowed) {
      dispatch(deleteFollowAsync({ userId }));
    } else {
      dispatch(changeFollowAsync({ userId }));
    }
  };

  useEffect(() => {
    dispatch(fetchUsersAsync({ currentPage }));
  }, [currentPage]);

  return {
    users,
    toggleFollow,
  };
};
