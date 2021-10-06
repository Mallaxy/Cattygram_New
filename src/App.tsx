import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ProfilePage } from '@app/pages/ProfilePage/ProfilePage';
import { UsersPage } from './pages/UsersPage/UsersPage';

export const App = () => {
  return (
    <MainLayout>
      <Route exact path='/'>
        <Redirect to='/profile' />
      </Route>
      <Route path='/profile/:userId?' render={() => <ProfilePage />} />
      <Route path='/users' render={() => <UsersPage />} />
    </MainLayout>
  );
};
