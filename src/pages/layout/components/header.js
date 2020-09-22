import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { secondaryColour, darkFontColour, Container } from '../../styles';
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

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 52px 0 76px 0;
  @media (max-width: 500px) {
    padding: 15px 0 20px 0;
  }
`;
const Main = styled(Container)`
  height: auto;
  max-width: 1700px;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Logo = styled.img`
  width: 165px;
  height: 50px;
  @media (max-width: 500px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    @media (max-width: 500px) {
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: ${darkFontColour};
      font-size: 28px;
      font-weight: 400;
      position: relative;
    }
    li:hover a::after {
      content: '•';
      font-size: 50px;
      font-weight: 700;
      color: ${secondaryColour};
      position: absolute;
      left: 40%;
      top: 10%;
    }
    li:first-child {
      padding-right: 70px;
    }
  }
`;
