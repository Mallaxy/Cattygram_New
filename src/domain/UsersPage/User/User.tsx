import React from 'react';
import { NavLink } from 'react-router-dom';

export const User = ({ user, toggleFollow }) => {
  const handleClick = () => {
    toggleFollow(user.id, user.followed);
  };

  return (
    <div>
      <NavLink to={'/profile/' + user.id}>
        <img
          src={
            user.photos.large ||
            'https://cdn.iconscout.com/icon/premium/png-256-thumb/cat-29-81503.png'
          }
          alt='Ups...('
        />
      </NavLink>
      <button onClick={() => handleClick()}>
        {user.followed ? 'Unfollow' : 'Follow'}
      </button>
      <div>{user.name}</div>
    </div>
  );
};
