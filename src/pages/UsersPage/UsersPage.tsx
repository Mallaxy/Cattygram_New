import React from 'react';
import { User } from '@app/domain/UsersPage/User/User';
import { useData } from './useData';
import { MainBlock } from './UsersPage.style';

export const UsersPage = () => {
  const { users, toggleFollow } = useData();

  return (
    <MainBlock>
      {users.map((user) => (
        <User user={user} toggleFollow={toggleFollow} key={user.usersId} />
      ))}
    </MainBlock>
  );
};
