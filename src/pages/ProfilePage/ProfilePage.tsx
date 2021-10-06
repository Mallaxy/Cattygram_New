import React from 'react';
import Preloader from '@app/components/common/preloader/Preloader';
import { MyPosts, ProfileInfo } from '@app/domain/ProfilePage';
import { MainBlock } from './Profile.style';
import { useData } from './useData';

export const ProfilePage = () => {
  const { profile, posts, status, addPost, changeStatusAsync } = useData();

  return (
    <>
      {!profile ? (
        <Preloader />
      ) : (
        <MainBlock>
          <ProfileInfo
            profile={profile}
            status={status}
            changeStatusAsync={changeStatusAsync}
          />
          <MyPosts posts={posts} addPost={addPost} />
        </MainBlock>
      )}
    </>
  );
};
