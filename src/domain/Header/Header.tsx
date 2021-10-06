import React from 'react';
import { NavLink } from 'react-router-dom';

import { useData } from './useData';
import { HeaderStyle, LoginBlock, Logo } from './Header.style';

const Header = () => {
  const { isAuth, login, Router } = useData();

  return (
    <HeaderStyle>
      <Logo onClick={() => Router.push('/')}>
        <img
          src='https://freesvg.org/img/1581931068cat-animal-outline-freesvg.org.png'
          alt='Ups...('
        />
        <h1>Cattygram</h1>
      </Logo>
      <LoginBlock>
        {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
      </LoginBlock>
    </HeaderStyle>
  );
};

export default Header;
