import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { authActions, authSelectors } from '@app/bus/auth';
import { useCallback, useEffect } from 'react';

export const useData = () => {
  const Router = useHistory();

  const dispatch = useDispatch();

  const isAuth = useSelector(authSelectors.getIsAuth);
  const login = useSelector(authSelectors.getLogin);

  const fetchAuthAsync = useCallback(() => {
    dispatch(authActions.fetchAuthAsync());
  }, [isAuth]);

  useEffect(() => {
    fetchAuthAsync();
  }, []);

  return {
    isAuth,
    login,
    Router,
  };
};
