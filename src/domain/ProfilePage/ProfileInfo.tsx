import React from 'react';
import { ProfileContacts, ProfileStatus } from './components';
import {
  AboutBlock,
  AvatarContainer,
  MainBlock,
  SideBlock,
} from './ProfileInfo.style';

export const ProfileInfo = ({ profile, status, changeStatusAsync }) => {
  const {
    photos,
    fullName,
    aboutMe,
    lookingForAJobDescription,
    lookingForAJob,
    contacts,
  } = profile;

  return (
    <MainBlock>
      <AvatarContainer>
        <img
          src={
            photos.large ||
            'https://i.kym-cdn.com/photos/images/newsfeed/001/974/401/44e.gif'
          }
          alt=''
        />
      </AvatarContainer>
      <SideBlock>
        <AboutBlock>
          {fullName && <div>{fullName}</div>}
          {aboutMe && <div>{aboutMe}</div>}
          {lookingForAJobDescription && (
            <div>
              {lookingForAJob ? <span>+</span> : <span>-</span>}
              Work: {lookingForAJobDescription}
            </div>
          )}
        </AboutBlock>
        <ProfileContacts contacts={contacts} />
        <ProfileStatus status={status} changeStatusAsync={changeStatusAsync} />
      </SideBlock>
    </MainBlock>
  );
};
