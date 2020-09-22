import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Main, Logo, Nav } from './styles';
import logo from '../../../img/Logo original RGB.png';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Main>
          <Logo src={logo} alt='Logo' />
          <Nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/aboutus'>About us</Link>
              </li>
            </ul>
          </Nav>
        </Main>
      </Wrapper>
    </header>
  );
};

export default Header;
