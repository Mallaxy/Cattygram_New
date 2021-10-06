import React from 'react';
import { StyledNavLink, SidebarNav } from './Sidebar.style';

const Sidebar = () => {
  return (
    <SidebarNav>
      <StyledNavLink to='/profile'>Profile</StyledNavLink>
      <StyledNavLink to='/users'>Users</StyledNavLink>
      <StyledNavLink to='/messages'>Messages</StyledNavLink>
    </SidebarNav>
  );
};

export default Sidebar;
