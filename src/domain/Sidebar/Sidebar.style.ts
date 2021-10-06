import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarNav = styled.nav`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.default};
  padding: 1em;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  font-size: 2rem;
  cursor: pointer;
  color: ${({ isActive, theme }) => (isActive ? theme.lighter : 'inherit')};
  &:hover,
  &.active {
    color: ${({ theme }) => theme.lighter};
  }
`;
