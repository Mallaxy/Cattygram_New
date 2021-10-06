import React from 'react';
import { ContactBlock } from '../ProfileInfo.style';

export const ProfileContacts = ({ contacts }) => {
  return (
    <ContactBlock>
      {contacts.facebook && <li>Facebook: {contacts.facebook}</li>}
      {contacts.website && <li>Website: {contacts.website}</li>}
      {contacts.vk && <li>Vk: {contacts.vk}</li>}
      {contacts.twitter && <li>Twitter: {contacts.twitter}</li>}
      {contacts.instagram && <li>Instagram: {contacts.instagram}</li>}
      {contacts.youtube && <li>Youtube: {contacts.youtube}</li>}
      {contacts.github && <li>Github: {contacts.github}</li>}
      {contacts.mainLink && <li>MainLink: {contacts.mainLink}</li>}
    </ContactBlock>
  );
};
